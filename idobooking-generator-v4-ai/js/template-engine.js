// ============================================
// TEMPLATE-ENGINE.JS - Generowanie HTML
// ============================================

const TemplateEngine = {

    // ============================================
    // GENERATE HEAD
    // ============================================
    generateHead(settings) {
        const fonts = this.getGoogleFontsUrl(settings.fonts);

        return `<!-- ============================================
     ${settings.propertyName || 'Nazwa Obiektu'} - HEAD
     
     Wklej w panelu CMS → HEAD
     ============================================ -->

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${fonts}" rel="stylesheet">

<!-- Font Awesome Icons -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Viewport & SEO -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="${settings.metaDescription || settings.propertyName + ' - komfortowy nocleg w świetnej lokalizacji.'}">`;
    },

    getGoogleFontsUrl(fonts) {
        const heading = fonts?.heading || 'Playfair Display';
        const body = fonts?.body || 'Inter';

        const formatFont = (font) => font.replace(/ /g, '+');

        return `https://fonts.googleapis.com/css2?family=${formatFont(heading)}:wght@400;500;600;700&family=${formatFont(body)}:wght@300;400;500;600;700&display=swap`;
    },

    // ============================================
    // GENERATE SECTIONS
    // ============================================
    generateSections(settings, objects, enabledSections) {
        let html = `<!-- ============================================
     ${settings.propertyName || 'Nazwa Obiektu'} - SEKCJE BODY
     
     Wklej w panelu CMS → Sekcje BODY
     ============================================ -->\n\n`;

        enabledSections.forEach(sectionId => {
            switch (sectionId) {
                case 'intro':
                    html += this.generateIntroSection(settings);
                    break;
                case 'rooms':
                    html += this.generateRoomsSection(settings, objects);
                    break;
                case 'amenities':
                    html += this.generateAmenitiesSection(settings, objects);
                    break;
                case 'gallery':
                    html += this.generateGallerySection(settings, objects);
                    break;
                case 'location':
                    html += this.generateLocationSection(settings);
                    break;
                case 'attractions':
                    html += this.generateAttractionsSection(settings);
                    break;
                case 'testimonials':
                    html += this.generateTestimonialsSection(settings);
                    break;
                case 'faq':
                    html += this.generateFaqSection(settings);
                    break;
                case 'dining':
                    html += this.generateDiningSection(settings);
                    break;
                case 'pricing':
                    html += this.generatePricingSection(settings);
                    break;
                case 'spa':
                    html += this.generateSpaSection(settings);
                    break;
                case 'events':
                    html += this.generateEventsSection(settings);
                    break;
                case 'transport':
                    html += this.generateTransportSection(settings);
                    break;
                case 'rules':
                    html += this.generateRulesSection(settings);
                    break;
                case 'newsletter':
                    html += this.generateNewsletterSection(settings);
                    break;
                case 'partners':
                    html += this.generatePartnersSection(settings);
                    break;
                case 'contact':
                    html += this.generateContactSection(settings);
                    break;
                case 'cta':
                    html += this.generateCtaSection(settings);
                    break;
            }
        });

        return html;
    },

    // ============================================
    // INTRO SECTION
    // ============================================
    // ============================================
    // INTRO SECTION (Now supports multiple variants)
    // ============================================
    generateIntroSection(settings) {
        // Try to use the new About Section system
        if (window.generateAboutSection && window.ABOUT_SECTION_VARIANTS) {
            // Get selected variant or pick a random one matching the category
            let variantId = window.appState?.aboutVariant;

            // If no variant selected, pick one based on template or random
            if (!variantId && window.appState) {
                const isApartment = window.appState.selectedTemplate?.id?.startsWith('apt')
                    || window.appState.wizardData?.type?.includes('apartment');

                const variants = isApartment ? window.getApartmentAboutVariants() : window.getHotelAboutVariants();
                const randomVariant = variants[Math.floor(Math.random() * variants.length)];
                variantId = randomVariant.id;

                // Save for consistency
                window.appState.aboutVariant = variantId;
            }

            if (variantId) {
                return generateAboutSection(variantId, settings) + '\n\n';
            }
        }

        // Fallback to original implementation
        const content = window.appState?.sectionContent?.intro || {};
        const title = content.title || settings.propertyName || 'Witamy w Naszym Obiekcie';
        const subtitle = content.subtitle || 'Twoje miejsce na wyjątkowy wypoczynek';
        const description = content.description || settings.introText || AIEngine.generateIntroText(
            { category: 'family' },
            settings.propertyName
        );

        return `<!-- SEKCJA: O NAS -->
<section class="section-intro" id="o-nas">
    <div class="container">
        <div class="intro-grid">
            <div class="intro-content">
                <span class="section-label"><i class="fas fa-star"></i> ${subtitle}</span>
                <h2 class="section-title">${title}</h2>
                <p class="intro-lead">${description}</p>
                <div class="intro-stats">
                    <div class="stat-item">
                        <span class="stat-number">${settings.stats?.rooms || '20+'}</span>
                        <span class="stat-label">pokoi</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${settings.stats?.rating || '4.8'}</span>
                        <span class="stat-label">ocena</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${settings.stats?.years || '10+'}</span>
                        <span class="stat-label">lat</span>
                    </div>
                </div>
            </div>
            <div class="intro-image">
                <img src="${settings.mainImage || 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800'}" alt="${settings.propertyName}">
            </div>
        </div>
    </div>
</section>

`;
    },

    // ============================================
    // ROOMS SECTION
    // ============================================
    generateRoomsSection(settings, objects) {
        if (!objects || objects.length === 0) {
            return `<!-- SEKCJA: POKOJE - brak pokoi do wygenerowania -->\n\n`;
        }

        const roomsSettings = window.appState?.roomsSettings || {};
        const effectsSettings = window.appState?.effectsSettings || {};
        const displayMode = roomsSettings.displayMode || 'grid';
        const showCategories = roomsSettings.showCategories !== false;

        // Group by category if enabled
        let roomsHtml = '';

        if (showCategories && displayMode !== 'slider') {
            const categories = roomsSettings.categories || [];
            const groupedRooms = {};

            objects.forEach(obj => {
                const cat = obj.category || 'standard';
                if (!groupedRooms[cat]) groupedRooms[cat] = [];
                groupedRooms[cat].push(obj);
            });

            Object.keys(groupedRooms).forEach(catId => {
                const catInfo = categories.find(c => c.id === catId) || { name: catId, icon: 'fa-bed' };
                const categoryRooms = groupedRooms[catId].map(obj => this.generateRoomCard(obj, effectsSettings)).join('\n');

                roomsHtml += `
        <div class="rooms-category">
            <h3 class="category-title"><i class="fas ${catInfo.icon}"></i> ${catInfo.name}</h3>
            <div class="rooms-grid ${displayMode === 'masonry' ? 'rooms-masonry' : ''}">
${categoryRooms}
            </div>
        </div>`;
            });
        } else if (displayMode === 'slider') {
            // INFINITE SLIDER - duplicate cards for seamless looping
            const roomCards = objects.map(obj => this.generateRoomCard(obj, effectsSettings));

            // Create infinite loop by duplicating cards
            const numClones = Math.min(3, objects.length);
            const startClones = roomCards.slice(-numClones);
            const endClones = roomCards.slice(0, numClones);

            const allCards = [...startClones, ...roomCards, ...endClones].join('\n');

            roomsHtml = `
        <div class="rooms-slider-wrapper">
            <button class="slider-btn slider-prev" onclick="slide('rooms-slider', -1)"><i class="fas fa-chevron-left"></i></button>
            <div class="rooms-slider">
                <div class="rooms-slider-track" data-total-items="${objects.length}" data-clone-count="${numClones}">
                    ${allCards}
                </div>
            </div>
            <button class="slider-btn slider-next" onclick="slide('rooms-slider', 1)"><i class="fas fa-chevron-right"></i></button>
        </div>
        <div class="slider-dots amenities-slider-dots" data-slider-target="rooms-slider">
            ${objects.map((_, i) => `<span class="slider-dot${i === 0 ? ' active' : ''}" onclick="goToSlide('rooms-slider', ${i})"></span>`).join('')}
        </div>`;
        } else {
            // Default grid mode
            const roomCards = objects.map(obj => this.generateRoomCard(obj, effectsSettings)).join('\n');
            roomsHtml = `
        <div class="rooms-grid">
${roomCards}
        </div>`;
        }

        return `<!-- SEKCJA: POKOJE -->
<section class="section-rooms" id="pokoje">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-bed"></i> Nasze Pokoje</span>
            <h2 class="section-title">Znajdź Swój Pokój</h2>
            <p class="section-desc">Wybierz idealne zakwaterowanie dla siebie</p>
        </div>
        ${roomsHtml}
    </div>
</section>

`;
    },

    generateRoomCard(obj, effectsSettings = {}) {
        // Create compact amenities icons for front
        const amenityIcons = (obj.amenities || []).slice(0, 4).map(a => {
            const amenityData = this.findAmenity(a);
            return `<span class="amenity-icon-small" title="${amenityData?.name || a}"><i class="fas ${amenityData?.icon || 'fa-check'}"></i></span>`;
        }).join('');

        // Create detailed amenities list for back
        const amenitiesListBack = (obj.amenities || []).slice(0, 6).map(a => {
            const amenityData = this.findAmenity(a);
            return `<li><i class="fas ${amenityData?.icon || 'fa-check'}"></i> ${amenityData?.name || a}</li>`;
        }).join('\n                            ');

        const useFlipCards = effectsSettings.hoverEffects?.flipCards;

        if (useFlipCards) {
            // 3D Flip card - FRONT: image + amenities + price + button, BACK: detailed description
            return `            <article class="room-card room-card-flip">
                <div class="room-card-inner">
                    <div class="room-card-front">
                        <div class="room-image">
                            <img src="${obj.images?.[0] || 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'}" alt="${obj.name}">
                            ${obj.badge ? `<span class="room-badge">${obj.badge}</span>` : ''}
                        </div>
                        <div class="room-content">
                            <h3>${obj.name}</h3>
                            <div class="room-amenities-icons">
                                ${amenityIcons}
                                ${(obj.amenities || []).length > 4 ? `<span class="amenity-more">+${(obj.amenities || []).length - 4}</span>` : ''}
                            </div>
                            <div class="room-footer">
                                <span class="room-price">od <strong>${obj.price || '199 zł'}</strong>/noc</span>
                                <a href="${settings.bookingUrl || '#'}" target="_blank" rel="noopener noreferrer" class="room-cta">Rezerwuj</a>
                            </div>
                        </div>
                    </div>
                    <div class="room-card-back">
                        <div class="room-back-content">
                            <h3>${obj.name}</h3>
                            <p class="room-description">${obj.description || 'Komfortowy pokój z pełnym wyposażeniem, idealny na relaksujący wypoczynek.'}</p>
                            <div class="room-back-features">
                                <h4><i class="fas fa-concierge-bell"></i> Udogodnienia</h4>
                                <ul class="room-features-list">
                                    ${amenitiesListBack}
                                </ul>
                            </div>
                            <a href="${settings.bookingUrl || '#'}" target="_blank" rel="noopener noreferrer" class="room-cta room-cta-large">
                                <i class="fas fa-calendar-check"></i> Zarezerwuj teraz
                            </a>
                        </div>
                    </div>
                </div>
            </article>`;
        } else {
            // Standard card without flip
            const amenitiesList = (obj.amenities || []).slice(0, 6).map(a => {
                const amenityData = this.findAmenity(a);
                return `<li><i class="fas ${amenityData?.icon || 'fa-check'}"></i> ${amenityData?.name || a}</li>`;
            }).join('\n                        ');

            return `            <article class="room-card">
                <div class="room-image">
                    <img src="${obj.images?.[0] || 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'}" alt="${obj.name}">
                    ${obj.badge ? `<span class="room-badge">${obj.badge}</span>` : ''}
                </div>
                <div class="room-content">
                    <h3>${obj.name}</h3>
                    <p>${obj.description || ''}</p>
                    <ul class="room-features">
                        ${amenitiesList}
                    </ul>
                    <div class="room-footer">
                        <span class="room-price">od <strong>${obj.price || '199 zł'}</strong>/noc</span>
                        <a href="${settings.bookingUrl || '#'}" target="_blank" rel="noopener noreferrer" class="room-cta">Rezerwuj</a>
                    </div>
                </div>
            </article>`;
        }
    },



    findAmenity(id) {
        for (const category of Object.values(AMENITIES)) {
            const found = category.items?.find(item => item.id === id);
            if (found) return found;
        }
        return null;
    },

    // ============================================
    // AMENITIES SECTION
    // ============================================
    // ============================================
    // AMENITIES SECTION
    // ============================================
    generateAmenitiesSection(settings, objects) {
        // Collect unique amenities from all objects
        const allAmenities = new Set();
        objects.forEach(obj => {
            (obj.amenities || []).forEach(a => allAmenities.add(a));
        });

        const uniqueAmenitiesIds = Array.from(allAmenities);
        const amenityCards = uniqueAmenitiesIds.map(id => {
            const amenity = this.findAmenity(id);
            if (!amenity) return null;
            return `<div class="amenity-card slider-item">
                <div class="amenity-icon"><i class="fas ${amenity.icon}"></i></div>
                <h3>${amenity.name}</h3>
            </div>`;
        }).filter(Boolean);

        // Cloning logic for slider
        const totalItems = amenityCards.length;
        // Default to slider if we have enough items
        if (totalItems > 0) {
            const numClones = Math.min(4, totalItems);
            const startClones = amenityCards.slice(-numClones);
            const endClones = amenityCards.slice(0, numClones);
            const allCards = [...startClones, ...amenityCards, ...endClones].join('\n');

            return `<!-- SEKCJA: UDOGODNIENIA -->
<section class="section-amenities" id="udogodnienia">
    <div class="container">
        <div class="section-header section-header-light">
            <span class="section-label section-label-light"><i class="fas fa-concierge-bell"></i> Udogodnienia</span>
            <h2 class="section-title">Wszystko w Cenie</h2>
        </div>
        
        <div class="amenities-slider-wrapper">
            <button class="slider-btn slider-prev" onclick="slide('amenities-slider', -1)"><i class="fas fa-chevron-left"></i></button>
            <div class="amenities-slider">
                <div class="amenities-slider-track" data-total-items="${totalItems}" data-clone-count="${numClones}">
                    ${allCards}
                </div>
            </div>
            <button class="slider-btn slider-next" onclick="slide('amenities-slider', 1)"><i class="fas fa-chevron-right"></i></button>
        </div>
        <div class="slider-dots amenities-slider-dots" data-slider-target="amenities-slider">
            ${uniqueAmenitiesIds.map((_, i) => `<span class="slider-dot${i === 0 ? ' active' : ''}" onclick="goToSlide('amenities-slider', ${i})"></span>`).join('')}
        </div>
    </div>
</section>`;
        }

        return '';
    },

    // ============================================
    // GALLERY SECTION
    // ============================================
    generateGallerySection(settings, objects) {
        // Collect images from all objects
        const allImages = [];
        objects.forEach(obj => {
            (obj.images || []).forEach(img => allImages.push(img));
        });

        const defaultImages = [
            'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
            'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800'
        ];

        const images = allImages.length > 0 ? allImages : defaultImages;

        const galleryItems = images.slice(0, 8).map((img, i) => `        <div class="gallery-item" onclick="openLightbox(this)">
            <img src="${img}" alt="Galeria ${i + 1}">
            <div class="gallery-overlay"><i class="fas fa-search-plus"></i></div>
        </div>`).join('\n');

        return `<!-- SEKCJA: GALERIA -->
<section class="section-gallery" id="galeria">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-camera"></i> Galeria</span>
            <h2 class="section-title">Zobacz Nas</h2>
        </div>
    </div>
    <div class="gallery-grid">
${galleryItems}
    </div>
    
    <!-- Lightbox -->
    <div id="lightbox" class="lightbox" onclick="closeLightbox()">
        <span class="lightbox-close">&times;</span>
        <img id="lightbox-img" src="" alt="Powiększone zdjęcie">
    </div>
</section>

`;
    },

    // ============================================
    // LOCATION SECTION
    // ============================================
    generateLocationSection(settings) {
        const address = settings.address || '';
        const nearbyPlaces = settings.nearbyPlaces || [
            { icon: 'fa-train', name: 'Dworzec', distance: '10 min' },
            { icon: 'fa-plane', name: 'Lotnisko', distance: '25 min' },
            { icon: 'fa-landmark', name: 'Centrum', distance: '5 min' }
        ];

        const nearbyHtml = nearbyPlaces.map(p => `
                    <div class="location-item">
                        <i class="fas ${p.icon}"></i>
                        <span>${p.name} - ${p.distance}</span>
                    </div>`).join('');

        // Google Maps embed with address
        const mapQuery = encodeURIComponent(address || 'Poland');
        const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapQuery}`;

        return `<!-- SEKCJA: LOKALIZACJA -->
<section class="section-location" id="lokalizacja">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-map-marker-alt"></i> Lokalizacja</span>
            <h2 class="section-title">Jak Do Nas Trafić</h2>
        </div>
        <div class="location-grid">
            <div class="location-info">
                <div class="location-address">
                    <i class="fas fa-building"></i>
                    <div>
                        <h4>Adres</h4>
                        <p>${address || 'Wpisz adres w ustawieniach lokalizacji'}</p>
                    </div>
                </div>
                <div class="location-highlights">${nearbyHtml}
                </div>
            </div>
            <div class="location-map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5!2d21.01!3d52.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDE!5e0!3m2!1spl!2spl!4v1680000000000" 
                    width="100%" 
                    height="450" 
                    style="border:0; min-height: 450px;" 
                    allowfullscreen="" 
                    loading="lazy">
                </iframe>
            </div>
        </div>
    </div>
</section>

`;
    },

    // ============================================
    // TESTIMONIALS SECTION
    // ============================================
    generateTestimonialsSection(settings) {
        return `<!-- SEKCJA: OPINIE -->
<section class="section-testimonials" id="opinie">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-star"></i> Opinie</span>
            <h2 class="section-title">Co Mówią Goście</h2>
        </div>
        <div class="testimonials-grid">
            <article class="testimonial-card">
                <div class="testimonial-rating">
                    <span class="rating-score">9.5</span>
                    <span class="rating-label">Fantastyczny</span>
                </div>
                <p class="testimonial-text">"Świetne miejsce! Czysto, wygodnie, obsługa na najwyższym poziomie. Na pewno wrócimy!"</p>
                <div class="testimonial-author">
                    <h5>Anna i Piotr</h5>
                    <span>Warszawa</span>
                </div>
            </article>
            <article class="testimonial-card">
                <div class="testimonial-rating">
                    <span class="rating-score">9.8</span>
                    <span class="rating-label">Wyjątkowy</span>
                </div>
                <p class="testimonial-text">"Idealne miejsce na weekend. Lokalizacja doskonała, pokoje piękne. Polecam!"</p>
                <div class="testimonial-author">
                    <h5>Marek K.</h5>
                    <span>Kraków</span>
                </div>
            </article>
            <article class="testimonial-card">
                <div class="testimonial-rating">
                    <span class="rating-score">9.2</span>
                    <span class="rating-label">Wspaniały</span>
                </div>
                <p class="testimonial-text">"Śniadania rewelacyjne, personel bardzo pomocny. Dzieci były zachwycone!"</p>
                <div class="testimonial-author">
                    <h5>Rodzina Kowalskich</h5>
                    <span>Poznań</span>
                </div>
            </article>
        </div>
    </div>
</section>

`;
    },

    // ============================================
    // FAQ SECTION
    // ============================================
    generateFaqSection(settings) {
        const faqItems = settings.faqItems || [
            { question: 'O której godzinie zameldowanie/wymeldowanie?', answer: 'Zameldowanie od 15:00, wymeldowanie do 11:00. Wcześniejsze/późniejsze godziny możliwe po wcześniejszym uzgodnieniu.' },
            { question: 'Czy można przyjechać ze zwierzętami?', answer: 'Tak! Zwierzęta są mile widziane. Prosimy o wcześniejszą informację przy rezerwacji.' },
            { question: 'Czy jest parking?', answer: 'Tak, dysponujemy bezpłatnym parkingiem dla gości.' },
            { question: 'Jakie formy płatności akceptujecie?', answer: 'Akceptujemy gotówkę, karty płatnicze oraz przelewy bankowe.' },
            { question: 'Czy śniadanie jest wliczone w cenę?', answer: 'Zależy od wybranej oferty. Sprawdź szczegóły przy rezerwacji lub skontaktuj się z nami.' },
            { question: 'Czy jest możliwość anulowania rezerwacji?', answer: 'Tak, bezpłatna anulacja możliwa do 48h przed przyjazdem. Szczegóły w warunkach rezerwacji.' }
        ];

        const faqHtml = faqItems.map(item => `
            <details class="faq-item">
                <summary>${item.question}</summary>
                <p>${item.answer}</p>
            </details>`).join('');

        return `<!-- SEKCJA: FAQ -->
<section class="section-faq" id="faq">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-question-circle"></i> FAQ</span>
            <h2 class="section-title">Najczęściej Zadawane Pytania</h2>
        </div>
        <div class="faq-list">${faqHtml}
        </div>
    </div>
</section>

`;
    },

    // ============================================
    // NEWSLETTER SECTION
    // ============================================
    generateNewsletterSection(settings) {
        return `<!-- SEKCJA: NEWSLETTER -->
<section class="section-newsletter" id="newsletter">
    <div class="container">
        <div class="newsletter-content">
            <div class="newsletter-text">
                <h3>Zapisz się do newslettera</h3>
                <p>Otrzymuj ekskluzywne oferty i nowości prosto na swoją skrzynkę!</p>
            </div>
            <form class="newsletter-form" onsubmit="return false;">
                <input type="email" placeholder="Twój adres e-mail" required>
                <button type="submit" class="btn-primary">
                    <i class="fas fa-paper-plane"></i> Zapisz się
                </button>
            </form>
        </div>
    </div>
</section>

`;
    },

    // ============================================
    // PARTNERS SECTION
    // ============================================
    generatePartnersSection(settings) {
        return `<!-- SEKCJA: PARTNERZY I CERTYFIKATY -->
<section class="section-partners" id="partnerzy">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-handshake"></i> Partnerzy</span>
            <h2 class="section-title">Zaufali Nam</h2>
            <p class="section-desc">Współpracujemy z najlepszymi w branży</p>
        </div>
        <div class="partners-grid">
            <!-- INSTRUKCJA: Zamień poniższe src na własne logotypy partnerów -->
            <div class="partner-logo">
                <!-- Logo Booking.com - do zamiany -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Booking.com_logo.svg/200px-Booking.com_logo.svg.png" alt="Booking.com" title="Partner Booking.com">
            </div>
            <div class="partner-logo">
                <!-- Logo TripAdvisor - do zamiany -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/TripAdvisor_logo.svg/200px-TripAdvisor_logo.svg.png" alt="TripAdvisor" title="Rekomendowani przez TripAdvisor">
            </div>
            <div class="partner-logo">
                <!-- Logo Google Travel - do zamiany  -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png" alt="Google" title="Widoczni w Google Travel">
            </div>
            <div class="partner-logo">
                <!-- Logo Airbnb - do zamiany -->
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/200px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="Airbnb" title="Dostępni na Airbnb">
            </div>
            <div class="partner-logo">
                <!-- Placeholder dla własnego certyfikatu/partnera -->
                <img src="https://via.placeholder.com/180x60/ffffff/333?text=Twój+Partner" alt="Partner" title="Dodaj własne logo">
            </div>
        </div>
        <p class="partners-note"><i class="fas fa-info-circle"></i> Powyższe logotypy są przykładowe. Zamień je na własne w kodzie HTML.</p>
    </div>
</section>

`;
    },

    // ============================================
    // ATTRACTIONS SECTION
    // ============================================
    generateAttractionsSection(settings) {
        return `<!-- SEKCJA: ATRAKCJE W OKOLICY -->
<section class="section-attractions" id="atrakcje">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-mountain"></i> Atrakcje</span>
            <h2 class="section-title">Co Warto Zobaczyć</h2>
            <p class="section-desc">Odkryj najciekawsze miejsca w okolicy</p>
        </div>
        <div class="attractions-grid">
            <div class="attraction-card">
                <div class="attraction-icon"><i class="fas fa-landmark"></i></div>
                <h3>Stare Miasto</h3>
                <p>Zabytkowe centrum z przepięknymi kamienicami i klimatycznymi uliczkami.</p>
                <span class="attraction-distance"><i class="fas fa-walking"></i> 10 min pieszo</span>
            </div>
            <div class="attraction-card">
                <div class="attraction-icon"><i class="fas fa-tree"></i></div>
                <h3>Park Miejski</h3>
                <p>Rozległy park z ścieżkami spacerowymi, stawem i placem zabaw.</p>
                <span class="attraction-distance"><i class="fas fa-car"></i> 5 min samochodem</span>
            </div>
            <div class="attraction-card">
                <div class="attraction-icon"><i class="fas fa-shopping-bag"></i></div>
                <h3>Centrum Handlowe</h3>
                <p>Nowoczesne centrum z ponad 100 sklepami i restauracjami.</p>
                <span class="attraction-distance"><i class="fas fa-bus"></i> 15 min autobusem</span>
            </div>
            <div class="attraction-card">
                <div class="attraction-icon"><i class="fas fa-theater-masks"></i></div>
                <h3>Teatr Miejski</h3>
                <p>Bogaty repertuar przedstawień teatralnych i koncertów.</p>
                <span class="attraction-distance"><i class="fas fa-walking"></i> 20 min pieszo</span>
            </div>
        </div>
    </div>
</section>

`;
    },

    // ============================================
    // DINING SECTION
    // ============================================
    generateDiningSection(settings) {
        return `<!-- SEKCJA: WYŻYWIENIE -->
<section class="section-dining" id="wyzywienie">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-utensils"></i> Wyżywienie</span>
            <h2 class="section-title">Oferta Gastronomiczna</h2>
        </div>
        <div class="dining-grid">
            <div class="dining-card">
                <div class="dining-icon"><i class="fas fa-coffee"></i></div>
                <h3>Śniadanie</h3>
                <p>Bogaty bufet śniadaniowy serwowany codziennie od 7:00 do 10:30.</p>
                <span class="dining-price">49 zł / os.</span>
            </div>
            <div class="dining-card">
                <div class="dining-icon"><i class="fas fa-hamburger"></i></div>
                <h3>Obiad</h3>
                <p>Dwudaniowy obiad z deserem. Menu zmienia się codziennie.</p>
                <span class="dining-price">59 zł / os.</span>
            </div>
            <div class="dining-card">
                <div class="dining-icon"><i class="fas fa-wine-glass-alt"></i></div>
                <h3>Kolacja</h3>
                <p>Wykwintna kolacja à la carte w naszej restauracji.</p>
                <span class="dining-price">od 79 zł</span>
            </div>
            <div class="dining-card dining-card-featured">
                <div class="dining-icon"><i class="fas fa-star"></i></div>
                <h3>Pełne wyżywienie</h3>
                <p>Śniadanie + obiad + kolacja w pakiecie promocyjnym.</p>
                <span class="dining-price">149 zł / os.</span>
            </div>
        </div>
    </div>
</section>

`;
    },

    // ============================================
    // PRICING SECTION
    // ============================================
    generatePricingSection(settings) {
        const content = window.appState?.sectionContent?.pricing || {};
        const title = content.title || 'Pakiety Pobytowe';
        const subtitle = content.subtitle || 'Wybierz idealny dla siebie';
        const packages = content.packages || [
            { name: 'Weekend Relax', price: '399 zł/os.', features: ['2 noce', 'Śniadania', 'Strefa SPA', 'Parking gratis'] },
            { name: 'Tydzień Wypoczynku', price: '1299 zł/os.', features: ['7 nocy', 'Pełne wyżywienie', 'Masaż 30 min', 'Basen & SPA'], featured: true },
            { name: 'Romantyczny Pobyt', price: '599 zł/para', features: ['1 noc', 'Kolacja przy świecach', 'Szampan w pokoju', 'Późne wymeldowanie'] }
        ];

        const packagesHtml = packages.map((pkg, index) => {
            const isFeatured = pkg.featured || index === 1;
            const featuresHtml = (pkg.features || []).map(f =>
                `<li><i class="fas fa-check"></i> ${f}</li>`
            ).join('\n                    ');

            return `
            <div class="pricing-card${isFeatured ? ' pricing-card-featured' : ''}">
                ${isFeatured ? '<div class="pricing-badge">Bestseller</div>' : ''}
                <h3>${pkg.name}</h3>
                <div class="pricing-price">od <strong>${pkg.price}</strong></div>
                <ul class="pricing-features">
                    ${featuresHtml}
                </ul>
                <a href="#rezerwacja" class="btn-primary">Rezerwuj</a>
            </div>`;
        }).join('\n');

        return `<!-- SEKCJA: CENNIK -->
<section class="section-pricing" id="cennik">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-tags"></i> Cennik</span>
            <h2 class="section-title">${title}</h2>
            <p class="section-desc">${subtitle}</p>
        </div>
        <div class="pricing-grid">
            ${packagesHtml}
        </div>
    </div>
</section>

`;
    },

    // ============================================
    // SPA SECTION
    // ============================================
    generateSpaSection(settings) {
        return `<!-- SEKCJA: SPA & WELLNESS -->
<section class="section-spa" id="spa">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-spa"></i> SPA & Wellness</span>
            <h2 class="section-title">Strefa Relaksu</h2>
        </div>
        <div class="spa-grid">
            <div class="spa-info">
                <p class="spa-lead">Zapraszamy do naszej strefy SPA, gdzie czas płynie wolniej, a Ty możesz w pełni się zrelaksować.</p>
                <ul class="spa-features">
                    <li><i class="fas fa-hot-tub"></i> Jacuzzi</li>
                    <li><i class="fas fa-fire"></i> Sauna fińska</li>
                    <li><i class="fas fa-cloud"></i> Łaźnia parowa</li>
                    <li><i class="fas fa-swimmer"></i> Basen</li>
                    <li><i class="fas fa-dumbbell"></i> Siłownia</li>
                </ul>
                <h4>Godziny otwarcia</h4>
                <p>Codziennie: 8:00 - 22:00</p>
                <a href="#rezerwacja" class="btn-primary"><i class="fas fa-calendar"></i> Zarezerwuj zabieg</a>
            </div>
            <div class="spa-treatments">
                <h4>Popularne zabiegi</h4>
                <div class="treatment-item">
                    <span>Masaż relaksacyjny (60 min)</span>
                    <strong>199 zł</strong>
                </div>
                <div class="treatment-item">
                    <span>Masaż gorącymi kamieniami</span>
                    <strong>249 zł</strong>
                </div>
                <div class="treatment-item">
                    <span>Peeling całego ciała</span>
                    <strong>149 zł</strong>
                </div>
                <div class="treatment-item">
                    <span>Rytuał SPA (120 min)</span>
                    <strong>399 zł</strong>
                </div>
            </div>
        </div>
    </div>
</section>

`;
    },

    // ============================================
    // EVENTS SECTION
    // ============================================
    generateEventsSection(settings) {
        return `<!-- SEKCJA: EVENTY & KONFERENCJE -->
<section class="section-events" id="eventy">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-calendar-alt"></i> Eventy</span>
            <h2 class="section-title">Organizacja Wydarzeń</h2>
        </div>
        <div class="events-grid">
            <div class="event-card">
                <i class="fas fa-users"></i>
                <h3>Konferencje</h3>
                <p>Sale konferencyjne od 10 do 200 osób z pełnym wyposażeniem multimedialnym.</p>
            </div>
            <div class="event-card">
                <i class="fas fa-ring"></i>
                <h3>Wesela</h3>
                <p>Organizacja wesel i przyjęć okolicznościowych z profesjonalną obsługą.</p>
            </div>
            <div class="event-card">
                <i class="fas fa-briefcase"></i>
                <h3>Spotkania firmowe</h3>
                <p>Integracje, szkolenia, eventy firmowe z cateringiem.</p>
            </div>
            <div class="event-card">
                <i class="fas fa-birthday-cake"></i>
                <h3>Uroczystości</h3>
                <p>Komunie, chrzciny, rocznice - stworzymy wyjątkową oprawę.</p>
            </div>
        </div>
        <div class="events-cta">
            <p>Zainteresowany? Skontaktuj się z nami po indywidualną wycenę!</p>
            <a href="#kontakt" class="btn-primary"><i class="fas fa-envelope"></i> Zapytaj o ofertę</a>
        </div>
    </div>
</section>

`;
    },

    // ============================================
    // TRANSPORT SECTION
    // ============================================
    generateTransportSection(settings) {
        return `<!-- SEKCJA: DOJAZD & PARKING -->
<section class="section-transport" id="dojazd">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-car"></i> Dojazd</span>
            <h2 class="section-title">Jak Do Nas Dotrzeć</h2>
        </div>
        <div class="transport-grid">
            <div class="transport-card">
                <i class="fas fa-car"></i>
                <h3>Samochodem</h3>
                <p>Bezpłatny parking dla gości. Wjazd od ul. [nazwa ulicy]. GPS: [współrzędne]</p>
            </div>
            <div class="transport-card">
                <i class="fas fa-train"></i>
                <h3>Pociągiem</h3>
                <p>Dworzec główny: 10 min taksówką. Na życzenie organizujemy transport.</p>
            </div>
            <div class="transport-card">
                <i class="fas fa-plane"></i>
                <h3>Samolotem</h3>
                <p>Lotnisko: 25 min samochodem. Transfer lotniskowy dostępny.</p>
            </div>
            <div class="transport-card">
                <i class="fas fa-bus"></i>
                <h3>Komunikacją miejską</h3>
                <p>Przystanek autobusowy w odległości 200m. Linie: 102, 115, 203.</p>
            </div>
        </div>
        <div class="transport-extras">
            <h4><i class="fas fa-parking"></i> Parking</h4>
            <ul>
                <li>Bezpłatny parking naziemny (50 miejsc)</li>
                <li>Parking podziemny strzeżony (20 zł/doba)</li>
                <li>Stacja ładowania pojazdów elektrycznych</li>
            </ul>
        </div>
    </div>
</section>

`;
    },

    // ============================================
    // RULES SECTION
    // ============================================
    generateRulesSection(settings) {
        return `<!-- SEKCJA: REGULAMIN -->
<section class="section-rules" id="regulamin">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-clipboard-list"></i> Regulamin</span>
            <h2 class="section-title">Zasady Pobytu</h2>
        </div>
        <div class="rules-grid">
            <div class="rule-item">
                <i class="fas fa-clock"></i>
                <h4>Godziny zameldowania</h4>
                <p>Check-in: od 15:00<br>Check-out: do 11:00</p>
            </div>
            <div class="rule-item">
                <i class="fas fa-volume-mute"></i>
                <h4>Cisza nocna</h4>
                <p>Od 22:00 do 7:00<br>Prosimy o poszanowanie innych gości.</p>
            </div>
            <div class="rule-item">
                <i class="fas fa-paw"></i>
                <h4>Zwierzęta</h4>
                <p>Zwierzęta mile widziane.<br>Dopłata: 50 zł/doba.</p>
            </div>
            <div class="rule-item">
                <i class="fas fa-smoking-ban"></i>
                <h4>Palenie</h4>
                <p>Obiekt całkowicie wolny od dymu.<br>Miejsce dla palących na zewnątrz.</p>
            </div>
            <div class="rule-item">
                <i class="fas fa-ban"></i>
                <h4>Anulacja</h4>
                <p>Bezpłatna do 48h przed przyjazdem.<br>Później: 50% opłaty.</p>
            </div>
            <div class="rule-item">
                <i class="fas fa-child"></i>
                <h4>Dzieci</h4>
                <p>Dzieci do lat 3 gratis.<br>Łóżeczka na życzenie.</p>
            </div>
        </div>
    </div>
</section>

`;
    },

    // ============================================
    // CONTACT SECTION
    // ============================================
    generateContactSection(settings) {
        return `<!-- SEKCJA: KONTAKT -->
<section class="section-contact" id="kontakt">
    <div class="container">
        <div class="section-header">
            <span class="section-label"><i class="fas fa-phone"></i> Kontakt</span>
            <h2 class="section-title">Skontaktuj Się z Nami</h2>
        </div>
        <div class="contact-grid">
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <div>
                        <h4>Telefon</h4>
                        <p><a href="tel:${settings.phone || '+48123456789'}">${settings.phone || '+48 123 456 789'}</a></p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <div>
                        <h4>Email</h4>
                        <p><a href="mailto:kontakt@example.com">kontakt@example.com</a></p>
                    </div>
                </div>
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <div>
                        <h4>Adres</h4>
                        <p>${settings.address || 'ul. Przykładowa 123, 00-000 Miasto'}</p>
                    </div>
                </div>
            </div>
            <div class="contact-form">
                <h4>Wyślij wiadomość</h4>
                <form onsubmit="return false;">
                    <input type="text" placeholder="Imię i nazwisko" required>
                    <input type="email" placeholder="Adres e-mail" required>
                    <textarea placeholder="Twoja wiadomość..." rows="4" required></textarea>
                    <button type="submit" class="btn-primary">
                        <i class="fas fa-paper-plane"></i> Wyślij
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>

`;
    },

    // ============================================
    // CTA SECTION
    // ============================================
    generateCtaSection(settings) {
        return `<!-- SEKCJA: CTA REZERWACJA -->
<section class="section-cta" id="rezerwacja">
    <div class="container">
        <div class="cta-content">
            <span class="section-label section-label-light"><i class="fas fa-calendar-check"></i> Rezerwacja</span>
            <h2 class="cta-title">Zarezerwuj Pobyt</h2>
            <p class="cta-desc">Sprawdź dostępność i zarezerwuj swój wymarzony pobyt już teraz!</p>
            <div class="cta-buttons">
                <a href="${settings.bookingUrl || '#'}" class="btn-primary btn-large">
                    <i class="fas fa-calendar-alt"></i> Sprawdź Dostępność
                </a>
                <a href="tel:${settings.phone || '+48123456789'}" class="btn-secondary btn-large">
                    <i class="fas fa-phone"></i> Zadzwoń
                </a>
            </div>
            <div class="cta-perks">
                <span><i class="fas fa-check-circle"></i> Najlepsza cena gwarantowana</span>
                <span><i class="fas fa-check-circle"></i> Bezpłatna anulacja</span>
                <span><i class="fas fa-check-circle"></i> Płatność przy zameldowaniu</span>
            </div>
        </div>
    </div>
</section>
`;
    }
};

// Expose to window
window.TemplateEngine = TemplateEngine;
