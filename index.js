const express=require ('express')
const app =express()
const path = require('path')
const port=3000

//mideware
app.use(express.static('public'));

//rutas
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))
});
 
//servidor 

app.listen(port, () => console.log(`servidor levantado en el puerto ${port}\n http://localhost:${port}`
))