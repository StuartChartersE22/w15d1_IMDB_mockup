import React, { Component } from 'react';
import Openings from './containers/Openings.js'
import './App.css';

class App extends Component {
  render() {

    const films = [
      {
        title: "IT",
        showtimes: [
          "12:30", "18:20"
        ]
      },
      {
        title: "Thing",
        showtimes: [
          "11:30", "19:20"
        ]
      },
      {
        title: "Stuff",
        showtimes: [
          "10:30", "20:20"
        ]
      },
      {
        title: "qwerty",
        showtimes: [
          "09:30", "21:20"
        ]
      },
      {
        title: "Ipsum",
        showtimes: [
          "08:30", "22:20"
        ]
      },
    ];

    return (
      <Openings/>
    );

  }
}

export default App;
