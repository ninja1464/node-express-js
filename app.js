const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url ==='/') {
        res.end('welcome to home page')
    }

    if (req.url === '/about') {
        res.end('here is our about page')
    }
    res.end(`
        <h1>Oops</h1>
        <p> We cant seem to find the page u looking for</p>
        <a href='/'>back home</a>
    `)
})

server.listen(3000)