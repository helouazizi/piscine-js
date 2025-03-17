import http from 'http';
import fs from 'fs';
import path from 'path';
import { json } from 'stream/consumers';


const port = 5000
const dir = "./guests"



const server = http.createServer((req, res) => {
    if (req.method !== "POST") {
        res.writeHead(405, { 'content-type': 'application/json' })
        res.end(JSON.stringify({ error: "Methos Not Allowed" }))
        return
    }
    let name = req.url.split('/')[1]
    if (!name) {
        res.writeHead(400, { 'content-type': 'application/json' })
        res.end(JSON.stringify({ error: "Bad Request" }))
        return
    }

    let body = ''
    req.on('data', chars => {
        body += chars
    })

    req.on('end', () => {
        try {
            let pathfile = path.join(dir, `${name}.json`)
            const data = JSON.parse(body)
            fs.writeFile(pathfile, JSON.stringify(data, null, 2), (err) => {
                if (err) {
                    res.statusCode = 500; // Internal Server Error
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify({ error: 'Server failed' }));
                    return;
                }
                // Respond with the guest data as JSON and a status code 201 (Created)
                res.statusCode = 201;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
            });
        } catch (err) {
            res.statusCode = 500; // Internal Server Error
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Server failed' }));
        }
    })

    


})


server.listen(port, () => {
    console.log("server starting on port", port);

})

