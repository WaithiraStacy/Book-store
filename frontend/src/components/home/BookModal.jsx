import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';

const BookModal = ({ book, onClose }) => {
  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-content"
          onClick={(event) => event.stopPropagation()}
        >
          <AiOutlineClose className="close-icon" onClick={onClose} />
          <h2 className="publish-year">{book.publishYear}</h2>
          <h4 className="book-id">{book._id}</h4>

          <div className="info-row">
            <PiBookOpenTextLight className="icon" />
            <h2 className="book-title">{book.title}</h2>
          </div>

          <div className="info-row">
            <BiUserCircle className="icon" />
            <h2 className="book-author">{book.author}</h2>
          </div>

          <p className="description-header">Anything you want to show</p>
          <p className="description-text">
            Make sure to read this book. It has good content.
          </p>
        </div>
      </div>

      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 50;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
          }

          .modal-content {
            width: 90%;
            max-width: 600px;
            height: auto;
            max-height: 90vh;
            overflow-y: auto;
            background-color: white;
            border-radius: 12px;
            padding: 16px;
            position: relative;
            display: flex;
            flex-direction: column;
          }

          .close-icon {
            position: absolute;
            top: 24px;
            right: 24px;
            font-size: 24px;
            color: red;
            cursor: pointer;
          }

          .publish-year {
            background-color: #fca5a5;
            padding: 4px 12px;
            border-radius: 8px;
            width: fit-content;
          }

          .book-id {
            margin: 8px 0;
            color: #6b7280;
          }

          .info-row {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .icon {
            font-size: 24px;
            color: #fca5a5;
          }

          .book-title,
          .book-author {
            margin: 4px 0;
            font-size: 1.25rem;
          }

          .description-header {
            margin-top: 16px;
            font-weight: bold;
          }

          .description-text {
            margin-top: 8px;
            line-height: 1.5;
          }

          @media (max-width: 768px) {
            .modal-content {
              padding: 12px;
            }

            .close-icon {
              top: 16px;
              right: 16px;
              font-size: 20px;
            }

            .book-title,
            .book-author {
              font-size: 1rem;
            }

            .description-header {
              font-size: 1rem;
            }

            .description-text {
              font-size: 0.95rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default BookModal;