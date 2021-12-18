import React, { Component } from 'react';
export default class Lists extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    name: '...',
  };
  handleClick = () => {
    this.props.handleItem('111');
  };
  render() {
    return <div onClick={this.handleClick}>{this.props.name}</div>;
  }
}
