import { useState } from 'react';
import './App.css';

export default function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const handleMouseMove = (e) => {
    setPosition((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    // If, pointer moves only horizontally?
    // setPosition((prev) => ({ ...prev, x: e.clientX }));
  };

  return (
    <div className='container' onPointerMove={handleMouseMove}>
      <div
        className='pointer'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </div>
  );
}
