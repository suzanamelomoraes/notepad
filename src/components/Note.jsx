import React from 'react';

const Note = ({ title, body }) => {
  console.log('title', title);
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Note;
