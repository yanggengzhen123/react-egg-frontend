import React, { useState, useEffect } from 'react';
import { useTitleHook, useHttpHook } from '@/hooks';
export default function (props: any) {
  const [state, setState] = useState('自定义hook');
  const title = useTitleHook(state);
  useEffect(() => {
    console.log(state);
  }, [state]);
  const [listResult, loading] = useHttpHook({
    url: '/getListsAsync?value=123',
    method: 'get',
    watch: [state],
  });
  console.log(listResult, loading);

  const handleClick = () => {
    setState(new Date().getTime().toString());
  };
  return <h1 onClick={handleClick}>{title}</h1>;
}
