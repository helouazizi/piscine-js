import http from 'http';
import fs from 'fs';
import path from 'path';


const port = 5000
const dir = "./guests"



const server = http.createServer((req, res) => {
    if (req.method !== "GET"){
        res.writeHead(405,{'content-type' :'application/json'})
        res.end(JSON.stringify({error : "Methos Not Allowed"}))
        return
    }
    let name = req.url.slice(1)
    if (!name) {
        res.writeHead(400,{'content-type' :'application/json'})
        res.end(JSON.stringify({error : "Bad Request"}))
        return
    }

    let pathfile = path.join(dir,`${name}.json`)
    console.log(pathfile);

    fs.readFile(pathfile, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'guest not found' }));
            } else {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'server failed' }));
            }
            return;
        }
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    });
})


server.listen(port, () => {
    console.log("server starting on port", port);

})

