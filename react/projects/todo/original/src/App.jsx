import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { ItemState } from './constants/itemState';
import TodoHeader from './components/TodoHeader';

function App() {
  const [items, setItems] = useState(initialItems);
  const [filter, setFilter] = useState('all');

  const filteredItems =
    filter === 'all' ? items : items.filter((item) => item.state === filter);

  const handleFilter = (state) => setFilter(state);

  const handleAdd = (newItem) => setItems((item) => [...item, newItem]);

  const handleDelete = (deleteItem) =>
    setItems((items) => items.filter((item) => item.id !== deleteItem.id));

  const handleChecked = (checkItem) => {
    setItems((items) =>
      items.map((item) => {
        if (item.id === checkItem.id) {
          return {
            ...item,
            state: `${item.state === ItemState.active ? ItemState.completed : ItemState.active}`,
          };
        } else return item;
      }),
    );
  };

  return (
    <>
      <TodoHeader onFilter={handleFilter} />
      <ul>
        {filteredItems.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onDelete={handleDelete}
            onChecked={handleChecked}
          />
        ))}
      </ul>
      <TodoForm onAdd={handleAdd} />
    </>
  );
}

export default App;

const initialItems = [
  { id: 1234, text: 'milk', state: 'active' },
  { id: 12345, text: 'eggs', state: 'active' },
];
