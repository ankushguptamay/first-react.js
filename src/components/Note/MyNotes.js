import React from 'react'
//import './Notes.css';

export default function MyNotes(props){

    const { note } = props;
    return(
        <div>
            {note.title}
            {note.note}
        </div>
    );
}