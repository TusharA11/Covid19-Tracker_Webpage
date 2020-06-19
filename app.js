var express = require("express");
var app = express();

var request = require("request");
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
// app.use(express.json())

app.get("/", function(req, res){
	request("https://api.rootnet.in/covid19-in/stats/latest", function(error, response, body){
		if(!error && response.statusCode == 200){
	 		var data = JSON.parse(body);
	 		res.render("landing", {data: data});
		}
	});
});

 app.get('/results', (req, res) =>{
 	request("https://api.rootnet.in/covid19-in/stats/latest", function(error, response, body){
		if(!error && response.statusCode == 200){
	 		var data = JSON.parse(body);
	 		var query = req.query.states;
 			res.render('results', {query: query, data: data});
		}
	});
 })

app.listen(3000, function(){
	console.log("Tracking COVID-19 Cases Pan India");
})



// request("https://api.rootnet.in/covid19-in/stats/latest", function(error, response, body){
// 	 if(!error && response.statusCode == 200){
	 	
// 	 	var data = JSON.parse(body);
	 	
// 	 }
// 	});