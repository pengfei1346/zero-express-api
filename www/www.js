const http = require('http')
const debug = require('debug')('zero:server');
const app = require('../app');

var port = 3000

const server =http.createServer(app).listen(port)
server.on('error', onError);
server.on('listening', onListening);

// app.listen(3000,() => console.log('成功'))

function onError(err) {
    console.log(err);
    throw err;
    switch (err.code) {
        case 'EADDRINUSE':
            port = port + 10
            break;
        default:
            throw err
    }
}
function onListening() {
    var addr = server.address();
    debug('Listening on ' + addr);
}
function logs(errMsg) {

}
