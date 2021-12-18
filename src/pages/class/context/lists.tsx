import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { SearchContext } from './searchContext';
export default class lists extends Component<any, any> {
  static contextType = SearchContext;
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this);
    const { text, lists } = this.context.state;
    console.log(lists);

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
