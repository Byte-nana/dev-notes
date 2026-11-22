import { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsReducer() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`Who do you want to change?`);
    const current = prompt(`What's your new mentor's name?`);

    dispatch({ type: 'updated', prev, current });
  };

  const handleAdd = () => {
    const name = prompt(`What's your mentor's name?`);
    const title = prompt(`What's your mentor's title?`);

    dispatch({ type: 'added', name, title });
  };

  const handleDelete = () => {
    const name = prompt(`Who do you want to delete?`);

    dispatch({ type: 'deleted', name });
  };

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
      <button onClick={handleUpdate}>Change Name</button>
      <button onClick={handleAdd}>Add Mentor</button>
      <button onClick={handleDelete}>Delete Mentor</button>
    </>
  );
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
