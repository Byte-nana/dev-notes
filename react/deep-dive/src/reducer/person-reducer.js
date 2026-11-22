export default function personReducer(person, action) {
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((m) => {
          if (m.name === prev) {
            return { ...m, name: current };
          } else {
            return m;
          }
        }),
      };
    }

    case 'added': {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }

    case 'deleted': {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((m) => m.name !== name),
      };
    }
    default:
      throw new Error(`Unknow action type: ${action.type}`);
  }
}
