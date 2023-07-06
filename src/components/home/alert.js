import React, { useState, useEffect } from "react";

const Alert = ({ show, setShow }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
    if (show) {
      setTimeout(() => {
        setIsVisible(false);
        setShow(false);
      }, 5000);
    }
  }, [show, setShow]);

  return (
    <>
      {isVisible && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
          <span>Submitting form...</span>
        </div>
      )}
    </>
  );
};

export default Alert;
