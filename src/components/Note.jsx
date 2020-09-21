import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import EditNote from './EditNote';

const Note = ({ notes, editNote, removeNote }) => {
  let { id } = useParams();
  let ID = Number(id);

  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(true);
  };

  const noteToDisplay = notes.find((note) => note.id === ID);

  return (
    <div>
      <div>
        <h3>{noteToDisplay.title}</h3>
        <p>{noteToDisplay.body}</p>
      </div>
      <div className='buttons'>
        <button className='button' onClick={handleShowForm}>
          Edit note
        </button>
        {showForm && (
          <EditNote editNote={editNote} noteToEdit={noteToDisplay} />
        )}

        <button className='delete' onClick={() => removeNote(noteToDisplay.id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default Note;
