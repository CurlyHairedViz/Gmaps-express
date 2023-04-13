let map;

const barrie = { lat: 44.3894, lng: -79.6903 };
const georgian = { lat: 44.410937, lng: -79.668694 };

async function initMap() {
  
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: barrie,
    zoom: 15,
    // mapId: "9f46c48612bd86b2",
  });
}

initMap();


// inclass exercise
// Add a marker
// step 1:  create a async function to add a marker to the map
// step 2: create a marker object with with marker library -  await new google.maps.Marker({ position: 'latitude and longitude', map: map}
// step 3: create a variable and add {lat: 'latitude', lng: 'longitude'}
  // Step 3.1: get any location with its latitude and longitude 
// step 4: map : map after the position
// step 5: go to index.hbs


async function addMarkertoGeorgian() {
  
  const marker = await new google.maps.Marker({
    position: georgian,
    // label: "Georgian College",
    // icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    map: map,
  });
}


