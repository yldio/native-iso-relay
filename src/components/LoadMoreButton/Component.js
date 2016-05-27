import React from 'react';
import Render from './Render';

class LoadMoreButton extends React.Component {
  static propTypes = {
    onLoadMore: React.PropTypes.func.isRequired,
    styles: React.PropTypes.shape({}).isRequired,
  };
  constructor(props, context) {
    super(props, context);
  }

  onLoadMore() {
    this.props.onLoadMore();
  }

  render() {
    const options = {
      styles,
      onLoadMore,
    } = this.props;

    return Render.bind(this)(options);
  }

}

export default LoadMoreButton;
