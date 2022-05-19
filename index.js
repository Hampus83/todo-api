const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());

let todos = [
    {
        todo: 'vakna',
        done: false,
    },
    {
        todo: 'ta på kläder',
        done: false,
    },
    {
        todo: 'gör kaffe',
        done: false,
    }
];

let index = 1 

todos.map((todo) => {
    todo.id = index;
    index ++;
    return todo;
});

console.log('original todos:', todos);

app.get('/api/todo', (request, response) => {

    todos.map((todo) => {
        todo.createdAt = Date();
        return todo;
    });

    response.json(todos);
    console.log('GET', todos)
});

app.post('/api/todo', (request, response) => {
    const todo = request.body;
    todo.id = todos.length + 1;
    todo.createdAt = Date();
    todos.push(todo);

    response.json(todos);
    console.log('POST', todos);
});

app.delete('/api/todo/:id', (request, response) => {
    const chosenTodo = request.params.id;

    let filteredTodos = todos.filter(todos => todos.id != chosenTodo)
    
    let index = 1; 

    filteredTodos.map((todo) => {
        todo.id = index;
        index ++;
        return todo;
    });

    todos = filteredTodos

    response.json(todos);
    console.log('DELETE:', todos);
});

app.listen(PORT, () => {
    console.log(`SERVER STARTAD! port: ${PORT}`);
});