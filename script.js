const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let viewerCount = 0;

app.get('/viewers', (req, res) => {
    res.json({ count: viewerCount });
});

app.post('/viewers', (req, res) => {
    if (req.body.increment) {
        viewerCount += req.body.increment;
    }
    res.status(200).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
