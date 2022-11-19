require("dotenv").config()
const cookieSession = require("cookie-session")
const express = require("express")
const app = express()
const passport = require("passport")
require('./passport')
const cors = require("cors")
const authRoute = require('./routes/auth')
const PORT = process.env.PORT || 3500



app.use(cookieSession({
    name:"session",
    keys: ["zoro"],
    maxAge: 24 * 60 * 60 * 100   //1 day

}))

app.use(passport.initialize())
app.use(passport.session())


app.use(
    cors({
      origin: "http://localhost:3000",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
    })
  );

app.use('/auth',authRoute)


app.listen(PORT,()=>{
    console.log(`Listening to port ${PORT}`)
})