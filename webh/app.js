const http = require('http');
const fs = require('fs');
const Router = require('./router')
const PORT = 3000;
const HOST = 'localhost';

let rout = new Router();

let server = http.createServer((req,res) => {
    rout.appendRouter('GET', '/auth', authorization());
    rout.appendRouter('GET', '/table', table());
    rout.appendRouter('GET', '/reg', registration());
    let router = rout.serveRouter(req.method, req.url);
    
});

server.listen(PORT, HOST, () => {
    console.log(`Сервер запущен: http://${HOST}:${PORT}`);
});

function authorization(){
    return 'auth.html';
}

function table(){
    return 'dev-tools.html';
}

function registration(){
    return 'reg.html';
}