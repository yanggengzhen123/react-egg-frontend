// refs操作真实dom
import React, { Component, createRef } from 'react';
import Child from './child';
import InputForWard from './forward';
export default class Refs extends Component<any, any> {
  domRef: any = createRef();
  childRef: any = createRef();
  inputRef: any = createRef();
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.domRef);
    console.log(this.domRef.current.innerHTML);
    this.inputRef.current.focus();
  }
  handleChild(str: string) {
    this.childRef.current.changeText(str);
  }
  render() {
    return (
      <div>
        <h1 ref={this.domRef}>refs text</h1>
        <Child ref={this.childRef}></Child>
        <button onClick={() => this.handleChild('new text')}>
          修改child的值
        </button>
        <InputForWard ref={this.inputRef}></InputForWard>
      </div>
    );
  }
}
