import { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`Who do you want to change?`);
    const current = prompt(`What's your new mentor's name?`);

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.map((m) => {
        if (m.name === prev) {
          return { ...m, name: current };
        } else {
          return m;
        }
      }),
    }));
  };

  const handleAdd = () => {
    const name = prompt(`What's your mentor's name?`);
    const title = prompt(`What's your mentor's title?`);

    setPerson((person) => ({
      ...person,
      mentors: [...person.mentors, { name, title }],
    }));
  };

  const handleDelete = () => {
    const deleted = prompt(`Who do you want to delete?`);

    setPerson((person) => ({
      ...person,
      mentors: person.mentors.filter((m) => m.name !== deleted),
    }));
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
