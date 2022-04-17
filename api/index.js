const express = require("express");
const request = require("request");
const app = express();
const PORT = process.env.PORT || 3000; //Heroku用
//const body = require('body-parser');
const accessToken = "mekr7Uaoe//a1/6jfxN51kV7e0NfLvKORrighgqNsLNekCdpVOjVIWzf4sbClxJPN9kxQ/VteAUE5MVf3Rw3//ApnhPZo4M1+7GXZD0en7sBQF2Mlg1OukUXg78vN36bygdGGJSoTHNbki6Dq9GglAdB04t89/1O/w1cDnyilFU="
/*
request.get('http://www.yahoo.co.jp', function(err, res, body) {
  if (err) {
    console.log('Error: ' + err.message);
    return;
  }
  console.log(body);
});*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(body.raw({ type:'*/*' }));

app.post("/", function (req, res) {
  console.log(req.body);
  const data = req.body.events[0].message;
  console.log("req.body", data);
  res.send("api: ok");
  const options = {
    url: `https://api.line.me/v2/bot/message/${data}/content`,
    method: "get",
    headers: {
      Authorization: "Bearer " + accessToken,
    encoding: null
  };
  request(options, function (error, response, body) {
    const buffer = new Buffer.from(body);
    console.log(buffer);
  });
});
process.env.NOW_REGION ? (module.express = app) : app.listen(PORT); //Heroku用