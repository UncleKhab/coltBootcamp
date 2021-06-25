const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');


//Serving Static Assets 
app.use(express.static(path.join(__dirname, 'public')))

//Setting up the parsing;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// Tell express to use ejs
app.set('view engine', 'ejs')

// __dirname -> the directory in which the file is in 
// You HAVE TO seth path constant before!
app.set('views', path.join(__dirname, '/views'))

const comments = [
    {
        id:uuid(),
        username: 'Todd',
        comment: `lol that's funny`
    },
    {
        id:uuid(),
        username: 'Mike',
        comment: `yes it is`
    },
    {
        id:uuid(),
        username: 'John',
        comment: `LMAO`
    },
    {
        id:uuid(),
        username: 'Helen',
        comment: `first!`
    }
]

app.get('/', (req,res)=>{
    res.render('home');
});
// Get  All Comments
app.get('/comments', (req,res) => {
    res.render('comments/index', {comments});
})
// Route to create new comments
app.get('/comments/new', (req,res) => {
    res.render('comments/new');
})
// Route to post new comment 
// Uses redirect to go back to all comments
app.post('/comments', (req,res) => {
    const { username, comment } = req.body;
    comments.push({username, comment, id: uuid() });
    res.redirect('/comments');
})
// Get's a single comment and renders it (based on id)
app.get('/comments/:id', (req,res) => { 
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment})

})



app.get('/tacos', (req,res) => {
    res.send('GET TACOS');
})

app.post('/tacos',(req,res) =>{
    const {meat, qty } = req.body;
    res.send(`You ordered ${qty} ${meat}`);
})

app.get('/getform', (req,res) => {
    res.render('getform');
})
app.get('/lesson', (req,res) => {
    res.render('lesson');
})
app.listen(3000, () => {
    console.log('listening');
})