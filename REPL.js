const mongoose = require('mongoose'); 
 const db = require('./model'); 
// db.titles.find({title:{$regex: 'bug',$options:'i'}}).forEach(r=>print(JSON.stringify(r))) 

db.Title.find()
.then(res => {
    console.log(JSON.stringify(res, null, '\t'));
    process.exit();
})

