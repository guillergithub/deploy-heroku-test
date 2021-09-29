const express = require('express');
require("dotenv").config();

const app = express();

app.get("api/v1",(req, res) => {
  res.json(
    {message: 'Testing on Heroku'}
  )
});

app.get("/", (req, res) => {
  res.json(
    {
      message: 'Bienvenido a nuestra app'
    }
  )
}); 

app.get("/users", (req, res) => {
  res.json([
    {
      firstname: 'Guillermo',
      lastname: "Salazar",
      email: "test@mail.com"
    }
  ])
});

module.exports = app;