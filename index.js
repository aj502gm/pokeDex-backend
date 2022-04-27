var express = require('express');
var app = express();

const PORT = process.env.PORT || 5050
const bp = require('body-parser')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//CORS, METHODS ALLOW  
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();    
})

//PRODUCTS ROUTES
app.get('/pokemons', () => {})
app.get('/pokemon/:name',  () => {});
// app.post('/editProduct', (req,res) =>{
//     console.log(req.body)
//     // return editProduct(req,res,req.body);
// });
//app.post('/createProduct',  () => {});

app.listen(PORT, function () {console.log(`POKEMON API AT: ${PORT}!`); });