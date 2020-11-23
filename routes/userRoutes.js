const express = require('express')
const User = require('../models/User')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body

        const existUser = await User.findOne({ email })

        if(existUser) {
            res.status(400)
            res.json({ message: 'Email already exist'})
        }
        
        const user = await User.create({
            name,
            email,
            password
        })
        
        if(user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email
            })
        }

    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = router