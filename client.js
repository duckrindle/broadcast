const HOST = 'localhost';
const PORT = 41234;

const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const message = Buffer.from('Some bytes');

/*client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client.close();
});*/

client.send(message, PORT, HOST, (err) => {
    console.log('UDP message sent to ' + HOST +':'+ PORT);
    client.close();
});
