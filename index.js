const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://cineplex.smroudro.com');
    // You can also set other CORS headers like Access-Control-Allow-Methods, etc. if needed.
    next();
  });