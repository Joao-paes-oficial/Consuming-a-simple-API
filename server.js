const cors = require('cors')
const express = require('express')
const axios = require('axios')
const app = express()

app.use(cors())

app.get('/', async (req, res) => {
    try {
        const { data } = await axios("https://jsonplaceholder.typicode.com/users")
        return res.json(data)
    } catch (error) {
        console.error(error)
    }
})

const door = 8000

app.listen(door, (req, res) => {
    console.log(`Server is running on port ${door}`)
})