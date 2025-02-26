const http = require('node:http')
const cluster = require('node:cluster')

if(cluster.isMaster){
console.log(`cluster is running on ${process.pid}`);
cluster.fork()
cluster.fork()
cluster.fork()
}else{
    const server = http.createServer((req, res)=> {
        if(req.url == '/'){
            res.writeHead(200, {'content-type':'text/plain'})
            res.end('With cluster home page is running')
        }else if(req.url == '/slow'){
            for(let i = 0; i < 6000000000; i++){}
            res.end('With cluster slow page')
        }
    })
    server.listen(7000, ()=>{
        console.log('localhost 7000 is running');
    })
}


