import React from 'react';
import { Action } from './index';
export const SearchContext = React.createContext({
  state: {
    text: '',
  },
  dispatch: (action: Action) => {},
});
