require('dotenv').config
const express = require('express');
const cors = require('cors');
const path = require('path');

const contactRouter = require('./routes/contactRoutes')

const app = express();

app.use(express.json());
app.use(cors())
app.use('/', contactRouter);


app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});



const port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log(`server listing to port ${port}`)
});
