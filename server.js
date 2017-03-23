var express=require('express');
var nodemailer = require("nodemailer");
var app=express();


var smtpTransport = nodemailer.createTransport({
      service: 'gmail',
    auth: {
    user: 'madhuparna.upadhyay@gmail.com',
    pass: 'pompa@dulal'
  }

});


app.get('/send',function(req,res){

var mailOptions={
   to : req.query.to,
   subject : req.query.subject,
   text : req.query.text
}
console.log(mailOptions);
smtpTransport.sendMail(mailOptions, function(error, response){
if(error){
console.log(error);
res.end("error");
}else{
console.log("Message sent: " + response.message);
res.end("sent");
}
});
});


app.get('/',function(req,res){
res.sendfile('index.html');
});

app.listen(8001,function(){
console.log("Express Started on Port 8001");
});
