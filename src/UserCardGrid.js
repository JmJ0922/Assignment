import React from 'react';
import UserCard from './UserCard';
import './UserCardGrid.css'

const UserCardGrid = ({ users }) => {
  return (
    <div className="UserCardGrid">
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
};

export default UserCardGrid;
