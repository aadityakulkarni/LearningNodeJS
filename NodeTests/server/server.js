const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.status(200).send('Hello World!');
    res.status(404).send({
        error: 'Page not found.',
        name: 'Testing app v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {name: 'Aaditya', age: 25},
        {name: 'Aadi', age: 40},
        {name: 'Kulkarni', age: 35}
    ]);
})

app.listen(3000, () => {
    console.log('Server started');
});

module.exports.app = app;