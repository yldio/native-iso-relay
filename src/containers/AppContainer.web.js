import Relay from 'react-relay';
import React from 'react';
import {
  ArticleTeaser,
  LoadMoreButton,
  Toolbar,
} from '../components';

import styles from '../components/styles';

class AppContainerWeb extends React.Component {
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
    relay: React.PropTypes.shape({
      variables: React.PropTypes.shape({
        count: React.PropTypes.number,
      }),
      setVariables: React.PropTypes.func,
    }).isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }

  _loadMore() {
    const count = this.props.relay.variables.count;
    this.props.relay.setVariables({
      count: count + 5,
    });
  }

  _renderArticles() {
    const articles = this.props.newsfeed.articles.edges;

    return articles.map((article, i) => {
      const articleBody = article.node;

      return (
        <ArticleTeaser
          article={articleBody}
          key={i}
          styles={styles}
        />
      );
    });
  }

  render() {
    const articles = this._renderArticles();

    return (
      <div>
        <Toolbar styles={styles}/>
        <div style={styles.mainContainer}>{articles}</div>
        <LoadMoreButton
          onLoadMore={this._loadMore.bind(this)}
          styles={styles}
        />
      </div>
    );
  }
}

export default Relay.createContainer(AppContainerWeb, {
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
