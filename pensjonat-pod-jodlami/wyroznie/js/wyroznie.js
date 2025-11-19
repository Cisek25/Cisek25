// ============================================
// PENSJONAT POD JODŁAMI - WZBOGACENIE OFERT
// Dodaje badge'e, feature-tags i przyciski
// ============================================

(function() {
    'use strict';

    // Konfiguracja feature-tags dla różnych typów pokoi
    const roomFeatures = {
        'leśny': [
            { icon: 'fa-tree', text: 'Widok na las' },
            { icon: 'fa-leaf', text: 'Otoczony przyrodą' },
            { icon: 'fa-mug-hot', text: 'Ekspres do kawy' },
            { icon: 'fa-wifi', text: 'Bezpłatne WiFi' }
        ],
        'widok': [
            { icon: 'fa-mountain', text: 'Widok na góry' },
            { icon: 'fa-tree', text: 'Widok na las' },
            { icon: 'fa-wifi', text: 'Bezpłatne WiFi' },
            { icon: 'fa-tv', text: 'Smart TV' }
        ],
        'rodzinny': [
            { icon: 'fa-child', text: 'Kącik dziecięcy' },
            { icon: 'fa-bed', text: '2 sypialnie' },
            { icon: 'fa-gamepad', text: 'Gry planszowe' },
            { icon: 'fa-couch', text: 'Strefa dzienna' }
        ],
        'wakacyjny': [
            { icon: 'fa-home', text: 'Jak w domu' },
            { icon: 'fa-bed', text: '2 sypialnie' },
            { icon: 'fa-utensils', text: 'Kuchnia' },
            { icon: 'fa-wind', text: 'Balkon z widokiem' }
        ],
        'apartament': [
            { icon: 'fa-expand', text: 'Duża powierzchnia' },
            { icon: 'fa-couch', text: 'Salon' },
            { icon: 'fa-bath', text: 'Łazienka' },
            { icon: 'fa-wifi', text: 'WiFi' }
        ]
    };

    const badges = ['Popular', 'Family', 'Premium', 'Wyróżniony', 'Nowość', 'Romantic'];

    function enhanceOffers() {
        const offers = document.querySelectorAll('.offer');

        if (offers.length === 0) {
            console.log('⏳ Oferty jeszcze nie załadowane, czekam...');
            return;
        }

        console.log(`🔍 Znaleziono ${offers.length} ofert do wzbogacenia`);

        offers.forEach((offer, index) => {
            // Sprawdź czy już wzbogacone
            if (offer.classList.contains('enhanced')) {
                return;
            }

            // Usuń inline styles (slick dodaje height)
            const h3 = offer.querySelector('h3');
            if (h3 && h3.hasAttribute('style')) {
                h3.removeAttribute('style');
            }

            // 1. DODAJ BADGE
            const objectIcon = offer.querySelector('.object-icon');
            if (objectIcon && !objectIcon.querySelector('.room-badge')) {
                const badge = document.createElement('span');
                badge.className = 'room-badge';
                badge.textContent = badges[index % badges.length];
                objectIcon.appendChild(badge);
                console.log(`✅ Badge "${badge.textContent}" dodany do oferty ${index + 1}`);
            }

            // 2. DODAJ FEATURE-TAGS
            if (h3 && !offer.querySelector('.room-features')) {
                const offerName = h3.textContent.toLowerCase().trim();
                let selectedFeatures = [];

                // Wybierz features na podstawie nazwy
                if (offerName.includes('leśny') || offerName.includes('lesny')) {
                    selectedFeatures = roomFeatures['leśny'];
                } else if (offerName.includes('widok') || offerName.includes('góry') || offerName.includes('gory')) {
                    selectedFeatures = roomFeatures.widok;
                } else if (offerName.includes('rodzinny') || offerName.includes('family')) {
                    selectedFeatures = roomFeatures.rodzinny;
                } else if (offerName.includes('wakacyjny') || offerName.includes('willa')) {
                    selectedFeatures = roomFeatures.wakacyjny;
                } else if (offerName.includes('apartament')) {
                    selectedFeatures = roomFeatures.apartament;
                } else {
                    // Domyślne features z danych systemowych
                    const meters = offer.querySelector('.accommodation-meters');
                    const persons = offer.querySelector('.accommodation-roomspace');

                    if (meters) {
                        const metersText = meters.textContent.replace(/\s+/g, ' ').trim();
                        selectedFeatures.push({ icon: 'fa-expand', text: metersText });
                    }
                    if (persons) {
                        const personsText = persons.textContent.replace(/\s+/g, ' ').trim();
                        selectedFeatures.push({ icon: 'fa-users', text: personsText });
                    }
                    selectedFeatures.push({ icon: 'fa-wifi', text: 'Bezpłatne WiFi' });
                    selectedFeatures.push({ icon: 'fa-parking', text: 'Parking' });
                }

                // Stwórz kontener z features
                const featuresDiv = document.createElement('div');
                featuresDiv.className = 'room-features';

                selectedFeatures.forEach(feature => {
                    const tag = document.createElement('span');
                    tag.className = 'feature-tag';
                    tag.innerHTML = `<i class="fas ${feature.icon}"></i> ${feature.text}`;
                    featuresDiv.appendChild(tag);
                });

                // Wstaw features po h3
                h3.parentNode.insertBefore(featuresDiv, h3.nextSibling);
                console.log(`✅ Feature-tags dodane do oferty ${index + 1}`);
            }

            // 3. DODAJ PRZYCISK
            if (!offer.querySelector('.btn-primary')) {
                const titleLink = offer.querySelector('h3 a');
                const offerUrl = titleLink ? titleLink.getAttribute('href') : '#';

                const button = document.createElement('a');
                button.href = offerUrl;
                button.className = 'btn btn-primary';
                button.textContent = 'Rezerwuj Teraz';

                // Dodaj na końcu oferty
                offer.appendChild(button);
                console.log(`✅ Przycisk dodany do oferty ${index + 1}`);
            }

            // Oznacz jako wzbogacone
            offer.classList.add('enhanced');
        });

        console.log(`🎉 Wzbogacono ${offers.length} ofert!`);
    }

    // Zmień nazwę sekcji na "Nasze Pokoje"
    function changeTitle() {
        const title = document.querySelector('.container-hotspot h2.big-label, .container-hotspot .big-label');
        if (title && title.textContent.includes('Wyróżnione')) {
            title.textContent = 'Nasze Pokoje';
            console.log('✅ Zmieniono tytuł na "Nasze Pokoje"');
        }
    }

    // Uruchom po załadowaniu DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            // Próbuj kilka razy (dla slick slider)
            setTimeout(enhanceOffers, 100);
            setTimeout(enhanceOffers, 500);
            setTimeout(enhanceOffers, 1000);
            setTimeout(enhanceOffers, 2000);
            setTimeout(changeTitle, 500);
        });
    } else {
        // DOM już załadowany
        setTimeout(enhanceOffers, 100);
        setTimeout(enhanceOffers, 500);
        setTimeout(enhanceOffers, 1000);
        setTimeout(changeTitle, 500);
    }

    // Nasłuchuj na zmiany w DOM (slick może dodawać elementy dynamicznie)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                setTimeout(enhanceOffers, 200);
            }
        });
    });

    // Obserwuj zmiany w body
    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    console.log('🚀 Pensjonat Pod Jodłami - skrypt wzbogacania ofert załadowany');
})();
