const server = require('./src/app.js');
const { conn } = require('./src/db/db.js');
const PORT = process.env

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`listening at localhost:${PORT}`);
  });
});