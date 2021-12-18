import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import { SearchContext } from './searchContext';
export default class Search extends Component<any, any> {
  static contextType = SearchContext;
  constructor(props: any) {
    super(props);
    this.state = {
      value: '',
    };
  }
  handleChange = (value: any) => {
    this.setState({ value });
  };
  handleSubmit = () => {
    this.context.dispatch({
      type: 'LISTS',
      payload: this.state.value,
    });
  };
  render() {
    return (
      <div>
        <SearchBar
          autoFocus
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        ></SearchBar>
      </div>
    );
  }
}
