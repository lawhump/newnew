let $ = (query) => {
  var res = document.querySelectorAll(query);

  if (res.length === 1) {
    return res[0];
  }

  return res;
};

var $footer = $('footer');
var $$btns = $('li .btn');


var getMarkup = function(page) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        placeMarkup(xmlHttp.responseText);
      }
    }
    // TODO
    xmlHttp.open('GET', page, true); // true for asynchronous
    xmlHttp.send(null);
  };

var placeMarkup = function(html) {
  $footer.insertAdjacentHTML('beforebegin', html);
};

// Registering listeners
for (var i=0; i<$$btns.length; i++) {
  var page = $$btns[i].dataset.url;
  page = 'markup/' + page + '.html';
  $$btns[i].addEventListener('click', function() {
    getMarkup(page);
  });
}

$('#yes').addEventListener('click', function() {
  $('section.hidden')[0].classList.add('fadeIn');
  $('section.hidden')[0].classList.remove('hidden');
});

$('#no').addEventListener('click', function() {
  // TODO add a no option
  // $('section.content').classList.remove('hidden');
});

(function() {
  // var $$invis = $('.invis');
  // for (var i=0; i<$$invis.length; i++) {
  //   $$invis[i].classList.add('fadeIn');
  //   $$invis[i].classList.remove('invis');
  // }
})();
