var http = require('http')
http.createServer(()=>{
    throw new Error('this is uncaught')
}).listen(3000)