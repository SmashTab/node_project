const express = require('express');
const app = express();
const port = 3001;
const address = 'localhost';
const users = require('./DB/users.json');

app.listen(port, address, function() {
    console.log(`Server is started on ${port}!!`);
})

app.get('/', function(req, res) {
    let link = `
        <a href="/users">All users</a>
        <a href="/user/1">User #1</a>
    `;
    res.end(link);
})

app.get('/users', function(req, res) {
    let parsedUsers = JSON.stringify(users);
    res.end(parsedUsers);
})

app.get('/user/:id', function(req, res) {
    let id = req.params.id;
    console.log('id', id);
    let user = users[id];
    let result = `
        <div>Name: ${user.name}</div>
        <div>Age: ${user.age}</div>
        <div>Job: ${user.job}</div>
        <div>Status: ${user.status}</div>
    `;
    res.end(result);
})