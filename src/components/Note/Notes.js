import React, { useContext } from 'react'
//import './Notes.css';
import noteContext from '../../Context/Notes/noteContext';
import MyNotes from './MyNotes';

export default function Notes(props){
    const { notes } = useContext(noteContext);
    return(
            <div className='container my-3'>
                <h2> My Notes</h2>
                {notes.map((note) => {
                    return <MyNotes note={note}/>;
                })}
            </div>

    );
}