// 自定义弹窗
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
interface CreatePortalStyle {
  style?: any;
}
export default class CreatePortal extends Component<CreatePortalStyle> {
  body: HTMLBodyElement | null;
  el: HTMLDivElement;
  constructor(props: any) {
    super(props);
    this.body = document.querySelector('body');
    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.el.setAttribute('id', 'portal-root');
    this.body && this.body.appendChild(this.el);
  }

  componentWillUnmount() {
    this.body && this.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
