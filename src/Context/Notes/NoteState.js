import React, { useState } from "react";
import NoteContext from "./noteContext";
import axios from 'axios';

const NoteState = (props) => {
    const localHost = 'http://localhost:8080';
    const notesInitial = [];
    const [notes, setNotes] = useState(notesInitial);

    //Add a Note
    const addNote = async (notename, image) => {
        console.log("adding a note")
        //console.log(image);
        const note = {
            "name": notename,
            "image": image,
        };
        await axios({
            method: 'post',
            url: `${localHost}/uploadimages`,
            data: note,
            headers: {
                'content-Type': 'multipart/form-data'
            }
        });
        setNotes(notes.concat(note));
    }

    //Get Notes
    const getNote = async () => {
        const res = await axios({
            method: 'get',
            url: `${localHost}/getallimages`,
            headers: {
                'content-Type': 'application/json'
            }
        });
        if (res.data) {
            console.log("res.data: ", res.data);
            setNotes(res.data);
        } else {
            console.log('get data error')
        }
    }

    // Delete a Note

    const deleteNote = async (id) =>{
        await axios({
            method: 'delete',
            url: `${localHost}/deleteimages/${id}`,
            headers: {
                'content-Type': 'application/json'
            }
        });
        const newNotes = notes.filter((note)=> {return note.id !== id})
        setNotes(newNotes);
    }

    // //Edit a Note
    // const editNote = async (id, notename, image) => {
    //     for (let index = 0; index < notes.length; index++) {
    //         const element = notes[index];
    //         if (element.id === id) {
    //             element.note = notename;
    //             element.image = image;
    //         }
    //     }
    // }

    return (
        <NoteContext.Provider value={{ notes, addNote, getNote, deleteNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
