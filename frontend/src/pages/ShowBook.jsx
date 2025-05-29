import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="show-book-container">
      <style>{`
        .show-book-container {
          padding: 16px;
          font-family: Arial, sans-serif;
          max-width: 100%;
          box-sizing: border-box;
        }

        .show-title {
          font-size: 28px;
          margin: 16px 0;
          text-align: center;
        }

        .book-details {
          display: flex;
          flex-direction: column;
          border: 2px solid #38bdf8;
          border-radius: 12px;
          width: 600px;
          max-width: 100%;
          padding: 16px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        .book-item {
          margin: 16px 0;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
        }

        .book-label {
          font-size: 18px;
          color: #6b7280;
          font-weight: bold;
          min-width: 140px;
          flex-shrink: 0;
        }

        /* Responsive adjustments */
        @media (max-width: 480px) {
          .show-title {
            font-size: 22px;
          }

          .book-item {
            margin: 12px 0;
            justify-content: flex-start;
          }

          .book-label {
            font-size: 16px;
            min-width: 120px;
          }
        }
      `}</style>

      <BackButton />
      <h1 className="show-title">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="book-details">
          <div className="book-item">
            <span className="book-label">Id:</span>
            <span>{book._id}</span>
          </div>
          <div className="book-item">
            <span className="book-label">Title:</span>
            <span>{book.title}</span>
          </div>
          <div className="book-item">
            <span className="book-label">Author:</span>
            <span>{book.author}</span>
          </div>
          <div className="book-item">
            <span className="book-label">Publish Year:</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="book-item">
            <span className="book-label">Create Time:</span>
            <span>{book.createdAt ? new Date(book.createdAt).toString() : ''}</span>
          </div>
          <div className="book-item">
            <span className="book-label">Last Update Time:</span>
            <span>{book.updatedAt ? new Date(book.updatedAt).toString() : ''}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;