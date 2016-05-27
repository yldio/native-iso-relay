import SharedNativeView from './SharedNativeView';

function render(options = {}) {
  const { article, styles } = options;

  return(
    <SharedNativeView
      article={article}
      styles={styles}
    />
  );
}
module.exports = render;
