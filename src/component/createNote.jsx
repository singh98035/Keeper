import { useState } from "react";
import "./head.css";

function CreateNote(props)
{
    const [note , setNote] = useState(
        {
        title: "",
        content: ""
        }
    );


    function hnadleChange(event)
    {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
              ...prevNote,
              [name]: value
            };
          });
    }

    function submitNote(event)
    {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
          });
        event.preventDefault();
    }
    return <div>
        <form>
            <input 
            name = "title" 
            placeholder = "Title" 
            value = {note.title} 
            onChange = {hnadleChange}  />
            <textarea name="content" 
            rows="5"
           placeholder = "Take a Note ...."
           onChange = {hnadleChange}
           value = {note.content}
           />
           <button onClick = {submitNote}>Add</button>
        </form>
    </div>

}


export  default CreateNote;