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


const port = process.env.PORT_APP || 3000
const host = process.env.HOST_APP || '127.0.0.1'
server.listen(port, () => {
    setTimeout(() => { atualizaring() }, 5000)
    console.log(`starter server in port: http://${host}:${port}`)
});


exports.atualizaring = atualizaring