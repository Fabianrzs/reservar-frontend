const { createServer } = require("https");
const next = require("next");
const path  = require("path");
const { parse } = require("url");
const fs = require("fs");
const port = 3000;


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
    key: fs.readFileSync(path.join(__dirname, 'certs','localhost-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'certs','localhost.pem'))
};


app.prepare().then(() => {
    console.log(path.join(__dirname, 'certs','localhost-key.pem'))
    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url || '', true);
        handle(req, res, parsedUrl).catch((err) => {
            console.error('Error handling request:', err);
            res.req.statusCode = 500;
            res.req.destroy(err);
        });
    }).listen(3000, () => {
        console.log('Server started on https://localhost:' + port);
    });
});