(function() {
  var media;

  document.addEventListener('deviceready', function() {
    media = new Media('http://stream.4zzzfm.org.au:789/;', function() {}, function() {});
  }, false);

  var playbutton = document.getElementById('play');
  var stopbutton = document.getElementById('stop');

  playbutton.addEventListener('click', function() {
    media.play();
  });

  stopbutton.addEventListener('click', function() {
    media.pause();
  });


})();
