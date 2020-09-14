import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Note from './Note';
import Header from './Header';
import NotesTitles from './NotesTitles';
import AddNotes from './AddNotes';

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Build a cool App',
      body:
        'create a simple list of notes you can select and simple form that can be used for creating new notes or editing existing ones',
      color: '#ff0000',
      favourite: true,
    },
    {
      id: 2,
      title: 'Write article',
      body:
        'Write the second part of Loan Calculator tutorial and explain React-Hook-Forms features',
      color: '#ff0000',
      favourite: false,
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  const addNote = (note) => {
    let newNote = {};
    newNote.id = uuidv4();
    newNote.title = note.title;
    newNote.body = note.body;
    newNote.color = '#ff0000';
    newNote.favourite = true;
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div>
      <Header />
      <NotesTitles notes={notes} />

      <div className='note'>
        {notes.map((note) => (
          <Note key={note.id} title={note.title} body={note.body} />
        ))}
      </div>
      <button onClick={handleShowForm}>Add note</button>
      {showForm && <AddNotes addNote={addNote} notes={notes} />}
    </div>
  );
};

export default Notes;
