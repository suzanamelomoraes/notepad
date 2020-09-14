import React, { useState } from 'react';

const EditNotes = ({ editNote, noteToEdit }) => {
  const [value, setValue] = useState({
    id: noteToEdit.id,
    title: noteToEdit.title,
    body: noteToEdit.body,
  });
  console.log('note to edit props', noteToEdit);

  const handleInputChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    editNote(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type='text'
            name='title'
            className='input'
            value={value.title}
            placeholder='Title'
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type='text'
            name='body'
            className='input'
            value={value.body}
            placeholder='Note body...'
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input type='submit' className='button' />
        </div>
      </form>
    </div>
  );
};

export default EditNotes;
