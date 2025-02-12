import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({country}) => 
{
  const [weather, setWeather] = useState(null)
  
  useEffect( () => {
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=0992d09011c1902b37c9a888a6a5c2a4`)
      .then(response => {
        setWeather(response)
      })
    }, [country]
  )
  if (!weather)
  {
    return(
      <></>
    )
  }
  return (
    <div>
      temperature {weather.data.main.temp}
    </div>
  )
}

const CountryView = ({country}) => {
  return(
    <>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <h2>languages:</h2>
      <ul>
        {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.png} />
      <Weather country={country}/>
    </>
  )
}

const SearchResult = ({countries, search, onShow}) => {

  const filtredCountry = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  if (filtredCountry.length == 1)
  {
    return <CountryView country={filtredCountry[0]}></CountryView>
  }

  else if (filtredCountry.length >= 10)
  {
    return <div>Too many matches, specify another filter</div>
  }

  return filtredCountry.map((country) => 
  <div key={country.name.common}>
    <div>
      {country.name.common} <button onClick={() => onShow(country.name.common)}>show</button>
    </div>
  </div>
  )
}

function App() {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleShow = (countryName) => {
    setSearch(countryName)
  }

  useEffect(() => {
    axios
    .get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {
      setCountries(response.data.map(countryObject => countryObject))
    })
  }, [])

  return (
    <>
      <div>find countries <input value={search} onChange={handleSearch}/></div>
      <SearchResult countries={countries} search={search} onShow={handleShow}/>
    </>
  )
}

export default App
