var socket = io()
socket.on('chat message', function(msg) {
    alert('Atualize a Pagina!')
    return false;
});