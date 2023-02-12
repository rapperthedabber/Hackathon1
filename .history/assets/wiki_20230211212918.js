let userInput;
async function fetchWikipedia(searchTerm) {
    //document.querySelector('.wikiResult').classList.remove('hide')
    // fetch article title and wiki link of search term
    var openSearchUrl = "https://en.wikipedia.org/w/api.php";
    var params = {
        action: "opensearch",
        search: searchTerm,
        limit: "1",
        namespace: "0",
        format: "json"
    };
    openSearchUrl = openSearchUrl + "?origin=*";
    Object.keys(params).forEach(function(key) { openSearchUrl += "&" + key + "=" + params[key]; });
    var openSearchResponse = await fetch(openSearchUrl);
    var openSearchResponseJson = await openSearchResponse.json();
    var wikiTitle = openSearchResponseJson[1][0];
    var wikiLink = openSearchResponseJson[3][0];
    var wikiLinkArray = wikiLink.split("/");
    var wikiTerm = wikiLinkArray[wikiLinkArray.length - 1];
    document.querySelector('#wiki-title').textContent = 'Wikipedia Article:');
var parseUrl = "https://en.wikipedia.org/w/api.php";
var params = {
    action: "parse",
    page: wikiTerm,
    prop: "text",
    formatversion: 2,
    format: "json"
};
parseUrl = parseUrl + "?origin=*";
Object.keys(params).forEach(function(key) { parseUrl += "&" + key + "=" + params[key]; });
var parseResponse = await fetch(parseUrl);
var parseResponseJson = await parseResponse.json();
document.getElementById("wiki-article").innerHTML = parseResponseJson.parse.text;
}

function callWikiAPI() {
    var searchTerm = search.value;
    fetchWikipedia(searchTerm);
}
//calling API when you click submit 
submit.addEventListener("click", function(event) {
    event.preventDefault();
    callWikiAPI();
})