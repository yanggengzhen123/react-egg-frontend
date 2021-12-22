// 封装基于lazy,Suspense实现组件懒加载
import React, { Component, lazy, Suspense, ReactNode } from 'react';
interface LazyComponent {
  component: { default: never };
  delay: number;
}

export default class LazySupense extends Component<LazyComponent> {
  private _renderLady: () => ReactNode = () => {
    let Lazy;
    const { component, delay, ...other } = this.props;
    // 组件不存在或者组件的类型不是promise
    if (!component || component.constructor.name !== 'Promise') {
      Lazy = import('./error');
    }
    Lazy = lazy(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(component);
        }, delay || 300);
      });
    });
    return <Lazy {...other} />;
  };
  render() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          {this._renderLady()}
        </Suspense>
      </div>
    );
  }
}
