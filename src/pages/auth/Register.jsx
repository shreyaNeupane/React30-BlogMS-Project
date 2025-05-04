import React from 'react'
import From from './components/From/From'
const Register = () => {
  const handleRegister = (data) => {
     console.log(data, "Inside handle login");
  }
  return (
    <From type = 'Register' onsubmit={handleRegister} />
  );
}

export default Register
