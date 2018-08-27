import React from 'react';
import AddFilm from '../components/AddFilm.js';
import ShowtimeList from '../components/ShowtimeList.js';

class FilmInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
      showTimes: false
    };
  }

  render() {
    return (
      <div>
        <AddFilm added={this.state.added}/>
        <h2>{this.props.film.title}</h2>
        <ShowtimeList show={this.state.showTimes} showtimes={this.props.film.showtimes}/>
      </div>
    );
  }
}

export default FilmInfo;
