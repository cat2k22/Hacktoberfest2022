import React, { useState } from 'react'
import "./style/app.css"
const api = {
  key: "ac5d0dec25a31d4af7a8bd985550319a",
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query, setquery] = useState("")
  const [weather, setweather] = useState({})
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {

          setweather(result)
          setquery("")
          console.log(result)
        }
        )
    }
  }
  return (
    <div className={
      (typeof weather.main != "undefined")
     ?((weather.main.temp >  25) ? "app warm":"app" ) : "app"}>
      <main>
        <div className="search-box">
          <input onChange={e => setquery(e.target.value)} value={query}
            onKeyPress={search} type="text" className="search-bar" placeholder="search....." />
            <h3 className = "app-header">Welcome to Himanshu's weather app</h3>
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location"> {weather.name}  , {weather.sys.country}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}° c
              </div>
              <div className="weather">
                {weather.weather[0].main}
              </div>
            </div>
          </div>)
          :
          ("")
        }

      </main>
    </div>
  );
}

export default App;
