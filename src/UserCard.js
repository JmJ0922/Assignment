import React from 'react';
import './UserCard.css';
import './App.css'

const UserCard = ({ user }) => {
  return (
    <div className='UserCard'>
      <div className='user-image'>
      <img src={user.avatar} alt='Avatar' />
      </div>
      <div className='user-name'>
      <h2>{user.first_name} {user.last_name}</h2>
      <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
