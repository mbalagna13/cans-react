import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CansList from './components/cans_list';
import CansTable from './components/cans_table'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { cans: [] }

    axios.get('http://localhost:3000/api/v1/cans')
        .then((response) => {

          this.setState({ cans: response.data.message });
          // console.log(cans);

        });

  }

  render() {
    return (
      <div>
        <CansTable cans={this.state.cans} />
      </div>

    )
  }

}


ReactDOM.render(<App />, document.querySelector('.container'));
