const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hello World! - welcome to my program project 2 - perumbakkam ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
