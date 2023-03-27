import {useEffect, useState} from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const GEO_URL = `http://api.openweathermap.org/geo/1.0/direct`
const WEATHER_URL = ``;

export const App = () => {

  const [city, setCity] = useState<string>("")
  // useEffect(() => {
  //   fetch(`${GEO_URL}?q=${city}&appid=${WEATHER_API_KEY}`).then(r => r.json()).then(d => console.log(d))
  // }, [GEO_URL, city])

  return (
    <div className="App">
     <h1>Coni Weather</h1>
     <SearchBar value={city} setValue={setCity} />
    </div>
  );
}