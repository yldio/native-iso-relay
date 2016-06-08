import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
} from 'react-native';

function render(options = {}) {
  const {
    article,
    styles,
    onPress,
  } = options;

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
module.exports = render;
