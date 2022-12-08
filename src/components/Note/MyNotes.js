import React from 'react'
//import './Notes.css';

export default function MyNotes(props){

    const { note } = props;
    return(
        <div className="card m-3 text-center">
            <div className="card-body">
                <h5 className="title">{note.title}</h5>
                <p className="note">{note.note}</p>
                <button className="btn btn-outline-warning mx-2" type="submit">Delete</button>
                <button className="btn btn-outline-warning mx-2" type="submit">Update</button>
            </div>
        </div>
    );
}