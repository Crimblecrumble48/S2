const Blog = document.getElementById('BlogInputs') // Set the BlogInputs to a variable

function BlogEntry(input){ // Function to add a new blog entry

    console.log(input)

    if(input === 1){ // If the input is 1 then display the first blog entry and don't display any other article
        document.getElementById('a1').style.display = "block"
        document.getElementById('a2').style.display = "none"
        document.getElementById('a3').style.display = "none"
        document.getElementById('a4').style.display = "none"
        document.getElementById('a5').style.display = "none"
    }

    else if(input === 2){ // If the input is 2 then display the second blog entry and don't display any other article
        document.getElementById('a2').style.display = "block"
        document.getElementById('a1').style.display = "none"
        document.getElementById('a3').style.display = "none"
        document.getElementById('a4').style.display = "none"
        document.getElementById('a5').style.display = "none"
    }
    else if(input === 3){ // If the input is 3 then display the third blog entry and don't display any other article
        document.getElementById('a3').style.display = "block"
        document.getElementById('a1').style.display = "none"
        document.getElementById('a2').style.display = "none"
        document.getElementById('a4').style.display = "none"
        document.getElementById('a5').style.display = "none"
    }
    else if(input === 4){ // If the input is 4 then display the fourth blog entry and don't display any other article
        document.getElementById('a4').style.display = "block"
        document.getElementById('a1').style.display = "none"
        document.getElementById('a2').style.display = "none"
        document.getElementById('a3').style.display = "none"
        document.getElementById('a5').style.display = "none"
    }
    else if(input === 5){ // If the input is 5 then display the fifth blog entry and don't display any other article
        document.getElementById('a5').style.display = "block"
        document.getElementById('a1').style.display = "none"
        document.getElementById('a2').style.display = "none"
        document.getElementById('a3').style.display = "none"
        document.getElementById('a4').style.display = "none"
    }
}
function myMap() { // Function to display the map
    var mapProp= { // Set the map properties
      center:new google.maps.LatLng(51.43976121815247, -0.9359071119258889), // Set the center of the map
      zoom:18, // Set the zoom level
      mapTypeId: google.maps.MapTypeId.SATELLITE // Set the map type - Satellite image
      
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp); // Create the map
    
    new google.maps.Marker({  // Create a marker on the map
        position: { lat: 51.43976121815247, lng: -0.9359071119258889}, // Set the position of the marker
        map, // Set the map
        title: "CINN" // Set the title of the marker
    })
    }
