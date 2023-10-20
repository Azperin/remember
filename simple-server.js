const http = require('node:http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	if (req.socket.remoteAddress !== '::ffff:127.0.0.1') return;
	
	if (req.url === '/favicon.ico') {
		res.writeHead(404);
		return res.end();
	};
	
	let filePath = './owntree' + req.url;
	let contentType = 'text/html';
	const extname = filePath.split('.').at(-1);
	
	if (filePath === './owntree/') {
		 filePath = './owntree/index.html';
	};
	
	switch (extname) {
        case 'js':
            contentType = 'text/javascript';
            break;
        case 'css':
            contentType = 'text/css';
            break;
        case 'json':
            contentType = 'application/json';
            break;
        case 'png':
            contentType = 'image/png';
            break;      
        case 'jpg':
            contentType = 'image/jpg';
            break;
        case 'wav':
            contentType = 'audio/wav';
            break;
    };
	
	res.writeHead(200, { 'Content-Type': contentType });
	res.end(fs.readFileSync(filePath), 'utf-8');
	
});

server.listen(8080);
