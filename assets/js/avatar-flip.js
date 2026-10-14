document.querySelectorAll('.avatar-flip').forEach(function (button) {
  button.addEventListener('click', function () {
    var flipped = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(flipped));
    button.querySelector('.avatar-flip__front').setAttribute('aria-hidden', String(flipped));
    button.querySelector('.avatar-flip__back').setAttribute('aria-hidden', String(!flipped));
  });
});
