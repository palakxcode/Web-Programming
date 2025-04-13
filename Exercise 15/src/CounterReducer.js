// CounterUseReducer.js
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return state + 1;
    case 'dec':
      return state - 1;
    default:
      return state;
  }
};

const CounterUseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'inc' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'dec' })}>Decrease</button>
    </>
  );
};

export default CounterUseReducer;
