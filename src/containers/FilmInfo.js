import React from 'react';
import AddFilm from '../components/AddFilm.js';
import ShowtimeList from '../components/ShowtimeList.js';

class FilmInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false,
      showTimes: true
    };
  }

  render() {
    return (
      <div>
        <AddFilm added={this.state.added}/>
        <h2>{this.props.film.title}</h2>
        <ShowtimeList show={this.state.showTimes} times={this.props.film.showtimes}/>
      </div>
    );
  }
}

export default FilmInfo;
