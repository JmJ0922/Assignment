import React, { useState} from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import UserCardGrid from './UserCardGrid';
import './App.css';
import Home from './Home';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [showUsers, setShowUsers] = useState(false);

  const handleGetUsers = async () => {
    setLoading(true);
    const response = await axios.get('https://reqres.in/api/users?page=1');
    setUsers(response.data.data);
    setLoading(false);
    setCurrentPage('users');
    setTimeout(() => {
      setShowUsers(true);
    }, 3000); // show user data after 3 seconds
  };

  const handleHome = () => {
    setCurrentPage('home');
    setShowUsers(false);
  };

 
  let content;

  if (currentPage === 'home') {
    content = <Home />;
  } else if (currentPage === 'users') {
    content = loading ? 
    <div style={{alignItems:"center",padding:"13rem"}}>
    <p style={{textAlign:"center",color:"white",fontFamily:"Papyrus",fontSize:"40px"}}>Loading...</p>
    </div> : (showUsers ? <UserCardGrid users={users} /> : <div style={{alignItems:"center",padding:"13rem"}}>
    <p style={{textAlign:"center",color:"white",fontFamily:"Papyrus",fontSize:"40px"}}>Loading user data...</p></div>);
  }
  return (
    <div className='App'>
    <Navbar handleHome={handleHome} handleGetUsers={handleGetUsers}  />
      {content}
    </div>
  );
};

export default App;
