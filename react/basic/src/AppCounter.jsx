import Counter from './components/Counter';
import './App.css';
import { useState } from 'react';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      <p className='counter__banner'>
        Total Count: {count} {count >= 10 ? '🔥🔥🔥🔥' : '❄️'}
      </p>
      <Counter total={count} onTotalClick={handleClick} />
      <Counter total={count} onTotalClick={handleClick} />
    </>
  );
}
