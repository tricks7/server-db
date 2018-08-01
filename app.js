const express = require('express')
const app = express()
const port = 7000

app.use(cors())
app.use(bodyParser.json())


app.get('/',(request, response, next) => {
    response.send('🎉')
})


app.listen(port,() => {
    console.log(`I am listening on ${port}`)
})