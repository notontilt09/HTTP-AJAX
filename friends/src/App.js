import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

const emptyFriend = {
  name: '',
  age: '',
  email: ''
}


class App extends Component {
  state = {
    friends: [],
    error: '',
    friend: emptyFriend,
    isUpdating: false
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

  handleChange = e => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [e.target.name] : e.target.value
        }
      };
    });
  }

  addItem = () => {
    axios.post('http://localhost:5000/friends', this.state.friend)
      .then(res => {
        this.setState({
          friends: res.data,
          friend: emptyFriend
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteItem = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState({
        friends: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  populateForm = (e, id) => {
    e.preventDefault();
    this.setState({
      friend: this.state.friends.find(friend => friend.id === id),
      isUpdating: true
    })
    this.props.history.push('/add')
  }

  updateItem = () => {
    axios.put(`http://localhost:5000/friends/${this.state.friend.id}`, this.state.friend)
    .then(res => {
      this.setState({
        friends: res.data,
        isUpdating: false,
        friend: emptyFriend
      })
      this.props.history.push('/');
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <Link to='/add'>{this.state.isUpdating ? 'Update ' : 'Add '}Friend</Link>
        <Link to='/'>Home</Link>
        <Route 
          exact 
          path="/" 
          render={props => 
            <FriendsList 
              {...props} 
              friends={this.state.friends} 
              deleteItem={this.deleteItem} 
              populateForm={this.populateForm}  
            />} 
        />
        <Route 
          path="/add"
          render={props => 
            <FriendForm 
              {...props} 
              friend={this.state.friend} 
              handleChange={this.handleChange} 
              addItem={this.addItem} 
              updateItem={this.updateItem}  
              isUpdating={this.state.isUpdating}
            />} 
        />
        
      </div>
    );
  }
}

export default App;
