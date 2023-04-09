const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello new Changes with deploy to render.com cloud! </h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
