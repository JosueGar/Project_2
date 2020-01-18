
function initMap() {
  var myMap = L.map("map-id", {
    center: [28.5383, -81.3792],
    zoom: 13
  });
  
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  
  var data = init_objs;
  
  // Create a new marker cluster group
  var markers = L.markerClusterGroup();
  
  data.forEach((x) => {
    // var coords = (x.lat, x.lng);
    markers.addLayer(L.marker([x.lat, x.lng]))
  });
  
  myMap.addLayer(markers);
};

function newMap(new_objs) {
  var container = L.DomUtil.get('map-id');
  if(container != null){
  container._leaflet_id = null;
  }
  var myMap = L.map("map-id", {
    center: [28.5383, -81.3792],
    zoom: 13
  });
  
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  
  var data = new_objs;
  console.log(new_objs);
  
  // Create a new marker cluster group
  var markers = L.markerClusterGroup();
  
  data.forEach((x) => {
    // var coords = (x.lat, x.lng);
    markers.addLayer(L.marker([x.lat, x.lng]))
  });
  
  myMap.addLayer(markers);
}

$("select").change(function() {
  // Grab selected crime
  var car = $('#crimeSelect option:selected').text();
  // Grab selected year
  var year = $('#yearSelect option:selected').text();
  // Grab selected Day or Night
  var dn = $('#timeSelect option:selected').text();
  $.getJSON($SCRIPT_ROOT + '/_data_search', {
      car: $('#crimeSelect option:selected').text(),
      year: $('#yearSelect option:selected').text(),
      dn: $('#timeSelect option:selected').text()
  }, function(data) {
      newMap(data.new_objs)
  })
});

initMap();
