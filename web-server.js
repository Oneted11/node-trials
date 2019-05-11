require('http').createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'})
    res.end('<h1>Hello world</h1>')
}).listen(3000)