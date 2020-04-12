
import config from './config'
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';
const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get(['/', '/contests/:contestId'], (req, res) => {
    serverRender(req.params.contestId)
        .then(({ initialMarkup, initialData }) => {
            res.render('index', {
            initialMarkup,
            initialData
            });
        })
        .catch(console.error);
});

// server.get('/about.html', (req, res) => {
//     res.send('The about page');
// });

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
    console.info('Express listening on port', config.port);
});





// import config, {nodeEnv, logStars} from './config';

// console.log(config,nodeEnv, logStars);
// logStars("Hello");



// import https from 'https';

// https.get('https://www.lynda.com', res => {
//     console.log('Response status code:', res.statusCode);
//     res.on('data', chunk => {
//         console.log(chunk.toString());
//     });
// });



// import http, { Server } from 'http';
 
// const sever = http.createServer();

// sever.listen(8080);

// sever.on('request',(req, res) => {
//     res.write('Hello HTTP!\n');
//     setTimeout(() => {
//         res.write('I can stream!\n');
//         res.end();
//     }, 3000);
// });