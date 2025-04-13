// FormUseState.js
import React, { useState } from 'react';

const FormUseState = () => {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Submitted: ${form.name}, ${form.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Name" />
      <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="Email" />
      <button type="submit">Submit</button>
      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
    </form>
  );
};

export default FormUseState;
