import React, { useState } from 'react';
import Note from './Note';
import Header from './Header';
import NotesTitles from './NotesTitles';

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Build a cool todo App',
      body:
        'create a simple list of notes you can select and simple form that can be used for creating new notes or editing existing ones',
    },
    {
      id: 2,
      title: 'Write second article',
      body:
        'Write the second part of Loan Calculator tutorial and explain React-Hook-Forms features',
    },
  ]);

  return (
    <div>
      <Header />
      <NotesTitles notes={notes} />
      {notes.map((note) => (
        <Note key={note.id} title={note.title} body={note.body} />
      ))}
    </div>
  );
};

export default Notes;
