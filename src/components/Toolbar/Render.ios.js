import React from 'react';
import {
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

export default function render(options = {}) {
  const { onClick, styles } = options;

  return(
    <View style={[styles.toolbar, styles.toolbarIos]}>
      <TouchableHighlight onPress={() => { onClick(); }}>
        <Image
          source={require('../../../public/img/yld_logo_white_ios.png')}
          style={styles.logo}
        />
      </TouchableHighlight>
    </View>
  );
}


