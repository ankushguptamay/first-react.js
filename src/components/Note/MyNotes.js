import React, { useContext } from 'react'
import noteContext from '../../Context/Notes/noteContext';

export default function MyNotes(props) {
    const { deleteNote } = useContext(noteContext);
    const { note } = props;

    return (
        <div className="card m-3 text-center">
            <div className="card-body">
                <img src="logo192.png" className="card-img-top" alt="..." />
                <p className="note">{note.note}</p>
                <button className="btn btn-outline-warning mx-2" type="submit" onClick={() => deleteNote(note.id)}>Delete</button>
                <button className="btn btn-outline-warning mx-2" type="submit">Update</button>
            </div>
        </div>
    );
}