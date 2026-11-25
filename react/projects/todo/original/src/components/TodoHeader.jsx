import { LuMoonStar, LuSunMedium } from 'react-icons/lu';
import Button from '../ui/Button';

const states = ['all', 'active', 'completed'];

export default function TodoHeader({ onFilter }) {
  return (
    <header>
      <LuMoonStar />
      <LuSunMedium />
      <div>
        {states.map((state, index) => (
          <Button key={index} onClick={() => onFilter(state)}>
            {state}
          </Button>
        ))}
      </div>
    </header>
  );
}
