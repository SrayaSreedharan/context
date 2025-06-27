import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Login.css'
import { AuthContext } from '../context/AuthContext';

const Login = () => {

    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = (e) => {
    e.preventDefault();
      login(email)
      navigate('/home'); 
    
  };
  return (
    <>
    
    <form onSubmit={handleLogin}>
      <h1>LOGIN</h1>
      <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      <button type="submit">Login</button>
    </form>
    </>
  );
};

export default Login
