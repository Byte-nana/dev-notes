import { TbEditFilled, TbTrashFilled } from 'react-icons/tb';
import Button from '../ui/Button';

export default function TodoItem({ item, onDelete }) {
  return (
    <li>
      <input type='checkbox' name='checkbox' id='checkbox' />
      <span>{item.text}</span>
      <Button>
        <TbEditFilled />
      </Button>
      <Button
        onClick={() => {
          onDelete(item);
        }}
      >
        <TbTrashFilled />
      </Button>
    </li>
  );
}
