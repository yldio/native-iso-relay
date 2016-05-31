import React from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';

export default function render(options = {}) {
  const { styles, onLoadMore } = options;

  return(
    <View style={[styles.loadMoreDiv]}>
      <TouchableNativeFeedback
        onPress={() => onLoadMore()}
        style={styles.loadMore}>
        <View style={styles.loadMore}>
          <Text style={styles.whiteColor}>LOAD MORE</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}


