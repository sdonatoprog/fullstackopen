const Persons = (props) => (
  props.persons.map((person) => 
    <div key={person.name}>
      {person.name} {person.phone}
    </div>
  )
)

export default Persons