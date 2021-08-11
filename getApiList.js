var apikey='2H6sVB7RCK3Ui5UiVS4w9R9jPrRuuRAl'
var urlbase='https://api.nytimes.com/svc/search/v2/articlesearch.json?q=frogs&api-key=2H6sVB7RCK3Ui5UiVS4w9R9jPrRuuRAl'
var keyword = 'Value from the textbox that the user inputs in here'
var query = '?q='
var apikeyidentity = 'api-key='

//var url = urlbase + query + keyword + apikeyidentity + apikey;

var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=frogs&api-key=2H6sVB7RCK3Ui5UiVS4w9R9jPrRuuRAl'

function setup() {
  noCanvas();
  loadJSON(url, getData);
}

function getData(data) {
  var articles = data.response.docs;

  //loop to get all results from artclesearch

  for (var i = 0; i < articles.length; i++){
    createElement('h1', articles[i].headline.main);
    createP(articles[i].snippet);
    createP(articles[i].lead_paragraph);
    createP(articles[i].web_url);
  }
}
