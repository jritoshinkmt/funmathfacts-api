const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint to access fun facts randomly
app.get('/api/funfacts', (req, res) => {
  fs.readFile('./funfacts.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Failed to load facts." });
    }
    const funFacts = JSON.parse(data);
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    res.status(200).json(randomFact);
  });
});

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
