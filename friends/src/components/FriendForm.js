import React from 'react'



const FriendForm = props => {

    const handleSubmit = e => {
        e.preventDefault();
        if (props.isUpdating) {
            props.updateItem();
        } else {
            props.addItem();
        }
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit">{props.isUpdating ? 'Update ' : 'Add '}Friend</button>
        </form>
    )
}

export default FriendForm;