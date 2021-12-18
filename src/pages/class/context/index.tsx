// 基于react context api实现数据流管理
import React, { Component } from 'react';
import Search from './search';
import Lists from './lists';
import { SearchContext } from './searchContext';
// @ts-ignore
import { getLists } from '../../../services/search.js';
export interface Action {
  [key: string]: string;
}
export default class componentNew extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      text: '',
      lists: [],
    };
  }
  handleDispatch = async (action: Action) => {
    switch (action.type) {
      case 'TEXT':
        return this.setState({
          text: action.payload,
        });
      case 'LISTS':
        const res = await getLists(action.payload);
        console.log(res);

        return this.setState({
          lists: res.lists,
        });
      default:
        break;
    }
  };
  render() {
    return (
      <div>
        <SearchContext.Provider
          value={{
            state: this.state,
            dispatch: this.handleDispatch,
          }}
        >
          <Search></Search>
          <Lists></Lists>
        </SearchContext.Provider>
      </div>
    );
  }
}
