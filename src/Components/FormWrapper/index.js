import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormWrapper = ({ children, onSubmit }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async e => {
    try {
      e.preventDefault();
      await onSubmit();
      setSuccess(true);
    } catch (err) {
      setError(err && err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      {success && <p>Success!</p>}
      {children}
    </form>
  );
};

FormWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onSubmit: PropTypes.func
};

export default FormWrapper;
