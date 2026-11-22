import { useEffect, useState } from 'react';
import useProducts from '../hooks/use-products';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ SalesOnly: checked });

  if (loading) {
    return <p>Loading...😉😉😉</p>;
  }

  if (error) {
    return <p>Something went wrong...😑😑😑</p>;
  }

  return (
    <>
      <input
        type='checkbox'
        name='checkbox'
        id='checkbox'
        checked={checked}
        onChange={() => setChecked((check) => !check)}
      />
      <label htmlFor='checkbox'>Show only 🔥🔥🔥 Sale</label>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
