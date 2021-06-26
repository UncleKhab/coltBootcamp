const express = require('express');
const app = express()
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override')

const port = 3000

// Serving Static Assets
app.use(express.static(path.join(__dirname, 'public')))
// Serving View Templates
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')

//Setting up the parsing;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(methodOverride('_method'));
let groceries = [
    {   
        id: uuid(),
        name: "Milk",
        qty: 1,
    },
    {
        id: uuid(),
        name: "eggs",
        qty: 1,
    },
    {
        id: uuid(),
        name: "Bread",
        qty: 1,
    },
    {
        id: uuid(),
        name: "Sugar",
        qty: 1,
    }
]
app.get('/', (req,res) => {
    res.render('home');
})
app.get('/home', (req,res) => {
    res.render('home');
})
app.get('/groceries', (req,res) => {
    res.render('groceries/index', {groceries})
})
app.post('/groceries', (req,res) => {
    const newItem = req.body;
    newItem.id = uuid();
    groceries.push(newItem);
    res.redirect('/groceries');
})
app.get('/groceries/:id', (req,res) => {
    const {id} = req.params;
    const grocery = groceries.find(g => g.id === id);
    res.send(grocery)
})
app.delete('/groceries/:id', (req, res) => {
    const {id} = req.params;
    groceries = groceries.filter(g => g.id !== id);
    res.redirect('/groceries');
})
app.patch('/groceries/:id', (req,res) => {
    const {id} = req.params;
    const grocery = groceries.find(g => g.id === id);
    const {name, qty} = req.body;
    grocery.name = name;
    grocery.qty = qty;
    res.redirect('/groceries');
})
app.listen(port, () => {
    console.log('listening')
})