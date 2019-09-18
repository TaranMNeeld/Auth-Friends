import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import './Friend.css';

const AddFriendForm = () => {

    const [friend, setFriend] = useState({ id: Date.now(), name: '', age: '', email: '' });

    const addFriend = event => {
        if (friend.name !== '' && friend.age !== '' && friend.email !== '') {
            axiosWithAuth().post('/friends', friend)
                .then(res => {
                    console.log(friend);
                })
                .catch(err => console.log(err))
            setFriend({ id: '', name: '', height: '', age: '' });
        }
    };

    return (
        <div className='form-div'>
            <form>
                <input
                    className='form-field'
                    type='text'
                    name='name'
                    placeholder='name'
                    value={friend.name}
                    onChange={({ target }) => setFriend({ ...friend, [target.name]: target.value })}
                />
                <input
                    className='form-field'
                    type='text'
                    name='age'
                    placeholder='age'
                    value={friend.age}
                    onChange={({ target }) => setFriend({ ...friend, [target.name]: target.value })}
                />
                <input
                    className='form-field'
                    type='text'
                    name='email'
                    placeholder='email'
                    value={friend.height}
                    onChange={({ target }) => setFriend({ ...friend, [target.name]: target.value })}
                />
                <button className='friend-field' type='submit' onClick={addFriend}>Add Friend</button>
            </form>
        </div>
    );
};

export default AddFriendForm;
