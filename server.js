const express = require('express');

const app = express();

app.use(express.static('./dist/supero-web'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/supero-web/' }),
);

app.listen(process.env.PORT || 8080);