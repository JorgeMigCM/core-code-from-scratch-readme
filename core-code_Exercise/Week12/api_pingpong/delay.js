import express from "express";
const app = express();
const port = 3000;

app.get('/api/delay/:delay?', (req, res) => {
  const delay = parseInt(req.params.delay) || 5000;
  setTimeout(() => {
    res.send({response: "Delayed response"});
  }, delay);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});