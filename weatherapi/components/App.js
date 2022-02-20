import axios from "axios";
import React, { Component} from "react";


export default class App extends Component {
  state = {
    url: "https://api.openweathermap.org/data/2.5/",
    key: ".......",
  };

   setQery = (e) => {
    if (e.key === 'Enter') {
        const searchBar = document.getElementById("searchBar")
        this.getResult(searchBar.value);
    }
   };
   getResult = (cityName) => {
    let query = `${this.state.url}weather?q=${cityName}&appid=${this.state.key}&units=metric&lang=tr`;
   // axios.get(query).then(this.displayResult);
   fetch(query)
         .then((weather) => {
          return weather.json();
        })
         .then(this.displayResult);
   
  };
  displayResult = (result) => {
    let city = document.querySelector(".city");
    city.innerText = `${result.name} ,${result.sys.country}`;
    let temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(result.main.temp)} °C`;
    let desc = document.querySelector(".desc");
    desc.innerText = `${result.weather[0].description}`;
    let minmax = document.querySelector(".minmax");
    minmax.innerText = `${Math.round(result.main.temp_min)}°C - ${Math.round(
      result.main.temp_max
    )}°C`;
  };

  render() {
    
   
    return (
      <div>
        <div className="app">
          <div className="header">
            <h1>Hava Durumu</h1>
            <input
              onKeyPress={this.setQery}
              type="text"
              id="searchBar"
              placeholder="Sehir girin..."
            />
          </div>

          <div className="content">
            <div className="city">Istanbul,TR</div>
            <div className="temp">15°C</div>
            <div className="desc">Gunesli</div>
            <div className="minmax">14°C - 19°C</div>
          </div>
        </div>
      </div>
    );
  }
}
