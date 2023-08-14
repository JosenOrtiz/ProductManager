//const { response } = require('express');
const Prod = require('../models/prods.model')
//const { Prod } = require('../models.prods.model')


module.exports.prodsApi = (req, res) =>{
    res.json({status: "ok"})

}
module.exports.allProds = (req, res) => {
    Prod.find()
        .then(response => res.json(response))
        .catch(err=>res.json(response))
}

module.exports.oneProd = (req, res) => {
    Prod.findOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err=>res.json(err))
}

module.exports.addProd = (req, res) => {
    Prod.create(req.body)
        .then(response => res.json(response))
        .catch(err=>res.json(err))
}

module.exports.updateProd = (req, res) => {
    Prod.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new:true, runValidators: true }
    )
        .then(response => res.json(response))
        .catch(err=>res.json(err))    
}

module.exports.deleteProd = (req, res) => {
    Prod.deleteOne({_id:req.params.id})
        .then(response => res.json(response))
        .catch(err=>res.json(err))
}