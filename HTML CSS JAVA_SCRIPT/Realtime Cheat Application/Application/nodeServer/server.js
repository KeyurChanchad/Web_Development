//Node server which will handel socket io connection
// open nodeserver  
// npm init  
// npm i Socket.io 
   
const io = require('socket.io')(8000)
const user  = {};

// io.on  is socket io  instant means malty usre like keyur, ravi, abhay... handel it
// socket.on handel particular user requiest
io.on('connection', socket =>{
    // If any new user joins, let other users connected to the server know!
    socket.on('new-user-joined', name =>{ 
        user[socket.id] = name;
        socket.broadcast.emit('user-joined', name)  ;
    });

    // If someone sends a message, broadcast it to other people
    socket.on('send', message =>{
        socket.broadcast.emit('receive', {message: message, name: user[socket.id]})
    });

    // If someone leaves the chat, let others know 
    socket.on('disconnect', message =>{
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    }); 
}); 