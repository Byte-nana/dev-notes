import { TbEditFilled, TbTrashFilled } from 'react-icons/tb';

export default function TodoItem({ item }) {
  return (
    <li>
      <input type='checkbox' name='checkbox' id='checkbox' />
      <span>{item}</span>
      <button>
        <TbEditFilled />
      </button>
      <button>
        <TbTrashFilled />
      </button>
    </li>
  );
}
