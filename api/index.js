const express = require('express');
// const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 3000;
// var bodyParser = require('body-parser');
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', function (req, res) {
    // console.log(req.body);
     const data = req.body;
     console.log('req.body', data);
     res.send('api: OK');
    });
    
process.env.NOW_REGION ? (module.express = app) : app.listen(PORT);
