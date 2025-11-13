// ========================================
// APARTMENTS - JAVASCRIPT
//
// INSTRUKCJA:
// Wklej ten kod w sekcji BODY (na końcu) w panelu CMS
// lub dodaj jako osobny plik JS
// ========================================

(function() {
  'use strict';

  // ========================================
  // GALERIA - FILTROWANIE
  // ========================================

  function initGallery() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Pokaż wszystkie na start
    galleryItems.forEach(item => {
      item.classList.remove('hidden');
      item.style.display = 'block';
    });

    // Filtry
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');

        // Aktywny przycisk
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Filtruj
        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'wszystkie' || category === filter) {
            item.classList.remove('hidden');
            item.style.display = 'block';
          } else {
            item.classList.add('hidden');
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }

  // ========================================
  // LIGHTBOX
  // ========================================

  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');
  const galleryItems = document.querySelectorAll('.gallery-item');

  let currentIndex = 0;
  let visibleItems = [];

  function updateVisibleItems() {
    visibleItems = Array.from(galleryItems).filter(item => !item.classList.contains('hidden'));
  }

  // Click na zdjęcie
  galleryItems.forEach((item) => {
    item.addEventListener('click', function() {
      updateVisibleItems();
      currentIndex = visibleItems.indexOf(this);
      showLightbox();
    });
  });

  function showLightbox() {
    const currentItem = visibleItems[currentIndex];
    const img = currentItem.querySelector('.gallery-image');
    const title = currentItem.querySelector('.gallery-item-title');

    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    lightboxCaption.textContent = title ? title.textContent : '';

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Zamknij
  lightboxClose.addEventListener('click', hideLightbox);
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) hideLightbox();
  });

  // Nawigacja
  lightboxPrev.addEventListener('click', function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    showLightbox();
  });

  lightboxNext.addEventListener('click', function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % visibleItems.length;
    showLightbox();
  });

  // Klawiatura
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') hideLightbox();
    else if (e.key === 'ArrowLeft') lightboxPrev.click();
    else if (e.key === 'ArrowRight') lightboxNext.click();
  });

})();
