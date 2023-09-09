const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: String,


    password: String,

});

userSchema.virtual('rePassword')
.set(function(value){
    if(this.password !== value){
        throw new Error('Password missmatch!')
    }
})

userSchema.pre('save', async function(){
const hash =  await bcrypt.hash(this.password, 10);

this.password = hash;

})

const User = mongoose.model('User', userSchema);

module.exports = User;