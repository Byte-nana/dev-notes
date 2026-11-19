import { useState } from 'react';

export default function Counter({ total, onTotalClick }) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
    onTotalClick();
  };
  return (
    <section className='counter'>
      <p className='counter__number'>
        {count} <span className='counter__total'>/{total}</span>
      </p>
      <button className='counter__button' onClick={handleClick}>
        Add +
      </button>
    </section>
  );
}
