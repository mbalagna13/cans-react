import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { cans: [] }

    axios.get('http://localhost:3000/api/v1/cans')
        .then((cans) => {
          console.log(cans);
          this.setState({ cans });
          // This is equivalent to this.setState({ cans:cans})
        });
  }

  render() {
    return (
      <div>HI!</div>
    )
  }

}


ReactDOM.render(<App />, document.querySelector('.container'));
