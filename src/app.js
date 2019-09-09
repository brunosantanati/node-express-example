const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Hello Express!</h1>')
})

app.get('/help', (req, res) => {
    res.send('<h1 style="color: green">Help page</h1>')
})

app.get('/about', (req, res) => {
    res.send({
        name: 'Bruno',
        occupation: 'Software Engineer',
        skills: 'Java, Node.js, Angular, MongoDB, etc'
    })
})

app.get('/weather', (req, res) => {
    res.send([
        {
            temperature: 15,
            centigrade_scale: 'celsius',
            city: 'SP'
        }, {
            temperature: 30,
            centigrade_scale: 'celsius',
            city: 'AL'
        }
    ])
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})