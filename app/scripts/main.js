let $ = (query) => {
  var res = document.querySelectorAll(query);

  if (res.length === 1) {
    return res[0];
  }

  return res;
};


// Exploit the order
var $$content = $('.content a');
var $$image = $('[data-image]');

var showMatchingImage = function(content) {
  if (content !== ''){
    $('[data-image=' + content + ']').classList.remove('hidden');
  }
};

var removeMatchingImage = function(content) {
  if (content !== ''){
    $('[data-image=' + content + ']').classList.add('hidden');
  }
};



for (var i=0; i<$$content.length; i++) {
  $$content[i].addEventListener('mouseenter', function(e) {
    showMatchingImage(e.target.className);
  });
  $$content[i].addEventListener('mouseleave', function(e) {
    removeMatchingImage(e.target.className);
  });
}
