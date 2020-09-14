import React from 'react';
import { useParams } from 'react-router-dom';

const Note = ({ notes }) => {
  let { id } = useParams();
  let ID = Number(id);

  const noteToDisplay = notes.find((note) => note.id === ID);

  return (
    <div>
      <h3>{noteToDisplay.title}</h3>
      <p>{noteToDisplay.body}</p>
    </div>
  );
};

export default Note;
