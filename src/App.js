import React, { useState } from 'react';

import "./index.css";
import Header from "./component/Header";
import Footer from './component/Footer';
import Note from "./component/Note";
import Data from "./component/data"
import CreateNote from "./component/createNote"; 


function App() {

const [notes , setNote] = useState([]);

function addNote(note)
{
     setNote (prevNotes =>
        {
            
            return    [...prevNotes, note];

           
        });
}

function deleteNote(id) {

    setNote (prevNotes =>
        {
          return  prevNotes.filter((noteItem, index) =>
            {
                return index !== id;
            });
        });
}

  return  (<div>
      <Header />
      <CreateNote 
      onAdd = {addNote} />
      { notes.map((noteItem , index) =>
        {
            return (
            <Note key={index}
            id={index}
             title = {noteItem.title} 
             content = {noteItem.content} 
             onDelete = {deleteNote}/>
            );
        }) }
      <Footer />
  </div>
  );
}

/*function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  ); */

export default App;
