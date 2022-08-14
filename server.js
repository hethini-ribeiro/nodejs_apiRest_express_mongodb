const http = require("http")
const port = 3000;

const rota = {
    '/': 'Estudando node',
    '/livros': 'Pagina de livros',
    '/autores': 'Lista de autores',
    '/editora': 'Pagina de editora',
    '/sobre': 'Infos do projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rota[req.url]);
})

server.listen(port, () => {
    console.log('Servidor escutando em http://localhost:',port);
});