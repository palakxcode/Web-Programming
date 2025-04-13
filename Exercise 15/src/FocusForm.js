// FocusForm.js
import React, { useRef } from 'react';

const FocusForm = () => {
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
};

export default FocusForm;
