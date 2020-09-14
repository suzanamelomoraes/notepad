import React from 'react';

const Note = ({ title, body }) => {

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Note;
