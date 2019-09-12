const path = require('path')
const express = require('express')

/*console.log(__dirname)
console.log(__filename)
console.log(path.join(__dirname, '../public'))*/

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('/help', (req, res) => {
    res.render('help', { helpText: 'This is the help page' })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Bruno'
    })
})

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Bruno'
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