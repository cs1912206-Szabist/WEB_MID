const mongoose = require('mongoose');
const {Schema,model}=mongoose;

const titleSchema = new Schema({
tid:String,
rent:Number,
title:String,
type:String,
episode:String,
image:String,
date:String
});

module.exports = model('Title',titleSchema);
