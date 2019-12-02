const express = require('express')
const bodyparser = require('body-parser')
const app = express()
PORT =  4000


app.set('views','./views')
app.set('view engine','ejs')
app.use(bodyparser.urlencoded({ extended: false }))



title = "voici les derniers films français"
movietitle =[
    {title:'luc de finess',year:'1965'},
    {title:'kona',year:'1945'},
    {title:'vandame',year:'1970'}
]

app.get('/movies',(req,res)=>
{
 res.render('movies', {movies: movietitle, title:title})
})

app.get('/movies/:id',(req,res)=>
{
    let id = req.params.id
    res.render('movies-details', { moviesid : id})
})

app.post('/movies',(req,res) =>
{
    console.log(req.body)
    res.sendStatus(201);
})

app.get('/',(req,res)=>
{
    //res.send("Hello word darling")
    res.render('index')
})

app.listen(PORT,()=>
{
    console.log(`appel sur le port ecoute ${PORT}`)
}
)