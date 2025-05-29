import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <>
      <style>{`
        .back-button-wrapper {
          display: flex;
        }

        .back-button {
          background-color: #075985; /* sky-800 */
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 0.5rem;
          width: fit-content;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .back-button:hover {
          background-color: #0e7490; /* sky-700 */
        }

        .back-icon {
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
      `}</style>

      <div className="back-button-wrapper">
        <Link to={destination} className="back-button" aria-label="Go back">
          <BsArrowLeft className="back-icon" />
          {/*  <span>Back</span> */}
        </Link>
      </div>
    </>
  );
};

export default BackButton;