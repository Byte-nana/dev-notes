import { useEffect, useState } from 'react';

export default function Products() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const [products, setProducts] = useState([]);

  const handleChange = () => setChecked((check) => !check);
  const handleClick = () => setCount((count) => count + 1);

  // 그냥 fetch로만 데이터를 받아오면 생기는 문제
  // 데이터를 받아와서 이를 setProducts로 값을 업데이트 하면 react가 다시 Products 컴포넌트를 호출한다.
  // 그렇기에 무한으로 데이터를 받아오고 컴포넌트가 다시 호출되는 일이 발생한다.
  // react 동작원리 : state가 업데이트 되면 다시 호출된다.
  useEffect(() => {
    fetch(`data/${checked ? 'sales_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('Get hot hot data🔥🔥🔥🔥');
        setProducts(data);
      })
      .catch((err) => console.error(err))
      .finally();
    // useEffect의 return 함수
    // 컴포턴트가 화면에서 사라질 때(unmount)될 때 호출되는 함수
    return () => {
      console.log('Clean the data...🧹🧹🧹');
    };
  }, [checked]);

  return (
    <>
      <input
        onChange={handleChange}
        type='checkbox'
        name='checkbox'
        id='checkbox'
      />
      <label htmlFor='checkbox'>Show Only 🔥🔥🔥 Sale!</label>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </li>
          );
        })}
      </ul>
      <button onClick={handleClick}>{count}</button>
    </>
  );
}
