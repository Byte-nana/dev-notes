import { useEffect, useState } from 'react';

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    // https://react.dev/reference/eslint-plugin-react-hooks/lints/set-state-in-effect?utm_source=chatgpt.com
    setLoading(true);
    setError(undefined);

    fetch(`data/${checked ? 'sales_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🔥🔥🔥 get hot hot data from the network 🔥🔥🔥');
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
        setError('Error ouccur!');
      })
      .finally(() => setLoading(false));

    return () => {
      console.log('🧹🧹🧹 cleaning the data 🧹🧹🧹');
    };
  }, [checked]);

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
        onChange={(e) => setChecked(e.target.checked)}
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
