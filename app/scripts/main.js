let $ = (query) => {
  var res = document.querySelectorAll(query);

  if (res.length === 1) {
    return res[0];
  }

  return res;
};

var toggleBio = function(event) {
  $('.bio').classList.toggle('toggled');
};

$('.bio-container').addEventListener('click', function (e) {
  toggleBio(e);
});

(function() {
  // var $$invis = $('.invis');
  // for (var i=0; i<$$invis.length; i++) {
  //   $$invis[i].classList.add('fadeIn');
  //   $$invis[i].classList.remove('invis');
  // }
})();
