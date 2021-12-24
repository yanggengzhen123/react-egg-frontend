import React, { useReducer } from 'react';
interface State {
  isLogin: boolean;
  user: {
    [key: string]: string;
  };
}
interface Action {
  type: string;
  payload: boolean;
}
const initState = {
  isLogin: false,
  user: {
    id: '100',
    name: 'john',
  },
};
const UserContext = React.createContext<typeof initState>(initState);

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: action.payload,
      };
      break;
    default:
      break;
  }
};
const UserContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        {props.children}
      </UserContext.Provider>
    </div>
  );
};
export { UserContext, UserContextProvider };
