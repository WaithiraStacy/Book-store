import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created successfully', { variant: 'success' });
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
          .create-heading {
            font-size: 24px;
            margin: 16px 0;
            text-align: center;
          }
          .form-wrapper {
            border: 2px solid #38bdf8;
            border-radius: 10px;
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
            padding: 16px;
            display: flex;
            flex-direction: column;
          }
          .form-group {
            margin: 16px 0;
          }
          .form-label {
            font-size: 18px;
            color: #6b7280;
            margin-bottom: 8px;
            display: block;
          }
          .form-input {
            width: 100%;
            padding: 8px;
            border: 2px solid #6b7280;
            border-radius: 4px;
            font-size: 16px;
          }
          .save-button {
            padding: 8px 16px;
            background-color: #7dd3fc;
            border: none;
            margin-top: 32px;
            font-size: 16px;
            cursor: pointer;
            align-self: center;
            border-radius: 5px;
            transition: background-color 0.3s;
          }
          .save-button:hover {
            background-color: #38bdf8;
          }
          /* Center spinner */
          .spinner-wrapper {
            display: flex;
            justify-content: center;
          }
        `}
      </style>

      <BackButton />
      <h1 className="create-heading">Create Book</h1>
      {loading && (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      )}
      <div className="form-wrapper">
        <div className="form-group">
          <label className="form-label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="form-input"
          />
        </div>
        <button className="save-button" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;