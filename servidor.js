const express = require('express')
const morgan = require('morgan')
const routesProducts = require('./routes/products')


const app = express()
const PORT = 8080
app.listen(8080)
console.log(`servidor escuchando en el puerto ${PORT}`)



app.use(morgan('dev'))
app.use(express.json())

app.set('views','./views')
app.set('view engine','ejs')

app.use('/api/productos',routesProducts)

app.get('/', (req, res) => {
    res.render('index');
})

