import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

function render(options = {}) {
  const { styles, onLoadMore } = options;
  const text = 'Load more'.toUpperCase();

  return(
    <View style={[styles.loadMoreDiv]}>
      <TouchableHighlight
        onPress={() => onLoadMore()}
        style={styles.loadMore}
      >
      <Text style={styles.whiteColor}>{text}</Text>
      </TouchableHighlight>
    </View>
  );
}
module.exports = render;
