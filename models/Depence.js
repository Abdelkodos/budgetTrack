const mongoose = require('mongoose')

const DepenceSchema = new mongoose.Schema({
    nom: String,
    montant: Number,
    periode: {
        type: String,
        enum: ['mensuel', 'trimestriel', 'annuel']
    }
})

module.exports = mongoose.models.Depence || mongoose.model('Depence', DepenceSchema)