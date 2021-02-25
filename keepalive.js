const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Static is Alive!'));

app.listen(port, () => console.log(`Static is listening to http://localhost:${port}`));