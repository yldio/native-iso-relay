import SharedNativeView from './SharedNativeView';

function render(options = {}) {
  const {
    article,
    onPress,
    styles,
  } = options;

  return (
    <SharedNativeView
      article={article}
      onPress={onPress}
      styles={styles}
    />
  );
}

module.exports = render;
