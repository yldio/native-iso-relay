import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

function render(options = {}) {
  const { article, styles } = options;
  const articleBody = article[0];

  return(
    <View style={[styles.mainContainer, styles.mainArticleContainer]}>
      <Text style={styles.title}>{articleBody.title}</Text>
      <Text style={styles.description}>{articleBody.description}</Text>
      <Text style={styles.author}>{articleBody.author}</Text>
      <Image
        source={{ uri: articleBody.mainImage }}
        style={styles.mainImage}
      />
      <Text style={styles.body}>{articleBody.text}</Text>
    </View>
  );
}

module.exports = render;

