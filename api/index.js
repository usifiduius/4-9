const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//JS obj to json
/*const to_json=[{ Name :"Manaya",Gender :"Man"},
{ Name :"Manuel",Gender :"Man"}]
const json_string = JSON.stringify(to_json);
//json to JS obj
const from_json = JSON.parse(json_string);*/


app.post('/', function (req, res){
 console.log(req.body.Name);
});

//check
// console.log("Start");
 //console.log(from_json[0].Name);
 //console.log(data);
app.listen(3000, function () {
});
(process.env.NOW_REGION) ? module.exports = app : app.listen(PORT);