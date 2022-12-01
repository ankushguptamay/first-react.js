import React, { useContext } from 'react'
import NoteContext from '../../Context/Notes/noteContext';

console.log(NoteContext);

export default function MyNotes(){
    const { notesInitial } = useContext(NoteContext.notesInitial);
    return(
        <div className='container'>
            <div className='m-3 text-center'>
                <form>
                    <div className="mb-3">
                        <h5>Product Name</h5>
                        <input type="text"/>
                    </div>
                    <div className="mb-3">
                        <h5>Massage</h5>
                        <input type="text"/>
                    </div>
                    <button className="btn btn-outline-info mx-2" type="submit">Add Note</button>
                </form>
            </div>
            <div className='container my-3'>
                <h2> My Notes</h2>
                {notesInitial.map((note) => {
                    return note.title;
                })}
            </div>
        </div>
        
    );
}
