const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.json([
        {name: 'João'},
        {name: 'Tobi'}
    ])
})

app.listen('3000', (req, res) => {
    console.log('Server is running on port 3000')
})