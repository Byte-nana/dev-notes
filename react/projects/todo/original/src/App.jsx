import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAdd = (newItem) => setItems((item) => [...item, newItem]);

  return (
    <>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <TodoForm onAdd={handleAdd} />
    </>
  );
}

export default App;

const initialItems = ['milk', 'eggs'];
