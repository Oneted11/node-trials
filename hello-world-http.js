require('http').createServer((req,res)=>{
    console.log(req.headers)
    res.writeHead(200,{"content-Type":"text/HTML"})
    res.write('hello ')
    setTimeout(()=>{
        res.end('<b>world</b>')
    },500)
}).listen(3000)