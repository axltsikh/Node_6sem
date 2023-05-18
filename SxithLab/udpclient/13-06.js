var udp = require('dgram');
var client = udp.createSocket('udp4');
client.on('message',function(msg,info){
  console.log('Response received from server : ' + msg.toString());
});
var a =0;
setInterval(()=>{
    var data = "Client message " + a
    client.send(data,4000,'localhost',function(error){
        if(error){
          console.log(error);
          client.close();
        }else{
          console.log('Data is sent !');
        }
    });
    a++;
},5000)