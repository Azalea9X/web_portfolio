const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser"); // Removed deprecated usage
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

// Use express' built-in parsing middleware instead of body-parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
});

const {
  getTotalPrice,
  getTransaction,
  updateItem,
  getTransactionsByMonth,
  addItem,
} = require("./database.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async (req, res) => {
  const totalPrice = await getTotalPrice();
  const december = await getTransactionsByMonth();

  // Avoid redundant JSON.stringify, directly push objects
  const data = december.map((transaction) => transaction);

  res.render("index", { transactions: { totalPrice, data } }); // Send data as an object
});

app.get("/addItem", async (req, res) => {
  res.render("addItems");
  
});

app.post("/addItem", async (req, res) => {
  const { date, transaction, company, price } = req.body;

  try {
    const item = await addItem(date, transaction, company, price);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.get("/item/:id", async (req, res) => {
  const id = req.params.id;
  res.render("updateFinance", { id: id }); 
});

app.patch("/item/:id", (req, res) => {
  const { company, transaction, price, date } = req.body;
  const id = req.params.id;

  // Update contact table with pool query
  pool.query(
    "UPDATE myBudget SET company = ?, transaction = ?, price = ?, date = ? WHERE id = ?",
    [company, transaction, price, new Date(date), id],
    (error, result) => {
      if (error) {
        throw error;
      }

      // Handle success or perform further actions
    }
  );
});

app.listen(8080, () => console.log("Listening on port 8080"));
