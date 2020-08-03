const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const polls = require('./routes/api/polls');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const db = require('./config/keys').mongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database'))
    .catch(err => console.log(err));

app.use('/api/polls', polls);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server stated on port ${port}`));