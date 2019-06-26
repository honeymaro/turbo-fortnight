/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-undef
$(document).ready(() => {
  const audio = new Audio('/sound/beep-06.mp3');

  const socket = io(`${location.protocol}//${location.host}`);
  socket.on('tag', () => {
    audio.play().then(() => {
      window.location.hash = 'store';
    });
  });

  $('body').on('click', '#refresh', () => {
    window.location.hash = 'splash';
  });

  $('body').on('click', '#splash', () => {
    window.location.hash = 'store';
  });

  $('body').on('click', '.category-item', function () {
    $('.category-item').removeClass('selected');
    $(this).addClass('selected');
  });

  $('body').on('click', '.goods-item', function () {
    $('.goods-item').removeClass('selected');
    $(this).addClass('selected');
    $('.summary-price').text(
      $(this)
        .find('.goods-item-price')
        .text()
    );
  });
  $(window).on('hashchange', (e) => {
    if (window.location.hash === '#buy') {
      $.get('/xx');
      setTimeout(() => {
        window.location.hash = 'splash';
      }, 2000);
    }
  });

  $('#slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000
  });
});
