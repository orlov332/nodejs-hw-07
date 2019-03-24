import http from 'http';
import fs from 'fs';
import replace from 'stream-replace';

http.createServer()
    .on('request', (req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('index.html', {encoding: 'utf8'})
            .pipe(replace('{message}', 'Real message!'))
            .pipe(res);
    })
    .listen(3000);