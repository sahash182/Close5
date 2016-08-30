
var express = require('express'),
    bodyParser = require('body-parser'),    
    app =express();

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
var data = require ('./data');
//serving index.html HomePage
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// APIS for the data

// get all items 
app.get('/api/data', function (req, res){
  res.send(data);

});

//get by descending date
app.get('/api/data/date/desc/', function (req, res){
  data.sort(sortByDateDesc);

  res.send(data);
});



//get by ascending date
app.get('/api/data/date/asc', function (req, res){
  data.sort(sortByDateAsc);
  res.send(data);
});

//get by ascending price
app.get('/api/data/price/asc', function (req, res){
  data.sort(sortByPriceAsc);
  res.send(data);
});

//get by desecnding price
app.get('/api/data/price/desc', function (req, res){
  data.sort(sortByPriceDesc);
  res.send(data);
});

//get by id
app.get('/api/data/id/:id', function (req, res){
  var targetId = req.params.id;
   var temp = null;
   data.forEach( function(element, index) {
     if (element.id == targetId) {
      temp = element;
      res.send(temp);
      return;
     };
   });

});
//get by userid
app.get('/api/data/user/:id', function (req, res){
  var targetId = req.params.id;
   var temp = [];
   data.forEach( function(element, index) {
     if (element.userId == targetId) {
      temp.push(element);
     };
   });
  res.send(temp);
});

//get items by location  by location
app.get('/api/data/location/:lat/:longt', function (req, res){
  var temp = [];
      //user location seed data
    var lat1 = req.params.lat;
    var long1 = req.params.longt;
  data.forEach( function(element, index) {
    
    if(getDistance(lat1, long1, element.loc[0], element.loc[1]) <= 50){
      temp.push(element);
    }
  });
  res.send(temp);

});


// Helper functions
// sort ascending for dates
  function sortByDateAsc(a,b)
{
  return new Date(a.createdAt) - new Date(b.createdAt)
}
// sort descending for dates
function sortByDateDesc(a,b)
{
  return new Date(b.createdAt) - new Date(a.createdAt)
}

// sort descending for price
function sortByPriceDesc(a,b)
{
  return  b.price - a.price
}
// sort ascending for price
function sortByPriceAsc(a,b)
{
  console.log(a.price - b.price);
  return  a.price - b.price
}

//calculate distance between two location
function getDistance(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  
 d = ConvertKmToMile(d);
 console.log(d);
 return d;
}
//convert kilometer to mile
function ConvertKmToMile(km){

  return km * 0.621371;
}
//convert degree to radius
function deg2rad(deg) {
  return deg * (Math.PI/180)
}


// defining the port to listen the app
app.listen(process.env.PORT || require('./config').PORT, function(){
  console.log('server started on locahost:8080');
});
