const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

let todos = [
    {
        todo: 'vakna',
        done: false,
        id: 1
    },
    {
        todo: 'ta på kläder',
        done: false,
        id: 2
    },
    {
        todo: 'gör kaffe',
        done: false,
        id: 3
    },
    {
        todo: 'cykla',
        done: false,
        id: 4
    },
    {
        todo: 'badminton',
        done: false,
        id: 5
    },
    {
        todo: 'knarka',
        done: false,
        id: 6
    },
    {
        todo: 'somna',
        done: false,
        id: 7
    },
    {
        todo: 'sola',
        done: false,
        id: 8
    },
    {
        todo: 'spela gitarr',
        done: false,
        id: 9
    },
    {
        todo: 'plocka frukt',
        done: false,
        id: 10
    },
    {
        todo: 'dricka bärs',
        done: false,
        id: 11
    },
    {
        todo: 'disco',
        done: false,
        id: 12
    },
    {
        todo: 'gå med hunden',
        done: false,
        id: 13
    },
    {
        todo: 'städa',
        done: false,
        id: 14
    },
    {
        todo: 'köp snus!',
        done: false,
        id: 15
    },
    {
        todo: 'gå på bio',
        done: false,
        id: 16
    },
    {
        todo: 'gå i kör',
        done: false,
        id: 17
    },
    {
        todo: 'träna hockey',
        done: false,
        id: 18
    },
    {
        todo: 'koda',
        done: false,
        id: 19
    },
    {
        todo: 'köra barnen till dagis',
        done: false,
        id: 20
    },
    {
        todo: 'boka flyg',
        done: false,
        id: 21
    },
    {
        todo: 'fixa pass',
        done: false,
        id: 22
    },
    {
        todo: 'klippa gräset',
        done: false,
        id: 23
    },
    {
        todo: 'laga punkan på cykeln',
        done: false,
        id: 24
    },
    {
        todo: 'simma',
        done: false,
        id: 25
    },
    {
        todo: 'köp flingor',
        done: false,
        id: 26
    },
    {
        todo: 'ringa mamma',
        done: false,
        id: 27
    },
    {
        todo: 'lyssna på musik',
        done: false,
        id: 28
    },
    {
        todo: 'renovera garaget',
        done: false,
        id: 29
    },
    {
        todo: 'byta batterier på musen',
        done: false,
        id: 30
    }
];

let resObj = [];

console.log('original todos:', todos);

app.get('/api/todo', (request, response) => {

    todos.map((todo) => {
        todo.createdAt = Date();
    });

    response.json(todos);

});

app.get('/api/todo/search', (request, response) => {
    const maxResults = request.query.max;
    const result = [];

    for (let i = 0; i < maxResults; i++) {
        result.push(todos[i]);
        todos[i].createdAt = Date();
        todos[i].id = result.length;
    }

    resObj = result;

    response.json(resObj);
    console.log(resObj);
});

app.post('/api/todo', (request, response) => {
    const newTodo = request.body;
    newTodo.id = resObj.length + 1;
    newTodo.createdAt = Date();
    resObj.push(newTodo);

    response.json(resObj);
    // console.log('POST', todos);
});

app.delete('/api/todo/:id', (request, response) => {
    const chosenTodo = request.params.id;

    let filteredTodos = resObj.filter(todo => todo.id != chosenTodo);
    
    let index = 1; 

    filteredTodos.map((todo) => {
        todo.id = index;
        index ++;
    });

    resObj = filteredTodos

    response.json(resObj);
    // console.log('DELETE:', todos);
});

app.listen(PORT, () => {
    console.log(`SERVER STARTAD! port: ${PORT}`);
});