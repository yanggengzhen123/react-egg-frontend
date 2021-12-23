import React, { useReducer } from 'react';
const initState = {
  isLogin: false,
  user: {
    id: '100',
    name: 'john',
  },
};
const UserContext = React.createContext();

const reducer = (state, action) => {
  let aa = {
    ...state,
    isLogin: action.payload,
  };
  console.log(aa);

  switch (state.type) {
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
