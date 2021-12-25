import React, { useState, useEffect } from 'react';
import { useStoreHook, useStateHook, useDispatchHook } from 'think-react-store';
export default function (props: any) {
  const {
    user: { id, username, getUserAsync },
  } = useStoreHook();
  const useStateHook1: any = useStateHook('user');
  console.log(useStateHook1); //打印出module user的变量
  const dispatchHook: any = useDispatchHook('user');
  useEffect(() => {
    getUserAsync({
      id: 10,
      username: 'admin',
    });
  }, []);
  const handleClick = () => {
    // getUserAsync({
    //   id: 20,
    //   username: 'admin2',
    // });
    dispatchHook({
      type: 'getUserAsync',
      payload: {
        id: 20,
        username: 'test',
      },
    });
  };
  return (
    <div>
      user-id {id}
      username {username}
      <button onClick={handleClick}>修改</button>
    </div>
  );
}
