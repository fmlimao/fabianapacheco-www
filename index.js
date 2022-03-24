console.clear()

require('dotenv').config()

const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
app.set('views', './src/views')
app.set('view engine', 'ejs')

const authMiddleware = (req, res, next) => {
  const login = req.cookies.login || null
  res.locals.login = login

  next()
}

app.get('/', authMiddleware, (req, res) => {
  res.render('home', {
    title: 'Fabiana Pacheco',
    login: res.locals.login
  })
})

app.get('/login', authMiddleware, (req, res) => {
  res.cookie('login', {
    id: 123456,
    name: 'Lele'
  })
  res.redirect('/')
})

app.get('/logout', authMiddleware, (req, res) => {
  res.clearCookie('login')
  res.redirect('/')
})

const { PORT = 3000 } = process.env

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
