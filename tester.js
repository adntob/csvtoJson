const converter = require("./conv");
const http = require('http');


const hostname = '127.0.0.1';


const port = 3000;

const server = http.createServer( (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //res.end('Hello World')
    res.end(converter.convertToCsv('dataset_customer.csv'))
} );

server.listen(port,hostname, ()=>{
    console.log(`server listening at ${hostname} on ${port}`)
   console.log(converter.convertToCsv('dataset_customer.csv'))
})
