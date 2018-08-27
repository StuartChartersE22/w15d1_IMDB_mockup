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
        <button onClick={props.action}>Hide showtimes</button>
      </div>
    );
  } else {
    return (
      <button onClick={props.action}>Display showtimes</button>
    );
  }

}

export default ShowtimeList;
