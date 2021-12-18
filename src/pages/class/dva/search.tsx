import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
export default class Search extends Component<any, any> {
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
    this.props.dispatch({
      type: 'search/getListAsync',
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
