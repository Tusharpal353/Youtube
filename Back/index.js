const express = require('express');
const cors = require("cors")
const app = express();
app.use(cors())
app.get('/', async (req, res) => {
  const query = req.query.q;

  const url = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data[1]);
    
    res.json(data[1]);
  } catch (error) {
    res.status(500).send('Error fetching suggestions');
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
