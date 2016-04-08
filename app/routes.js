var express = require('express');
var router = express.Router();
// var orgData = require('../app/models/org-data');
var http = require('https');
var request = require('request-json');
var client = request.createClient('https://www.gov.uk/api/');
// var orgChart = require('../app/models/org-data.js')


router.get('/', function (req, res) {
  
  res.render('index');

});


// Example routes - feel free to delete these

// Passing data into a page

function page(body){

  router.get('/org-chart', function (req, res) {

    console.log('inside router.get', body)

    res.render('org-chart',{orgData:  body});
    
  });

}

client.get('organisations?page=1', function(err, res, body) {

  page(body);

  // console.log('got some json', body);




  // http.get('https://www.gov.uk/api/organisations?page=1', (res2) => {
  //  res2.setEncoding('utf8')
  //  res2.on("data", function(chunk){
  //    orgData = chunk 
  //    console.log(orgData) // logs the full data
     // res.render('org-chart',{orgData: 'stuff'});
  //  });
  // }).on('error', (e) => {
  //  console.log(`Got error: ${e.message}`);
  // });

});

// Branching

router.get('/examples/over-18', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;

  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');

  }

});

// add your routes here

module.exports = router;
