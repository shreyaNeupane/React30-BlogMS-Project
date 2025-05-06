import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from  './components/Form/Form';
import axios from 'axios';
import { baseUrl } from '../../config';
// import { useNavigate } from 'react-router-dom';
 


const AddBlog = () => {
  // const navigate= useNavigate() 
  const handleCreateBlog = async (data) => {
   
     const response = await axios.post(`${baseUrl}/blog` ,data,{
      headers: { 
        "Content-Type" : "multipart/form-data" ,
        "Authorization" : localStorage.getItem('token')
      }
     })
   
}
  return (
    <Layout>
    <Form type='Create' onSubmit ={handleCreateBlog} />
    </Layout>
  );
}

export default AddBlog
