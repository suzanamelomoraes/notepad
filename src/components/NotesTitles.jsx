import React from 'react';
import { Link } from 'react-router-dom';

const NotesTitles = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => (
        <Link to={`/note/${note.id}`}>
          <p>{note.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default NotesTitles;
