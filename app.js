const express = require('express')
const app = express()
PORT =  4000


app.set('views','./views')
app.set('view engine','ejs')



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