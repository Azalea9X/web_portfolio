const express = require("express");
const app = express();
app.use(express.json());
// server.js

const { getNotes, getNote, createNote } = require('./database.js');

// Use the functions
getNotes()
  .then(notes => {
    console.log(notes);
  });

  getNote(2).then(note => {
    console.log(note); 
  })

app.get("/notes", async (req, res) => {
  try {
    const notes = await getNotes();
    res.send(notes);
  } catch (err) {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.get("/createNote", (req, res) => {
  try {
    res.render("addNotes.ejs"); 
  } catch (err) {
    res.status(500).send("Error rendering view");
  }
});

app.post('/notes', async (req, res) => {
  try {
    const { title, content } = [req.body.title, req.body.content]; // Destructure both properties
    
    const note = await createNote(title, content);
    res.status(201).send(note);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err.message });
  }
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});
