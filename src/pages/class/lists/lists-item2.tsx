import React, { Component } from 'react';
export default class Lists extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  static defaultProps = {
    name: '...',
  };
  render() {
    return <div>item2-{this.props.name}</div>;
  }
}
