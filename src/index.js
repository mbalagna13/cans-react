import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CansList from './components/cans_list'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { cans: [] }

    axios.get('http://localhost:3000/api/v1/cans')
        .then((response) => {
          console.log(response.data.message);
          this.setState({ cans: response.data.message });
          // console.log(cans);

        });
        console.log(this.state.cans);
  }

  render() {
    return (
      <div>
        <CansList cans={this.state.cans} />
      </div>
    )
  }

}


ReactDOM.render(<App />, document.querySelector('.container'));
