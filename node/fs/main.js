const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

// 创建一个web 服务器
const server = http.createServer((req,res)=>{
    // 怎么得到index.html?
    console.log('那个家伙又来了');
        // 浏览器能支持自动解压ungzip?
        if(req.headers['accept-encoding'].indexOf('gzip') !== -1){
            gzip = zlib.createGzip(); 
            res.writeHead(200,{
            'Content-Encoding':'gzip',
            'Content-Type':'text/plain;charset=utf8'
            })
            console.log('aa')
            fs.createReadStream('./a.txt').pipe(gzip).pipe(res);
        }else{
            console.log('bb')
            res.writeHead(200,{
            'Content-Type':'text/plain;charset=utf8'
            })
            fs.createReadStream('./a.txt').pipe(res)    
        }

})

server.listen(8082);