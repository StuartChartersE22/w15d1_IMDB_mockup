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

    this.handleAdded = this.handleAdded.bind(this);
    this.handleShowTimes = this.handleShowTimes.bind(this);
  }

  handleAdded(){
    this.setState({added: !this.state.added})
  }

  handleShowTimes(){
    this.setState({showTimes: !this.state.showTimes})
  }

  render() {
    return (
      <div>
        <AddFilm added={this.state.added} action={this.handleAdded}/>
        <h2>{this.props.film.title}</h2>
        <ShowtimeList show={this.state.showTimes} times={this.props.film.showtimes} action={this.handleShowTimes}/>
      </div>
    );
  }
}

export default FilmInfo;
