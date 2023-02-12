const searchUrl = "https://en.wikipedia.org/w/api.php";
const content = "https://en.wikipedia.org/w/api.php";

let userInput;

function setup() {
    document.querySelector('.wikiResult').classList.remove('hide')

    noCanvas();
    userInput = select('#userinput');
    //search.changed(goWiki);
    userInput.changed(startSearch);


    function start_search() {
        conter = 0;
        goWiki(search.value());
    }

    function goWiki() {
        let term = search.value();
        let url = searchUrl + term;
        loadJSON(url, gotSearch, 'jsonp');
        console.log(url)
    }

    function gotSearch(data) {
        console.log(data[1][0]);
        title = title.replace(/\s+/g, '_');
        console.log(title);

        let url = content + title
        loadJSON(url, gotContents, 'jsonp')

    }

    function gotContents(data) {
        let page = data.query.pages;
        let pageID = Object.keys(data.query.pages)[0];
        console.log(pageID);
        let content = page[pageID].revisions[0]['*'];
        console.log(content);
        document.getElementById("wiki-article").innerHTML = parseResponseJson.parse.text;
    }


    function callWikiAPI() {
        var search = document.querySelector("#search").val();
        fetchWikipedia(search);
    }
    document.querySelector("#search").click(function(event) {
        event.preventDefault();
        callWikiAPI();
    })

}