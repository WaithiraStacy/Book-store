import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
        setPublishYear(response.data.publishYear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      });
  }, [id]);

  const handleEditBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className="edit-container">
      <style>{`
        .edit-container {
          padding: 16px;
          font-family: Arial, sans-serif;
        }

        .edit-title {
          font-size: 24px;
          margin: 16px 0;
          text-align: center;
        }

        .edit-form {
          display: flex;
          flex-direction: column;
          max-width: 600px;
          width: 100%;
          margin: 0 auto;
          padding: 16px;
          border: 2px solid #38bdf8;
          border-radius: 12px;
        }

        .edit-field {
          margin: 16px 0;
        }

        .edit-field label {
          font-size: 18px;
          margin-bottom: 8px;
          color: #555;
          display: block;
        }

        .edit-input {
          padding: 8px;
          font-size: 16px;
          border: 2px solid #888;
          border-radius: 4px;
          width: 100%;
        }

        .edit-button {
          margin-top: 24px;
          padding: 12px;
          background-color: #7dd3fc;
          border: none;
          font-size: 16px;
          cursor: pointer;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        .edit-button:hover {
          background-color: #38bdf8;
        }

        .spinner-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 16px;
        }
      `}</style>

      <BackButton />
      <h1 className="edit-title">Edit Book</h1>
      {loading && (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      )}
      <div className="edit-form">
        <div className="edit-field">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="edit-input"
          />
        </div>
        <div className="edit-field">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="edit-input"
          />
        </div>
        <div className="edit-field">
          <label>Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="edit-input"
          />
        </div>
        <button className="edit-button" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;