// import React, { useContext, useEffect } from 'react'
// import noteContext from '../../Context/Notes/noteContext';
// import MyNotes from './MyNotes';

// export default function Notes() {
//     const { notes, getNote } = useContext(noteContext);
//     console.log(getNote())
//     useEffect(()=>{
//         getNote()
//     },[])
//     return (
//         <div className='row my-3'>
//             <h2> My Notes</h2>
//             {notes.map((note) => {
//                 return <MyNotes note={note}/>;
//             })}
//         </div>

//     );
// }