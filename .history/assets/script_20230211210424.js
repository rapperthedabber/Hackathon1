const youtubeVid = document.querySelector(".youtubeVid");
const search = document.querySelector("#search");
const video = document.getElementById("video")
    //const randomColor = Math.floor(Math.random()*16777215).toString(16);

var allchar = "0123456789ABCDEF"


const submit = document.getElementById("submit")



function renderYoutube() {
    const maxResults = 1;

    const key = "6EF5zwdj96MyqO5ECCd5ZbxsPLnZSH3ZETcJ1mKczpRdz6wtZ7KkCO+lP8on28On7vJIrfBo69vUsBFo27Dlr7GNN1/I2EEnMErljj7M8TiMU1f99Opg5iYMXQuUFVUL"
    const url = "https://api.vimeo.com/oauth/" + key
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
            //var videoAppear = data.items[0].id.videoId
            //console.log(data.items[0].id.videoId)
            //const youtubeLink = "https://www.youtube.com/watch?v=" + data.items[0].id.videoId
        const youtubeLink = "https://www.youtube.com/embed/" + videoAppear
        video.setAttribute("src", youtubeLink);

        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor;




    })
}
// for(var i=0; i<6; i++){
//     randcolor += allchar[Math.floor(Math.random()*16)];  
//  }
//  document.body.style.backgroundColor= "#"+ randcolor;

submit.addEventListener("click", renderYoutube)