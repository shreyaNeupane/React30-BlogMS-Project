import React from 'react'
import From from './components/From/From'

const Login = () => {
  const handleLogin = (data) => {
    console.log(data, "Inside handle login");
  };
  return (
   
<From type='Login' onSubmit={handleLogin}/>

  )
}

export default Login
