import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAdd = (newItem) => setItems((item) => [...item, newItem]);

  const handleDelete = (deleteItem) =>
    setItems(items.filter((item) => item.id !== deleteItem.id));

  return (
    <>
      <ul>
        {items.map((item) => (
          <TodoItem key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </ul>
      <TodoForm onAdd={handleAdd} />
    </>
  );
}

export default App;

const initialItems = [
  { id: 1234, text: 'milk' },
  { id: 12345, text: 'eggs' },
];
