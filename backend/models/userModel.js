const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        trim: true,
        required: [true, 'Prénom requis'],
        maxLength: 3,
    },

    lastName: {
        type: String,
        trim: true,
        required: [true, 'Nom de famille requis'],
        maxLength: 3,
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'email requis'],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+*)(\.\w{2,3})+$/,
            'Entrez une adresse valide'
        ]
    },
})