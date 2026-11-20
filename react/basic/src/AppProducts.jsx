import { useState } from 'react';
import Products from './components/Products';

export default function AppProducts() {
  const [showProducts, setShowPorducts] = useState(false);

  const handleClick = () => {
    setShowPorducts((show) => !show);
  };

  return (
    <div>
      {showProducts && <Products />}
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}
