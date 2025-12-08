// TEMPLATES DATA - 20 Ultra-Advanced Templates
// Bazowane na najlepszych projektach: pensjonat, hostel, apartments, odrynki, slowhop

/**
 * Ultra zaawansowane szablony dla różnych typów obiektów
 * Każdy szablon zawiera:
 * - Kompletną konfigurację kolorów (primary, secondary, accent, backgrounds)
 * - Fonty (heading, body)
 * - Layout structure
 * - Przykładowe sekcje
 * - Amenities
 * - Gallery suggestions
 */

const templates = [
    // ========================================
    // LUXURY & PREMIUM
    // ========================================
    {
        id: 'luxury-mountain-resort',
        name: '⛰️ Luksusowy Resort Górski',
        category: 'luxury',
        description: 'Ekskluzywny pensjonat w górach z eleganckimi wnętrzami i panoramicznymi widokami',
        theme: 'luxury-mountain',
        colors: {
            primary: '#2B3A42',      // Ciemny granat
            secondary: '#3A5F4F',     // Leśna zieleń
            accent: '#CDD789',        // Musztardowy akcent
            backgrounds: ['#FFFEF9', '#F5F1E8']
        },
        fonts: {
            heading: 'Cinzel',
            body: 'Inter'
        },
        layout: {
            headerStyle: 'elegant-sticky',
            heroType: 'full-screen-image',
            sectionStyle: 'alternating-backgrounds',
            footerStyle: 'detailed-columns'
        },
        sections: [
            {
                type: 'hero',
                title: 'Witamy w {PROPERTY_NAME}',
                subtitle: 'Luksus w sercu gór',
                cta: ['Zarezerwuj pobyt', 'Zobacz pokoje']
            },
            {
                type: 'about',
                title: 'O Nas',
                layout: 'text-image-split'
            },
            {
                type: 'rooms',
                title: 'Nasze Apartamenty',
                layout: 'card-grid-3',
                features: ['luxury-beds', 'mountain-view', 'private-balcony']
            },
            {
                type: 'amenities',
                title: 'Udogodnienia',
                categories: ['Wypoczynek', 'Wellness', 'Sport', 'Dodatkowe']
            },
            {
                type: 'gallery',
                title: 'Galeria',
                layout: 'masonry-grid'
            },
            {
                type: 'location',
                title: 'Lokalizacja',
                features: ['map', 'attractions-nearby']
            },
            {
                type: 'testimonials',
                title: 'Opinie Gości',
                layout: 'carousel'
            },
            {
                type: 'contact',
                title: 'Kontakt',
                layout: 'form-and-info'
            }
        ],
        amenities: [
            '🏔️ Widok na góry',
            '🛏️ Luksusowe łóżka',
            '🚿 Designerskie łazienki',
            '🧖 SPA i sauna',
            '🍽️ Restauracja',
            '🍷 Winiarnia',
            '📶 Szybkie WiFi',
            '🅿️ Parking',
            '🔥 Kominek',
            '🎿 Przechowalnia sprzętu',
            '🌲 Tarasy widokowe',
            '📚 Biblioteka'
        ],
        recommended: ['pensjonat', 'hotel', 'spa-resort']
    },

    {
        id: 'coastal-luxury-hotel',
        name: '🏖️ Luksusowy Hotel Nadmorski',
        category: 'luxury',
        description: 'Premium hotel nad morzem z plażą prywatną i ekskluzywnym SPA',
        theme: 'coastal-resort',
        colors: {
            primary: '#1B4B5A',      // Głęboki ocean blue
            secondary: '#E8F4F8',     // Jasny błękit
            accent: '#F4A261',        // Piaskowy pomarańcz
            backgrounds: ['#FFFFFF', '#F8FEFF']
        },
        fonts: {
            heading: 'Playfair Display',
            body: 'Lato'
        },
        layout: {
            headerStyle: 'transparent-overlay',
            heroType: 'video-background',
            sectionStyle: 'clean-white-spaces',
            footerStyle: 'minimal-centered'
        },
        sections: [
            {
                type: 'hero',
                title: 'Raj nad Bałtykiem',
                subtitle: 'Ekskluzywny wypoczynek z widokiem na morze',
                cta: ['Rezerwuj teraz', 'Oferta specjalna']
            },
            {
                type: 'usp',
                title: 'Dlaczego my?',
                layout: 'icon-features-4col',
                features: ['Plaża prywatna', 'SPA Premium', 'Michelin Restaurant', 'Kids Club']
            },
            {
                type: 'rooms',
                title: 'Pokoje i Apartamenty',
                layout: 'card-grid-2-featured',
                features: ['sea-view', 'balcony', 'king-bed']
            },
            {
                type: 'spa',
                title: 'SPA & Wellness',
                layout: 'showcase-with-gallery'
            },
            {
                type: 'dining',
                title: 'Restauracje i Bary',
                layout: 'tabs-with-images'
            },
            {
                type: 'activities',
                title: 'Atrakcje',
                layout: 'timeline-vertical'
            },
            {
                type: 'booking',
                title: 'Zarezerwuj Pobyt',
                layout: 'calendar-integrated'
            }
        ],
        amenities: [
            '🌊 Plaża prywatna',
            '🏊 Basen infinity',
            '🧖 SPA & Wellness',
            '🍽️ 3 restauracje',
            '🍹 Beach bar',
            '🎾 Korty tenisowe',
            '🚴 Wypożyczalnia rowerów',
            '👶 Kids club',
            '🏋️ Siłownia',
            '🅿️ Valet parking',
            '🛎️ Concierge 24/7',
            '🌅 Tarasy widokowe'
        ],
        recommended: ['hotel', 'resort', 'spa']
    },

    {
        id: 'boutique-city-hotel',
        name: '🏙️ Butikowy Hotel Miejski',
        category: 'luxury',
        description: 'Design hotel w centrum miasta z artystycznym wnętrzem',
        theme: 'urban-boutique',
        colors: {
            primary: '#1A1A1D',      // Prawie czarny
            secondary: '#C3073F',     // Głęboka czerwień
            accent: '#950740',        // Ciemna purpura
            backgrounds: ['#FFFFFF', '#F5F5F5']
        },
        fonts: {
            heading: 'Montserrat',
            body: 'Open Sans'
        },
        layout: {
            headerStyle: 'minimalist-fixed',
            heroType: 'split-screen',
            sectionStyle: 'modern-grid',
            footerStyle: 'compact-social'
        },
        sections: [
            {
                type: 'hero',
                title: 'Urban Elegance',
                subtitle: 'Gdzie design spotyka się z komfortem',
                cta: ['Odkryj pokoje', 'Sprawdź oferty']
            },
            {
                type: 'about',
                title: 'Nasza Historia',
                layout: 'parallax-story'
            },
            {
                type: 'rooms',
                title: 'Designer Rooms',
                layout: 'hover-reveal-grid',
                features: ['design-furniture', 'smart-room', 'rain-shower']
            },
            {
                type: 'art',
                title: 'Galeria Sztuki',
                layout: 'lightbox-gallery'
            },
            {
                type: 'events',
                title: 'Wydarzenia',
                layout: 'calendar-events'
            },
            {
                type: 'restaurant',
                title: 'Fusion Cuisine',
                layout: 'menu-showcase'
            }
        ],
        amenities: [
            '🎨 Galeria sztuki',
            '🍸 Rooftop bar',
            '☕ Specialty coffee',
            '🎵 Live music',
            '🖥️ Smart rooms',
            '🚕 Transfer lotnisko',
            '💼 Coworking',
            '🎭 Bilety kulturalne',
            '🚲 City bikes',
            '📸 Instagram spots',
            '🎪 Wydarzenia kulturalne',
            '🌿 Zielone tarasy'
        ],
        recommended: ['hotel', 'aparthotel', 'boutique']
    },

    // ========================================
    // FAMILY & FRIENDLY
    // ========================================
    {
        id: 'family-countryside-pension',
        name: '🌲 Rodzinny Pensjonat na Wsi',
        category: 'family',
        description: 'Ciepły i przyjazny pensjonat idealny dla rodzin z dziećmi',
        theme: 'family-countryside',
        colors: {
            primary: '#6B8E23',      // Oliwkowa zieleń
            secondary: '#F4E4C1',     // Ciepły beż
            accent: '#FF6B6B',        // Przyjazna czerwień
            backgrounds: ['#FFFEF5', '#FAF6E8']
        },
        fonts: {
            heading: 'Quicksand',
            body: 'Nunito'
        },
        layout: {
            headerStyle: 'friendly-colorful',
            heroType: 'animated-illustrations',
            sectionStyle: 'rounded-cards',
            footerStyle: 'playful-wave'
        },
        sections: [
            {
                type: 'hero',
                title: 'Witamy w Rodzinnym Raju',
                subtitle: 'Gdzie dzieci są szczęśliwe, a rodzice wypoczęci',
                cta: ['Zarezerwuj pobyt', 'Zobacz pokoje rodzinne']
            },
            {
                type: 'family-features',
                title: 'Dla Całej Rodziny',
                layout: 'icon-grid-colorful',
                features: ['kids-playground', 'family-rooms', 'kids-menu', 'babysitting']
            },
            {
                type: 'rooms',
                title: 'Pokoje Rodzinne',
                layout: 'spacious-cards',
                features: ['family-room', 'kids-area', 'kitchenette']
            },
            {
                type: 'activities',
                title: 'Atrakcje dla Dzieci',
                layout: 'fun-cards'
            },
            {
                type: 'farm',
                title: 'Gospodarstwo',
                layout: 'animal-showcase'
            },
            {
                type: 'meals',
                title: 'Domowa Kuchnia',
                layout: 'menu-family'
            },
            {
                type: 'surroundings',
                title: 'Okolica',
                layout: 'map-with-attractions'
            }
        ],
        amenities: [
            '🎠 Plac zabaw',
            '🐴 Mini zoo',
            '🚜 Przejażdżki traktorem',
            '👶 Pokoje rodzinne',
            '🍼 Wyposażenie dla niemowląt',
            '🎨 Kącik zabaw',
            '🚴 Rowery dziecięce',
            '🏐 Boisko',
            '🍰 Domowa kuchnia',
            '🥛 Produkty ze wsi',
            '🔥 Ognisko',
            '🌲 Ścieżki spacerowe'
        ],
        recommended: ['pensjonat', 'agroturystyka', 'gospodarstwo']
    },

    {
        id: 'eco-family-resort',
        name: '🌿 Eko Resort dla Rodzin',
        category: 'family',
        description: 'Ekologiczny ośrodek z programem edukacyjnym dla dzieci',
        theme: 'eco-family',
        colors: {
            primary: '#2D5016',      // Leśna zieleń
            secondary: '#8FBC8F',     // Jasna zieleń
            accent: '#FFD700',        // Słoneczny żółty
            backgrounds: ['#FAFFF5', '#F0F8F0']
        },
        fonts: {
            heading: 'Poppins',
            body: 'Roboto'
        },
        layout: {
            headerStyle: 'eco-natural',
            heroType: 'nature-slideshow',
            sectionStyle: 'organic-shapes',
            footerStyle: 'eco-footer'
        },
        sections: [
            {
                type: 'hero',
                title: 'Wypoczynek w Harmonii z Naturą',
                subtitle: 'Ekologiczny resort dla świadomych rodzin',
                cta: ['Poznaj ofertę', 'Rezerwuj eco-pobyt']
            },
            {
                type: 'eco-philosophy',
                title: 'Nasza Filozofia',
                layout: 'values-showcase'
            },
            {
                type: 'accommodations',
                title: 'Eko Domki',
                layout: 'eco-cabins-grid',
                features: ['solar-powered', 'natural-materials', 'composting']
            },
            {
                type: 'education',
                title: 'Edukacja Ekologiczna',
                layout: 'workshop-cards'
            },
            {
                type: 'garden',
                title: 'Ogród Warzywny',
                layout: 'garden-tour'
            },
            {
                type: 'activities',
                title: 'Aktywności w Naturze',
                layout: 'outdoor-activities'
            }
        ],
        amenities: [
            '🌱 Warsztaty ekologiczne',
            '🥬 Ogród warzywny',
            '🏡 Eko domki',
            '☀️ Energia solarna',
            '♻️ Zero waste',
            '🌳 Ścieżka edukacyjna',
            '🐝 Pasieka',
            '🧺 Produkty lokalne',
            '🚶 Nordic walking',
            '🧘 Joga w naturze',
            '🌼 Zielarstwo',
            '🔥 Ekologiczne ognisko'
        ],
        recommended: ['ośrodek', 'agroturystyka', 'domki']
    },

    // ========================================
    // WELLNESS & SPA
    // ========================================
    {
        id: 'wellness-sanctuary',
        name: '🧘 Sanctuarium Wellness',
        category: 'wellness',
        description: 'Luksusowe centrum wellness z holistycznym podejściem do zdrowia',
        theme: 'wellness-sanctuary',
        colors: {
            primary: '#5D4E6D',      // Lawenda
            secondary: '#E8DFF5',     // Jasna lawenda
            accent: '#96CEB4',        // Miętowy
            backgrounds: ['#FFFFFF', '#F9F7FC']
        },
        fonts: {
            heading: 'Cormorant Garamond',
            body: 'Source Sans Pro'
        },
        layout: {
            headerStyle: 'serene-minimal',
            heroType: 'zen-parallax',
            sectionStyle: 'flowing-sections',
            footerStyle: 'peaceful-minimal'
        },
        sections: [
            {
                type: 'hero',
                title: 'Odkryj Wewnętrzną Równowagę',
                subtitle: 'Holistyczne spa & wellness retreat',
                cta: ['Zarezerwuj pobyt', 'Program wellness']
            },
            {
                type: 'philosophy',
                title: 'Filozofia Wellness',
                layout: 'centered-text-flow'
            },
            {
                type: 'treatments',
                title: 'Zabiegi & Terapie',
                layout: 'treatment-menu',
                categories: ['Masaże', 'Spa', 'Ayurveda', 'Medytacja']
            },
            {
                type: 'programs',
                title: 'Programy Wellness',
                layout: 'program-cards',
                duration: ['3-dni', '7-dni', '14-dni']
            },
            {
                type: 'instructors',
                title: 'Nasi Terapeuci',
                layout: 'team-showcase'
            },
            {
                type: 'facilities',
                title: 'Strefa SPA',
                layout: 'spa-gallery'
            },
            {
                type: 'nutrition',
                title: 'Dieta Detox',
                layout: 'menu-wellness'
            }
        ],
        amenities: [
            '🧘 Joga i medytacja',
            '💆 Masaże holistyczne',
            '🌿 Ayurveda',
            '🧖 Sauna infrared',
            '💎 Krioterapia',
            '🛁 Kąpiele termalne',
            '🌸 Aromaterapia',
            '🎋 Terapia bambusowa',
            '🍵 Bar detox',
            '📿 Warsztaty mindfulness',
            '🌅 Taras do medytacji',
            '🏊 Basen mineralny'
        ],
        recommended: ['spa', 'wellness', 'retreat']
    },

    {
        id: 'thermal-spa-resort',
        name: '♨️ Termy & Spa Resort',
        category: 'wellness',
        description: 'Termalny ośrodek z kompleksem basenów i strefą odnowy',
        theme: 'thermal-spa',
        colors: {
            primary: '#1B4965',      // Głęboki niebieski
            secondary: '#5FA8D3',     // Wodny błękit
            accent: '#CAE9FF',        // Jasny błękit
            backgrounds: ['#FFFFFF', '#F0F8FF']
        },
        fonts: {
            heading: 'Raleway',
            body: 'Lato'
        },
        layout: {
            headerStyle: 'aqua-gradient',
            heroType: 'pool-showcase',
            sectionStyle: 'water-flow',
            footerStyle: 'wave-footer'
        },
        sections: [
            {
                type: 'hero',
                title: 'Termy Relaksu',
                subtitle: 'Naturalne źródła zdrowia i regeneracji',
                cta: ['Zarezerwuj wejście', 'Karnety']
            },
            {
                type: 'pools',
                title: 'Baseny Termalne',
                layout: 'pool-grid',
                features: ['outdoor-pool', 'indoor-pool', 'kids-pool']
            },
            {
                type: 'spa-menu',
                title: 'Menu SPA',
                layout: 'treatment-catalog'
            },
            {
                type: 'sauna-world',
                title: 'Strefa Saun',
                layout: 'sauna-showcase'
            },
            {
                type: 'packages',
                title: 'Pakiety',
                layout: 'package-comparison'
            },
            {
                type: 'health',
                title: 'Korzyści Zdrowotne',
                layout: 'benefits-infographic'
            }
        ],
        amenities: [
            '♨️ Baseny termalne',
            '🏊 Basen olimpijski',
            '🌊 Baseny zewnętrzne',
            '🧖 8 typów saun',
            '❄️ Grota solna',
            '💆 Gabinety SPA',
            '🏋️ Aqua fitness',
            '🧘 Strefa relaksu',
            '🍃 Terapia solankowa',
            '👶 Basen dla dzieci',
            '🍹 Bar przy basenie',
            '🅿️ Parking podziemny'
        ],
        recommended: ['termy', 'aquapark', 'spa']
    },

    // ========================================
    // BUDGET & HOSTELS
    // ========================================
    {
        id: 'urban-backpacker-hostel',
        name: '🎒 Urban Backpacker Hostel',
        category: 'budget',
        description: 'Nowoczesny hostel w centrum miasta z klimatyczną atmosferą',
        theme: 'budget-hostel',
        colors: {
            primary: '#E63946',      // Energetyczna czerwień
            secondary: '#F1FAEE',     // Czysty biały
            accent: '#457B9D',        // Spokojny niebieski
            backgrounds: ['#FFFFFF', '#F8F9FA']
        },
        fonts: {
            heading: 'Bebas Neue',
            body: 'Work Sans'
        },
        layout: {
            headerStyle: 'bold-colorful',
            heroType: 'community-collage',
            sectionStyle: 'energetic-blocks',
            footerStyle: 'social-heavy'
        },
        sections: [
            {
                type: 'hero',
                title: 'Meet. Stay. Explore.',
                subtitle: 'The coolest hostel in town',
                cta: ['Book your bed', 'Check availability']
            },
            {
                type: 'rooms',
                title: 'Dorms & Private Rooms',
                layout: 'hostel-rooms-grid',
                features: ['shared-dorm', 'private-room', 'ensuite']
            },
            {
                type: 'common-areas',
                title: 'Common Spaces',
                layout: 'space-showcase'
            },
            {
                type: 'events',
                title: 'Events & Activities',
                layout: 'event-calendar'
            },
            {
                type: 'city-guide',
                title: 'Explore the City',
                layout: 'insider-tips'
            },
            {
                type: 'community',
                title: 'Our Community',
                layout: 'traveler-stories'
            }
        ],
        amenities: [
            '🛏️ Pokoje wieloosobowe',
            '🔒 Sejfy',
            '🍳 Wspólna kuchnia',
            '☕ Free coffee',
            '📶 Fast WiFi',
            '🎮 Sala gier',
            '🎸 Instrumenty',
            '🍺 Bar',
            '🎉 Wydarzenia',
            '🗺️ Free walking tours',
            '🚲 Wypożyczalnia rowerów',
            '🧺 Pralnia samoobsługowa'
        ],
        recommended: ['hostel', 'backpacker', 'budget']
    },

    {
        id: 'beach-surf-hostel',
        name: '🏄 Beach Surf Hostel',
        category: 'budget',
        description: 'Hostel dla surferów tuż przy plaży z chillout vibe',
        theme: 'beach-surf',
        colors: {
            primary: '#00B4D8',      // Ocean blue
            secondary: '#90E0EF',     // Jasny błękit
            accent: '#FFB703',        // Słoneczny pomarańcz
            backgrounds: ['#FFFFFF', '#F7FEFF']
        },
        fonts: {
            heading: 'Righteous',
            body: 'Mukta'
        },
        layout: {
            headerStyle: 'beach-casual',
            heroType: 'surf-video',
            sectionStyle: 'beach-vibes',
            footerStyle: 'sunset-footer'
        },
        sections: [
            {
                type: 'hero',
                title: 'Surf. Sleep. Repeat.',
                subtitle: 'Your beach home away from home',
                cta: ['Book now', 'Surf lessons']
            },
            {
                type: 'accommodations',
                title: 'Beds & Cabanas',
                layout: 'beach-rooms'
            },
            {
                type: 'surf-school',
                title: 'Surf School',
                layout: 'lessons-showcase'
            },
            {
                type: 'beach-bar',
                title: 'Beach Bar',
                layout: 'drinks-menu'
            },
            {
                type: 'activities',
                title: 'Beach Activities',
                layout: 'activity-grid'
            }
        ],
        amenities: [
            '🏄 Szkoła surfingu',
            '🏖️ 50m od plaży',
            '🛏️ Dormsy i cabany',
            '🍹 Beach bar',
            '🔥 Bonfire nights',
            '🎵 Live music',
            '🌅 Sunset yoga',
            '🚿 Outdoor showers',
            '🏐 Beach volleyball',
            '🛶 Kayak rental',
            '🎣 Fishing trips',
            '📸 GoPro rental'
        ],
        recommended: ['hostel', 'surf-camp', 'beach']
    },

    // ========================================
    // APARTMENTS & STUDIOS
    // ========================================
    {
        id: 'modern-city-apartments',
        name: '🏢 Modern City Apartments',
        category: 'apartments',
        description: 'Nowoczesne apartamenty w centrum z pełnym wyposażeniem',
        theme: 'modern-apartments',
        colors: {
            primary: '#2D2D2D',      // Charcoal
            secondary: '#F5F5F5',     // Light gray
            accent: '#0077B6',        // Corporate blue
            backgrounds: ['#FFFFFF', '#FAFAFA']
        },
        fonts: {
            heading: 'Rubik',
            body: 'Inter'
        },
        layout: {
            headerStyle: 'corporate-clean',
            heroType: 'apartment-showcase',
            sectionStyle: 'modern-grid',
            footerStyle: 'contact-focused'
        },
        sections: [
            {
                type: 'hero',
                title: 'Your Urban Residence',
                subtitle: 'Fully equipped apartments in the heart of the city',
                cta: ['View apartments', 'Long-term stays']
            },
            {
                type: 'apartments',
                title: 'Our Apartments',
                layout: 'apartment-cards',
                types: ['studio', '1-bedroom', '2-bedroom']
            },
            {
                type: 'features',
                title: 'What\'s Included',
                layout: 'feature-list'
            },
            {
                type: 'building',
                title: 'The Building',
                layout: 'building-amenities'
            },
            {
                type: 'location',
                title: 'Prime Location',
                layout: 'location-benefits'
            },
            {
                type: 'booking',
                title: 'Book Your Stay',
                layout: 'booking-widget'
            }
        ],
        amenities: [
            '🏢 Centrum miasta',
            '🛋️ Pełne wyposażenie',
            '🍳 Kuchnia',
            '🧺 Pralka',
            '📺 Smart TV',
            '🌐 Gigabit WiFi',
            '🏋️ Siłownia w budynku',
            '🅿️ Parking podziemny',
            '📦 Paczkomaty',
            '🔒 Domofon',
            '🧹 Sprzątanie (opcja)',
            '💼 Biuro wirtualne'
        ],
        recommended: ['apartamenty', 'aparthotel', 'mieszkania']
    },

    {
        id: 'holiday-beach-apartments',
        name: '🌴 Holiday Beach Apartments',
        category: 'apartments',
        description: 'Wakacyjne apartamenty z widokiem na morze',
        theme: 'beach-apartments',
        colors: {
            primary: '#0891B2',      // Cyan
            secondary: '#FFF7ED',     // Warm white
            accent: '#FB923C',        // Orange
            backgrounds: ['#FFFFFF', '#FEFCF9']
        },
        fonts: {
            heading: 'Comfortaa',
            body: 'Nunito'
        },
        layout: {
            headerStyle: 'vacation-friendly',
            heroType: 'sea-view',
            sectionStyle: 'relaxed-beach',
            footerStyle: 'vacation-footer'
        },
        sections: [
            {
                type: 'hero',
                title: 'Your Seaside Escape',
                subtitle: 'Wake up to the sound of waves',
                cta: ['Check availability', 'Special offers']
            },
            {
                type: 'apartments',
                title: 'Sea View Apartments',
                layout: 'vacation-cards'
            },
            {
                type: 'beach-access',
                title: 'Private Beach',
                layout: 'beach-showcase'
            },
            {
                type: 'surroundings',
                title: 'What to Do',
                layout: 'activity-map'
            },
            {
                type: 'gallery',
                title: 'Gallery',
                layout: 'vacation-photos'
            }
        ],
        amenities: [
            '🌊 Widok na morze',
            '🏖️ Plaża prywatna',
            '🏊 Basen',
            '🛏️ 2-4 osobowe',
            '🍳 Pełna kuchnia',
            '🌅 Balkony',
            '📶 WiFi',
            '🅿️ Parking',
            '🚲 Rowery gratis',
            '🏐 Beach equipment',
            '🍹 Beach bar',
            '🎣 Wypożyczalnia sprzętu'
        ],
        recommended: ['apartamenty', 'domki', 'wakacje']
    },

    // ========================================
    // MOUNTAIN & ADVENTURE
    // ========================================
    {
        id: 'mountain-lodge-ski',
        name: '⛷️ Mountain Ski Lodge',
        category: 'mountain',
        description: 'Lodge przy stoku z dostępem ski-in/ski-out',
        theme: 'ski-lodge',
        colors: {
            primary: '#8B4513',      // Saddle brown
            secondary: '#F5F5DC',     // Beige
            accent: '#CD853F',        // Peru
            backgrounds: ['#FFFAF0', '#FFF8E7']
        },
        fonts: {
            heading: 'Oswald',
            body: 'Merriweather'
        },
        layout: {
            headerStyle: 'mountain-rustic',
            heroType: 'snow-parallax',
            sectionStyle: 'cozy-wood',
            footerStyle: 'alpine-footer'
        },
        sections: [
            {
                type: 'hero',
                title: 'Alpine Paradise',
                subtitle: 'Ski-in/Ski-out luxury lodge',
                cta: ['Book winter stay', 'Ski packages']
            },
            {
                type: 'accommodations',
                title: 'Rooms & Suites',
                layout: 'mountain-rooms'
            },
            {
                type: 'ski-services',
                title: 'Ski Services',
                layout: 'ski-facilities'
            },
            {
                type: 'restaurant',
                title: 'Alpine Restaurant',
                layout: 'mountain-dining'
            },
            {
                type: 'spa',
                title: 'After-Ski Spa',
                layout: 'wellness-mountain'
            },
            {
                type: 'summer',
                title: 'Summer Activities',
                layout: 'summer-showcase'
            }
        ],
        amenities: [
            '⛷️ Ski-in/ski-out',
            '🎿 Wypożyczalnia sprzętu',
            '🔥 Kominek',
            '🧖 Sauna',
            '🍽️ Góralska restauracja',
            '🍷 Wine cellar',
            '👶 Przedszkole narciarskie',
            '🚡 50m od wyciągu',
            '🏔️ Widoki na góry',
            '🧺 Suszarnia',
            '🅿️ Parking ogrzewany',
            '🎒 Ski room'
        ],
        recommended: ['lodge', 'hotel', 'narty']
    },

    {
        id: 'hiking-mountain-hut',
        name: '🥾 Hiking Mountain Hut',
        category: 'mountain',
        description: 'Schronisko dla miłośników górskich wędrówek',
        theme: 'hiking-hut',
        colors: {
            primary: '#556B2F',      // Dark olive
            secondary: '#F0E68C',     // Khaki
            accent: '#8B4513',        // Saddle brown
            backgrounds: ['#FAFAF0', '#F5F5E8']
        },
        fonts: {
            heading: 'Cabin',
            body: 'Noto Sans'
        },
        layout: {
            headerStyle: 'outdoor-adventure',
            heroType: 'trail-map',
            sectionStyle: 'hiker-friendly',
            footerStyle: 'trail-footer'
        },
        sections: [
            {
                type: 'hero',
                title: 'Mountain Refuge',
                subtitle: 'Your base camp for epic adventures',
                cta: ['Book bed', 'Trail info']
            },
            {
                type: 'accommodations',
                title: 'Rooms & Dorms',
                layout: 'hut-rooms'
            },
            {
                type: 'trails',
                title: 'Hiking Trails',
                layout: 'trail-map-interactive'
            },
            {
                type: 'meals',
                title: 'Mountain Meals',
                layout: 'hearty-food'
            },
            {
                type: 'guides',
                title: 'Guided Tours',
                layout: 'tour-options'
            }
        ],
        amenities: [
            '🥾 Szlaki turystyczne',
            '🏔️ Przewodnicy',
            '🍲 Domowa kuchnia',
            '🔥 Kominek',
            '🛏️ Pokoje i dorm',
            '🧗 Climbing wall',
            '🚿 Łazienki wspólne',
            '📚 Biblioteka górska',
            '🗺️ Mapy i porady',
            '🎒 Przechowalnia',
            '⛑️ First aid',
            '🌄 Tarasy widokowe'
        ],
        recommended: ['schronisko', 'hut', 'górska']
    },

    // ========================================
    // ROMANTIC & COUPLES
    // ========================================
    {
        id: 'romantic-vineyard-estate',
        name: '🍷 Romantic Vineyard Estate',
        category: 'romantic',
        description: 'Romantyczna posiadłość winiarza idealna dla par',
        theme: 'vineyard-romance',
        colors: {
            primary: '#722F37',      // Wine red
            secondary: '#F4E8D8',     // Cream
            accent: '#6B8E23',        // Olive
            backgrounds: ['#FFFEF8', '#FAF8F3']
        },
        fonts: {
            heading: 'Great Vibes',
            body: 'Crimson Text'
        },
        layout: {
            headerStyle: 'elegant-vintage',
            heroType: 'vineyard-panorama',
            sectionStyle: 'romantic-curves',
            footerStyle: 'elegant-minimal'
        },
        sections: [
            {
                type: 'hero',
                title: 'Romance in the Vineyard',
                subtitle: 'An enchanting escape for two',
                cta: ['Book romantic getaway', 'Couples packages']
            },
            {
                type: 'suites',
                title: 'Romantic Suites',
                layout: 'luxury-suites'
            },
            {
                type: 'wine-experience',
                title: 'Wine Tasting',
                layout: 'wine-showcase'
            },
            {
                type: 'dining',
                title: 'Fine Dining',
                layout: 'romantic-restaurant'
            },
            {
                type: 'experiences',
                title: 'Romantic Experiences',
                layout: 'experience-cards'
            },
            {
                type: 'weddings',
                title: 'Dream Weddings',
                layout: 'wedding-showcase'
            }
        ],
        amenities: [
            '🍷 Degustacje win',
            '🕯️ Kolacje przy świecach',
            '💑 Suite dla par',
            '🛁 Wanna jacuzzi',
            '🌅 Tarasy widokowe',
            '🧖 Spa dla par',
            '🌹 Ogrody romantyczne',
            '💒 Organizacja ślubów',
            '🚁 Transfer helikopterem',
            '📸 Sesje zdjęciowe',
            '🥂 Welcome champagne',
            '🎭 Prywatne wydarzenia'
        ],
        recommended: ['winiarnia', 'hotel', 'romantic']
    },

    {
        id: 'castle-boutique-hotel',
        name: '🏰 Castle Boutique Hotel',
        category: 'romantic',
        description: 'Historyczny zamek przekształcony w luksusowy hotel',
        theme: 'castle-luxury',
        colors: {
            primary: '#4A0E0E',      // Deep red
            secondary: '#D4AF37',     // Gold
            accent: '#8B0000',        // Dark red
            backgrounds: ['#FFFEF5', '#F5F3E8']
        },
        fonts: {
            heading: 'Cinzel Decorative',
            body: 'Libre Baskerville'
        },
        layout: {
            headerStyle: 'regal-elegant',
            heroType: 'castle-drone',
            sectionStyle: 'royal-sections',
            footerStyle: 'heraldic-footer'
        },
        sections: [
            {
                type: 'hero',
                title: 'Live Like Royalty',
                subtitle: 'A fairytale castle experience',
                cta: ['Book your stay', 'Royal suites']
            },
            {
                type: 'history',
                title: 'Castle History',
                layout: 'timeline-elegant'
            },
            {
                type: 'suites',
                title: 'Royal Chambers',
                layout: 'castle-rooms'
            },
            {
                type: 'dining',
                title: 'Grand Dining Hall',
                layout: 'medieval-feast'
            },
            {
                type: 'events',
                title: 'Castle Events',
                layout: 'event-spaces'
            },
            {
                type: 'gardens',
                title: 'Castle Gardens',
                layout: 'garden-tour'
            }
        ],
        amenities: [
            '🏰 XV-wieczny zamek',
            '👑 Suite królewskie',
            '🍽️ Sala balowa',
            '🎭 Wydarzenia historyczne',
            '🌹 Ogrody angielskie',
            '🍷 Piwnica winna',
            '📚 Biblioteka',
            '🖼️ Galeria sztuki',
            '🎵 Koncerty',
            '💒 Wesela w zamku',
            '🏹 Atrakcje rycerskie',
            '👻 Ghost tours'
        ],
        recommended: ['zamek', 'pałac', 'hotel']
    },

    // ========================================
    // BUSINESS & CONFERENCES
    // ========================================
    {
        id: 'conference-business-hotel',
        name: '💼 Conference Business Hotel',
        category: 'business',
        description: 'Nowoczesny hotel konferencyjny z centrum biznesowym',
        theme: 'business-modern',
        colors: {
            primary: '#003366',      // Navy blue
            secondary: '#E8E8E8',     // Light gray
            accent: '#0077BE',        // Professional blue
            backgrounds: ['#FFFFFF', '#F7F7F7']
        },
        fonts: {
            heading: 'Roboto Condensed',
            body: 'Open Sans'
        },
        layout: {
            headerStyle: 'corporate-professional',
            heroType: 'business-slider',
            sectionStyle: 'clean-corporate',
            footerStyle: 'business-footer'
        },
        sections: [
            {
                type: 'hero',
                title: 'Where Business Meets Excellence',
                subtitle: 'Premium conference and business facilities',
                cta: ['Request proposal', 'Virtual tour']
            },
            {
                type: 'conference-rooms',
                title: 'Conference Facilities',
                layout: 'facility-showcase'
            },
            {
                type: 'accommodations',
                title: 'Business Rooms',
                layout: 'executive-rooms'
            },
            {
                type: 'services',
                title: 'Business Services',
                layout: 'service-list'
            },
            {
                type: 'catering',
                title: 'Conference Catering',
                layout: 'menu-corporate'
            },
            {
                type: 'team-building',
                title: 'Team Building',
                layout: 'activities-corporate'
            }
        ],
        amenities: [
            '💼 Sale konferencyjne',
            '🖥️ Sprzęt AV',
            '🌐 Gigabit WiFi',
            '☕ Coffee breaks',
            '🍽️ Catering',
            '📊 Flipcharty',
            '🖨️ Centrum biznesowe',
            '🚗 Transfer lotnisko',
            '🅿️ Parking dla autobusów',
            '🏋️ Sala fitness',
            '💆 SPA po pracy',
            '🍷 Welcome reception'
        ],
        recommended: ['hotel', 'konferencje', 'business']
    },

    {
        id: 'airport-hotel-express',
        name: '✈️ Airport Hotel Express',
        category: 'business',
        description: 'Szybki i wygodny hotel przy lotnisku dla biznesu',
        theme: 'airport-express',
        colors: {
            primary: '#1C1C1C',      // Almost black
            secondary: '#F0F0F0',     // Very light gray
            accent: '#FF6B35',        // Orange accent
            backgrounds: ['#FFFFFF', '#FAFAFA']
        },
        fonts: {
            heading: 'Barlow',
            body: 'PT Sans'
        },
        layout: {
            headerStyle: 'fast-minimal',
            heroType: 'quick-booking',
            sectionStyle: 'efficient-blocks',
            footerStyle: 'quick-contact'
        },
        sections: [
            {
                type: 'hero',
                title: 'Fast Check-in, Great Sleep',
                subtitle: '5 minutes from airport terminal',
                cta: ['Quick booking', 'Park & Fly']
            },
            {
                type: 'rooms',
                title: 'Comfortable Rooms',
                layout: 'express-rooms'
            },
            {
                type: 'services',
                title: 'Express Services',
                layout: 'quick-services'
            },
            {
                type: 'location',
                title: 'Perfect Location',
                layout: 'airport-proximity'
            }
        ],
        amenities: [
            '✈️ 5 min od terminala',
            '🚌 Shuttle 24/7',
            '⏰ 24h check-in',
            '🅿️ Park & Fly',
            '🍳 Early breakfast',
            '📶 Fast WiFi',
            '🛏️ Sleep comfort',
            '🚿 Rain shower',
            '☕ Coffee maker',
            '📺 Smart TV',
            '🔇 Soundproof',
            '💼 Work desk'
        ],
        recommended: ['hotel', 'airport', 'transit']
    }
];

/**
 * Funkcja pomocnicza do filtrowania szablonów
 */
function getTemplatesByCategory(category) {
    return templates.filter(t => t.category === category);
}

function getTemplateById(id) {
    return templates.find(t => t.id === id);
}

function getTemplatesByTheme(theme) {
    return templates.filter(t => t.theme === theme);
}

function getRecommendedTemplates(propertyType) {
    return templates.filter(t =>
        t.recommended.some(r => r.toLowerCase().includes(propertyType.toLowerCase()))
    );
}

// Eksport
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        templates,
        getTemplatesByCategory,
        getTemplateById,
        getTemplatesByTheme,
        getRecommendedTemplates
    };
}
