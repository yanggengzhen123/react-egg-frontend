import React, { PureComponent } from 'react';
interface State {
  text: string;
}
// PureComponent可以替代shouldComponentUpdate来判断render是否重复渲染
export default class componentOld extends PureComponent<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      text: 'demo',
    };
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  //   shouldComponentUpdate(props: any, state: State) {
  //     console.log('shouldComponentUpdate');
  //     console.log(props, state);
  //     if (state.text === 'demo-new') {
  //       return true;
  //     }
  //     return false;
  //   }
  handleClick = () => {
    this.setState({ text: 'demo-new' });
  };
  render() {
    console.log('render');
    return <div onClick={this.handleClick}>{this.state.text}</div>;
  }
}
