import React from 'react'
import From from './components/From/From'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const handleRegister = async (data) => {
 try {
    const response = await axios.post(
      "https://react30.onrender.com/api/user/register",
      data
    );

    if (response.status === 201) {
      navigate("/login");
    } else {
      alert("Registration failed");
    }
 } catch (error) {
  alert(error?.response?.data?.message)
 }
  }
  return (
    <From type = 'Register' onSubmit={handleRegister} />
  );
}

export default Register
