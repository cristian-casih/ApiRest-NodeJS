const express = require('express');
const DB = require('./connection/database');
const morgan = require('morgan');

const app = express();
//settings
const PORT = process.env.PORT || 5000;
//middlewares
app.use(express.json());
app.use(morgan('dev'))
//routes
app.use('/', require('./src/routes/index'));


 app.use('/', (req, res) => {
     if (!res.status(404)) {
        return res.json({
            'error': true,
            'msg': 'Rout incoorect'
        });
    }else {
        res.json({
            'error': false,
            'msg': 'Hello World with Express '
        });

    } 
});
 
//starting the server
app.listen(PORT, () => {
	console.log('App started on port', PORT);

})
