const Persons = (props) => {
  const { persons, handleDelete } = props;
  return (
    <ul>
      {persons.map((person) => (
        <li className="note" key={person.name}>
          {person.name} {person.number} <button onClick={()=>handleDelete(person)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;