const jsonServer = require("json-server");
const cors = require("cors"); // Importing cors package

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;

server.use(cors()); // Enable CORS
server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
