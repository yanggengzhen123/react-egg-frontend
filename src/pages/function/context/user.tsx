import React, { useState, useEffect } from 'react';

export default function (props: any) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div>
      <h1>user:</h1>
      <h1>user-id:</h1>
      <h1>user-name</h1>
    </div>
  );
}
