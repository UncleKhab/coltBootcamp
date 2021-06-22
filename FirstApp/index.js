const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('we got a request');
//     res.send('<h1>this is my webpage</h1>');
// })

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
})
app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
})
app.get('/r/:subreddit/:postId', (req,res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h1>Viewing post id ${postId} on the subreddit ${subreddit}</h1>`);
})
app.get('/cats', (req, res) => {
    res.send('MEWO!!');
})
app.post('/cats', (req, res)=>{
    res.send('POST REQUEST TO /cast!!')
})

app.get('/dogs', (req,res) => {
    res.send('WOOF!');
})
app.get('/search' , (req, res) => {
    const {q} = req.query;
    if(!q) {
        res.send('nothing to see without q')
    }
    console.log(req);
    res.send(`hello there, ${q};`);
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})


// /r/SOMETHING
// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})