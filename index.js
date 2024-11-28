const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.get('/shout', (req, res) => {
  let name = req.query.name;
  name = name.toUpperCase();
  res.send(name);
});

app.get('/fullname', (req, res) => {
  let fname = req.query.firstName;
  let lname = req.query.lastName;
  const fullName = `${fname} ${lname}`;
  res.send(fullName);
});

app.get('/date', (req, res) => {
  let month = req.query.Month;
  let year = req.query.Year;
  const formateddDate = `${month}, ${year}`;
  res.send(formateddDate);
});

app.get('/greet', (req, res) => {
  let name = req.query.name;
  
  const greetedMessage = `Namste, ${name}`;
  res.send(greetedMessage);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
