const express = require('express');
const app = express();
const path = require('path')

// 
const Organizer = require('./models/Organizer')
const OrgAccount = require('./models/OrganizerAccount')

// body-parser
const bodyParser = require('body-parser')

// view engin
const hbs = require('express-handlebars')

// DB
const db = require('./db')

// Body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Serve Public
app.use(express.static(path.join(__dirname, 'public')))

// view engin
app.engine('handlebars', hbs.engine({
    defaultLayout: 'main',
    helpers: require('./public/js/helpers') //how to serve it from public folder ?
}))

app.set('view engine', 'handlebars')



// associations
// Oragizer.hasOne(OrgAccount,{
//     foreignKey: {
//         name: 'orgAcc'
//       }
// })

// OrgAccount.belongsTo(Oragizer,{
//     foreignKey: {
//         name: 'organizerId'
//       }
// })

// Serve
app.use('/uploads/organizers',express.static('./uploads/organizers'))

Organizer.associate = function(){
    Organizer.belongsTo(OrganizerAccount)
}

// Organizer Router
const organizerRoutes = require('./routes/organizer');
const { use } = require('./routes/organizer');


// Port
const port = process.env.PORT || 3005;

const sync = async () => await db.sync({alter:true, force: false})
sync()


app.use('/organizers', organizerRoutes)



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})