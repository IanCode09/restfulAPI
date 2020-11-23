const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.send('Running')
})

const port = process.env.PORT

app.listen(port, console.log(`Server running in port ${port}`))