app_book.run(() => {
  const isTurnOn = sessionStorage.getItem('voucherinfo') !== 'true';

  if (isTurnOn) {
    $('.voucherinfo').addClass('active');
  } else {
    $('.voucherinfo').remove();
    return;
  }

  document.querySelector('.voucherinfo__close').addEventListener('click', function () {
    this.closest('.voucherinfo').remove();
    sessionStorage.setItem('voucherinfo', 'true');
  });
}, 'all', '.voucherinfo');
