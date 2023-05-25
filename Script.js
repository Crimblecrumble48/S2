const Blog = document.getElementById('BlogInputs')

function BlogEntry(input){

    console.log(input)

    if(input === 1){
        document.getElementById('a1').style.display = "block"
        document.getElementById('a2').style.display = "none"
        document.getElementById('a3').style.display = "none"
        document.getElementById('a4').style.display = "none"
        document.getElementById('a5').style.display = "none"
    }

    else if(input === 2){
        document.getElementById('a2').style.display = "block"
        document.getElementById('a1').style.display = "none"
        document.getElementById('a3').style.display = "none"
        document.getElementById('a4').style.display = "none"
        document.getElementById('a5').style.display = "none"
    }
    else if(input === 3){
        document.getElementById('a3').style.display = "block"
        document.getElementById('a1').style.display = "none"
        document.getElementById('a2').style.display = "none"
        document.getElementById('a4').style.display = "none"
        document.getElementById('a5').style.display = "none"
    }
    else if(input === 4){
        document.getElementById('a4').style.display = "block"
        document.getElementById('a1').style.display = "none"
        document.getElementById('a2').style.display = "none"
        document.getElementById('a3').style.display = "none"
        document.getElementById('a5').style.display = "none"
    }
    else if(input === 5){
        document.getElementById('a5').style.display = "block"
        document.getElementById('a1').style.display = "none"
        document.getElementById('a2').style.display = "none"
        document.getElementById('a3').style.display = "none"
        document.getElementById('a4').style.display = "none"
    }
}
function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.43976121815247, -0.9359071119258889),
      zoom:18,
      mapTypeId: google.maps.MapTypeId.SATELLITE
      
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    
    new google.maps.Marker({ 
        position: { lat: 51.43976121815247, lng: -0.9359071119258889},
        map,
        title: "CINN"
    })
    }
