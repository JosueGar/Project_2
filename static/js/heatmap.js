var myMap = L.map("map", {
  center: [28.5383, -81.3792],
  zoom: 13
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Store API query variables
var baseURL = "https://data.cityoforlando.net/resource/4y9m-jbmz.json?";
//var baseData = "./Project_2/data/crimes.json";
var date = "$where=case_date_time between'2013-02-19T12:41:00.000' and '2014-10-30T22:15:00.000'";
var category = "&case_offense_category=Assault";
var status = "&status=Mapped";
var limit = "&$limit=100";

// Assemble API query URL
var url = baseURL + date + category + status + limit;

d3.json(url, function(response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i].location;

    if (location) {
      heatArray.push([location.latitude[1], location.longitude[0]]);
    }
  }

  var heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 35
  }).addTo(myMap);

});
