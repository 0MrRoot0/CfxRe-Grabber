const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; 
rl.question('CFX.RE URL : ', function (name) {
    	var req = new XMLHttpRequest();
	req.open('GET', "https://"+name, false);
	req.send(null);
	var headers = req.getResponseHeader('x-citizenfx-url')
	rep_one = headers.replace("http://","");
	rep_two = rep_one.replace(":30120","");
	rep_done = rep_two.replace("/","");
	console.log("IP EXTRACTED :" + rep_done);   
    	rl.close();
});	
