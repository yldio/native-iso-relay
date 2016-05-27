import SharedNativeView from './SharedNativeView';

function render(options = {}) {
  const {
    article,
    styles,
    onPress,
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
