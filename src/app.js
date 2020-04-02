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

    if(!req.query.address){
        return res.send({
            error: 'You must provide an address.'
        })
    }

    res.send([
        {
            forecast: 'It is snowing',
            location: 'Philadelphia',
            address: req.query.address
        }
    ])
})

app.get('/products', (req, res) => {

    //test this code with url http://localhost:3000/products?search=teste
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term.'
        })
    }

    console.log(req.query)
    console.log(req.query.search)

    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404page', {
        errorMessage: 'Help article not found',
        title: '404 Ops...',
        name: siteCreatorName
    })
})

app.get('*', (req, res) => {
    res.render('404page', {
        errorMessage:'Page Not Found',
        title: '404 Ops...',
        name: siteCreatorName
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})