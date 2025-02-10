const Persons = (props) => (
  props.persons.map((person) => 
    <div key={person.id}>
      {person.name} {person.phone}
      <button onClick={() => {props.onDelete(person.id)}}>delete</button>
    </div>
  )
)

export default Persons