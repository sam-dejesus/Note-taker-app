
const API = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const dbPath = './Develop/db/db.json';



// API.get('/api/notes', async (req, res) =>{
  
//   const dbJson = await JSON.parse(fs.readFileSync(dbPath, 'utf8'));
//   res.json(dbJson);
// });
API.get('/api/notes', async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync(dbPath,"utf8"));
  res.json(dbJson);
});

API.post('/api/notes',  (req, res) => {
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

  module.exports = API;