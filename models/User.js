const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    nom : {
        type: String,
        required: [true, 'veuillez entrer votre nom'],
        trim: true,
        maxlength: [20, 'Le nom ne peut pas dépasser 20 lettre']
    },
    prenom : {
        type: String,
        required: [true, 'veuillez entrer votre nom'],
        trim: true,
        maxlength: [20, 'Le nom ne peut pas dépasser 20 lettre']
    },
    email: {
        type: String,
        required: [true, 'veuillez entrer votre email'],
        unique: true,
        trim: true,
        maxlength: [40, "l'email ne peut pas dépasser 30 lettre" ]
    },
    password: {
        type: String,
        required: [true, 'veuillez entrer votre email'],
        trim: true,
        maxlength: [20, "le mot de passe ne peut pas dépasser 20 caractères" ],
        minlength: [15, "le mot de passe ne peut pas être inférieur à 15 caractères"]
    },
    depences: [
        {
            nom: String,
            montant: Number,
            periode: {
                type: String,
                enum: ['mensuel', 'trimestriel', 'annuel']
            }
        }
    ],
    revenues: [
        {
            nom: String,
            montant: Number,
            periode: {
                type: String,
                enum: ["mensuel", "trimestriel", "annuel"]
            }
        }
    ]

})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)