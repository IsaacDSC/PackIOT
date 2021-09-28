require('dotenv').config()
const app = require('./app/App');
const server = require('http').createServer(app)
const io = require('socket.io')(server)



io.on('connection', (socket) => {
    console.log('conectado; id:', socket.id)
    socket.on('disconnect', function() {
        console.log('desconectado; id:', socket.id)
    })
})


function atualizaring(dados) {
    io.emit('chat message', dados)
}


const { initialize } = require('./database/initialize/initialize')
    //account.sync({ force: true })
initialize(false)


const port = process.env.PORT_APP
server.listen(port, () => {
    console.log('starter server in port: http://127.0.0.1:' + port)
});


exports.atualizaring = atualizaring