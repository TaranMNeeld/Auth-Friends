import React from 'react';
import './Friend.css';

const FriendCard = props => {
    return (
     <div className='friend-card'>
         <h2>{props.name}</h2>
         <h2>{props.age}</h2>
         <h2>{props.email}</h2>
     </div>
    );
}

export default FriendCard;