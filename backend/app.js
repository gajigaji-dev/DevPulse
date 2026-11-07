const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

// Define your routes here
app.get('/', async (req, res) => {
    res.send('Hello World!');
});
