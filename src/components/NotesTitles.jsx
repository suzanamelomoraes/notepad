import React from 'react';
import { Link } from 'react-router-dom';

const NotesTitles = ({ notes }) => {
  return (
    <div>
      {notes.map((note) => (
        <p className='titles' key={note.id}>
          <Link className='title' to={`/note/${note.id}`}>
            {note.title}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default NotesTitles;
