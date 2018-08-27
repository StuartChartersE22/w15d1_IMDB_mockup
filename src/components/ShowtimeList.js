import React from 'react';

const ShowtimeList = (props) => {

  const showtimes = props.times.map((time, index) => {
    return <li key={index}>{time}</li>;
  });

  if(props.show){
    return (
      <div>
        <ul>
          {showtimes}
        </ul>
        <button>Hide showtimes</button>
      </div>
    );
  } else {
    return (
      <button>Display showtimes</button>
    );
  }

}

export default ShowtimeList;
