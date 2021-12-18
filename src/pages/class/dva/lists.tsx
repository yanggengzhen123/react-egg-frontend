import React, { Component } from 'react';
import { List } from 'antd-mobile';

export default class lists extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    const { lists, text } = this.props.search;
    return (
      <div>
        <h1>text:{text}</h1>
        <List>
          {lists.map((item: any, i: number) => {
            return <List.Item key={i}>{item}</List.Item>;
          })}
        </List>
      </div>
    );
  }
}
