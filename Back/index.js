const express = require('express');
const cors = require("cors")
const app = express();
app.use(cors())
app.get('/', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
}
  const url = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }
    const data = await response.json();
    console.log(data[1]);
    
    res.json(data[1]);
  } catch (error) {
    res.status(500).send('Error fetching suggestions');
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
