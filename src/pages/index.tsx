import { List } from 'antd-mobile';
import React, { Component } from 'react';
import { Link } from 'umi';
import ErrorBoundary from '@/components/ErrorBoundary';
export default class index extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
          <List>
            <List.Item>
              <Link to="/class/component-old">component-old</Link>
            </List.Item>
            <List.Item>
              <Link to="/class/component-new">component-new</Link>
            </List.Item>
            <List.Item>
              <Link to="/class/lists">lists</Link>
            </List.Item>
            <List.Item>
              <Link to="/class/dva">dva</Link>
            </List.Item>
            <List.Item>
              <Link to="/class/context">context</Link>
            </List.Item>
            <List.Item>
              <Link to="/class/lazy-load">lazy-load</Link>
            </List.Item>
            <List.Item>
              <Link to="/class/modal">modal</Link>
            </List.Item>
            <List.Item>
              <Link to="/class/refs">refs</Link>
            </List.Item>
          </List>
        </ErrorBoundary>
      </div>
    );
  }
}
