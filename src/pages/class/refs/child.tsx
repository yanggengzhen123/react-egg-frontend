// refs child操作真实dom
import React, { Component, createRef } from 'react';
export default class Child extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: 'old text',
    };
  }
  changeText(str: string) {
    this.setState({ text: str });
  }
  render() {
    return (
      <div>
        <h1>child test == {this.state.text}</h1>;
      </div>
    );
  }
}
