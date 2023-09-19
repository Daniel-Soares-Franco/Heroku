const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<span style="color: #f00;">Hello World!</span>')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("listening on port " + PORT);
})
