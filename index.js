const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

const todos = [
    {
        todo: 'vakna',
        done: false,
        // id: 1
    },
    {
        todo: 'ta på kläder',
        done: false,
        // id: 2
    },
    {
        todo: 'gör kaffe',
        done: false,
        // id: 3
    }
];

fixID();

function fixID() {
    let index = 1 

    todos.map((todo) => {
        todo.id = index;
        index ++;
        todo.createdAt = Date();
        return todo;
    });
    console.log('index(in fixID):', index);
}

console.log('original todos:', todos);

app.get('/api/todo', (request, response) => {
    
    fixID();

    // todos.map((todo) => {
    //     todo.createdAt = Date;
    //     return todo;
    // });

    response.json(todos);
    console.log('GET', todos)
});

app.post('/api/todo', (request, response) => {
    const todo = request.body;
    // todo.id = todos.length + 1;
    todos.push(todo);
    fixID();
    response.json(todos);
    console.log('POST', todos);
});

app.delete('/api/todo/:id', (request, response) => {
    const chosenTodo = request.params.id;

    const filteredTodos = todos.filter(todos => todos.id != chosenTodo)
    
    let index = 1; 

    filteredTodos.map((todo) => {
        todo.id = index;
        index ++;
        return todo;
    });
    response.json(filteredTodos);
    console.log('DELETE:', filteredTodos);
});

app.listen(PORT, () => {
    console.log(`SERVER STARTAD! port: ${PORT}`);
});