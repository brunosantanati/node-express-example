const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

let siteCreatorName = "Bruno Sant' Ana"

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/help', (req, res) => {
    res.render('help', { 
        helpText: 'This is the help page',
        title: 'Help',
        name: siteCreatorName
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: siteCreatorName
    })
})

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: siteCreatorName
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

app.get('/help/*', (req, res) => {
    res.render('404page', {
        errorMessage: 'Help article not found',
        name: siteCreatorName
    })
})

app.get('*', (req, res) => {
    res.render('404page', {
        errorMessage:'404 Page Not Found',
        name: siteCreatorName
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})