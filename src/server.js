const express = require('express');
const app = express();

app.get('/', (req, res) => res.send("Esta é uma resposta de texto."));

app.listen(3333);