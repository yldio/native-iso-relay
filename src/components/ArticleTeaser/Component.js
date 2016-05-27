import React from 'react';
import Render from './Render';

class ArticleTeaser extends React.Component {
  static propTypes = {
    article: React.PropTypes.shape({
      id: React.PropTypes.string,
      title: React.PropTypes.string,
      author: React.PropTypes.string,
      description: React.PropTypes.string,
      text: React.PropTypes.string,
      mainImage: React.PropTypes.string,
      pubdate: React.PropTypes.string,
    }).isRequired,
    onPress: React.PropTypes.func,
    styles: React.PropTypes.shape({}).isRequired,
  };
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const options = {
      styles,
      article,
      onPress,
    } = this.props;

    return Render.bind(this)(options);
  }
}

export default ArticleTeaser;
