import Relay from 'react-relay';
import React from 'react';
import {
    View,
    ListView,
    ScrollView,
    Navigator,
} from 'react-native';
import {
  ArticleTeaser,
  Article,
  LoadMoreButton,
  Toolbar,
} from '../components';

const styles = require('../components/styles.native').styles;

class AppContainerNative extends React.Component {
  static propTypes = {
    newsfeed: React.PropTypes.shape({
      articles: React.PropTypes.shape({
        edges: React.PropTypes.arrayOf(
          React.PropTypes.shape({
            node: React.PropTypes.shape({
              id: React.PropTypes.string,
              title: React.PropTypes.string,
              author: React.PropTypes.string,
              description: React.PropTypes.string,
              text: React.PropTypes.string,
              link: React.PropTypes.string,
              pubdate: React.PropTypes.string,
              maingImage: React.PropTypes.string,
            }).isRequired,
          }).isRequired
        ).isRequired,
      }).isRequired,
    }).isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this._addSampleView = this._addSampleView.bind(this);
    this._loadArticle = this._loadArticle.bind(this);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentWillMount() {
    const articles = this.props.newsfeed.articles.edges;

    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(articles),
    });
  }

  componentWillReceiveProps(nextProps) {
    const nextArticleTeasers = nextProps.newsfeed.articles.edges;
    const currentArticleTeasers = this.props.newsfeed.articles.edges;

    if (nextArticleTeasers !== currentArticleTeasers) {
      const newDataSource = this
      .state
      .dataSource
      .cloneWithRows(nextArticleTeasers);

      this.setState({ dataSource: newDataSource });
    }
  }

  _handleClick() {
    this.nav.pop();
  }

  _loadMore() {
    const count = this.props.relay.variables.count;
    this.props.relay.setVariables({
      count: count + 5,
    });
  }

  _loadArticle(id) {
    const articles = this.props.newsfeed.articles.edges;
    return articles.map(function(article) {
      if (article.node.id == id) {
        return article.node;
      }
    });
  }

  _addSampleView(id) {
    this.nav.push({
      name: 'articleview',
      articleId: id,
    });
  }

  _configureScene() {
    return Navigator.SceneConfigs.FloatFromRight;
  }

  _renderScene(route) {
    switch (route.name) {
    case 'articleview':
      const article = this._loadArticle(route.articleId)
      .filter(function(articleData) {
        return articleData !== undefined;
      });
      return (
        <ScrollView stickyHeaderIndices={[0]}>
          <Toolbar
            onClick={this._handleClick.bind(this)}
            styles={styles}
          />
          <Article
            article={article}
            styles={styles}
          />
        </ScrollView>
      );
    default:
      return (
        <ScrollView stickyHeaderIndices={[0]}>
          <Toolbar
            onClick={this._handleClick.bind(this)}
            styles={styles}
          />
          <View style={styles.mainContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderArticleTeaser.bind(this)}
          />
          <LoadMoreButton
            onLoadMore={this._loadMore.bind(this)}
            styles={styles}
          />
          </View>
        </ScrollView>
      );
    }
  }

  _renderArticleTeaser(article) {
    const articleBody = article.node;

    return (
      <ArticleTeaser
        article={articleBody}
        onPress={(articleId) => this._addSampleView(articleId)}
        styles={styles}
      />
    );
  }

  render() {
    return (
      <Navigator
        configureScene={this._configureScene.bind(this)}
        initialRoute={{name: 'articlelist', index: 0}}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene={this._renderScene.bind(this)}
      />
    );
  }
}

export default Relay.createContainer(AppContainerNative, {
  initialVariables: {
    count: 10,
  },
  fragments: {
    newsfeed: () => Relay.QL`
      fragment on Newsfeed {
        articles(first: $count) {
          edges {
            node {
              id,
              title,
              author,
              description,
              link,
              text,
              mainImage,
              pubdate
            },
            cursor,
          },
          pageInfo {
            hasPreviousPage,
            hasNextPage
          }
        },
      }
    `,
  },
});

