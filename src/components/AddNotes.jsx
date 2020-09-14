import React, { useState } from 'react';

const AddNotes = ({ addNote }) => {
  const [value, setValue] = useState({
    title: '',
    body: '',
  });

  const handleInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addNote(value);
    setValue({
      title: '',
      body: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          className='input'
          value={value.title}
          placeholder='Title'
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='body'
          className='input'
          value={value.body}
          placeholder='Note body...'
          onChange={handleInputChange}
        />
        <input type='submit' className='button' />
      </form>
    </div>
  );
};

export default AddNotes;
