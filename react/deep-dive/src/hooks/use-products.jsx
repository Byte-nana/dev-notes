import { useEffect, useState } from 'react';

export default function useProducts({ SalesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  // 최초로 마운트 시 요청하고 SalesOnly가 변경될 때마다 네트워크 요청
  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetch(`data/${SalesOnly ? 'sales_' : ''}products.json`)
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
  }, [SalesOnly]);

  // custom hooks은 원하는 데이터를 반환하면 된다.
  // 주의! hooks은 logic의 재사용이지 값의 재사용이 아니다!
  return [loading, error, products];
}
