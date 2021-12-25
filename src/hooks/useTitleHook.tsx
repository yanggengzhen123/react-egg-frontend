import { string } from 'prop-types';
import { useLayoutEffect, useState } from 'react';
export default function useTitleHook<T extends string>(title: T): T {
  const [state, setState] = useState(title);
  useLayoutEffect(() => {
    document.title = title;
    setState(title);
  }, [title]);
  return state;
}
