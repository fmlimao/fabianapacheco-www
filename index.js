const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Fabiana Pacheco - Site em construção')
})

app.listen(10300, () => {
  console.log('Server is running on port 10300')
})
