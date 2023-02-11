const youtubeVid = document.querySelector(".youtubeVid");
const search = document.querySelector("#search");
const video = document.getElementById("video")
//const randomColor = Math.floor(Math.random()*16777215).toString(16);

var allchar="0123456789ABCDEF"


 const submit = document.getElementById("submit")



function renderYoutube(){
const maxResults = 1;

const key = "AIzaSyCrjxtAklSjZeOV4PFQ7BBNOgoVHZfjZX0"
    const url = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=${maxResults}&q=${search.value}`;
  
    fetch(url).then(res => res.json()).then(data => {
console.log(data)
var videoAppear = data.items[0].id.videoId
console.log(data.items[0].id.videoId)
//const youtubeLink = "https://www.youtube.com/watch?v=" + data.items[0].id.videoId
const youtubeLink = "https://www.youtube.com/embed/" +videoAppear
video.setAttribute("src", youtubeLink );

 const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;




})
}
    // for(var i=0; i<6; i++){
    //     randcolor += allchar[Math.floor(Math.random()*16)];  
    //  }
    //  document.body.style.backgroundColor= "#"+ randcolor;
     
 submit.addEventListener("click", renderYoutube)
 