import React from 'react';

export default function render(options = {}) {
  const { styles } = options;

  return(
    <div style={styles.navBar}>
      <img
        src={'/img/yld_logo_white.svg'}
        style={styles.logoImage}
      />
    </div>
  );
}


