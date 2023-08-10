const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const errorPage=require('./controller/error')
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRouter= require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRoutes);

app.use(errorPage.error);

app.listen(3000);
