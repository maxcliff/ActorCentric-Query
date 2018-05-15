const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create actor schema 
const ActorSchema = new Schema({
    name: {
        type: String,
        required: [true, 'field is required']
        
    },

    targets: {
        type: String,
        required: [true, 'field is required']
    },

    actions: {
        type: String

    },

    timePeriod: {
        type: String

    }

    //add in geo location

});

const Actors= mongoose.model('actor', ActorSchema);

module.exports= Actors;