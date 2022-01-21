const express = require('express')
const bodyParser = require('body-parser')
const { Departement, User } = require('./sequelize')
const app = express()
app.use(bodyParser.json())


// Create a Departement
app.post('/demoApi/departement', (req, res) => {
console.log(req.body)
Departement.create(req.body)
.then(departement => res.json(departement))
})
// create a user
app.post('/demoApi/user', (req, res) => {
console.log("user==>", req.body)
User.create(req.body)
.then(user => res.json(user))
})
// get all users
app.get('/demoApi/users', (req, res) => { 
User.findAll().then(users =>
res.json(users))
})
// get all departements
app.get('/demoApi/departements', (req, res) => {
    Departement.findAll().then(departements =>
res.json(departements))
})
// get user by  userId
app.get('/demoApi/user/:id', (req, res) => {
User.findOne(
{
where: { id: req.params.id, },
}
).then(user => res.json(user))
})
// get departement by id
app.get('/demoApi/departement/:id', (req, res) => {
    Departement.findOne(
{
where: { id: req.params.id, },
}
).then(departement => res.json(departement))
})
// get departement with his user list
app.get('/demoApi/departementHasManyusers/:id', (req, res) => {
let query;
query = Departement.findAll({
where: { id: req.params.id, },
include: [{ model: User }
]
})
return query.then(departement => res.json(departement))
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index', {
        
    })
})





const port = 3001
app.listen(port, () => {console.log(`Running on http://localhost:${port}`)
})