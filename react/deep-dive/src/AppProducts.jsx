import { useState } from 'react';
import Products from './components/Products';

export default function AppProducts() {
  const [showProducts, setShowProducts] = useState(false);

  const handleToggle = () => setShowProducts((show) => !show);
  return (
    <div>
      {showProducts && <Products />}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}
