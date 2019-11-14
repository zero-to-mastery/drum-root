import React, { useState } from "react";

const FormWrapper = ({ children, onSubmit }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async e => {
    try {
      console.log("trying");
      e.preventDefault();
      await onSubmit();
      setSuccess(true);
    } catch (e) {
      setError(e && e.message);
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

export default FormWrapper;
