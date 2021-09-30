var socket = io()
socket.on('chat message', function(msg) {
    document.location.reload(true)
    return false;
});