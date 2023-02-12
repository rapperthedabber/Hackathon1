
const map = document.getElementById("map");
const apiKey = "l7g2dy6PZR0KyR28j7mqu1fTfBSf9hnA";
 const url = "https://api.tomtom.com/map/1/staticimage?layer=basic&style=main&format=png&zoom=12&center=4.899886%2C%2052.379031&width=512&height=512&view=Unified&key=" + apiKey;

fetch(url).then(res => res.json()).catch(data => 
    console.log(data)
    )
