const express = require('express'),
      http = require('http');


const hostname = 'localhost';
const port = 3000;


const app = express();

app.get('/api/timestamp/:dateString?',(req,res)=>{
	
	const dateString = req.params.dateString;
	
    let date;
    
	if(!dateString){
		date = new Date();
	}else{
          
          if(!isNaN(dateString)){
          	date = new Date(parseInt(dateString));
          }else{
          	date = new Date(dateString);
          }
     }

     if(date.toString() === 'Invalid Date'){
     	res.json({error:"Invalid Date"});
     }else{
     	res.json({unix : date.getTime(), utc: date.toUTCString()});
     }
});


const server = http.createServer(app);

server.listen(port,hostname,()=>{
	console.log(`Server running at http://${hostname}:${port}/`);
});