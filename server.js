const app = require('express')();
const port = process.env.API_PORT || 3001;

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => console.log(`running on port ${port}`));
