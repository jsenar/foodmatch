import { useState } from 'react';

export const useSearchForm = (state, callback) => {
  const [inputs, setInputs] = useState(state);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}