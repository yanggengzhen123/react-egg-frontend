// 基于lazy,Suspense实现组件懒加载
import React, { lazy, Suspense, Component } from 'react';
// import Demo from './Demo';
// 改成懒加载的形式
const Demo = lazy(() => import('./demo')); //返回promise对象
export default class Index extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      flag: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ flag: true });
    }, 2000);
  }
  render() {
    return (
      <div>
        {this.state.flag ? (
          <Suspense fallback={<div>loading...</div>}>
            {/* fallback属性是在子组件未解析完成之前执行的 */}
            <Demo></Demo>
          </Suspense>
        ) : null}
      </div>
    );
  }
}
