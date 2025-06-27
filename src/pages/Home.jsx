import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../pages/Home.css'

const Home = () => {
    const { userEmail } = useContext(AuthContext);

  const navigate = useNavigate()
   
  const logout = ()=>{
      navigate('/')
  }
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="home-wrapper">
      <div className="home-card">
        <h1>WELCOME, <span style={{color:'red'}}>{userEmail}!</span></h1>
        <p className="date">Today is {currentDate}</p>

        <div className="quick-links">
          <button>👤 Profile</button>
          <button>⚙️ Settings</button>
          <button>📊 Dashboard</button>
        </div>

        <div className="stats">
          <p><strong>• Total Logins:</strong> 12</p>
          <p><strong>• Posts Created:</strong> 8</p>
          <p><strong>• Last Login:</strong> June 25, 2025</p>
        </div>

        <div className="quote">
          <p>"The best way to get started is to quit talking and begin doing."</p>
          <span>– Walt Disney</span>
        </div>

        <button className="logout-button" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};



export default Home;
