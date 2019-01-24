import React from 'react'

const FriendsList = props => {
    return (
        <div className="App">
        {props.friends.map(friend => (
          <div className="info" key={friend.id}>
            <h1>{friend.name}</h1>
            <h3>Age: {friend.age}</h3>
            <h4>Email: {friend.email}</h4>
            <div>
               <button onClick={(e) => props.deleteItem(e, friend.id)}>Delete Friend</button>
           </div>
          </div>
        ))}
      </div>
    );
}

export default FriendsList;