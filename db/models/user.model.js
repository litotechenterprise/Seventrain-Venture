const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');


const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "Must Enter a Username"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Must Enter a Email"],
        trim: true,
        lowercase: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }
        }
    },
    password: {
        type: String,
        required: [true, "Must Enter a Password"],
        trim: true,
        minlength: 6,
        // validate(value) {
        //     if (value.toLowerCase().includes('password')) {
        //         throw new Error('Password cannot include the word "password"');
        //     }
        // }
    },
 
    tokens: [{
        token:{
            type:String,
            required: true
        }
    }] 
}, {
    timestamps: true
});

UserSchema.virtual('userCreatedEvents', {
    ref: 'Event',
    localField:'_id',
    foreignField:'owner'
})







const user = mongoose.model('user', UserSchema);

module.exports = {user};