import React, { useContext } from 'react'
import noteContext from '../../Context/Notes/noteContext';
import MyNotes from './MyNotes';

export default function Notes(props) {
    const { notes, addNote } = useContext(noteContext);
    return (
        <div className='row my-3'>
            <h2> My Notes</h2>
            {notes.map((note) => {
                return <MyNotes note={note} />;
            })}
        </div>

    );
}