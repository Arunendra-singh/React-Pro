import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeather } from './features/weather/weatherSlice'
import WeatherCard from './components/WeatherCard'

function App() {
  const [city, setCity] = useState('')
  const dispatch = useDispatch()

  const handleSearch = () => {
    if (city) dispatch(fetchWeather(city))
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <WeatherCard />
    </div>
  )
}

export default App
