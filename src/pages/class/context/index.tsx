// 基于react context api实现数据流管理
import React, { Component } from 'react';
import Search from './search';
import Lists from './lists';
import { SearchContext } from './searchContext';
// @ts-ignore
import { getLists } from '../../../services/search.js';
import Consumer from './consumer';
import LazyLoad from '@/components/LazyLoad';
export interface Action {
  [key: string]: string;
}
interface State {
  text: string;
  lists: [];
}
export default class componentNew extends Component<any, State> {
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
          <Consumer></Consumer>
        </SearchContext.Provider>
      </div>
    );
  }
}
