// const express = require('express');

// const app = express();

// app.get("api/v1",(req, res) => {
//   res.json(
//     {message: 'Testing on Heroku'}
//   )
// });

// app.get("/", (req, res) => {
//   res.json(
//     {
//       message: 'Bienvenido a nuestra app'
//     }
//   )
// }); 

// app.get("/users", (req, res) => {
//   res.json([
//     {
//       firstname: 'Guillermo',
//       lastname: "Salazar",
//       email: "test@mail.com"
//     }
//   ])
// });

// module.exports = app;

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my app"
  });
});

app.get("/api/v1", (req, res) => {
  res.json({
    message: "Testing Heroku Deploy"
  });
});

app.get("/api/v1/users", (req, res) => {
  res.json([
    {
      id: 1,
      firstname: "Academlo",
      lastname: "testing",
      email: "testing@gmail.com"
    }
  ]);
});

module.exports = app;