import React, { useState, useEffect } from 'react';
import { UserContextProvider } from './userContext';
import App from './app';
export default function (props: any) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div>
      <UserContextProvider>
        <App {...props}></App>
      </UserContextProvider>
    </div>
  );
}
