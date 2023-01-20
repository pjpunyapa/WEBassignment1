/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: _____Punyapa Jongrak________ Student ID: _____113241228_____ Date: _____19 Jan 2023___
*
********************************************************************************/ 



//step 3
var serverVerbs = [ "GET","GET", "GET","POST","GET", "POST"];
var serverPaths = ["/", "/about", "/contact","/login", "/panel","/logout"];
var serverResponses= ["Welcome to WEB700 Assignment 1", "This assignment was prepared by Punyapa Jongrak", "Punyapa Jongrak: pjongrak@myseneca.ca","User Logged In","Main Panel","Logout Complete"];

//step 4
function httpRequest(httpVerb,path){
    for(var i =0; i < 5; i++){
        if(serverVerbs[i]==httpVerb && serverPaths[i]==path){
            return "200: "+serverResponses[i]
        }
    }
        return "404: Unable to process httpVerb request for path"
}

//step 5
console.log(httpRequest("GET", "/")); // shows "200: Welcome to WEB700 Assignment 1"
console.log(httpRequest("GET", "/about")); // shows "200: This Assignment was prepared by Student Name"
console.log(httpRequest("PUT", "/")); // shows "404: Unable to process PUT request for /"

//step 6
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function automateTests(){

var testVerbs = [ "GET", "POST"];
var testPaths = [ "/", "/about", "/contact","/login", "/panel","/logout","/randompath1","/randompath2"];

function randomRequest(){
    randVerb = getRandomInt(0,1)
    randPath = getRandomInt(0,7)

    console.log(httpRequest(testVerbs[randVerb],testPaths[randPath]))
}
setInterval(randomRequest,1)
}

automateTests()