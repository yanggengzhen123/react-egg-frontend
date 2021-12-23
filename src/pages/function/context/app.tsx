import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './userContext';
import User from './user';
import { Button } from 'antd-mobile';
export default function (props: any) {
  const { state, dispatch } = useContext(UserContext);
  const handleLogin = () => {
    dispatch({
      type: 'LOGIN',
      payload: true,
    });
  };
  return (
    <div>
      {state}
      <Button type="primary" onClick={handleLogin}>
        测试
      </Button>
      {/* {state.isLogin ? (
        <User />
      ) : (
        
      )} */}
    </div>
  );
}
