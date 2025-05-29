import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <>
      <style>{`
        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
          padding: 1rem;
        }

        @media (min-width: 640px) {
          .books-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .books-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1280px) {
          .books-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <div className="books-grid">
        {books && books.length > 0 ? (
          books.map((item) => <BookSingleCard key={item._id} book={item} />)
        ) : (
          <p style={{ padding: '1rem', textAlign: 'center', color: '#888' }}>
            No books available.
          </p>
        )}
      </div>
    </>
  );
};

export default BooksCard;