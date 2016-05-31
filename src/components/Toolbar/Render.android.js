import React from 'react';
import {
  View,
  ToolbarAndroid,
} from 'react-native';

export default function render(options = {}) {
  const { onClick, styles } = options;

  return(
    <View>
      <ToolbarAndroid
        navIcon={require('../../../public/img/ic_arrow_back_white_24dp.png')}
        onIconClicked={() => onClick()}
        style={styles.toolbarAd}
        title={'YLD SOFTWARE ENGINEERING BLOG'}
        titleColor={'#FFF'}
      />
      </View>
  );
}



