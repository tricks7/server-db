const express = require('express')
const app = express()
const queries = require('./queries')
const port = 7000

app.get('/',(request, response, next) => {
    queries.getAll().then(cats => response.json({cats}))
})


app.listen(port,() => {
    console.log(`I am listening on ${port}`)
})