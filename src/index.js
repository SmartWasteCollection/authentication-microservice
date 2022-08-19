const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const { createServer } = require('http');

require('dotenv').config();

global.appRoot = path.resolve(__dirname);

const PORT = 3002;

app.use(cors());
app.use(express.json());
app.use('/static', express.static(__dirname + '/public'));

mongoose.connect(process.env.URI_MONGO_DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (e) => e == null ? console.log('Connected to mongoDB') : console.log('ERROR on connection: ' + e));


app.get('/', (req, res) => {
    res.status(200).send('Hello!');
});

app.use((req, res) => res.status(404).send({ url: req.originalUrl + ' not found' }));

const httpServer = createServer(app);
httpServer.listen(PORT, () => console.log('Node API server started on port '+PORT) );

module.exports = app;
