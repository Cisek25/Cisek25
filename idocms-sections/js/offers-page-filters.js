/* ============================================
   OFFERS PAGE - Filter Collapse JavaScript
   Obsługa rozwijanych filtrów na podstronie /offers
   ============================================ */

(function() {
  'use strict';

  // Czekaj aż DOM będzie gotowy
  document.addEventListener('DOMContentLoaded', function() {

    // ===========================
    // 1. COLLAPSIBLE FILTERS
    // ===========================

    // Znajdź wszystkie nagłówki filtrów
    const filterHeaders = document.querySelectorAll('.filter_header');

    filterHeaders.forEach(function(header) {
      // Dodaj ikonę strzałki jeśli nie istnieje
      if (!header.querySelector('i')) {
        const icon = document.createElement('i');
        icon.className = 'fas fa-chevron-down';
        icon.style.transition = 'transform 0.3s ease';
        header.appendChild(icon);
      }

      // Znajdź powiązany content (następny element)
      const content = header.nextElementSibling;

      // Sprawdź czy to element .filter_content lub .checkbox-wrapper
      if (content && (content.classList.contains('filter_content') ||
                      content.classList.contains('checkbox') ||
                      content.querySelector('.checkbox'))) {

        // Dodaj klasę collapse jeśli nie ma
        if (!content.classList.contains('collapse')) {
          content.classList.add('collapse', 'show'); // Domyślnie rozwinięte
        }

        // Obsługa kliknięcia
        header.addEventListener('click', function() {
          const icon = this.querySelector('i');

          // Toggle klasy show
          content.classList.toggle('show');

          // Obróć strzałkę
          if (icon) {
            if (content.classList.contains('show')) {
              icon.style.transform = 'rotate(0deg)';
            } else {
              icon.style.transform = 'rotate(-90deg)';
            }
          }
        });
      }
    });

    // ===========================
    // 2. MOBILE FILTER TOGGLE
    // ===========================

    const showFiltersBtn = document.getElementById('show_filters');
    const menuFilter = document.getElementById('menu_filter');

    if (showFiltersBtn && menuFilter) {
      showFiltersBtn.addEventListener('click', function() {
        menuFilter.classList.toggle('active');

        // Zmień tekst przycisku
        if (menuFilter.classList.contains('active')) {
          this.textContent = 'Ukryj Filtry';
        } else {
          this.textContent = 'Pokaż Filtry';
        }
      });
    }

    // ===========================
    // 3. SMOOTH SCROLL dla przycisków
    // ===========================

    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        if (href !== '#' && href !== '#!') {
          const target = document.querySelector(href);

          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });

    // ===========================
    // 4. COUNT SELECTED FILTERS
    // ===========================

    const filterCheckboxes = document.querySelectorAll('.checkbox input[type="checkbox"]');

    filterCheckboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        updateFilterCount();
      });
    });

    function updateFilterCount() {
      const checkedCount = document.querySelectorAll('.checkbox input[type="checkbox"]:checked').length;

      // Możesz dodać badge z liczbą aktywnych filtrów
      const filterButton = document.querySelector('#filter_buttons button');

      if (filterButton) {
        if (checkedCount > 0) {
          filterButton.textContent = `Zastosuj Filtry (${checkedCount})`;
        } else {
          filterButton.textContent = 'Zastosuj Filtry';
        }
      }
    }

    // Inicjalizuj licznik przy starcie
    updateFilterCount();

    // ===========================
    // 5. ANIMATION on scroll (opcjonalnie)
    // ===========================

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    // Obserwuj karty ofert
    const offerCards = document.querySelectorAll('.offers-container');
    offerCards.forEach(function(card) {
      observer.observe(card);
    });

    console.log('✓ Offers page filters initialized');
  });

})();
