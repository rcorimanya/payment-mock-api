
const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/payment-process', (req, res) => {
  const { accountId, amount } = req.body;

  if (!accountId || !amount) {
    return res.status(400).json({ error: 'enter the required fields' });
  }

  const idTransaccion = uuidv4();
  

  res.status(200).json({ idTransaccion });
});

app.listen(port, () => {
  console.log(`server is running in http://localhost:${port}`);
});