import React from 'react';
import FilmList from '../components/FilmList.js'

class Openings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false
    };
  }

  render() {
    return (
      <div className="openings">
        <h1>Openings</h1>
        <FilmList films={filmsToShow(this.state.showMore, this.props.films)}/>
        <button>Get showtimes</button>
      </div>
    );
  }
}

export default Openings

function filmsToShow(showMore, films) {
  if(showMore){
    return films;
  }else {
    return films.slice(0,3);
  }
}
