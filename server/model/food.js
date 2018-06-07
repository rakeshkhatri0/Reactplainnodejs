var mongoose = require('mongoose');

var FoodSchema = new mongoose.Schema({
    foodName:{
        type:String,
        required:true
    },
    qty:{
        type:Number,
        required:true
    }
});


var Food = mongoose.model('Food', FoodSchema);

module.exports={Food};