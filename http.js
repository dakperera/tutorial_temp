const http = require('http');

const server = http.createServer((req, res)=>{ 
//req is request from client to server
//res is response back from server
    console.log(req)
    //res.write("Welcome to our home page")
    if(req.url=== '/'){
        res.end("Welcome to our home page")
    }
    else if(req.url=== '/about'){
        res.end('Here is our short history')
    }
    else{
        res.end(`
            <h1>Ooops!</h1>
            <p>We can't find the page you are looking for</p>
            <a href='/'>back home</a>
        `)
    }
    
})

server.listen(5001)  //listen on port 5001