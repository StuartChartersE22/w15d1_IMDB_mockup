import React from 'react';

class AddFilm extends React.Component {

  render() {
    return (
      <button onClick={this.props.action} >{addButtonText(this.props.added)}</button>
    );
  }
}

export default AddFilm;

function addButtonText(added) {
  if(added){
    return 'Remove';
  } else {
    return 'Add';
  }
}
