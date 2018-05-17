const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create geolocation schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
        
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
    
});
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

    },
    geometry: GeoSchema
});

const Actors= mongoose.model('actor', ActorSchema);

module.exports= Actors;