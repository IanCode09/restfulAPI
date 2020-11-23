const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.get('/', (req, res) => {
    res.send('This is my Restfull API Tutorial')
})

const port = process.env.PORT

app.listen(port, console.log(`Server running in port ${port}`))