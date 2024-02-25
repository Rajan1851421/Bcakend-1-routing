const express = require('express');
const PORT = 8000
const nav = express()

nav.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})

nav.get('/', (req, res) => {
    // res.send("hello world! Rajan Prajapati ");
    // other method 
    res.write('<h1>Hello everyone your welcome</h1>')
    res.write('<h1>I am Raan Prajapati</h1>')
    res.send()


})

nav.get('/about', (req, res) => {
    res.send('This is about Page')
})
nav.get('/temp', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'Rajan Prajapati',
            age: 26
        },
        {
            id: 2,
            name: 'Rajan ',
            age: 30
        },
        {
            
            id: 2,
            name: 'Ankit ',
            age: 18,
        }

    ])
})
nav.get('/contact', (req, res) => {
    // res.send('welcome on contact page page')
    res.status(200).send("welcome on contact page")
})