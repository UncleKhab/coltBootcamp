const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');


//Serving Static Assets 
app.use(express.static(path.join(__dirname, 'public')))



//Setting up the parsing;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//Setting the method override so it allows put/delete requests
app.use(methodOverride('_method'))


// Tell express to use ejs
app.set('view engine', 'ejs')

// __dirname -> the directory in which the file is in 
// You HAVE TO seth path constant before!
app.set('views', path.join(__dirname, '/views'))

let comments = [
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
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment})
})
app.patch('/comments/:id', (req, res) => {
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req,res) => {
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments');

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