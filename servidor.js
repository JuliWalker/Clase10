const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = 8080
const routesProducts = require('./routes/products')


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('views',path.join(__dirname, 'views' ));
app.set('view engine','ejs')

app.use('/api/productos',routesProducts)

app.get('/', (req, res) => {
    res.render('index');
})


try {
    app.listen(PORT);
    console.log(`Server on port ${PORT}...`)
} catch (error) {
    console.log('Error de conexión con el servidor...', error)
}