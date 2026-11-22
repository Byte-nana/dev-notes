import { useImmer } from 'use-immer';

export default function AppMentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    const prev = prompt(`Who do you want to change?`);
    const current = prompt(`What's your new mentor's name?`);

    updatePerson((person) => {
      const updateName = person.mentors.find((m) => m.name === prev);
      if (!updateName) return;
      updateName.name = current;
    });
  };

  const handleAdd = () => {
    const name = prompt(`What's your mentor's name?`);
    const title = prompt(`What's your mentor's title?`);

    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };

  const handleDelete = () => {
    const deleted = prompt(`Who do you want to delete?`);

    updatePerson((person) => {
      const deleteIndex = person.mentors.findIndex((m) => m.name === deleted);
      if (deleteIndex === -1) return;
      person.mentors.splice(deleteIndex, 1);
    });
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
