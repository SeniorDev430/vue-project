const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config.json');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

const port = process.env.PORT || config.port;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});