/* this will be the entry point for backend app */

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://balazs:uzUCd0eaGlCHeJjS@cluster0.jzvzy.mongodb.net/<Cluster0>?retryWrites=true&w=majority',
{useNewUrlParser: true}).then(() => console.log('DB connected'))
                        .catch(err => console.error(err));


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
  });

app.listen(5000);