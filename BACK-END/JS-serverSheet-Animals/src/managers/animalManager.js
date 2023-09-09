const Animal = require('../models/Animal');

exports.getAll = () => Animal.find()

exports.getOne = (animalId) => Animal.findById(animalId);

exports.create = (animalData) => Animal.create(animalData);

exports.buy = async (userId ,animalId) => {
    const animal = await Animal.findById(animalId);

    animal.donation.push(userId);

    return animal.save();
}

exports.delete = (animalData) => Animal.findByIdAndDelete(animalData);

exports.edit = (cryptoId, cryptoData) => Animal.findByIdAndUpdate(cryptoId, cryptoData);

exports.getAllAnimals = async (search, payment) => {
    // let result = await Game.find().lean();
    let result = await Animal.find().lean();
         
    if (search) {
        result = result.filter(animal => animal.location.toLowerCase().includes(search.toLowerCase()))
    };

    
    return result;
};