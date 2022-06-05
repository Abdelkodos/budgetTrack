import dbConnect from '../../utils/dbConnect'

dbConnect()

export default async (req, res) => {
    res.json({ 
        nom: 'Imran',
        prenom: 'Monir',
        email: 'imran@monir.com'
     })
}