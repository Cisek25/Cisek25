{* ============================================
   URBAN WINGS HOSTEL - DYNAMICZNY SZABLON SMARTY
   Wersja: 1.0
   System: idoBooking/idoCMS

   INSTRUKCJA UŻYCIA:
   1. Wklej ten plik do swojego theme
   2. Dodaj pokoje w panelu idoBooking
   3. Ustaw zdjęcia, opisy, ceny
   4. Szablon automatycznie pobierze dane!
   ============================================ *}

<!DOCTYPE html>
<html lang="{$language.code2|default:'pl'}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{$ownerData.object_name|default:'Urban Wings Hostel'} - {$ownerData.object_city|default:'Warszawa'}</title>
    <meta name="description" content="{$meta.description|default:'Hostel w Warszawie - 20 minut od lotniska'}">

    {* Własny CSS *}
    <link rel="stylesheet" href="{$customStylePath}hostel-styles.css">

    {* Booking Engine CSS *}
    <link rel="stylesheet" href="{$customStylePath}booking-engine-hostel.css">

    {* Google Analytics *}
    {if $useGoogleAnalytics}
        {$googleAnalyticsSource}
    {/if}
</head>
<body>

    {* ============================================
         SECTION 1: O HOSTELU
         ============================================ *}
    <section class="about-section">
        <div class="container">
            <div class="about-grid">
                <div class="about-content">
                    <span class="section-label">O nas</span>
                    <h2 class="section-title">{$ownerData.object_name|default:'Urban Wings Hostel'}</h2>

                    {* Treść z CMS lub domyślna *}
                    {if $aboutPage.content}
                        <p class="about-text">{$aboutPage.content|strip_tags|truncate:500}</p>
                    {else}
                        <p class="about-text">
                            Więcej niż miejsce do spania - to idealne miejsce dla podróżników z całego świata.
                            Tylko 20 minut od Lotniska Chopina, w samym sercu Warszawy.
                        </p>
                    {/if}

                    {* Statystyki - dynamiczne *}
                    <div class="about-stats">
                        <div class="stat-item">
                            <div class="stat-number">{$objects|@count}</div>
                            <div class="stat-label">Pokoi</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">4.9</div>
                            <div class="stat-label">Ocena gości</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">24/7</div>
                            <div class="stat-label">Recepcja</div>
                        </div>
                    </div>
                </div>

                {* Główne zdjęcie z galerii *}
                <div class="about-image">
                    {if $commonGallery[0]['url']}
                        <img src="{$commonGallery[0]['url']}" alt="{$ownerData.object_name}">
                    {else}
                        <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop" alt="Hostel">
                    {/if}
                </div>
            </div>
        </div>
    </section>

    {* ============================================
         SECTION 2: POKOJE - DYNAMICZNE Z $objects
         ============================================ *}
    <section class="rooms-section" id="pokoje">
        <div class="container">
            <div class="section-header">
                <span class="section-label">Noclegi</span>
                <h2 class="section-title">Wybierz swoje miejsce</h2>
                <p class="section-description">Od dormitoriów po pokoje prywatne</p>
            </div>

            <div class="rooms-grid">
                {* ITERACJA PO POKOJACH Z SYSTEMU *}
                {foreach from=$objects item=room}
                    {if $room.visible_at_site}
                    <div class="room-card">
                        {* Zdjęcie pokoju *}
                        <div class="room-image">
                            {if $room.objectPicture[0]['url']}
                                <img src="{$room.objectPicture[0]['url']}" alt="{$room.descriptions[$language.id]['name']|default:$room.name}">
                            {else}
                                <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop" alt="{$room.name}">
                            {/if}

                            {* Badge - typ pokoju *}
                            {if $room.capacity <= 4}
                                <span class="room-badge room-badge-premium">Premium</span>
                            {elseif $room.capacity >= 8}
                                <span class="room-badge">Najpopularniejsze</span>
                            {/if}
                        </div>

                        <div class="room-content">
                            {* Nazwa pokoju *}
                            <h3 class="room-name">
                                {$room.descriptions[$language.id]['name']|default:$room.name}
                            </h3>

                            {* Informacje o pokoju *}
                            <div class="room-features">
                                <div class="room-feature">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                    {$room.capacity} os.
                                </div>

                                {if $room.roll_away_beds > 0}
                                <div class="room-feature">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                    </svg>
                                    +{$room.roll_away_beds} dostawka
                                </div>
                                {/if}
                            </div>

                            {* Udogodnienia *}
                            {if $room.amenitiesInObject}
                            <ul class="room-amenities">
                                {foreach from=$room.amenitiesInObject item=amenity name=amenities}
                                    {if $smarty.foreach.amenities.index < 4}
                                        <li>{$amenity.name}</li>
                                    {/if}
                                {/foreach}
                            </ul>
                            {/if}

                            {* Cena i przycisk rezerwacji *}
                            <div class="room-footer">
                                <div class="room-price">
                                    <span class="price-from">od</span>
                                    <span class="price-amount">
                                        {if $room.priceMinInFormat}
                                            {$room.priceMinInFormat}
                                        {else}
                                            45 zł
                                        {/if}
                                    </span>
                                    <span class="price-period">/noc</span>
                                </div>

                                <a href="{$button_link}?object_id={$room.id}" class="room-btn">Rezerwuj</a>
                            </div>
                        </div>
                    </div>
                    {/if}
                {/foreach}
            </div>
        </div>
    </section>

    {* ============================================
         SECTION 3: UDOGODNIENIA - DYNAMICZNE
         ============================================ *}
    <section class="amenities-section" id="udogodnienia">
        <div class="container">
            <div class="section-header">
                <span class="section-label">Udogodnienia</span>
                <h2 class="section-title">Wszystko czego potrzebujesz</h2>
            </div>

            <div class="amenities-grid">
                {* Statyczne udogodnienia - można też zrobić dynamiczne z $object.amenitiesInLocation *}
                <div class="amenity-card">
                    <div class="amenity-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                            <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                            <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                            <line x1="12" y1="20" x2="12.01" y2="20"></line>
                        </svg>
                    </div>
                    <h3 class="amenity-name">Szybkie WiFi</h3>
                    <p class="amenity-desc">300 Mb/s w całym budynku za darmo</p>
                </div>

                <div class="amenity-card">
                    <div class="amenity-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                    </div>
                    <h3 class="amenity-name">Wspólna Kuchnia</h3>
                    <p class="amenity-desc">Pełne wyposażenie 24/7</p>
                </div>

                <div class="amenity-card">
                    <div class="amenity-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <h3 class="amenity-name">Recepcja 24/7</h3>
                    <p class="amenity-desc">Zawsze ktoś do pomocy</p>
                </div>

                <div class="amenity-card">
                    <div class="amenity-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                            <line x1="4" y1="22" x2="4" y2="15"></line>
                        </svg>
                    </div>
                    <h3 class="amenity-name">Tours & Events</h3>
                    <p class="amenity-desc">Wycieczki po Warszawie</p>
                </div>
            </div>
        </div>
    </section>

    {* ============================================
         SECTION 4: WSPÓLNE PRZESTRZENIE - Z GALERII
         ============================================ *}
    <section class="spaces-section">
        <div class="container">
            <div class="section-header">
                <span class="section-label">Wspólne przestrzenie</span>
                <h2 class="section-title">Miejsca, gdzie się spotykamy</h2>
            </div>

            <div class="spaces-grid">
                {* Możesz użyć $commonGallery lub statyczne zdjęcia *}
                <div class="space-card space-card-large">
                    <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=600&fit=crop" alt="Common Room">
                    <div class="space-overlay">
                        <h3 class="space-name">Common Room</h3>
                        <p class="space-desc">Główne centrum życia towarzyskiego.</p>
                    </div>
                </div>

                <div class="space-card">
                    <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=600&fit=crop" alt="Kuchnia">
                    <div class="space-overlay">
                        <h3 class="space-name">Wspólna Kuchnia</h3>
                        <p class="space-desc">Gotuj i dziel się z innymi.</p>
                    </div>
                </div>

                <div class="space-card">
                    <img src="https://images.unsplash.com/photo-1544986581-efac024faf62?w=500&h=600&fit=crop" alt="Taras">
                    <div class="space-overlay">
                        <h3 class="space-name">Taras na Dachu</h3>
                        <p class="space-desc">Widok na Warszawę.</p>
                    </div>
                </div>

                <div class="space-card space-card-wide">
                    <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&h=500&fit=crop" alt="Coworking">
                    <div class="space-overlay">
                        <h3 class="space-name">Strefa Coworkingu</h3>
                        <p class="space-desc">Szybkie WiFi dla digital nomadów.</p>
                    </div>
                </div>

                <div class="space-card">
                    <img src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=500&h=400&fit=crop" alt="Bar">
                    <div class="space-overlay">
                        <h3 class="space-name">Hostelowy Bar</h3>
                        <p class="space-desc">Drinki w hostelowych cenach.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {* ============================================
         SECTION 5: LOKALIZACJA - DYNAMICZNA
         ============================================ *}
    <section class="location-section">
        <div class="container">
            <div class="section-header">
                <span class="section-label">Lokalizacja</span>
                <h2 class="section-title">Idealnie połączony z całą Warszawą</h2>
            </div>

            <div class="location-grid">
                {* Mapa Google - dynamiczne współrzędne *}
                <div class="location-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d{$ownerData.geolocation_lat}!2d{$ownerData.geolocation_lng}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x!2sen!4v1234567890"
                        width="100%"
                        height="100%"
                        style="border:0;"
                        allowfullscreen=""
                        loading="lazy">
                    </iframe>
                </div>

                <div class="location-info">
                    <h3 class="location-title">Jak do nas dotrzeć?</h3>

                    <div class="transport-options">
                        <div class="transport-option">
                            <div class="transport-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                </svg>
                            </div>
                            <div class="transport-details">
                                <h4>Lotnisko Chopina</h4>
                                <p><strong>20 minut</strong> - Autobus 175</p>
                                <p class="transport-cost">Bilet: 4,40 zł</p>
                            </div>
                        </div>
                    </div>

                    {* Adres z systemu *}
                    <div class="location-address">
                        <h4>Adres</h4>
                        <p>{$ownerData.object_street}</p>
                        <p>{$ownerData.object_zipcode} {$ownerData.object_city}</p>
                        <p>{$ownerData.object_country}</p>

                        {if $ownerData.object_email}
                            <a href="mailto:{$ownerData.object_email}" class="location-email">
                                {$ownerData.object_email}
                            </a>
                        {/if}

                        {if $ownerData.object_phone}
                            <a href="tel:{$ownerData.object_phone}" class="location-phone">
                                {$ownerData.object_phone}
                            </a>
                        {/if}
                    </div>
                </div>
            </div>
        </div>
    </section>

    {* ============================================
         SECTION 6: KONTAKT - DYNAMICZNY
         ============================================ *}
    <section class="contact-section" id="rezerwacja">
        <div class="container">
            <div class="section-header">
                <span class="section-label">Skontaktuj się z nami</span>
                <h2 class="section-title">{$ownerData.object_name|default:'Urban Wings Hostel'}</h2>
                <p class="section-description">
                    Dołącz do międzynarodowej społeczności podróżników w sercu Warszawy.
                </p>
            </div>

            <div class="contact-info-grid">
                {* Telefon z systemu *}
                <div class="contact-card">
                    <div class="contact-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </div>
                    <h3>Telefon</h3>
                    <a href="tel:{$ownerData.object_phone}">{$ownerData.object_phone|default:'+48 22 222 22 22'}</a>
                    <p>Recepcja 24/7</p>
                </div>

                {* Email z systemu *}
                <div class="contact-card">
                    <div class="contact-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>
                    <h3>Email</h3>
                    <a href="mailto:{$ownerData.object_email}">{$ownerData.object_email|default:'hello@urbanwings.pl'}</a>
                    <p>Odpowiadamy w 24h</p>
                </div>

                {* Adres z systemu *}
                <div class="contact-card">
                    <div class="contact-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    </div>
                    <h3>Adres</h3>
                    <p>{$ownerData.object_street|default:'ul. Marszałkowska 99/101'}</p>
                    <p>{$ownerData.object_zipcode|default:'00-693'} {$ownerData.object_city|default:'Warszawa'}</p>
                </div>
            </div>
        </div>
    </section>

    {* ============================================
         JAVASCRIPT - FAQ & SMOOTH SCROLL
         ============================================ *}
    <script>
        // FAQ Accordion
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    </script>

</body>
</html>
