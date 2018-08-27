import React from 'react';

const AddFilm = (props) => {
  return (
    <button>{addButtonText(props.added)}</button>
  );
};

export default AddFilm;

function addButtonText(added) {
  if(added){
    return 'Remove';
  } else {
    return 'Add';
  }
}
