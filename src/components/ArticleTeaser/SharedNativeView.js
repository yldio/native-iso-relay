import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

class SharedNativeView extends React.Component {
  static propTypes = {
    article: React.PropTypes.shape({
      id: React.PropTypes.string,
      title: React.PropTypes.string,
      author: React.PropTypes.string,
      description: React.PropTypes.string,
      text: React.PropTypes.string,
      mainImage: React.PropTypes.string,
      pubdate: React.PropTypes.string,
    }),
    onPress: React.PropTypes.func.isRequired,
    styles: React.PropTypes.shape({}),
  };
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { article, styles, onPress } = this.props;
    const truncatedText = article.description.substring(0, 100);
    const teaser = `${truncatedText} ...`;

    return(
      <TouchableHighlight
        onPress={() => onPress(article.id)}
        underlayColor={'#ddd'}>
        <View style={styles.articleContainer}>
          <Image
            source={{uri: article.mainImage }}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.author}>{article.author}</Text>
            <Text style={styles.pubdate}>{article.pubdate}</Text>
            <Text>{teaser}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

export default SharedNativeView;

