const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");
const passport = require("passport");
const session = require('express-session')
const sequelizeStore = require('connect-session-sequelize')(session.Store)

// const cors = require('cors');
const mystore = new sequelizeStore({
  db: db
})
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  store: mystore,
  cookie:{
    maxAge: 1000 * 60 * 60 * 24
  }
}))
mystore.sync()
// body-parser
const bodyParser = require("body-parser");


// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Serve Public
app.use(express.static(path.join(__dirname, "public")));

// Serve
app.use("/uploads/organizers", express.static("./uploads/organizers"));

// Organizer Router
const organizerRoutes = require("./routes/organizer");

// Port
const port = process.env.PORT || 3008;

// Connect to database
const sync = async () => await db.sync({ alter: true, force: false });
sync();

// Passport

require('./config/passport')
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next)=>{

  console.log(req.session)
  // console.log(req.user)
  next()
})



app.use('/',require("./routes/auth"))

// Organizer Route:
app.use("/organizers", organizerRoutes);

// Program Route:
app.use("/programs", require("./routes/program"));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


