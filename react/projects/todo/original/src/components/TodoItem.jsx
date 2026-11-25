import { TbEditFilled, TbTrashFilled } from 'react-icons/tb';
import Button from '../ui/Button';
import { ItemState } from '../constants/itemState';

export default function TodoItem({ item, onDelete, onChecked }) {
  return (
    <li>
      <input
        type='checkbox'
        name='checkbox'
        id='checkbox'
        checked={item.state === ItemState.active ? false : true}
        onChange={() => onChecked(item)}
      />
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
