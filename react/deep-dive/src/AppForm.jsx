import { useState } from 'react';

export default function AppForm() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input
        type='text'
        name='name'
        id='name'
        value={form.name}
        autoComplete='name'
        onChange={handleChange}
      />
      <label htmlFor='email'>Email:</label>
      <input
        type='email'
        name='email'
        id='email'
        value={form.email}
        autoComplete='email'
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}
