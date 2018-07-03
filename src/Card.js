import React, { Component } from 'react';
import classnames from 'classnames';

export default class Card extends Component {
  render() {
    return (
      <div className={classnames('card', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}