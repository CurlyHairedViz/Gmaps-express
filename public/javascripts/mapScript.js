let map;

// location Latitude and Longitude
const barrie = { lat: 44.3894, lng: -79.6903 };
const georgian = { lat: 44.410937, lng: -79.668694 };

async function initMap() {
  // fetches maps library from google
  const { Map } = await google.maps.importLibrary("maps");

  // added map object with location parameters
  map = new Map(document.getElementById("map"), {
    center: barrie,
    zoom: 13,
    // This adds custom style to the maps
    // mapId: "Map_ID",
  });
}

// Add a marker to the map
// Step 1: Create a async function to add a marker to the map

 
  // Step 2: Create a marker object with with Marker library -  await new google.maps.Marker({ position: 'latitude and longitude', map: map });
  
    // Step 3: create a variable and add {lat: 'latitude', lng: 'longitude'}
      // Step 3.1: get any location with its latitude and longitude 
    
    // Optional steps:
      // Step 8: add a label to the marker
      // Step 9: add an icon to the marker with google provided link https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png

    // Step 4: attach map to the function by adding map : map after the position
    
// Step 5: go to index.hbs

async function addMarkertoGeorgian() {
  const marker = await new google.maps.Marker({
    position: georgian,
    // This adds custom marker and a label to the place marked
    // label: "Georgian College",
    // icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    map: map,
  });
}

initMap();

