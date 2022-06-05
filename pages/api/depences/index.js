import dbConnect from '../../../utils/dbConnect'
import User from '../../../models/Depence'

dbConnect()

export default async (req, res) => {
    const { method } = req

    switch(method){
        case 'GET' :
            try{
                const depences = await User.find({})

                res.status(200).json({ success: true, data: depences })
            } catch (error) {
                res.status(400).json({ success: true })
            }
            break
        case 'POST' :
            try{
                const depence = await User.create(req.body)

                res.status(201).json({ success: true, data: depence })
            } catch (error){
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
    }
}