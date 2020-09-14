import React, { useState } from 'react';
import { Route } from 'react-router-dom';
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
    {
      id: 3,
      title: 'BBQ',
      body: 'BBQ na casa da Maya',
      color: '#ff0000',
      favourite: false,
    },
    {
      id: 4,
      title: 'Test',
      body: 'Programming test with Rowan',
      color: '#ff0000',
      favourite: false,
    },
    {
      id: 5,
      title: 'Running time',
      body: 'Running time at 5pm',
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

  const editNote = (note) => {
    let updatedNote = {};
    updatedNote.id = note.id;
    updatedNote.title = note.title;
    updatedNote.body = note.body;
    updatedNote.color = '#ff0000';
    updatedNote.favourite = true;
    const newNotes = [...notes];
    newNotes.forEach((eachNote, index) =>
      eachNote.id === note.id
        ? newNotes.splice(index, 1, updatedNote)
        : newNotes
    );

    setNotes(newNotes);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <div>
      <Header />
      <Route path='/'>
        <NotesTitles notes={notes} />
      </Route>

      <button onClick={handleShowForm}>Add note</button>
      {showForm && <AddNotes addNote={addNote} notes={notes} />}

      <div className='note'>
        <Route path='/note/:id'>
          <Note notes={notes} editNote={editNote} />
        </Route>
      </div>
    </div>
  );
};

export default Notes;
