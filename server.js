const filepath = 'example_dataset_halved.csv'
const csv = require('csvtojson');



/*
http.createServer( (req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
})
*/
csv().fromFile(filepath).then( ( jsonObj)=>{
    console.log(jsonObj)
})
