const Game = require('../models/Game');

exports.getAll = () => Game.find()

exports.getOne = (gameId) => Game.findById(gameId);

exports.create = (gameData) => Game.create(gameData);

exports.delete = (gameData) => Game.findByIdAndDelete(gameData);

exports.edit = (gameId, gameData) => Game.findByIdAndUpdate(gameId, gameData);

exports.getAllGames = async (search, platform) => {
    // let result = await Game.find().lean();
    let result = await Game.find().lean();
         
    if (search) {
        result = result.filter(game => game.name.toLowerCase().includes(search.toLowerCase()))
    };

    if (platform) {
        result = result.filter(game => game.platform.toLowerCase().includes(platform.toLowerCase()))
    };
 
   
    return result;
};