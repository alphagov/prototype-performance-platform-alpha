var express = require('express');
var router = express.Router();
// var orgData = require('../app/models/org-data');
var http = require('https');
var request = require('request-json');
var client = request.createClient('https://www.gov.uk/api/');
// var orgChart = require('../app/models/org-data.js')


router.get('/', function (req, res) {

  res.render('performance/index');

});


// Example routes - feel free to delete these

// Passing data into a page

function page(body){

  router.get('/org-chart', function (req, res) {

    // console.log('inside router.get', body)
    var orgData = JSON.stringify(body)

    // console.log(orgData)

    res.render('org-chart',{orgData:  orgData});
    
  });

}

client.get('organisations?page=1', function(err, res, body) {

  var allOrgs = []

  //loop through pages
  for (i = 1; i <= body.pages; i++) {
    client.get('organisations?page='+i, function(err, res, body){
      var currentPage = body.results // obj

      // console.log(Array.isArray(currentPage))

      if(Array.isArray(currentPage)){
        // loop through orgs in current page
        for(i = 0; i < currentPage.length; i++){
          allOrgs.push(currentPage[i])        
        }        
      }else{
        allOrgs.push(currentPage)
      }



    })
  }

  console.dir(allOrgs)

  page(allOrgs);

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
router.get('/performance/setup/transaction/new', function (req, res) {

  res.render('performance/setup/transaction/new');

});


module.exports = router;
