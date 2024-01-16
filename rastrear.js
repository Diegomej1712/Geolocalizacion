/*function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}*/

// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
let map, infoWindow, marker;

function initMap() 
{
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng:  0},
        zoom: 10,
    });
    infoWindow = new google.maps.InfoWindow();

    const locationButton = document.createElement("button");

    locationButton.textContent = "Localizar";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) 
    {
        setTimeout(() => {  
            navigator.geolocation.getCurrentPosition(
                (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                const accuracyCircle = new google.maps.Circle({
                    center: pos,
                    radius: position.coords.accuracy,
                    map: map,
                    fillColor: '#00FF00',
                    fillOpacity: 0.1,
                    strokeColor: '#00FF00',
                    strokeOpacity: 0.8,
                    strokeWeight: 1,
                });

                infoWindow.setPosition(pos);
                infoWindow.setContent("Encontrado");
                infoWindow.open(map);
                map.setCenter(pos);
                },
                () => {
                handleLocationError(true, infoWindow, map.getCenter());
                },
            );
        }, 3000);
    } 
    else 
    {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) 
{
    infoWindow.setPosition(pos);
    infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation.",
    );
    infoWindow.open(map);
}

window.initMap = initMap;