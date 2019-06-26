const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

// Read the port data

module.exports = (io) => {
  port.on('open', () => {
    console.log('serial port open');
  });
  parser.on('data', (data) => {
    console.log('got word from arduino:', data);
    io.sockets.emit('tag');
  });
  return port;
};
