import React, { useState, useContext } from 'react'
import MyNotes from './MyNotes';
import noteContext from '../../Context/Notes/noteContext';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AddNotes() {
    const { addNote } = useContext(noteContext);
    const [note, setNote] = useState({ notename: "" });
    const [image, setImage] = useState({ image: "" });
    const handkeClick = (e) => {
        e.preventDefault();
        addNote(note.notename, image.image);
    }

    const changeNote = (e, editor) => {
        const data = editor.getData();
        console.log("data:, ", data);
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    const changeImage = (e) => {
        setImage({ ...image, [e.target.name]: e.target.files[0] })
    }

    return (
        <>
            <div className='container'>
                <div className='m-3 text-center'>
                    <form className="mt-4" encType="multipart/form-data">
                        <div className="form-group">
                            
                            <div>
                            <label htmlFor="note" className="col-sm-2 col-form-label">Note:</label>
                            <CKEditor
                                editor={ ClassicEditor }
                                data=""
                                onReady={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log("event ,",data, event);
                                    setNote({ ...note, [event.name]: data })
                                } }
                                // onChange = {changeNote(e, editor)}
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                            </div>
                            {/* <input type="text" name="notename" id="note" onChange={changeNote} /><br /> */}
                            <label htmlFor="input-files" className="col-sm-2 col-form-label">Image:</label>
                            <input type="file" name="image" id="input-files" onChange={changeImage} />
                        </div>
                        <button type="submit" className="btn btn-primary mx-3" onClick={handkeClick}>Add Local</button>
                        <button type="submit" className="btn btn-primary mx-3" >Add Home</button>
                    </form>
                </div>
                <hr />
                <MyNotes />
            </div>
        </>
    );
}
