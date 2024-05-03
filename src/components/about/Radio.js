import React from "react";

const Radio = ({ activeTab, classes, currentIndex }) => {
  const placingClasses = classes;
  return (
    <div>
      <div className={`${placingClasses}`}>
        {activeTab === currentIndex ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
            className="bg-white"
          >
            <circle cx="16" cy="16" r="10" fill="#2D6DB2" />
            <path
              fill="#2D6DB2"
              d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
            className="bg-white"
          >
            <path
              fill="#2D6DB2"
              d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Radio;
