const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! - the Cat is trying to change the Poland  too.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
