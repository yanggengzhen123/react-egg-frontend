import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useCallback,
} from 'react';
// useLayoutEffect在dom节点渲染完成后才执行effect，通常用来获取dom元素
//useCallback也有缓存的效果
export default function (props: any) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('test_demo');
  //  第二个是依赖项，是非必选项，
  // 1、如果没有的话每次修改属性都会触发useEffect的函数，
  // 2、如果是[]的话就只会在组件初始化的时候触发一次，
  // 3、如果里面有依赖项，例如[count],只有当count发生改变的时候会触发useEffect
  //  useEffect并不支持async await
  //  useEffect 可以执行多个
  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  });
  useEffect(() => {
    console.log('useEffect');

    // 不支持async await。但支持下面的写法
    // async function demo() {
    //   console.log('demo');
    // }
    // 不需要写await
    // demo();

    // fetch('/api/getLists').then((res) => {
    //   console.log(res);
    // });
  }, [count]);

  //   const handleCount = () => {
  //     setCount(count + 1);
  //   };
  // 改写缓存
  const handleCount = useCallback(() => {
    console.log('changeCount');
    setCount(count + 1);
  }, [count]);
  const noCacheText = () => {
    console.log('text change');
    return text;
  };
  //（text被缓存）只要text没有发生改变，就不会重新被执行
  const memoText = useMemo(() => {
    console.log('text change');
    return text;
  }, [text]);
  return (
    <div>
      <h1 onClick={handleCount}>count:{count}</h1>
      {/* <h1>text:{noCacheText()}</h1> */}
      <h1>text:{memoText}</h1>
    </div>
  );
}
