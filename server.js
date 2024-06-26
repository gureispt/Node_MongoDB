require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.emit('Ready')
}).catch( error => console.error(error));

const routes = require('./routes');
const path = require('path');
const myMiddleware = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(myMiddleware);
app.use(routes);


app.on('Ready', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor rodando!');
    });
})