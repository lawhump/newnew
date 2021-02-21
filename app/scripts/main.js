let $ = (query) => {
  var res = document.querySelectorAll(query);

  if (res.length === 1) {
    return res[0];
  }

  return res;
};

var $footer = $('footer');
var $$btns = $('li .btn');


var getMarkup = function(page, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        callback(xmlHttp.responseText);
        console.log(xmlHttp.responseText);
      }
    }
    // TODO
    xmlHttp.open('GET', page, true); // true for asynchronous
    xmlHttp.send(null);
  };


for (var i=0; i<$$btns.length; i++) {
  var page = $$btns[i].dataset.url;
  page = 'markup/' + page + '.html';
  $$btns[i].addEventListener('click', function() {
    getMarkup(page);
  });
}
