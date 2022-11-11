// import use state
import React, { useState, useEffect } from "react";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

// import canister for connecting with Motoko
import { dkeeper_backend } from "../../../declarations/dkeeper_backend";

function App() {
  // use useState hook to track the state in the addNote and deleteNote function
  // const[current state, update function] = useState(initialize state);
  const [notes, setNotes] = useState([]);

  // add Note function : set the new note in array
  function addNote(newNote) {
    setNotes((prevNotes) => {
      // create note to backend
      dkeeper_backend.createNote(newNote.title, newNote.content)
      return [newNote, ...prevNotes]; // add newNote in exisiting array
    }); // ... spread operator: ...prevNotes copy of existing array
  }

  // useEffect to keep fetch data 
  useEffect(() => {
    console.log("useEffect is triggered");
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await dkeeper_backend.readNotes();
    setNotes(notesArray);
  };

  // delete Note function : set the note that filter out the noy matched id item in the array
  function deleteNote(id) {
    dkeeper_backend.removeNote(id);
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
        // use map function and Note component to
        // displat the each Note
        // map function: create a new array populated with a result of calling a provided function
        // on every element in the calling array
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
  );
}

export default App;
