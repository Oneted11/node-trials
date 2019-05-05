var http = require('http')

http.createServer(()=>{
    console.log("the title of the process is=>",process.title);
    throw new Error('this is uncaught')
}).listen(3000)