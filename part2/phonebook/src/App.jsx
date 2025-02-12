import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [error, setError] = useState(false)

  useEffect(()=>{
    personService
    .getAll()
    .then(returnedPerson =>
      setPersons(returnedPerson)
    )
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleDelete = (id) =>
  {
    if (window.confirm("Delete this phone number ?")) {
      personService
      .remove(id)
      .then(returnedPerson => {
        setPersons(persons.filter((person) => person.id !== returnedPerson.id))
      })
    }
  }

  const handleAdd = (event) => {
    event.preventDefault()
    const personObject = {name : newName, phone : newPhone}
    const similarPerson = persons.find(person => person.name === personObject.name);
    if (similarPerson)
    {
      personService
      .update(similarPerson.id, personObject)
      .then(returnedPerson => {
          setNotification(`Modified ${returnedPerson.name}`)
          setInterval(() => {
            setNotification(null)
          }, 5000)
          setPersons(persons.map((person) => person.id === returnedPerson.id ? returnedPerson : person))
        }
      )
      .catch(error => {
        setNotification(`Information of ${personObject.name} has already been removed from server`)
        setError(true)
        setInterval(() => {
          setNotification(null)
          setError(false)
        }, 5000)
        setPersons(persons.filter(person => person.id !== similarPerson.id))
      })
    }
    else
    {
      personService
      .create(personObject)
      .then(returnedPerson => {
          setNotification(`Added ${returnedPerson.name}`)
          setInterval(() => {
            setNotification(null)
          }, 5000)
          setPersons([...persons, returnedPerson])
        }
      )
    }
    setNewName("")
    setNewPhone("")
  }

  const personsFiltered = persons.filter((person) => person.name.includes(filter))

  return (
    <div>
      <h2>PhoneBook</h2>
        <Notification msg={notification} error={error}></Notification>
        <Filter filter={filter} onChange={handleFilterChange}></Filter>
      <h2>Add a new</h2>
        <PersonForm newName={newName} newPhone={newPhone} onNameChange={handleNameChange} onPhoneChange={handlePhoneChange} onAdd={handleAdd}></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={personsFiltered} onDelete={handleDelete}></Persons>
    </div>
  )
}

export default App