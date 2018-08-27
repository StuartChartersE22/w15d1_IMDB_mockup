import React from 'react';
import FilmInfo from '../containers/FilmInfo.js'

const FilmList = (props) => {

  const films = props.films.map((film, index) => {
    <li key= {index} className="film-info">
      <FilmInfo film={film}/>
    </li>
  })

  return (
    <div>
      <ul classname="film-list">
        {films}
      </ul>
      <button className="show-button">{showButtonText(films.length)}</button>
    </div>

  );
};

export default FilmList;

function showButtonText(numFilms) {
  if(numFilms <= 3){
    return `more options`;
  } else {
    return `fewer options`;
  }
}
