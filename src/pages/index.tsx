import { List } from 'antd-mobile';
import React, { Component } from 'react';
import { Link } from 'umi';
export default class index extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
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
        </List>
      </div>
    );
  }
}
