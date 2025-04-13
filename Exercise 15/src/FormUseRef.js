// FormUseRef.js
import React, { useRef, useState } from 'react';

const FormUseRef = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const [submitted, setSubmitted] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(`Submitted: ${nameRef.current.value}, ${emailRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" placeholder="Name" />
      <input ref={emailRef} type="email" placeholder="Email" />
      <button type="submit">Submit</button>
      <p>{submitted}</p>
    </form>
  );
};

export default FormUseRef;
