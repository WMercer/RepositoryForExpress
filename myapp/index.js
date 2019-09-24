const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8005, () => {
  console.log('The sample program is listening 8005 port!')
});