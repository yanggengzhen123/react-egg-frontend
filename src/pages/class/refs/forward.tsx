import React, { forwardRef, LegacyRef } from 'react';
const inputForWard = forwardRef((props, ref: LegacyRef<HTMLInputElement>) => {
  return (
    <div>
      姓名: <input ref={ref}></input>
    </div>
  );
});
export default inputForWard;
