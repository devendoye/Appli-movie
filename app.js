const express = require('express')
const app = express()
PORT =  4000
app.get('/',(req,res)=>
{
    res.send("Hello word darling")
})

app.listen(PORT,()=>
{
    console.log(`appel sur le port ecoute ${PORT}`)
}
)