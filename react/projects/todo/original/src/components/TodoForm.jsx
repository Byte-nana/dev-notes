import { useRef, useState } from 'react';
import { FiPlus } from 'react-icons/fi';

export default function TodoForm({ onAdd }) {
  const inputRef = useRef(null);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      setText('');
      inputRef.current.focus();
      return;
    }

    onAdd(text);
    setText('');
    inputRef.current.focus();
  };

  const handleChange = (e) => setText(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='text'
        id='text'
        ref={inputRef}
        value={text}
        onChange={handleChange}
      />
      <button type='submit'>
        <FiPlus />
      </button>
    </form>
  );
}
