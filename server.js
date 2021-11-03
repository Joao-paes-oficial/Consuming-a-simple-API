const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    return res.json([
        {name: 'João'},
        {name: 'Tobi'}
    ])
})

app.listen('4567', (req, res) => {
    console.log('Server is running on port 4567')
})