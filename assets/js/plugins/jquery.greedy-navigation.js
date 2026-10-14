/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

function updateNav() {
  // Measure all links again after resizing or font loading.
  $hlinks.children().appendTo($vlinks);
  $btn.addClass('hidden');
  if ($vlinks.outerWidth() > $nav.width()) {
    $btn.removeClass('hidden');
    var availableSpace = $nav.width() - $btn.outerWidth() - 24;
    while ($vlinks.outerWidth() > availableSpace && $vlinks.children().length > 1) {
      $vlinks.children().last().prependTo($hlinks);
    }
  }
  if (!$hlinks.children().length) {
    $btn.addClass('hidden').removeClass('close');
    $hlinks.addClass('hidden');
  }
}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
$hlinks.on('click', 'a', function() {
  $hlinks.addClass('hidden');
  $btn.removeClass('close');
});
if (document.fonts && document.fonts.ready) document.fonts.ready.then(updateNav);
