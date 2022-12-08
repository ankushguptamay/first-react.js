import React, { useContext, useState } from 'react'
import Notes from './Notes';
import noteContext from '../../Context/Notes/noteContext';

export default function AddNotes() {
    const { addNote } = useContext(noteContext);
    const [note, setNote] = useState({ notename: "" });
    const [image, setImage] = useState({ image: "" });
    const handkeClick = (e) => {
        e.preventDefault();
        addNote(note.notename, image.image);
    }
    const changeNote = (e) => {
        console.log(e.target.value );
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const changeImage = (e) => {
        console.log(e.target.files[0] );
        setImage({ ...image, [e.target.name]: e.target.files[0] })
    }

    return (
        <>
            <div className='container'>
                <div className='m-3 text-center'>
                    <form className="mt-4" encType="multipart/form-data">
                        <div className="form-group">
                            <label htmlFor="note" className="col-sm-2 col-form-label">Note:</label>
                            <input type="text" name="notename" id="note" onChange={changeNote} />
                            <label htmlFor="input-files" className="col-sm-2 col-form-label">Image:</label>
                            <input type="file" name="image" id="input-files" onChange={changeImage} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handkeClick}>AddNote</button>
                    </form>
                </div>
                <hr />
                <Notes />
            </div>
        </>
    );
}
