const db = require('../model');

exports.getTitlesById = (req, res) => {
    db.Title.find()
    .then(title => res.status(200).json(title));    
}

exports.getSingleData = (req, res) => {
   const t= db.Title.find({ title: req.params.title })
.then(single => res.status(200).json(single));   

}

      
