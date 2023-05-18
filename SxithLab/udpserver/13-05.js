var udp = require('dgram');
var server = udp.createSocket('udp4');
var port = 4000

server.on('listening',function(){
 console.log('Server is listening at port ' + port);
});

server.on('message',function(msg,info){
    console.log('Client info: ' + info.port + " " + info.address);
    console.log('Data received from client : ' + msg.toString());
    var response = 'Echo: ' + msg;
    server.send(response,info.port,'localhost',function(error){
        if(error){
            client.close();
        }else{
            console.log('Data sent !');
        }
    });
});

server.on('error',function(error){
  console.log('Error: ' + error);
  server.close();
});
server.bind(port)