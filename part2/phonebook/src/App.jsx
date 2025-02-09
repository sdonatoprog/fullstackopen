import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '438-539-6672' },
    { name: 'Roi Henock', phone: '438-539-6671' },
    { name: 'Hello LeMonde', phone: '438-539-6673' },
    { name: 'Conchita Maskey', phone: '438-539-6674' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName))
    {
      alert(`${newName} is already added to phonebook`)
      return
    }
    setPersons([...persons, {name : newName, phone : newPhone}])
    setNewName("")
    setNewPhone("")
  }

  const personsFiltered = persons.filter((person) => person.name.includes(filter))

  return (
    <div>
      <h2>PhoneBook</h2>
        <Filter filter={filter} onChange={handleFilterChange}></Filter>
      <h2>Add a new</h2>
        <PersonForm newName={newName} newPhone={newPhone} onNameChange={handleNameChange} onPhoneChange={handlePhoneChange} onAdd={handleAdd}></PersonForm>
      <h2>Numbers</h2>
      <Persons persons={personsFiltered}></Persons>
    </div>
  )
}

export default App