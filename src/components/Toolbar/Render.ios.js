import React from 'react';
import {
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

export default function render(options = {}) {
  const { onClick, styles } = options;

  return(
    <View style={styles.toolbarIos}>
      <TouchableHighlight
        onPress={() => { onClick(); }}
        underlayColor={'#FFF'}>
        <Image
          source={require('../../../public/img/yld_logo_blue.png')}
          style={styles.logo}
        />
      </TouchableHighlight>
    </View>
  );
}


