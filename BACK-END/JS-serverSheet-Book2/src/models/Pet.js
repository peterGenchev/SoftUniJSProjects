const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required!'],
    },
    image: {
        type: String,
        required: [true, 'image is required!'],
    },
    age: Number,
    location: {
        type: String,
        required: [true, 'genre is required!'],
    },
    description: {
        type: String,
        required: [true, 'description is required!'],
    },
    owner: { 
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
   
});

const Pet = mongoose.model('Pet', petSchema);
 
module.exports = Pet;