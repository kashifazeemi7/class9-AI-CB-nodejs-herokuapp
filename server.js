const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// date methods:
const timeElapsed = Date.now();


app.get('/home', (req, res) => {
    res.send('Welcome to Home!')
})

app.get('/', (req, res) => {
    res.send('Welcome to the heroku app!')
})

app.get('/profile', (req, res) => {
    res.send('Welcome to Profile!')
})

app.get('/feed', (req, res) => {
    res.send('Welcome to Feed!')
})

app.use((req, res, next) => {
    console.log('a request came!', new Date(timeElapsed));
    next();
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})