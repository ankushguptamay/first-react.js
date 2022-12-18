
import React, { useEffect, useContext } from 'react'
import './Notes.css';
import noteContext from '../../Context/Notes/noteContext';

export default function MyNotes() {
    const { notes, getNote, deleteNote } = useContext(noteContext);

    const localHost = 'http://localhost:8080';

    useEffect(() => {
        getNote()
        // eslint-disable-next-line 
    }, [])

    return (
        <>
            <h3>My Notes</h3>
            <div className='container d-flex flex-wrap'>
                {
                    notes.length > 0 ? notes.map((el) => {
                        return (
                            <>
                                <div className="card m-2 text-center">
                                    <div className="card-body">
                                        <img src={`${localHost}/uploads/${el.image}`} className="card-img-top" alt="Not found" />
                                        {/* <p className="note">{el.name.replace(/<[^>]*>?/gm)}</p> */}
                                        <p className="note">{el.name}</p>
                                        <button className="btn btn-outline-warning mx-2" type="submit" onClick={() => { deleteNote(el.id) }}>Delete</button>
                                        <button className="btn btn-outline-warning mx-2" type="submit">Update</button>
                                    </div>
                                </div>
                            </>
                        )
                    }) : ""
                }
            </div>
        </>
    )
}