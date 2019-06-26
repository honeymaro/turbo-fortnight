const s = require('socket.io');

module.exports = (server) => {
  const io = s(server);

  io.on('connect', (socket) => {
    // socket.emit('tag');
  });

  return io;
};
