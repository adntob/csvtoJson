
const filepath = 'dataset_customer.csv'

const fs = require('fs');


const csv = require('csvtojson');

csv().fromFile(filepath).then( ( jsonObj)=>{
    fs.writeFile('customer-data.json', JSON.stringify(jsonObj), (err, file)=>{
        if (err){
            console.log(err)
        }
        else {
            console.log('Conversion complete')
        }
    })
    
    return jsonObj;
})
