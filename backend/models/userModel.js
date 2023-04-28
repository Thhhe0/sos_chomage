const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({


    firstName: {
        type: String,
        trim: true,
        required: [true, 'Prénom requis'],
        maxLength: 32,
    },

    lastName: {
        type: String,
        trim: true,
        required: [true, 'Nom de famille requis'],
        maxLength: 32,
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'email requis'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Veuillez entrer une adresse valide'
        ]
    },

    password: {
        type: String,
        trim: true,
        required: [true, 'Mot de passe requis'],
        minLength: [6, 'Le mot de passe doit contenir (6) caractère minimum'],
    },

    role: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

// password encrypte
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})


module.exports = mongoose.model("User", userSchema);