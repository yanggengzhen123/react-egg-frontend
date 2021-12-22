// 错误边界
import React, { Component } from 'react';
export default class lists extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      flag: false,
    };
  }
  static getDerivedStateFromError(error: any) {
    console.log(error);
    return {
      flag: true,
    };
  }
  /* error: 抛出的错误
   * info: 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息
   */
  //   componentDidCatch(error, info) {}
  render() {
    return (
      <div>
        {this.state.flag ? (
          <h1>发生错误，请稍后再试！</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
