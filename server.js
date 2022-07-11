/* global require, process */
const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('build/db/app.json');
const middlewares = jsonServer.defaults({
  static: 'build',
  noCors: true,
});
const port = process.env.PORT || 3131;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);
server.use('/table/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});
server.use(router);

server.listen(port);
