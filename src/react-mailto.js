import React from 'react';

const Mailto = React.createClass({

  propTypes: {
    email: React.PropTypes.string.isRequired,
    obfuscate: React.PropTypes.bool
  },

  getDefaultProps () {
    return {
      obfuscate: false
    };
  },

  render () {
    return (this.props.obfuscate) ? this._renderObfuscatedLink() : this._renderLink();
  },

  _renderLink () {
    return <a href={`mailto:${this.props.email}`} {...this.props}>{this.props.children}</a>
  },

  _renderObfuscatedLink () {
    return <a onClick={this._handleClick} href="mailto:obfuscated" {...this.props}>{this.props.children}</a>
  },

  _handleClick (e) {
    e.preventDefault();
    document.location.href = `mailto:${this.props.email}`;
  }

});

export default Mailto;
