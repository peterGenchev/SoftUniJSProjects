const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required!'],
    },
    image: {
        type: String,
        required: [true, 'image is required!'],
    },
    price: {
        type: Number,
        required: [true, 'price is required!'],
    },
    description: {
        type: String,
        required: [true, 'description is required!'],
    },
    owner: { 
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    payment: {
        type: String,
        required : [true, 'payment required']
    },
    buyers: [{
        type: mongoose.Types.ObjectId,
        ref: 'User', 
    }],
});

const Crypto = mongoose.model('Crypto', cryptoSchema);
 
module.exports = Crypto;