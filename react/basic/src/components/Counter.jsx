import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <section className='counter'>
      <p className='counter__number'>{count}</p>
      <button className='counter__button' onClick={handleClick}>
        Add +
      </button>
    </section>
  );
}
