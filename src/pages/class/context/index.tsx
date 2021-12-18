// 基于react context api实现数据流管理
import React, { Component } from 'react';
import { SearchContext } from './searchContext';
export default class componentNew extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      text: '',
      lists: [],
    };
  }

  render() {
    return (
      <div>
        <SearchContext.Provider
          value={{
            state: this.state,
            dispatch: this.handleDispatch,
          }}
        ></SearchContext.Provider>
      </div>
    );
  }
}
