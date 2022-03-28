const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");
const cors = require('cors');
const cookieParser = require('cookie-parser')



// body-parser
const bodyParser = require("body-parser");


// Main library passport and express-session
const passport = require('passport')
const session = require('express-session')

const initializePassport = require('./middleware/initializePassport');
app.use(cors({
  origin: 'http://127.0.0.1:3000',
  credentials: true
}))

app.use(cookieParser())

// Initial Middleware
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge: 1000 * 60 * 60 *24,
    secure: false,  // if true only transmit cookie over https
    httpOnly: false,
  },
}))




// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// init passport on every route call
app.use(passport.initialize())

// allow passport to use "express-session"
app.use(passport.session())

initializePassport(passport)



// User Model
const User = require('./models/User')

// Serve Public
app.use(express.static(path.join(__dirname, "public")));

// Serve
app.use("/uploads/organizers", express.static("./uploads/organizers"));

// Organizer Router
const organizerRoutes = require("./routes/organizer");
const { use } = require("./routes/organizer");

// Port
const port = process.env.PORT || 3005;

// Connect to database
const sync = async () => await db.sync({ alter: true, force: false });
sync();

app.use('/',require("./routes/auth"))

// Organizer Route:
app.use("/organizers", organizerRoutes);

// Program Route:
app.use("/programs", require("./routes/program"));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


