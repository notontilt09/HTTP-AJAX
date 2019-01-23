import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {
  state = {
    friends: [],
    error: ''
  }

  // using axios to get data from local server
  componentDidMount() {
    // .get method retrieves json data from url
    axios.get('http://localhost:5000/friends')
      // setState of friends to the data from url if response is successful
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
      // setState of error to the error message received from the api call
      .catch(err => {
        this.setState({
          error: err.response.data.message
        })
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => (
          <div className="info" key={friend.id}>
            <h1>{friend.name}</h1>
            <h3>Age: {friend.age}</h3>
            <h4>Email: {friend.email}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
