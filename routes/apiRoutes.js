// imported properties
const api = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const dbPath = './db/db.json';

api.get('/api/notes', async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync(dbPath,'utf8'));
  res.json(dbJson);
});

api.post('/api/notes',  (req, res) => {
    // Read the existing notes from the db.json file
    const notes = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
    
    // Create a new note object with a unique ID
    const newNote = {
      id: uuidv4(),
      title: req.body.title,
      text: req.body.text,
    };
  
    // Add the new note to the notes array
    notes.push(newNote);
  
    // Write the updated notes array to the db.json file
    fs.writeFileSync(dbPath, JSON.stringify(notes));
  
    // Send a response with the new note object
    res.json(newNote);
    console.log(newNote);
  });
  //method to delete selected notes from the db
api.delete('/api/notes/:id', (req, res) =>{
  // Reads the existing notes from the db.json file
  let data = fs.readFileSync("db/db.json", "utf8");

  const dataJSON =  JSON.parse(data);

  const newNotes = dataJSON.filter((note) => { 
    return note.id !== req.params.id;
  });
  fs.writeFileSync("db/db.json",JSON.stringify(newNotes));
  res.json("Note deleted.");
})
  module.exports = api;