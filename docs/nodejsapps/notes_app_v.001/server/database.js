// database.js

const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();

const pool = mysql.createPool({
  host: process.env.host, 
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port
})

async function getNotes() {
  const [rows] = await pool.query("SELECT * FROM notes");
  return rows;
}

async function getNote(id) {
  const [rows] = await pool.query("SELECT * FROM notes WHERE id = ?", [id]);
  return rows[0]; 
}

async function createNote(title, content) {
  const query = "INSERT INTO notes (title, content) VALUES (?, ?)";
  const [rows] = await pool.query(query, [title, content]);
  const newNote = {
    id: rows.insertId,
    title,
    content
  };
  return newNote; // Return the newly created note
}




module.exports = {
  getNotes,
  getNote,
  createNote
};
