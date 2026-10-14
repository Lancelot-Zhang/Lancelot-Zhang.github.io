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
  // Recalculate from all links so resizing and font loading cannot leave stale widths.
  $hlinks.children().appendTo($vlinks);
  $btn.addClass('hidden');
  if ($vlinks.width() > $nav.width()) {
    $btn.removeClass('hidden');
    var availableSpace = $nav.width() - $btn.outerWidth() - 20;
    while ($vlinks.width() > availableSpace && $vlinks.children().length > 1) {
      $vlinks.children().last().prependTo($hlinks);
    }
  }
  if (!$hlinks.children().length) {
    $btn.addClass('hidden');
    setNavOpen(false);
  }
}

function setNavOpen(open) {
  $hlinks.toggleClass('hidden', !open);
  $btn.attr('aria-expanded', String(open));
}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  setNavOpen($btn.attr('aria-expanded') !== 'true');
});

$(document).on('click', function(event) {
  if (!$nav[0].contains(event.target)) setNavOpen(false);
}).on('keydown', function(event) {
  if (event.key === 'Escape' && $btn.attr('aria-expanded') === 'true') {
    setNavOpen(false);
    $btn.trigger('focus');
  }
});
$hlinks.on('click', 'a', function() { setNavOpen(false); });

updateNav();
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(updateNav);
}
