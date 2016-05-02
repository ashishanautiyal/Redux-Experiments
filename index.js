var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1");

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log("a user is connected")
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
     io.emit('chat message', msg);
  });

});


http.listen(app.get('port') ,app.get('ip'), function(){
  console.log('listening on *:' );
});