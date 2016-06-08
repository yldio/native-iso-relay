import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

function SharedNativeView(props) {
  const { article, styles } = props;
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
  styles: React.PropTypes.shape({}).isRequired,
};

export default SharedNativeView;
