/* ========================================
   TRANSPARENT MENU - SCROLL DETECTION

   INSTRUKCJA:
   Wklej ten kod w sekcji "Koniec sekcji body" w tagu <script>

   CO ROBI:
   Dodaje klasę 'scrolled' do .menu-wrapper gdy scroll > 50px
   Menu zmienia się z przezroczystego na białe tło
   ======================================== */

(function() {
  'use strict';

  // Znajdź menu wrapper
  const menuWrapper = document.querySelector('.menu-wrapper');

  if (!menuWrapper) {
    console.warn('⚠️ Menu wrapper (.menu-wrapper) nie znaleziony');
    return;
  }

  // Ustawienia
  const SCROLL_THRESHOLD = 50; // Pixels

  // Funkcja sprawdzająca scroll
  function checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Jeśli scroll > threshold, dodaj klasę 'scrolled'
    if (scrollPosition > SCROLL_THRESHOLD) {
      if (!menuWrapper.classList.contains('scrolled')) {
        menuWrapper.classList.add('scrolled');
      }
    } else {
      if (menuWrapper.classList.contains('scrolled')) {
        menuWrapper.classList.remove('scrolled');
      }
    }
  }

  // Nasłuchuj scroll z optymalizacją (requestAnimationFrame)
  let ticking = false;

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        checkScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Sprawdź przy załadowaniu strony
  checkScroll();

  // Debug info
  console.log('✅ Transparent menu scroll detection załadowane');
  console.log('📍 Menu wrapper:', menuWrapper);
  console.log('⚙️ Scroll threshold:', SCROLL_THRESHOLD + 'px');
})();
