const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    let myArray = []
    for(let i = 0; i < 100; i++){
        myArray.push(i)
    }
    res.send(`Yo, ${myArray}`)
})
app.listen(process.env.PORT || 3000)
