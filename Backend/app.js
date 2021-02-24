const express = require("express");
var request = require("request");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello world"));
app.get("/test", (req, res) => res.send ("react native project"));

app.get("/User/login/Category/Products", (req, res) => {
request (
    "https://nafeesa.stoplight.io/docs/webapplicationapi/reference/WebApplicationApi.v1.yaml",
    function(error, response, body){
        if(!error && response.statusCode == 200){
        res.send(body); 
         }

     }

);
});
app.listen(port, () => console.log ('Example listening on port ${port}!'));