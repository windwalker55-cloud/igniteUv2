require('dotenv').config()
const express = require('express')
const path=require('path')
const expressEjsLayout = require('express-ejs-layouts')
const pool = require('./src/config/db')
const app = express()
const PORT = process.env.PORT
// const authRoutes=require('./src/routes/authRoutes')
// const {protectRoute, professor1, userData} =require('./middleware/middleware')
// const bcrypt=require('bcryptjs')
const session=require('express-session');
const router=require("./src/routes/authRoutes")
const userRoutes=require('./src/routes/userRoutes')





app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(express.static('public'))

// view engine
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, "src/public")))
app.set('views', path.join(__dirname, 'src/views' ))
app.use(expressEjsLayout)
app.set('layout', 'layouts/layout')
app.use(express.static('public'))



app.use(session({
  secret: process.env.SESSION_SECRET,    // Signs the session ID cookie
  resave: false,                 // Recommended: false
  saveUninitialized: false,      // Recommended: false for login sessions
  cookie: { 
    httpOnly:true,
    secure: false,               // Set to true if using HTTPS
    maxAge: 24 * 60 * 60 * 1000             // 1 hour in milliseconds
  }
}));
app.use(router)
app.use(userRoutes)


app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})