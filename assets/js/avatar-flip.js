document.querySelectorAll('.avatar-flip').forEach(function (button) {
  var pinned = false;
  var preview = false;

  function render() {
    var flipped = pinned || preview;
    button.setAttribute('aria-pressed', String(pinned));
    button.setAttribute('data-flipped', String(flipped));
    button.setAttribute('title', pinned ? 'Click to restore sunglasses' : 'Hover to preview · Click to keep');
    button.querySelector('.avatar-flip__front').setAttribute('aria-hidden', String(flipped));
    button.querySelector('.avatar-flip__back').setAttribute('aria-hidden', String(!flipped));
  }

  button.addEventListener('pointerenter', function (event) {
    if (event.pointerType !== 'mouse') return;
    preview = true;
    render();
  });

  function endPreview() {
    preview = false;
    render();
  }
  button.addEventListener('pointerleave', endPreview);
  button.addEventListener('pointercancel', endPreview);

  button.addEventListener('click', function () {
    pinned = !pinned;
    preview = false;
    render();
  });
  render();
});
