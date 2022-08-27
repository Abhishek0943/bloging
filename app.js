const express = require('express');
const app = express();
const mongoose = require("mongoose")
const data = require('./models/articles')
// const articleRouter = require('./routes/article');
// app.use('/article', articleRouter);

mongoose.connect('mongodb://localhost/blog')
const port = process.env.PORT || 5000;
app.listen(port)
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAT: new Date,
        description: 'Test description'
    }]
    res.render("articles/index", { articles: articles });
});
app.get('/article/new', (req, res) => {
    res.render('articles/new');
})
// app.post('/', (res, req) => {
    
//     try {
//         res.redirect(`/articles/${article.id}`)
//     }
//     catch (e){
        
//     }
// })
app.post('/', async function (req, res) {
    const article = new Article({
        titel: req.body.titel,
        discription: req.body.discription,
        markdown: req.body.markdown
    })
    try {  
        article = await article.save()
        // res.redirect(`/`)
    } catch (e) {
       console.log(e)
    }
  });
  