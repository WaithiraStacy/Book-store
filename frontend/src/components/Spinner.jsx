import React from 'react';

const Spinner = () => {
  return (
    <>
      <style>{`
        .spinner {
          width: 4rem;
          height: 4rem;
          margin: 2rem;
          border-radius: 9999px;
          background-color: #0284c7; /* sky-600 */
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>

      <div className="spinner"></div>
    </>
  );
};

export default Spinner;