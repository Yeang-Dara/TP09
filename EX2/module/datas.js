const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const emailValidation = require('email-validator')


const dataSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    userName: {
        type: String,
        required: true
    },


    Date: {
        type: Date,
        required: true,
        default:Date.now
    }

});
dataSchema.pre('save', function(next){
    if(this.isModified('password')){
        bcrypt.hash(this.password, 8, (err, hash) => {
            if(err) return next(err);

            this.password = hash;
            next();
            
        })
    }
})


dataSchema.methods.comparePassword = async function (password) {
    if(!password) throw new Error("Password is missing can not compare");
   
    try{
        const result = await bcrypt.compare(password, this.password)
        return result;
    }catch(error){
        console.log("Error while compareing password.", err.message)
    }
}

dataSchema.statics.isEmailExist = async function(email) {
    if(!email) throw new Error('Invalide email');
    try{
        const user = await this.findOne({email})
        if(user) return false;
        return true;
    }catch(erroe){
        console.log('error inside function')
        return false

    }
}

module.exports = mongoose.model('datas', dataSchema)