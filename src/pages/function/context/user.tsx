import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './userContext';

export default function (props: any) {
  const { state } = useContext(UserContext);
  console.log(state);

  return (
    <div>
      <h1>user:</h1>
      <h1>user-id:{state.user.id}</h1>
      <h1>user-name:{state.user.name}</h1>
    </div>
  );
}
