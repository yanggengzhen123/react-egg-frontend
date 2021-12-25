import React, { useState, useEffect } from 'react';
import { StoreProvider } from 'think-react-store';
import * as store from './stores';
import User from './user';
//@ts-ignore
import log from 'think-react-store/middlewares/log';
export default function (props: any) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <StoreProvider store={store}>
      <User />
    </StoreProvider>
  );
}
