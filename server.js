const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 Savage': {
        'birthname': 'Sheyaa Bin Abraham-Joseph',
    'birthlocation': 'London, England',
    'age': 29
    },
    'Chance the Rapper': {
        'age': 29,
        'birthname': 'chancelor Bennett',
        'birthlocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthname': 'unknown',
        'birthlocation': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api:name', (req, res) => {
    console.log(req.params.name)
    res.json(rappers)
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}! You had better go catch it`)
})