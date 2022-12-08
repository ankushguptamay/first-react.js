import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "id": 9,
            "note": "addition",
            "createdAt": "2022-11-25T11:02:57.000Z",
            "updatedAt": "2022-11-25T11:02:57.000Z"
        },
        {
            "id": 11,
            "note": "minimum",
            "createdAt": "2022-11-25T11:03:13.000Z",
            "updatedAt": "2022-11-25T11:03:13.000Z"
        },
        {
            "id": 19,
            "note": "addition",
            "createdAt": "2022-11-25T11:02:57.000Z",
            "updatedAt": "2022-11-25T11:02:57.000Z"
        },
        {
            "id": 10,
            "note": "minimum",
            "createdAt": "2022-11-25T11:03:13.000Z",
            "updatedAt": "2022-11-25T11:03:13.000Z"
        },
        {
            "id": 91,
            "note": "addition",
            "createdAt": "2022-11-25T11:02:57.000Z",
            "updatedAt": "2022-11-25T11:02:57.000Z"
        },
        {
            "id": 13,
            "note": "minimum",
            "createdAt": "2022-11-25T11:03:13.000Z",
            "updatedAt": "2022-11-25T11:03:13.000Z"
        },
    ];
    //console.log(notesInitial.title);
    const [notes, setNotes] = useState(notesInitial);

    //Add a Note
    const addNote = (notename, image) => {
        console.log("adding a note")
        console.log(image);
        const note = {
            "id": 10,
            "note": notename,
            "image": image,
            "createdAt": "2022-11-25T11:03:13.000Z",
            "updatedAt": "2022-11-25T11:03:13.000Z"
        };
        setNotes(notes.concat(note));
    }

    //Delete a Note

    const deleteNote = (id) => {
        console.log("deleting note with id: "+ id);
        const newNotes = notes.filter((note)=>{return note.id!==id});
        setNotes(newNotes)
    }

    //Edit a Note
    const editNote = () => {

    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote,editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
