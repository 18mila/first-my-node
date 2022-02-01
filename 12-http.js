const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/'){
        res.end('Hello, Welcome')
    }
    if (req.url === '/about'){
        res.end('Here is ourt short history')
    }
    res.end(`
    <h1>Oops!</h1>
<p>We cant seem to find any page youare looking for</p>
<a href="/">back home</a>
    `)
})

server.listen(5000)
