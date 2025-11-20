/* =================================================================
   PENSJONAT POD JODŁAMI - ALPINE SERENITY 3D CARDS
   Ukrywa systemowe oferty i tworzy nowe karty 3D z flip effect
   ================================================================= */

(function() {
    'use strict';

    // Konfiguracja badge'y (Alpine Serenity)
    const badges = ['POPULAR', 'POLECAMY', 'NOWOŚĆ', 'HIT', 'RODZINNY', 'LUKSUS'];

    // Mini tagi na przód karty
    const keyTags = {
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
        const container = document.querySelector('.cmshotspot, .container-hotspot');
        if (!container) {
            console.log('⏳ Kontener wyróżnionych nie znaleziony, czekam...');
            return;
        }

        // 1. ZMIEŃ TYTUŁ
        const mainH2 = container.querySelector('h2');
        if (mainH2) {
            mainH2.innerText = 'Nasze Pokoje';
            mainH2.removeAttribute('style');
            mainH2.classList.add('alpine-main-header');
        }

        // 2. POBIERZ OFERTY (bez klonów slick)
        let originalOffers = container.querySelectorAll('.slick-slide:not(.slick-cloned) .offer');
        if (originalOffers.length === 0) {
            originalOffers = container.querySelectorAll('.offer');
        }

        const offerList = Array.from(originalOffers);

        if (offerList.length === 0) {
            console.log('⏳ Oferty jeszcze nie załadowane');
            return;
        }

        console.log(`🏔️ Znaleziono ${offerList.length} ofert - tworzę karty Alpine Serenity`);

        // 3. UKRYJ STARĄ LISTĘ
        const oldList = container.querySelector('.offerslist');
        if (oldList) oldList.style.display = 'none';

        const col12 = container.querySelector('.col-12') || container;

        // 4. PODZIEL NA SEKCJE
        const top3 = offerList.slice(0, 3);
        const rest = offerList.slice(3);

        // 5. RENDERUJ PIERWSZĄ SEKCJĘ (top 3)
        const grid1 = renderGrid(top3, 0);
        if (mainH2 && mainH2.parentNode) {
            mainH2.parentNode.insertBefore(grid1, mainH2.nextSibling);
        } else {
            col12.appendChild(grid1);
        }

        // 6. JEŚLI JEST WIĘCEJ - DRUGA SEKCJA
        if (rest.length > 0) {
            const header2 = document.createElement('div');
            header2.className = 'alpine-secondary-header';
            header2.innerText = 'Pozostałe pokoje';
            col12.appendChild(header2);
            col12.appendChild(renderGrid(rest, 3));
        }

        console.log('✅ Karty Alpine Serenity utworzone!');
    }

    // --- FUNKCJA: Generuje feature-tags na tył karty ---
    function getBackFeatures(title) {
        const t = title.toLowerCase();

        // Baza: WiFi + Parking (każdy pokój)
        const features = [
            { i: 'fa-wifi', t: 'WiFi Free' },
            { i: 'fa-square-parking', t: 'Parking' }
        ];

        // Inteligentne dodawanie na podstawie nazwy
        if (t.includes('rodzin')) {
            features.push({ i: 'fa-child', t: 'Dla dzieci' });
            features.push({ i: 'fa-gamepad', t: 'Plac zabaw' });
        } else if (t.includes('willa') || t.includes('dom')) {
            features.push({ i: 'fa-fire', t: 'Kominek' });
            features.push({ i: 'fa-utensils', t: 'Kuchnia' });
        } else if (t.includes('widok') || t.includes('góry')) {
            features.push({ i: 'fa-mountain', t: 'Widok na góry' });
            features.push({ i: 'fa-binoculars', t: 'Taras widokowy' });
        } else if (t.includes('leśny') || t.includes('lesny') || t.includes('las')) {
            features.push({ i: 'fa-tree', t: 'Widok na las' });
            features.push({ i: 'fa-leaf', t: 'Ogród' });
        } else if (t.includes('apartament') || t.includes('luksus')) {
            features.push({ i: 'fa-couch', t: 'Salon' });
            features.push({ i: 'fa-bath', t: 'Łazienka' });
        } else {
            // Domyślne
            features.push({ i: 'fa-tv', t: 'Smart TV' });
            features.push({ i: 'fa-mug-hot', t: 'Ekspres' });
        }

        // Generuj HTML
        let html = '';
        features.forEach(f => {
            html += `<span class="alpine-feature-tag"><i class="fas ${f.i}"></i> ${f.t}</span>`;
        });
        return html;
    }

    // --- FUNKCJA: Renderuje grid kart ---
    function renderGrid(items, badgeOffset) {
        const grid = document.createElement('div');
        grid.className = 'alpine-cards-grid';

        items.forEach((offer, idx) => {
            // Wyciągnij dane z systemowej oferty
            const titleElem = offer.querySelector('h3 a');
            const title = titleElem ? titleElem.innerText.trim() : 'Pokój';
            const href = titleElem ? titleElem.getAttribute('href') : '#';

            // Obrazek
            const img = offer.querySelector('img');
            let src = 'https://via.placeholder.com/600x400/A8E6C5/0D3B2E?text=Pensjonat+Pod+Jodlami';
            if (img) {
                src = img.getAttribute('data-src') || img.getAttribute('src') || src;
            }

            // Cena
            const priceElem = offer.querySelector('.price');
            const price = priceElem ? priceElem.innerText.trim() : 'Sprawdź cenę';

            // Metry i osoby
            let meters = '40 m²';
            let persons = '2-4 os.';
            const info = offer.querySelector('.offer__info');
            if (info) {
                const m = info.querySelector('.accommodation-meters');
                if (m) meters = m.innerText.trim();
                const p = info.querySelector('.accommodation-roomspace');
                if (p) persons = p.innerText.trim() + ' os.';
            }

            // Badge
            const badge = badges[(idx + badgeOffset) % badges.length];

            // Mini tagi (przód) - max 2
            const tLower = title.toLowerCase();
            let tagHtml = '';
            let count = 0;
            for (const key in keyTags) {
                if (tLower.includes(key) && count < 2) {
                    tagHtml += `<span class="alpine-mini-tag">${keyTags[key]}</span>`;
                    count++;
                }
            }
            if (!tagHtml) tagHtml = '<span class="alpine-mini-tag">Komfort</span>';

            // Feature-tags (tył)
            const backFeatures = getBackFeatures(title);

            // Twórz kartę 3D
            const cardDiv = document.createElement('div');
            cardDiv.className = 'alpine-card-scene';
            cardDiv.setAttribute('onclick', "this.classList.toggle('is-flipped')");

            cardDiv.innerHTML = `
                <div class="alpine-card-object">
                    <!-- PRZÓD -->
                    <div class="alpine-card-face alpine-card-front">
                        <div class="alpine-badge">${badge}</div>
                        <div class="alpine-img-wrapper">
                            <img src="${src}" class="alpine-img" alt="${title}">
                        </div>
                        <div class="alpine-front-content">
                            <div class="alpine-title">${title}</div>
                            <div class="alpine-stats">
                                <div class="alpine-stat"><i class="fas fa-expand-arrows-alt"></i> ${meters}</div>
                                <div class="alpine-stat"><i class="fas fa-user-friends"></i> ${persons}</div>
                            </div>
                            <div class="alpine-mini-tags">${tagHtml}</div>
                            <div class="alpine-flip-hint">KLIKNIJ <i class="fas fa-arrow-right"></i></div>
                        </div>
                    </div>

                    <!-- TYŁ -->
                    <div class="alpine-card-face alpine-card-back">
                        <div class="alpine-back-title">${title}</div>
                        <span class="alpine-price-label">Cena za dobę</span>
                        <span class="alpine-price">${price}</span>
                        <div class="alpine-features-grid">${backFeatures}</div>
                        <a href="${href}"
                           class="alpine-btn-reserve"
                           onclick="event.stopPropagation()">
                            REZERWUJ TERAZ
                        </a>
                        <div class="alpine-flip-back-hint">kliknij aby obrócić</div>
                    </div>
                </div>
            `;

            grid.appendChild(cardDiv);
        });

        return grid;
    }

    console.log('🏔️ Pensjonat Pod Jodłami - Alpine Serenity 3D Cards załadowane');
})();
