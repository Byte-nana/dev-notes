import { memo, useCallback, useMemo, useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  // Before useCallback
  // Components가 업데이트 될 때마다(re-render) 새롭게 함수가 만들어지고 변수에 할당이 된다. (함수 참조값이 변경된다.)
  // After useCallback
  // 함수가 캐시되기에, 컴포넌트가 리렌더링되어도 동일한 함수 참조값을 유지한다.
  const handleUpdate = useCallback(() => {
    const prev = prompt(`Who do you want to change?`);
    const current = prompt(`What's your new mentor's name?`);

    dispatch({ type: 'updated', prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`What's your mentor's name?`);
    const title = prompt(`What's your mentor's title?`);

    dispatch({ type: 'added', name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`Who do you want to delete?`);

    dispatch({ type: 'deleted', name });
  }, []);

  return (
    <>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>{person.name}'s mentors are:</p>
      <ul>
        {person.mentors.map((mentor, index) => {
          return (
            <li key={index}>
              {mentor.name} ({mentor.title})
            </li>
          );
        })}
      </ul>
      <Button text='Change Name' onClick={handleUpdate} />
      <Button text='Add Mentor' onClick={handleAdd} />
      <Button text='Delete Mentor' onClick={handleDelete} />
    </>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-rendering🙃');
  //   const rseult = calculateSomething();
  // 딱 한번만 처리되길 원한다면 useEffect 써도 되겠지?
  const result = useMemo(() => calculateSomething(), []);
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '20px',
        margin: '0.4rem',
      }}
    >
      {`${text} ${result}`}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('😅');
  }
  return 10;
}

const initialPerson = {
  name: 'Nana',
  title: 'Software engineer',
  mentors: [
    { name: 'Hieu Thao', title: 'CEO' },
    { name: 'Thatha', title: 'Educator' },
    { name: 'Natha', title: 'Personal Coach' },
  ],
};
