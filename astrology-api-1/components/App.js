import React, { Component } from "react";

export default class App extends Component {
  setQery = (e) => {
    if (e.key === "Enter") {
      const searchBar = document.getElementById("searchBar");
      this.getResult(searchBar.value);
      searchBar.value = "";
    }
  };
  getResult = (sign) => {
    let query = `https://aztro.sameerkumar.website/?sign=${sign}&day=today`;
    fetch(query, {
      method: "POST",
    })
      .then((response) => response.json())
      .then(this.displayResult);
    console.log(query);
  };
  displayResult = (result) => {
    let city = document.querySelector(".text");
    city.innerText = `
    
         Current Date: ${result.current_date} 

         Today's Compatibility: ${result.compatibility} 

         Today's Lucky Number: ${result.lucky_number} 

         Today's  Lucky Time: ${result.lucky_time} 

         Today's Color: ${result.color} 

         Date Range: ${result.date_range} 

         Today's Mood: ${result.mood} 

         Today's  Description: ${result.description} `;
  };
  render() {
    return (
      <div>
        <div className="app">
          <div className="header">
            <h1 id="title">Daily Horoscope</h1>
            <input
              onKeyPress={this.setQery}
              type="text"
              id="searchBar"
              placeholder="Enter your sign..."
            />
          </div>
          <div className="content">
            <div className="text"></div>
          </div>
        </div>
      </div>
    );
  }
}
