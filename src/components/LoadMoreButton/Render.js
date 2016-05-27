import React from 'react';

export default function render(options = {}) {
  const { styles, onLoadMore } = options;

  return(
    <div style={{'textAlign': 'center'}}>
      <button
        onClick={() => onLoadMore()}
        style={styles.loadMore}
      >Load more
      </button>
    </div>
  );
}
