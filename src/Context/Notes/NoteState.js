import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
            "id": 9,
            "title": "mathe",
            "note": "addition",
            "createdAt": "2022-11-25T11:02:57.000Z",
            "updatedAt": "2022-11-25T11:02:57.000Z"
        },
        {
            "id": 10,
            "title": "mathe",
            "note": "minimum",
            "createdAt": "2022-11-25T11:03:13.000Z",
            "updatedAt": "2022-11-25T11:03:13.000Z"
        },
    ];
    //console.log(notesInitial.title);
   // const [notes, setNotes] = useState(notesInitial);


    return(
        <NoteContext.Provider value={{notesInitial}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
