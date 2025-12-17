// ============================================
// ROOM PRESETS - Presety pokoi dla różnych typów obiektów
// ============================================

const ROOM_PRESETS = {
    // ========================================
    // HOTEL 3★ - Budget-focused rooms
    // ========================================
    'hotel-3star': {
        name: 'Hotel 3★',
        rooms: [
            {
                name: 'Pokój Standard',
                description: 'Komfortowy pokój z łazienką, idealny na krótkie pobyty służbowe i turystyczne.',
                price: '189 zł',
                images: ['https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'private-bathroom'],
                badge: 'Ekonomiczny',
                category: 'standard'
            },
            {
                name: 'Pokój Dwuosobowy Comfort',
                description: 'Przestronny pokój dwuosobowy z wygodnym łóżkiem queen-size.',
                price: '249 zł',
                images: ['https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'private-bathroom', 'air-conditioning'],
                badge: 'Popularny',
                category: 'standard'
            },
            {
                name: 'Pokój Rodzinny',
                description: 'Duży pokój dla rodziny z dwoma łóżkami i rozkładaną sofą.',
                price: '349 zł',
                images: ['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'private-bathroom', 'air-conditioning', 'minibar'],
                badge: 'Dla rodzin',
                category: 'standard'
            }
        ]
    },

    // ========================================
    // HOTEL 4★ - Mid-range
    // ========================================
    'hotel-4star': {
        name: 'Hotel 4★',
        rooms: [
            {
                name: 'Pokój Superior',
                description: 'Elegancki pokój z nowoczesnym wystrojem i wysokim standardem wyposażenia.',
                price: '349 zł',
                images: ['https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'minibar', 'safe'],
                badge: 'Superior',
                category: 'standard'
            },
            {
                name: 'Pokój Executive',
                description: 'Przestronny pokój z strefą do pracy i widokiem na miasto.',
                price: '449 zł',
                images: ['https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'minibar', 'safe', 'desk'],
                badge: 'Business',
                category: 'premium'
            },
            {
                name: 'Junior Suite',
                description: 'Luksusowy apartament z osobnym salonem i wanną.',
                price: '599 zł',
                images: ['https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'minibar', 'safe', 'bathtub', 'bathrobe'],
                badge: 'Suite',
                category: 'premium'
            }
        ]
    },

    // ========================================
    // HOTEL 5★ - Luxury
    // ========================================
    'hotel-5star': {
        name: 'Hotel 5★',
        rooms: [
            {
                name: 'Deluxe Room',
                description: 'Wykwintny pokój z najwyższym standardem, marmurową łazienką i widokiem na panoramę.',
                price: '699 zł',
                images: ['https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'minibar', 'safe', 'bathtub', 'bathrobe', 'champagne'],
                badge: 'Deluxe',
                category: 'premium'
            },
            {
                name: 'Grand Suite',
                description: 'Przestronny apartament z osobną sypialnią, salonem i jadalnią.',
                price: '1299 zł',
                images: ['https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'minibar', 'safe', 'bathtub', 'bathrobe', 'champagne', 'butler'],
                badge: 'Grand Suite',
                category: 'premium'
            },
            {
                name: 'Presidential Suite',
                description: 'Najwyższy standard luksusu z prywatnym tarasem, jacuzzi i osobistą obsługą concierge.',
                price: '2499 zł',
                images: ['https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'minibar', 'safe', 'jacuzzi', 'terrace', 'butler', 'champagne'],
                badge: 'Presidential',
                category: 'premium'
            }
        ]
    },

    // ========================================
    // BOUTIQUE - Unique design hotels
    // ========================================
    'boutique': {
        name: 'Hotel Butikowy',
        rooms: [
            {
                name: 'Designer Room',
                description: 'Wyjątkowy pokój z designerskim wnętrzem autorstwa lokalnych artystów.',
                price: '399 zł',
                images: ['https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'minibar'],
                badge: 'Design',
                category: 'standard'
            },
            {
                name: 'Loft',
                description: 'Dwupoziomowy loft z antresolą i industrialnym charakterem.',
                price: '549 zł',
                images: ['https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'minibar', 'kitchen'],
                badge: 'Loft',
                category: 'premium'
            },
            {
                name: 'Penthouse',
                description: 'Ekskluzywny apartament z panoramicznym widokiem i prywatnym tarasem.',
                price: '899 zł',
                images: ['https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'minibar', 'terrace', 'jacuzzi'],
                badge: 'Penthouse',
                category: 'premium'
            }
        ]
    },

    // ========================================
    // PENSION / B&B - Simple accommodation
    // ========================================
    'pension': {
        name: 'Pensjonat / B&B',
        rooms: [
            {
                name: 'Pokój Jednoosobowy',
                description: 'Przytulny pokój z pojedynczym łóżkiem, idealna baza noclegowa.',
                price: '99 zł',
                images: ['https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'private-bathroom'],
                badge: 'Single',
                category: 'standard'
            },
            {
                name: 'Pokój Dwuosobowy',
                description: 'Wygodny pokój z łóżkiem małżeńskim lub twin. Śniadanie w cenie.',
                price: '159 zł',
                images: ['https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'private-bathroom'],
                badge: 'B&B',
                category: 'standard'
            },
            {
                name: 'Pokój Trzyosobowy',
                description: 'Przestronny pokój dla grupy lub rodziny z trzema łóżkami.',
                price: '209 zł',
                images: ['https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'private-bathroom'],
                badge: 'Rodzinny',
                category: 'standard'
            }
        ]
    },

    // ========================================
    // HOSTEL - Budget travelers
    // ========================================
    'hostel': {
        name: 'Hostel',
        rooms: [
            {
                name: 'Łóżko w dormie mieszanym',
                description: 'Miejsce w pokoju wieloosobowym 6-8 osób z szafką na bagaż.',
                price: '45 zł',
                images: ['https://images.pexels.com/photos/6782567/pexels-photo-6782567.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'locker'],
                badge: 'Budget',
                category: 'standard'
            },
            {
                name: 'Pokój Prywatny',
                description: 'Prywatny pokój 2-osobowy z własną łazienką.',
                price: '129 zł',
                images: ['https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'private-bathroom'],
                badge: 'Private',
                category: 'standard'
            },
            {
                name: 'Pod / Kapsuła',
                description: 'Nowoczesna kapsuła z prywatną przestrzenią i gniazdkiem USB.',
                price: '69 zł',
                images: ['https://images.pexels.com/photos/6480195/pexels-photo-6480195.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi'],
                badge: 'Pod',
                category: 'standard'
            }
        ]
    },

    // ========================================
    // APARTMENTS - Self-catering
    // ========================================
    'apartments': {
        name: 'Apartamenty',
        rooms: [
            {
                name: 'Studio',
                description: 'Kompaktowe studio z aneksem kuchennym, idealne dla 1-2 osób.',
                price: '199 zł',
                images: ['https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'kitchen', 'washing-machine', 'private-bathroom'],
                badge: 'Studio',
                category: 'standard'
            },
            {
                name: 'Apartament 1-pokojowy',
                description: 'Przestronny apartament z oddzielną sypialnią i w pełni wyposażoną kuchnią.',
                price: '299 zł',
                images: ['https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'kitchen', 'washing-machine', 'private-bathroom', 'air-conditioning'],
                badge: '1 Sypialnia',
                category: 'premium'
            },
            {
                name: 'Apartament 2-pokojowy',
                description: 'Rodzinny apartament z dwiema sypialniami, salonem i tarasem.',
                price: '449 zł',
                images: ['https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'kitchen', 'washing-machine', 'private-bathroom', 'air-conditioning', 'balcony'],
                badge: '2 Sypialnie',
                category: 'premium'
            }
        ]
    },

    // ========================================
    // RESORT - Vacation destination
    // ========================================
    'resort': {
        name: 'Resort',
        rooms: [
            {
                name: 'Pokój z widokiem na basen',
                description: 'Komfortowy pokój z bezpośrednim widokiem na basen i strefę relaksu.',
                price: '399 zł',
                images: ['https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'pool-access'],
                badge: 'Pool View',
                category: 'standard'
            },
            {
                name: 'Bungalow',
                description: 'Prywatny bungalow z tarasem i bezpośrednim dostępem do ogrodu.',
                price: '549 zł',
                images: ['https://images.pexels.com/photos/1578253/pexels-photo-1578253.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'terrace', 'pool-access'],
                badge: 'Bungalow',
                category: 'premium'
            },
            {
                name: 'Villa z basenem',
                description: 'Ekskluzywna willa z prywatnym basenem i obsługą concierge.',
                price: '1299 zł',
                images: ['https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'private-pool', 'terrace', 'butler', 'kitchen'],
                badge: 'Villa',
                category: 'premium'
            }
        ]
    },

    // ========================================
    // GLAMPING - Eco/Nature
    // ========================================
    'glamping': {
        name: 'Glamping',
        rooms: [
            {
                name: 'Namiot Safari',
                description: 'Luksusowy namiot z prawdziwym łóżkiem i meblami w stylu safari.',
                price: '249 zł',
                images: ['https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'private-bathroom'],
                badge: 'Safari',
                category: 'standard'
            },
            {
                name: 'Kopuła Geodezyjna',
                description: 'Przezroczysta kopuła z widokiem na gwiazdy i naturę.',
                price: '349 zł',
                images: ['https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'private-bathroom', 'terrace'],
                badge: 'Glamping',
                category: 'premium'
            },
            {
                name: 'Domek na drzewie',
                description: 'Unikalne doświadczenie w domku na drzewie z widokiem na las.',
                price: '449 zł',
                images: ['https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'private-bathroom', 'terrace'],
                badge: 'Treehouse',
                category: 'premium'
            }
        ]
    },

    // ========================================
    // AGROTURYSTYKA - Farm stays
    // ========================================
    'agroturystyka': {
        name: 'Agroturystyka',
        rooms: [
            {
                name: 'Pokój w domu gospodarza',
                description: 'Przytulny pokój w wiejskim domu z domowym wyżywieniem.',
                price: '119 zł',
                images: ['https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'private-bathroom', 'breakfast'],
                badge: 'Wiejski',
                category: 'standard'
            },
            {
                name: 'Chatka',
                description: 'Samodzielna chatka z kominkiem i widokiem na pola.',
                price: '199 zł',
                images: ['https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'kitchen', 'private-bathroom', 'fireplace'],
                badge: 'Chatka',
                category: 'standard'
            },
            {
                name: 'Apartament w stodole',
                description: 'Klimatyczny apartament w przebudowanej zabytkowej stodole.',
                price: '299 zł',
                images: ['https://images.pexels.com/photos/2351649/pexels-photo-2351649.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'kitchen', 'private-bathroom', 'tv', 'fireplace'],
                badge: 'Stodoła',
                category: 'premium'
            }
        ]
    },

    // ========================================
    // SPA & WELLNESS - Health-focused
    // ========================================
    'spa': {
        name: 'Hotel SPA',
        rooms: [
            {
                name: 'Pokój Wellness',
                description: 'Pokój z bezpłatnym dostępem do strefy SPA i basenu.',
                price: '349 zł',
                images: ['https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'spa-access', 'pool-access', 'bathrobe'],
                badge: 'Wellness',
                category: 'standard'
            },
            {
                name: 'Pokój z jacuzzi',
                description: 'Romantyczny pokój z prywatnym jacuzzi i zestawem SPA.',
                price: '549 zł',
                images: ['https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'jacuzzi', 'spa-access', 'bathrobe', 'champagne'],
                badge: 'Jacuzzi',
                category: 'premium'
            },
            {
                name: 'Suite SPA',
                description: 'Luksusowy apartament z sauną, jacuzzi i prywatnym gabinetem masażu.',
                price: '899 zł',
                images: ['https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'jacuzzi', 'sauna', 'spa-access', 'butler', 'champagne'],
                badge: 'SPA Suite',
                category: 'premium'
            }
        ]
    },

    // ========================================
    // GÓRSKI - Mountain hotels
    // ========================================
    'gorski': {
        name: 'Hotel Górski',
        rooms: [
            {
                name: 'Pokój Standard Górski',
                description: 'Przytulny pokój w góralskim stylu z drewnianym wykończeniem.',
                price: '229 zł',
                images: ['https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'private-bathroom', 'mountain-view'],
                badge: 'Góry',
                category: 'standard'
            },
            {
                name: 'Pokój z widokiem na góry',
                description: 'Pokój z panoramicznym widokiem na szczyty i balkonem.',
                price: '349 zł',
                images: ['https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'private-bathroom', 'mountain-view', 'balcony', 'air-conditioning'],
                badge: 'Widok',
                category: 'premium'
            },
            {
                name: 'Apartament z kominkiem',
                description: 'Romantyczny apartament z kominkiem i tarasem z widokiem.',
                price: '549 zł',
                images: ['https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'private-bathroom', 'mountain-view', 'terrace', 'fireplace', 'jacuzzi'],
                badge: 'Premium',
                category: 'premium'
            }
        ]
    },

    // ========================================
    // NADMORSKI - Seaside hotels
    // ========================================
    'nadmorski': {
        name: 'Hotel Nadmorski',
        rooms: [
            {
                name: 'Pokój Standard',
                description: 'Komfortowy pokój w nadmorskim klimacie.',
                price: '259 zł',
                images: ['https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'private-bathroom', 'air-conditioning'],
                badge: 'Standard',
                category: 'standard'
            },
            {
                name: 'Pokój z widokiem na morze',
                description: 'Pokój z balkonem i zapierającym dech widokiem na morze.',
                price: '399 zł',
                images: ['https://images.pexels.com/photos/1578253/pexels-photo-1578253.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'private-bathroom', 'air-conditioning', 'sea-view', 'balcony'],
                badge: 'Sea View',
                category: 'sea-view'
            },
            {
                name: 'Suite Plaża',
                description: 'Luksusowy apartament z tarasem i bezpośrednim dostępem do plaży.',
                price: '699 zł',
                images: ['https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600'],
                amenities: ['wifi', 'tv', 'private-bathroom', 'air-conditioning', 'sea-view', 'terrace', 'minibar'],
                badge: 'Beach',
                category: 'premium'
            }
        ]
    }
};

// Helper function to get rooms based on property type
function getRoomPresetsByType(propertyType) {
    return ROOM_PRESETS[propertyType]?.rooms || ROOM_PRESETS['hotel-3star'].rooms;
}

// Helper function to get all available preset types
function getAvailablePresetTypes() {
    return Object.entries(ROOM_PRESETS).map(([key, value]) => ({
        id: key,
        name: value.name
    }));
}

// Expose to window
window.ROOM_PRESETS = ROOM_PRESETS;
window.getRoomPresetsByType = getRoomPresetsByType;
window.getAvailablePresetTypes = getAvailablePresetTypes;
