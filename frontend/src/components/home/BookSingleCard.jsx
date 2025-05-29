import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="card">
        <h2 className="publish-year-badge">{book.publishYear}</h2>
        <h4 className="book-id">{book._id}</h4>

        <div className="info-row">
          <PiBookOpenTextLight className="icon" />
          <h2 className="book-title">{book.title}</h2>
        </div>

        <div className="info-row">
          <BiUserCircle className="icon" />
          <h2 className="book-author">{book.author}</h2>
        </div>

        <div className="action-row">
          <BiShow
            className="action-icon show"
            onClick={() => setShowModal(true)}
          />
          <Link to={`/books/details/${book._id}`}>
            <BsInfoCircle className="action-icon info" />
          </Link>
          <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className="action-icon edit" />
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className="action-icon delete" />
          </Link>
        </div>
      </div>

      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}

      <style>{`
        .card {
          border: 2px solid #6b7280;
          border-radius: 10px;
          padding: 1rem;
          margin: 1rem 0;
          position: relative;
          transition: box-shadow 0.3s ease;
          background-color: #fff;
          display: flex;
          flex-direction: column;
        }

        .card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .publish-year-badge {
          position: absolute;
          top: 0.5rem;
          right: 0.75rem;
          padding: 0.25rem 0.75rem;
          background-color: #fca5a5;
          border-radius: 8px;
          font-size: 0.875rem;
        }

        .book-id {
          margin: 0.5rem 0;
          color: #6b7280;
          font-size: 0.875rem;
          word-break: break-word;
        }

        .info-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0.5rem 0;
          flex-wrap: wrap;
        }

        .icon {
          font-size: 1.5rem;
          color: #fca5a5;
        }

        .book-title,
        .book-author {
          margin: 0;
          font-size: 1.125rem;
          word-break: break-word;
        }

        .action-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        .action-icon {
          font-size: 1.5rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .action-icon.show { color: #1e40af; }
        .action-icon.info { color: #065f46; }
        .action-icon.edit { color: #ca8a04; }
        .action-icon.delete { color: #dc2626; }

        .action-icon:hover {
          color: #000;
        }

        @media (max-width: 480px) {
          .book-title, .book-author {
            font-size: 1rem;
          }
          .card {
            padding: 0.75rem;
          }
          .publish-year-badge {
            font-size: 0.75rem;
            padding: 0.2rem 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default BookSingleCard;