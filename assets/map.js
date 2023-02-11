
var url = 'https://api.maptiler.com/maps/basic-v2/?key=ZGBr8yLQZMNaukrMIorj#-0.2/0.00000/173.02903'




var getLocation =  function(address) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
  
    if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        console.log(latitude, longitude);
        } 
    }); 
  }

  



 