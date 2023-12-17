const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const axios = require("axios");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE",
  })
);
app.use(express.json());

const pool = mysql.createPool({
  host: process.env.host, 
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port
}).promise(); 




async function getTotalPrice() {

  try {

    


    const [rows]= await pool.query(
      "SELECT SUM(price) AS total FROM myBudget"
    );



 

return rows[0].total;

  } catch (err) {
    console.error(err);
  }

}

async function getTransactionsByMonth() {
  try {
    const query = "SELECT * FROM myBudget WHERE date >= '2023-12-01' AND date <= '2024-12-31'";

    const rows = await pool.query(query); // No need to destructure

    return rows[0]; // Return all rows directly
  } catch (err) {
    console.error(err);
  }
}

 

async function getTransaction(date) {
  const [rows] = await pool.query("SELECT * FROM myBudget WHERE date = ?", [date]);
  return rows[0]; 
}
 


async function addItem(date, transaction, company, price) {

  try {

    // Format date string
    

    // Database query
    const query = 
      "INSERT INTO myBudget (date, transaction, company, price) VALUES (?, ?, ?, ?)";

    await pool.query(query, [
      date,
      transaction, 
      company,
      price
    ]);

    console.log("Item added successfully");

  } catch (error) {
    console.error("Error adding item: ", error);
    throw error;
  }

}

async function updateItem(id, date, transaction, company, price) {

  // Add placeholder variables
  const dateValue = date 
  const transactionValue = transaction;

  try {

    const query = `
      UPDATE myBudget 
      SET date=?, transaction=?, company=?, price=?  
      WHERE id=?
    `;

    await pool.query(query, [
      dateValue,
      transactionValue,
      company, 
      price,
      id
    ]);

    console.log("Item updated successfully");

  } catch (error) {
    console.error("Error updating item: ", error);
    throw error; 
  }

}




async function formatDate(dateString) {
  const date = new Date(dateString);

  if(isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  return date;
}





module.exports = {
getTotalPrice,
getTransaction,
  addItem, 
  getTransactionsByMonth,
updateItem
};
