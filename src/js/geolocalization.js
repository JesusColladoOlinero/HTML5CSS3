function initMap(long, latitude) {
	var uluru = {lat: parseInt(latitude), lng: parseInt(long)};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 4,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});        
}

// Código javascript 
navigator.geolocation.getCurrentPosition(  function(position) {    
    console.log("getCurrentPosition", position.coords.latitude, position.coords.longitude); 
    initMap(position.coords.longitude, position.coords.latitude);
  }); 
  // Se ejecutará cada vez que cambie la posición 
navigator.geolocation.watchPosition(  function(position) {    
    console.log("watchPosition", position.coords.latitude, position.coords.longitude); 
    initMap(position.coords.longitude, position.coords.latitude);
  });
