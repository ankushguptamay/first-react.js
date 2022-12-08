import React from 'react'
import Notes from './Notes';

export default function AddNotes(){

    return(
        <>
        <div className='container'>
            <div className='m-3 text-center'>
                <form>
                    <div className="mb-3">
                        <h5>Title</h5>
                        <input type="text"/>
                    </div>
                    <div className="mb-3">
                        <h5>Note</h5>
                        <input type="text"/>
                    </div>
                    <button className="btn btn-outline-info mx-2" type="submit">Add Note</button>
                </form>
            </div>
        <hr/>
        <Notes />
        </div>
        </>
        
    );
}
