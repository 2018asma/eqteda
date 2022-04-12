const express = require("express");
const app = express();
const path = require("path");
const db = require("./db");
require('dotenv').config()

const passport = require("passport");
const session = require('express-session')
const sequelizeStore = require('connect-session-sequelize')(session.Store)

const cors = require('cors');
// CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))

// body-parser
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cookie-parser
app.use(cookieParser())






// Serve Public
app.use(express.static(path.join(__dirname, "public")));

// Serve
app.use("/uploads/organizers", express.static("./uploads/organizers"));

// Organizer Router
const adminOrganizerRoutes = require("./routes/admin/organizer");
const organizerRoutes = require("./routes/frontend/organizer");
const { nextTick } = require("process");

// Port
const port = process.env.PORT || 3008;

// Connect to database
const sync = async () => await db.sync({ alter: false, force: false });
sync();

// Passport

require('./config/jwt-strategy')
app.use(passport.initialize())


app.use('/',require("./routes/admin/auth"))

// Organizer Route:
app.use("/admin/organizers", adminOrganizerRoutes);
app.use("/organizers", organizerRoutes);

// Program Route:
app.use("/admin/programs", require("./routes/admin/program"));
app.use("/programs", require("./routes/frontend/program"));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


