import React, { Component } from 'react';
import ListItem1 from './lists-item1';
import ListItem2 from './lists-item2';
export default class Lists extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'item',
    };
  }
  handleChild = (name: string) => {
    console.log(name);
    this.setState({ name });
  };
  render() {
    return (
      <div>
        <ListItem1 name={'item12'} handleItem={this.handleChild}></ListItem1>
        <ListItem2 name={this.state.name}></ListItem2>
      </div>
    );
  }
}
