import React, { useReducer, Dispatch } from 'react';
export type exportInitState = typeof initState;
interface Action {
  type: string;
  payload: boolean;
}
const initState = {
  isLogin: false,
  user: {
    id: '100',
    name: 'zhen',
  },
};
interface Context {
  state: typeof initState;
  dispatch: Dispatch<Action>;
}
const reducer = (state: typeof initState, action: Action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: action.payload,
      };
      break;
    default:
      return state;
      break;
  }
};
const UserContext = React.createContext<Context>({
  state: initState,
  dispatch: () => {},
});
const UserContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initState);
  console.log(state);
  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        {props.children}
      </UserContext.Provider>
    </div>
  );
};
export { UserContext, UserContextProvider };
