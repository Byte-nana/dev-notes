import { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: 'Nana',
    title: 'software engineer',
    mentor: {
      name: 'Thatha',
      title: 'Educator',
    },
  });

  const handleChangeName = () => {
    const name = prompt("What's your mentor's name?");
    setPerson((person) => ({ ...person, mentor: { ...person.mentor, name } }));
  };
  const handleChangeTitle = () => {
    const title = prompt("what's your mentor's title?");
    setPerson((person) => ({ ...person, mentor: { ...person.mentor, title } }));
  };

  return (
    <>
      <h1>
        {person.name} is a {person.title}
      </h1>
      <p>
        {person.name}'s mentor is {person.mentor.name} ({person.mentor.title})
      </p>
      <button data-value='name' onClick={handleChangeName}>
        Change Name
      </button>
      <button data-value='title' onClick={handleChangeTitle}>
        Change Title
      </button>
    </>
  );
}
