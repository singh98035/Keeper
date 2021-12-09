import React from 'react';
import reactDom from 'react-dom';
import "./index.css";
import Header from "./component/Header";
import Footer from './component/Footer';
import Note from "./component/Note";
import Data from "./component/data"
import CreateNote from "./component/createNote"; 
import App from "./App";

function createN(note)
{
return <Note 
Key = {note.id}
title = {note.title}
content = {note.content}
/>
}
reactDom.render(
<div>
  <App />
</div>,document.getElementById("root"));