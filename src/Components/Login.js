import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/Session';


const API_URL = process.env.API_BASE_URL;

function Login(props) {
  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post(API_URL+'/token', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.access_token);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Username or password is incorrect. Please try again.");
    });
  };

  return (
    <div class="login-box">
    <input type="text" {... username} placeholder="Username" /> <br />
    <input type="password" {...password} placeholder="Password" /> <br />
    <small>{error}</small>
      <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;
