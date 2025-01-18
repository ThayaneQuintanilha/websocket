import { io } from '../socket'

export const Message = (req, res) => {
    console.log({bodyteste: req.body.message})
    io.send('message', req.body.message)
    res.send('teste')
}