// ============================================
// PENSJONAT POD JODŁAMI - GLOBALNY SKRYPT
// Smooth scroll + Animacje + 3D Flip Cards
// ============================================

(function() {
    'use strict';

    console.log('Pensjonat Pod Jodlami - skrypt zaladowany');

    // Smooth scroll dla linków
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animacja pojawiania się elementów przy scrollu
    var observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .about-wrapper, .experience-card, .package-card').forEach(function(el) {
        observer.observe(el);
    });

})();


/* =================================================================
   ALPINE SERENITY 3D CARDS - WYRÓŻNIONE OFERTY
   Ukrywa systemowe oferty i tworzy nowe karty 3D z flip effect
   BEZ BACKTIKÓW - kompatybilne z IdoBooking CMS
   ================================================================= */

(function() {
    'use strict';

    // Konfiguracja badge'y (Alpine Serenity)
    var badges = ['POPULAR', 'POLECAMY', 'NOWOŚĆ', 'HIT', 'RODZINNY', 'LUKSUS'];

    // Mini tagi na przód karty
    var keyTags = {
        'widok': 'Widok',
        'góry': 'Góry',
        'rodzinny': 'Rodzina',
        'wakacyjny': 'Wakacje',
        'las': 'Natura',
        'leśny': 'Las',
        'lesny': 'Las',
        'apartament': 'Luksus',
        'komfort': 'Komfort'
    };

    // Uruchom po załadowaniu DOM
    setTimeout(runAlpineCards, 600);

    function runAlpineCards() {
        var container = document.querySelector('.cmshotspot, .container-hotspot');
        if (!container) {
            console.log('Kontener wyroznionych nie znaleziony, czekam...');
            return;
        }

        // 1. ZMIEŃ TYTUŁ
        var mainH2 = container.querySelector('h2');
        if (mainH2) {
            mainH2.innerText = 'Nasze Pokoje';
            mainH2.removeAttribute('style');
            mainH2.classList.add('alpine-main-header');
        }

        // 2. POBIERZ OFERTY (bez klonów slick)
        var originalOffers = container.querySelectorAll('.slick-slide:not(.slick-cloned) .offer');
        if (originalOffers.length === 0) {
            originalOffers = container.querySelectorAll('.offer');
        }

        var offerList = Array.from(originalOffers);

        if (offerList.length === 0) {
            console.log('Oferty jeszcze nie zaladowane');
            return;
        }

        console.log('Znaleziono ' + offerList.length + ' ofert - tworze karty Alpine Serenity');

        // 3. UKRYJ STARĄ LISTĘ
        var oldList = container.querySelector('.offerslist');
        if (oldList) oldList.style.display = 'none';

        var col12 = container.querySelector('.col-12') || container;

        // 4. PODZIEL NA SEKCJE
        var top3 = offerList.slice(0, 3);
        var rest = offerList.slice(3);

        // 5. RENDERUJ PIERWSZĄ SEKCJĘ (top 3)
        var grid1 = renderGrid(top3, 0);
        if (mainH2 && mainH2.parentNode) {
            mainH2.parentNode.insertBefore(grid1, mainH2.nextSibling);
        } else {
            col12.appendChild(grid1);
        }

        // 6. JEŚLI JEST WIĘCEJ - DRUGA SEKCJA
        if (rest.length > 0) {
            var header2 = document.createElement('div');
            header2.className = 'alpine-secondary-header';
            header2.innerText = 'Pozostałe pokoje';
            col12.appendChild(header2);
            col12.appendChild(renderGrid(rest, 3));
        }

        console.log('Karty Alpine Serenity utworzone!');
    }

    // --- FUNKCJA: Generuje feature-tags na tył karty ---
    function getBackFeatures(title) {
        var t = title.toLowerCase();

        // Baza: WiFi + Parking (każdy pokój)
        var features = [
            { i: 'fa-wifi', t: 'WiFi Free' },
            { i: 'fa-square-parking', t: 'Parking' }
        ];

        // Inteligentne dodawanie na podstawie nazwy
        if (t.indexOf('rodzin') > -1) {
            features.push({ i: 'fa-child', t: 'Dla dzieci' });
            features.push({ i: 'fa-gamepad', t: 'Plac zabaw' });
        } else if (t.indexOf('willa') > -1 || t.indexOf('dom') > -1) {
            features.push({ i: 'fa-fire', t: 'Kominek' });
            features.push({ i: 'fa-utensils', t: 'Kuchnia' });
        } else if (t.indexOf('widok') > -1 || t.indexOf('góry') > -1) {
            features.push({ i: 'fa-mountain', t: 'Widok na góry' });
            features.push({ i: 'fa-binoculars', t: 'Taras widokowy' });
        } else if (t.indexOf('leśny') > -1 || t.indexOf('lesny') > -1 || t.indexOf('las') > -1) {
            features.push({ i: 'fa-tree', t: 'Widok na las' });
            features.push({ i: 'fa-leaf', t: 'Ogród' });
        } else if (t.indexOf('apartament') > -1 || t.indexOf('luksus') > -1) {
            features.push({ i: 'fa-couch', t: 'Salon' });
            features.push({ i: 'fa-bath', t: 'Łazienka' });
        } else {
            // Domyślne
            features.push({ i: 'fa-tv', t: 'Smart TV' });
            features.push({ i: 'fa-mug-hot', t: 'Ekspres' });
        }

        // Generuj HTML
        var html = '';
        features.forEach(function(f) {
            html += '<span class="alpine-feature-tag"><i class="fas ' + f.i + '"></i> ' + f.t + '</span>';
        });
        return html;
    }

    // --- FUNKCJA: Renderuje grid kart ---
    function renderGrid(items, badgeOffset) {
        var grid = document.createElement('div');
        grid.className = 'alpine-cards-grid';

        items.forEach(function(offer, idx) {
            // Wyciągnij dane z systemowej oferty
            var titleElem = offer.querySelector('h3 a');
            var title = titleElem ? titleElem.innerText.trim() : 'Pokój';
            var href = titleElem ? titleElem.getAttribute('href') : '#';

            // Obrazek
            var img = offer.querySelector('img');
            var src = 'https://via.placeholder.com/600x400/A8E6C5/0D3B2E?text=Pensjonat+Pod+Jodlami';
            if (img) {
                src = img.getAttribute('data-src') || img.getAttribute('src') || src;
            }

            // Cena
            var priceElem = offer.querySelector('.price');
            var price = priceElem ? priceElem.innerText.trim() : 'Sprawdź cenę';

            // Metry i osoby
            var meters = '40 m²';
            var persons = '2-4 os.';
            var info = offer.querySelector('.offer__info');
            if (info) {
                var m = info.querySelector('.accommodation-meters');
                if (m) meters = m.innerText.trim();
                var p = info.querySelector('.accommodation-roomspace');
                if (p) persons = p.innerText.trim() + ' os.';
            }

            // Badge
            var badge = badges[(idx + badgeOffset) % badges.length];

            // Mini tagi (przód) - max 2
            var tLower = title.toLowerCase();
            var tagHtml = '';
            var count = 0;
            for (var key in keyTags) {
                if (tLower.indexOf(key) > -1 && count < 2) {
                    tagHtml += '<span class="alpine-mini-tag">' + keyTags[key] + '</span>';
                    count++;
                }
            }
            if (!tagHtml) tagHtml = '<span class="alpine-mini-tag">Komfort</span>';

            // Feature-tags (tył)
            var backFeatures = getBackFeatures(title);

            // Twórz kartę 3D
            var cardDiv = document.createElement('div');
            cardDiv.className = 'alpine-card-scene';
            cardDiv.setAttribute('onclick', "this.classList.toggle('is-flipped')");

            var html = '';
            html += '<div class="alpine-card-object">';
            html += '  <div class="alpine-card-face alpine-card-front">';
            html += '    <div class="alpine-badge">' + badge + '</div>';
            html += '    <div class="alpine-img-wrapper">';
            html += '      <img src="' + src + '" class="alpine-img" alt="' + title + '">';
            html += '    </div>';
            html += '    <div class="alpine-front-content">';
            html += '      <div class="alpine-title">' + title + '</div>';
            html += '      <div class="alpine-stats">';
            html += '        <div class="alpine-stat"><i class="fas fa-expand-arrows-alt"></i> ' + meters + '</div>';
            html += '        <div class="alpine-stat"><i class="fas fa-user-friends"></i> ' + persons + '</div>';
            html += '      </div>';
            html += '      <div class="alpine-mini-tags">' + tagHtml + '</div>';
            html += '      <div class="alpine-flip-hint">KLIKNIJ <i class="fas fa-arrow-right"></i></div>';
            html += '    </div>';
            html += '  </div>';
            html += '  <div class="alpine-card-face alpine-card-back">';
            html += '    <div class="alpine-back-title">' + title + '</div>';
            html += '    <span class="alpine-price-label">Cena od</span>';
            html += '    <span class="alpine-price">' + price + '</span>';
            html += '    <div class="alpine-features-grid">' + backFeatures + '</div>';
            html += '    <a href="' + href + '" class="alpine-btn-reserve" onclick="event.stopPropagation()">REZERWUJ TERAZ</a>';
            html += '    <div class="alpine-flip-back-hint">kliknij aby obrócić</div>';
            html += '  </div>';
            html += '</div>';

            cardDiv.innerHTML = html;
            grid.appendChild(cardDiv);
        });

        return grid;
    }

    console.log('Pensjonat Pod Jodlami - Alpine Serenity 3D Cards zaladowane');
})();
