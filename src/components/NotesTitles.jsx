import React from 'react';

const NotesTitles = ({ notes }) => {
  const noteTitles = notes.map((note) => <p key={note.id} >{note.title}</p>);

  return <div>{noteTitles}</div>;
};

export default NotesTitles;
