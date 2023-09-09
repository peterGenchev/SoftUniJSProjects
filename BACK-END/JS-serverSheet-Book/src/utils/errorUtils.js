const { MongooseError } = require("mongoose")

exports.getErrorMessage = (error) => {
    if(error instanceof MongooseError) {
        return Object.values(error.errors).at(0).message
    }else{ 
        return error.message;
    }
}
// function getFirstMongooseError(error){
// const errors = Object.keys(error.errors).map(key => error.errors[key].message)

// return errors[0]
// }

// exports.getErrorMessage = ( error ) => {
//     switch (error.message) {
//         case 'Error':
//             return error.message;
//         case 'ValidationError':
//             return getFirstMongooseError(error)
//         default:
//             return error.message
//     }

// };