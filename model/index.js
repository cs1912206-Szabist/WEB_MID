const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/cartoon');

module.exports = {
    Title: require('./Title')
};