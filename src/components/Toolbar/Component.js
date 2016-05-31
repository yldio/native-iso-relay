import React from 'react';
import Render from './Render';

class Toolbar extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func,
    styles: React.PropTypes.shape({}).isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }

  onClick() {
    this.props.onClick();
  }

  render() {
    const options = {
      styles: this.props.styles,
      onClick: this.props.onClick,
    };

    return Render.bind(this)(options);
  }
}

export default Toolbar;
