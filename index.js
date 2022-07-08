const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = q.pathname === "/" ? `./index.html` : `.${q.pathname}.html`
    console.log(q.pathname)
    console.log(filename)
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, {"Content-Type": "text/html"})
            res.write(fs.readFileSync("404.html" , (err, data) => {
                if (err) throw err;
                return data;
            }))
            return res.end();
        } 
        res.writeHead(200, {"Content-Type": "text/html" })
        res.write(data);
        return res.end();        
    })
}).listen(8080);
console.log(`server running in port 8080`)

