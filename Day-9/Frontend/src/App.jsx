import { useState, useEffect } from 'react'
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  function fetchNotes(){
    axios.get('https://beginner-web-projects-series.onrender.com/api/notes')
      .then(res => {
        setNotes(res.data.note);
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function handleSubmit(e){
    e.preventDefault();
    const { title, description } = e.target.elements;

    axios.post('https://beginner-web-projects-series.onrender.com/api/notes', {
      title: title.value,
      description: description.value
    })
    .then(res => {
      fetchNotes();
    });
  }

  function handleDelete(noteId){
    axios.delete('https://beginner-web-projects-series.onrender.com/api/notes/' + noteId)
      .then(res => {
        fetchNotes();
      });
  }

  return (
    <>
      <form className='note-create-form' onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder='Enter Title:' />
        <input name="description" type="text" placeholder='Enter Description:' />
        <button>Create Node</button>
      </form>

      <div className="notes">
        {
          notes.map((note, index) => (
            <div className="note" key={index}>
              <h1>{note.title}</h1>
              <h2>{note.description}</h2>
              <button onClick={() => handleDelete(note._id)}>Delete</button>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
