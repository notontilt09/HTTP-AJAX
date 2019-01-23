import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Route } from 'react-router-dom';

class App extends Component {
  state = {
    friends: [],
    error: ''
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState({
          friends: res.data
        })
      })
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
          <div className="info">
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
