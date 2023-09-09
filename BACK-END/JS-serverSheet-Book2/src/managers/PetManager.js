const Pet = require('../models/Pet');

exports.getAll = () => Pet.find()

exports.getOne = (petId) => Pet.findById(petId);

exports.create = (petData) => Pet.create(petData);

exports.delete = (petData) => Pet.findByIdAndDelete(petData);

exports.edit = (petId, petData) => Pet.findByIdAndUpdate(petId, petData);

exports.getAllGames = async (search, platform) => {
    // let result = await Game.find().lean();
    let result = await Pet.find().lean();
         
    if (search) {
        result = result.filter(game => game.name.toLowerCase().includes(search.toLowerCase()))
    };

    if (platform) {
        result = result.filter(game => game.platform.toLowerCase().includes(platform.toLowerCase()))
    };
 
   
    return result;
};