import React from 'react'

const FriendForm = props => {
    return (
        <form onSubmit={props.addItem}>
            <input 
                required
                type='text' 
                name='name' 
                placeholder='name' 
                value={props.friend.name} 
                onChange={props.handleChange} 
            />
            <input 
                required
                type='number' 
                name='age' 
                placeholder='age' 
                value={props.friend.age} 
                onChange={props.handleChange} 
            />
            <input 
                required
                type='text' 
                name='email' 
                placeholder='email' 
                value={props.friend.email} 
                onChange={props.handleChange} 
            />
            <button type="submit">Add to Friends List!</button>
        </form>
    )
}

export default FriendForm;