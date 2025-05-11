import React from "react";
import Layout from "../../components/layout/Layout";
import Form from "./components/Form/Form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleEditBlog = async (data) => {
    try {
      const response = await axios.patch(`${baseUrl}/blog/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        navigate(`/blog/${id}`);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <Layout>
      <Form type="Edit" onSubmit={handleEditBlog} />
    </Layout>
  );
};

export default EditBlog;
