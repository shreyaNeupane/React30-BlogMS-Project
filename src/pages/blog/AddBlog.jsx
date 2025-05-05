import React from 'react'
import Layout from '../../components/layout/Layout'
import Form from  './components/Form/Form';
import axios from 'axios';
import { baseUrl } from '../../config';
 


const AddBlog = () => {
  const handleCreateBlog = async (data) => {
     const response = await axios.post(`${baseUrl}/blog` ,data,{
      headers: {
        "Content-Type" : "multipart/form-data"
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
