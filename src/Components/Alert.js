import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (alert) {
      setVisible(true); // Show alert when it changes
      const timer = setTimeout(() => {
        setVisible(false); // Hide alert after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // Clean up timer on component unmount
    }
  }, [alert]); // Depend on `alert` so effect runs when `alert` changes

  const capitalize = (word) => {
    const low = word.toLowerCase();
    return low.charAt(0).toUpperCase() + low.slice(1);
  };

  return (
    alert && visible && (
      <div
        className={`alert alert-${alert.type} alert-dismissible alert-position fade show`}
        role="alert"
        style={{ 'position': 'fixed',
          'top': '60px', /* Adjust based on your navbar height */
          'right': '10px',
          'z-index': '1050'}}
      >
        <strong>{capitalize(alert.type)}</strong> {alert.msg}
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setVisible(false)}
        ></button>
      </div>
    )
  );
};

Alert.propTypes = {
  alert: PropTypes.object,
};

export default Alert;
