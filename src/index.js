import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const App = () => {
  axios.get('http://localhost:3000/api/v1/cans')
    .then(function(response) {
      console.log(response);
    })

  return <div>HI!</div>;

}

ReactDOM.render(<App />, document.querySelector('.container'));
