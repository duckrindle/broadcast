const HOST = 'localhost';
const PORT = 41234;

const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const message = Buffer.from('Some bytes');

setInterval(function send_a_message() {
    //console.log('send_a_message');

    client.send(message, PORT, HOST, function(err, bytes) {
        if (err) throw err;
        console.log('UDP message sent to ' + HOST +':'+ PORT);
        //client.close();
    });

}, 1000);
