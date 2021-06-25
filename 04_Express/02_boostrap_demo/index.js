const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');
//Serving Static Assets 
app.use(express.static(path.join(__dirname, 'public')))

// Tell express to use ejs
app.set('view engine', 'ejs')
// Set the path to the root folder
// __dirname -> the directory in which the file is in
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req,res) => {
    res.render('home');
})
//Looping over 
app.get('/cats', (req, res) => {
    const cats = ['French Steve', 'Windows', 'Not', 'Working', 'Properly']
    res.render('cats', {cats});
})
app.get('/rand', (req,res) =>{
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num });
})
// Params
app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit];
    if(data)
    {
        res.render('subreddit', {...data});
    }
    else{
        res.render('notfound', {subreddit});
    }
})
app.listen(3000, () => {
    console.log('listening on port 3000');
})