import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.error(error);
      });
  };

  return (
    <div style={{ padding: '16px' }}>
      <style>
        {`
          .delete-heading {
            font-size: 24px;
            margin: 16px 0;
            text-align: center;
          }
          .delete-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 2px solid #38bdf8;
            border-radius: 10px;
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
            padding: 32px;
          }
          .delete-text {
            font-size: 20px;
            margin-bottom: 24px;
            text-align: center;
          }
          .delete-button {
            padding: 12px;
            background-color: #dc2626;
            color: white;
            width: 100%;
            border: none;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
          }
          .delete-button:hover {
            background-color: #b91c1c;
          }
          .spinner-wrapper {
            display: flex;
            justify-content: center;
            margin-bottom: 16px;
          }
        `}
      </style>

      <BackButton />
      <h1 className="delete-heading">Delete Book</h1>
      {loading && (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      )}
      <div className="delete-container">
        <h3 className="delete-text">Are you sure you want to delete this book?</h3>
        <button className="delete-button" onClick={handleDeleteBook}>
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
