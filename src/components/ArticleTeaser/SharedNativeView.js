import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

function SharedNativeView(props) {
  const { article, styles, onPress } = props;
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

SharedNativeView.propTypes = {
  article: React.PropTypes.shape({
    id: React.PropTypes.string,
    title: React.PropTypes.string,
    author: React.PropTypes.string,
    description: React.PropTypes.string,
    text: React.PropTypes.string,
    mainImage: React.PropTypes.string,
    pubdate: React.PropTypes.string,
  }).isRequired,
  onPress: React.PropTypes.func,
  styles: React.PropTypes.shape({}).isRequired,
};

export default SharedNativeView;

