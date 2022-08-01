const express = require('express');

require('dotenv').config();

const app = express();

app.listen(process.env.PORT);

let courses = [{
    id: 1,
    name: 'Software Engineering'
    },
    {
        id: 2,
        name: 'Web Development'
    },
    {
        id: 3,
        name: 'Database Management'
    },
    {
        id: 4,
        name: 'Duck Duck Goose'
    }
];

app.get('/', (req, res) => {
    res.json(courses);
});

app.get('/:id', (req, res) => {
    if(req.params.id >  courses.length){
        res.send(
            `<h1>There is no record with this id</h1>`
        )
    }else{
        res.send(JSON.stringify(courses[req.params.id - 1]))
    }
});
