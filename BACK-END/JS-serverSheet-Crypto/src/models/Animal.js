const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required!'],
    },
    image: {
        type: String,
        required: [true, 'image is required!'],
    },
    years: {
        type: Number,
        required: [true, 'price is required!'],
    },
    description: {
        type: String,
        required: [true, 'description is required!'],
    },
    kind: {
        type: String,
        required: [true, 'kind is required!'],
    },
    need: {
        type: String,
        required: [true, 'need is required!'],
    },
    location: {
        type: String,
        required: [true, 'need is required!'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    donation: [{
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }],
    // payment: {
    //     type: String,
    //     required : [true, 'payment required']
    // },
    // donation: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User', 
    // }],
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;