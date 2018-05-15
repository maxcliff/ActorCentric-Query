const express = require('express');
const router = express.Router();
const Actor = require('../models/actor');

//get a list of actors from db  
router.get('/actors', function(req, res, next){
    res.send({type: 'GET'});
});

//add a new actor
router.post('/actors', function(req, res, next){
    Actor.create(req.body).then(function(actor){
       res.send(actor);
    }).catch(next);
});

//update actor
router.put('/actors/:id', function(req, res, next){
    Actor.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(actor){
        Actor.findOne({_id: req.params.id}).then(function(actor){
            res.send(actor);
        });
        
    });
    
});

//delete actor from db
router.delete('/actors/:id', function(req, res){
    Actor.findByIdAndRemove({_id:req.params.id}).then(function(actor){
        res.send(actor);
    });
    
});

module.exports= router;