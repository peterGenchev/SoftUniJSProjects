const Crypto = require('../models/Crypto');

exports.getAll = () => Crypto.find()

exports.getOne = (cryptoId) => Crypto.findById(cryptoId);

exports.create = (cryptoData) => Crypto.create(cryptoData);

exports.buy = async (userId ,cryptoId) => {
    const crypto = await Crypto.findById(cryptoId);

    crypto.buyers.push(userId);

    return crypto.save();
}

exports.delete = (cryptoData) => Crypto.findByIdAndDelete(cryptoData);

exports.edit = (cryptoId, cryptoData) => Crypto.findByIdAndUpdate(cryptoId, cryptoData);

exports.getAllCryptos = async (search, payment) => {
    // let result = await Game.find().lean();
    let result = await Crypto.find().lean();
         
    if (search) {
        result = result.filter(crypto => crypto.name.toLowerCase().includes(search.toLowerCase()))
    };

    if (payment) {
        result = result.filter(crypto => crypto.payment.toLowerCase().includes(payment.toLowerCase()))
    };
    
    return result;
};