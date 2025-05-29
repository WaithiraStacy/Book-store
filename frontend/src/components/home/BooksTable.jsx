import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <>
      <style>{`
        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0.5rem;
          font-family: system-ui, sans-serif;
        }

        th, td {
          border: 1px solid #334155; /* slate-700 */
          border-radius: 6px;
          padding: 8px;
          text-align: center;
          vertical-align: middle;
        }

        th {
          background-color: #f1f5f9;
          font-weight: 700;
        }

        .icon-group {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .text-green {
          color: #166534;
          font-size: 1.5rem;
          transition: color 0.2s ease;
        }

        .text-yellow {
          color: #ca8a04;
          font-size: 1.5rem;
          transition: color 0.2s ease;
        }

        .text-red {
          color: #dc2626;
          font-size: 1.5rem;
          transition: color 0.2s ease;
        }

        /* Hover effect on icons */
        .text-green:hover {
          color: #14532d;
        }
        .text-yellow:hover {
          color: #854d0e;
        }
        .text-red:hover {
          color: #b91c1c;
        }

        @media (max-width: 768px) {
          .hide-on-mobile {
            display: none;
          }
        }
      `}</style>

      <table role="table" aria-label="Books list">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Title</th>
            <th scope="col" className="hide-on-mobile">Author</th>
            <th scope="col" className="hide-on-mobile">Publish Year</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td className="hide-on-mobile">{book.author}</td>
              <td className="hide-on-mobile">{book.publishYear}</td>
              <td>
                <div className="icon-group">
                  <Link
                    to={`/books/details/${book._id}`}
                    aria-label={`View details of ${book.title}`}
                    title="View Details"
                  >
                    <BsInfoCircle className="text-green" />
                  </Link>
                  <Link
                    to={`/books/edit/${book._id}`}
                    aria-label={`Edit ${book.title}`}
                    title="Edit Book"
                  >
                    <AiOutlineEdit className="text-yellow" />
                  </Link>
                  <Link
                    to={`/books/delete/${book._id}`}
                    aria-label={`Delete ${book.title}`}
                    title="Delete Book"
                  >
                    <MdOutlineDelete className="text-red" />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BooksTable;