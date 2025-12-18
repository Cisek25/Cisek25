// ============================================
// TEMPLATES DATA - 30+ szablonów
// ============================================

const TEMPLATES = {
    // ============================================
    // LUXURY & PREMIUM
    // ============================================
    'midnight-premium': {
        id: 'midnight-premium',
        name: 'Midnight Premium (Dark)',
        icon: 'fa-moon',
        category: 'luxury',
        description: 'Nowoczesny, ciemny styl dla luksusowych apartamentów',
        colors: {
            primary: '#020617',
            secondary: '#334155',
            accent: '#FACC15'
        },
        fonts: {
            heading: 'Outfit',
            body: 'Inter'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'testimonials', 'cta'],
        keywords: ['dark', 'modern', 'luxury', 'midnight', 'premium']
    },

    'onyx-luxury': {
        id: 'onyx-luxury',
        name: 'Onyx Gold Resort',
        icon: 'fa-crown',
        category: 'luxury',
        description: 'Złoto i czerń dla najbardziej prestiżowych lokalizacji',
        colors: {
            primary: '#111111',
            secondary: '#D4AF37',
            accent: '#FFFFFF'
        },
        fonts: {
            heading: 'Playfair Display',
            body: 'Montserrat'
        },
        sections: ['intro', 'rooms', 'gallery', 'amenities', 'cta'],
        keywords: ['onyx', 'gold', 'prestige', 'black', 'luxury']
    },

    'luxury-resort': {
        id: 'luxury-resort',
        name: 'Luksusowy Resort',
        icon: 'fa-gem',
        category: 'luxury',
        description: 'Ekskluzywny resort dla najbardziej wymagających gości',
        colors: {
            primary: '#0F172A',
            secondary: '#F59E0B',
            accent: '#B45309'
        },
        fonts: {
            heading: 'Playfair Display',
            body: 'Inter'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'testimonials', 'location', 'cta'],
        keywords: ['luxury', 'exclusive', 'spa', 'wellness', 'premium']
    },

    'boutique-hotel': {
        id: 'boutique-hotel',
        name: 'Butikowy Hotel',
        icon: 'fa-hotel',
        category: 'luxury',
        description: 'Kameralny hotel z unikalnym charakterem',
        colors: {
            primary: '#1E293B',
            secondary: '#FB7185',
            accent: '#E11D48'
        },
        fonts: {
            heading: 'Cinzel',
            body: 'Lato'
        },
        sections: ['intro', 'rooms', 'gallery', 'amenities', 'testimonials', 'cta'],
        keywords: ['boutique', 'design', 'unique', 'city', 'romantic']
    },

    'spa-wellness': {
        id: 'spa-wellness',
        name: 'SPA & Wellness',
        icon: 'fa-spa',
        category: 'luxury',
        description: 'Centrum odnowy biologicznej i relaksu',
        colors: {
            primary: '#4A7766',
            secondary: '#B8D4C8',
            accent: '#D4A574'
        },
        fonts: {
            heading: 'Great Vibes',
            body: 'Open Sans'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'testimonials', 'cta'],
        keywords: ['spa', 'wellness', 'relax', 'massage', 'health']
    },

    // ============================================
    // FAMILY & FRIENDLY
    // ============================================
    'family-pension': {
        id: 'family-pension',
        name: 'Rodzinny Pensjonat',
        icon: 'fa-house-chimney',
        category: 'family',
        description: 'Ciepły pensjonat idealny dla rodzin z dziećmi',
        colors: {
            primary: '#2E7D32',
            secondary: '#81C784',
            accent: '#FFA726'
        },
        fonts: {
            heading: 'Quicksand',
            body: 'Nunito'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'testimonials', 'cta'],
        keywords: ['family', 'children', 'nature', 'countryside', 'warm']
    },

    'mountain-lodge': {
        id: 'mountain-lodge',
        name: 'Górska Chata',
        icon: 'fa-mountain',
        category: 'family',
        description: 'Przytulne schronisko w górach',
        colors: {
            primary: '#5D4037',
            secondary: '#A1887F',
            accent: '#FF7043'
        },
        fonts: {
            heading: 'Amatic SC',
            body: 'Open Sans'
        },
        sections: ['intro', 'rooms', 'amenities', 'location', 'gallery', 'cta'],
        keywords: ['mountain', 'hiking', 'ski', 'nature', 'cozy']
    },

    'seaside-resort': {
        id: 'seaside-resort',
        name: 'Resort Nadmorski',
        icon: 'fa-umbrella-beach',
        category: 'family',
        description: 'Wakacyjny wypoczynek nad morzem',
        colors: {
            primary: '#0C4A6E',
            secondary: '#38BDF8',
            accent: '#F97316'
        },
        fonts: {
            heading: 'Pacifico',
            body: 'Roboto'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'testimonials', 'cta'],
        keywords: ['beach', 'sea', 'summer', 'vacation', 'family']
    },

    // ============================================
    // BUDGET & HOSTELS
    // ============================================
    'urban-hostel': {
        id: 'urban-hostel',
        name: 'Hostel Miejski',
        icon: 'fa-city',
        category: 'budget',
        description: 'Nowoczesny hostel w centrum miasta',
        colors: {
            primary: '#C2410C',
            secondary: '#FDBA74',
            accent: '#10B981'
        },
        fonts: {
            heading: 'Poppins',
            body: 'Inter'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'testimonials', 'cta'],
        keywords: ['hostel', 'budget', 'backpacker', 'city', 'young']
    },

    'backpacker-hostel': {
        id: 'backpacker-hostel',
        name: 'Backpacker Hostel',
        icon: 'fa-hiking',
        category: 'budget',
        description: 'Hostel dla podróżników z plecakiem',
        colors: {
            primary: '#E53935',
            secondary: '#FFEB3B',
            accent: '#4CAF50'
        },
        fonts: {
            heading: 'Bebas Neue',
            body: 'Open Sans'
        },
        sections: ['intro', 'rooms', 'amenities', 'location', 'gallery', 'cta'],
        keywords: ['backpacker', 'adventure', 'budget', 'travel', 'social']
    },

    'surf-hostel': {
        id: 'surf-hostel',
        name: 'Surf Hostel',
        icon: 'fa-water',
        category: 'budget',
        description: 'Hostel dla surferów przy plaży',
        colors: {
            primary: '#00ACC1',
            secondary: '#80DEEA',
            accent: '#FF7043'
        },
        fonts: {
            heading: 'Lobster',
            body: 'Lato'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'cta'],
        keywords: ['surf', 'beach', 'summer', 'sports', 'young']
    },

    // ============================================
    // APARTMENTS
    // ============================================
    'city-apartments': {
        id: 'city-apartments',
        name: 'Apartamenty Miejskie',
        icon: 'fa-building',
        category: 'apartments',
        description: 'Nowoczesne apartamenty w centrum',
        colors: {
            primary: '#334155',
            secondary: '#94A3B8',
            accent: '#0EA5E9'
        },
        fonts: {
            heading: 'Montserrat',
            body: 'Inter'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'cta'],
        keywords: ['apartments', 'city', 'modern', 'business', 'self-catering']
    },

    'holiday-apartments': {
        id: 'holiday-apartments',
        name: 'Apartamenty Wakacyjne',
        icon: 'fa-sun',
        category: 'apartments',
        description: 'Apartamenty na wakacyjny wypoczynek',
        colors: {
            primary: '#FF8F00',
            secondary: '#FFE082',
            accent: '#26A69A'
        },
        fonts: {
            heading: 'Raleway',
            body: 'Nunito'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'testimonials', 'cta'],
        keywords: ['holiday', 'vacation', 'family', 'beach', 'summer']
    },

    // ============================================
    // BUSINESS
    // ============================================
    'business-hotel': {
        id: 'business-hotel',
        name: 'Hotel Biznesowy',
        icon: 'fa-briefcase',
        category: 'business',
        description: 'Hotel dla podróżujących służbowo',
        colors: {
            primary: '#1E40AF',
            secondary: '#60A5FA',
            accent: '#FBBF24'
        },
        fonts: {
            heading: 'Oswald',
            body: 'Roboto'
        },
        sections: ['intro', 'rooms', 'amenities', 'location', 'cta'],
        keywords: ['business', 'conference', 'corporate', 'professional', 'modern']
    },

    'conference-hotel': {
        id: 'conference-hotel',
        name: 'Hotel Konferencyjny',
        icon: 'fa-users',
        category: 'business',
        description: 'Hotel z salami konferencyjnymi',
        colors: {
            primary: '#283593',
            secondary: '#5C6BC0',
            accent: '#FF7043'
        },
        fonts: {
            heading: 'Montserrat',
            body: 'Open Sans'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'cta'],
        keywords: ['conference', 'meetings', 'events', 'business', 'groups']
    },

    // ============================================
    // ROMANTIC
    // ============================================
    'romantic-hideaway': {
        id: 'romantic-hideaway',
        name: 'Romantyczna Ucieczka',
        icon: 'fa-heart',
        category: 'romantic',
        description: 'Idealne miejsce dla par',
        colors: {
            primary: '#701A75',
            secondary: '#F472B6',
            accent: '#FCD34D'
        },
        fonts: {
            heading: 'Great Vibes',
            body: 'Lato'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'testimonials', 'cta'],
        keywords: ['romantic', 'couples', 'honeymoon', 'intimate', 'luxury']
    },

    'vineyard-estate': {
        id: 'vineyard-estate',
        name: 'Posiadłość Winiarza',
        icon: 'fa-wine-glass',
        category: 'romantic',
        description: 'Romantyczny pobyt wśród winnic',
        colors: {
            primary: '#6D4C41',
            secondary: '#A1887F',
            accent: '#7B1FA2'
        },
        fonts: {
            heading: 'Playfair Display',
            body: 'Source Sans Pro'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'cta'],
        keywords: ['wine', 'vineyard', 'romantic', 'couples', 'gourmet']
    },

    // ============================================
    // ECO & NATURE
    // ============================================
    'eco-lodge': {
        id: 'eco-lodge',
        name: 'Eko Lodge',
        icon: 'fa-leaf',
        category: 'eco',
        description: 'Ekologiczny wypoczynek w zgodzie z naturą',
        colors: {
            primary: '#064E3B',
            secondary: '#10B981',
            accent: '#D97706'
        },
        fonts: {
            heading: 'Amatic SC',
            body: 'Nunito'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'cta'],
        keywords: ['eco', 'nature', 'sustainable', 'organic', 'green']
    },

    'glamping': {
        id: 'glamping',
        name: 'Glamping',
        icon: 'fa-campground',
        category: 'eco',
        description: 'Luksusowe namioty w sercu natury',
        colors: {
            primary: '#1E3A1C',
            secondary: '#A3E635',
            accent: '#FACC15'
        },
        fonts: {
            heading: 'Lobster',
            body: 'Open Sans'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'testimonials', 'cta'],
        keywords: ['glamping', 'camping', 'nature', 'luxury', 'unique']
    },

    'lakeside-cabin': {
        id: 'lakeside-cabin',
        name: 'Domek nad Jeziorem',
        icon: 'fa-water',
        category: 'eco',
        description: 'Wypoczynek nad wodą',
        colors: {
            primary: '#01579B',
            secondary: '#4FC3F7',
            accent: '#4CAF50'
        },
        fonts: {
            heading: 'Quicksand',
            body: 'Lato'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'cta'],
        keywords: ['lake', 'nature', 'fishing', 'kayak', 'peaceful']
    },

    // ============================================
    // HISTORIC & UNIQUE
    // ============================================
    'castle-hotel': {
        id: 'castle-hotel',
        name: 'Hotel w Zamku',
        icon: 'fa-chess-rook',
        category: 'historic',
        description: 'Nocleg w historycznych murach',
        colors: {
            primary: '#3E2723',
            secondary: '#8D6E63',
            accent: '#B71C1C'
        },
        fonts: {
            heading: 'Cinzel',
            body: 'Source Sans Pro'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'testimonials', 'cta'],
        keywords: ['castle', 'historic', 'unique', 'royal', 'medieval']
    },

    'manor-house': {
        id: 'manor-house',
        name: 'Dworek',
        icon: 'fa-landmark',
        category: 'historic',
        description: 'Elegancki dworek szlachecki',
        colors: {
            primary: '#4E342E',
            secondary: '#D7CCC8',
            accent: '#8D6E63'
        },
        fonts: {
            heading: 'Playfair Display',
            body: 'Lora'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'cta'],
        keywords: ['manor', 'historic', 'elegant', 'countryside', 'traditional']
    },

    // ============================================
    // MODERN & TRENDY
    // ============================================
    'minimalist': {
        id: 'minimalist',
        name: 'Minimalistyczny',
        icon: 'fa-minus',
        category: 'modern',
        description: 'Czysty, prosty design z naciskiem na przestrzeń',
        colors: {
            primary: '#1A1A1A',
            secondary: '#F5F5F5',
            accent: '#FF4757'
        },
        fonts: {
            heading: 'Montserrat',
            body: 'Inter'
        },
        sections: ['intro', 'rooms', 'gallery', 'cta'],
        keywords: ['minimal', 'clean', 'modern', 'simple', 'white']
    },

    'tropical-paradise': {
        id: 'tropical-paradise',
        name: 'Tropikalny Raj',
        icon: 'fa-palm-tree',
        category: 'family',
        description: 'Egzotyczny klimat tropikalnych wakacji',
        colors: {
            primary: '#00B894',
            secondary: '#FFEAA7',
            accent: '#E17055'
        },
        fonts: {
            heading: 'Pacifico',
            body: 'Nunito'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'cta'],
        keywords: ['tropical', 'exotic', 'beach', 'palm', 'paradise']
    },

    'nordic-cabin': {
        id: 'nordic-cabin',
        name: 'Nordycka Chata',
        icon: 'fa-snowflake',
        category: 'eco',
        description: 'Skandynawski minimalizm i ciepło drewna',
        colors: {
            primary: '#2C3E50',
            secondary: '#ECF0F1',
            accent: '#E74C3C'
        },
        fonts: {
            heading: 'Raleway',
            body: 'Open Sans'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'cta'],
        keywords: ['nordic', 'scandinavian', 'wood', 'winter', 'cozy']
    },

    'industrial-loft': {
        id: 'industrial-loft',
        name: 'Industrialny Loft',
        icon: 'fa-industry',
        category: 'apartments',
        description: 'Surowy styl industrialny z charakterem',
        colors: {
            primary: '#2D3436',
            secondary: '#636E72',
            accent: '#FDCB6E'
        },
        fonts: {
            heading: 'Oswald',
            body: 'Roboto'
        },
        sections: ['intro', 'rooms', 'gallery', 'amenities', 'cta'],
        keywords: ['industrial', 'loft', 'urban', 'raw', 'brick']
    },

    'art-deco': {
        id: 'art-deco',
        name: 'Art Deco',
        icon: 'fa-shapes',
        category: 'luxury',
        description: 'Elegancja lat 20. XX wieku',
        colors: {
            primary: '#1E272E',
            secondary: '#D4AF37',
            accent: '#C23616'
        },
        fonts: {
            heading: 'Cinzel',
            body: 'Lato'
        },
        sections: ['intro', 'rooms', 'gallery', 'amenities', 'testimonials', 'cta'],
        keywords: ['art-deco', 'elegant', 'gold', 'gatsby', 'vintage']
    },

    'zen-retreat': {
        id: 'zen-retreat',
        name: 'Zen Retreat',
        icon: 'fa-yin-yang',
        category: 'luxury',
        description: 'Azjatycki spokój i harmonia',
        colors: {
            primary: '#2D3436',
            secondary: '#DFE6E9',
            accent: '#00B894'
        },
        fonts: {
            heading: 'Noto Sans JP',
            body: 'Open Sans'
        },
        sections: ['intro', 'rooms', 'amenities', 'spa', 'gallery', 'cta'],
        keywords: ['zen', 'asian', 'spa', 'meditation', 'peaceful']
    },

    'coastal-escape': {
        id: 'coastal-escape',
        name: 'Nadmorska Ucieczka',
        icon: 'fa-anchor',
        category: 'family',
        description: 'Marynistyczny styl z widokiem na morze',
        colors: {
            primary: '#0984E3',
            secondary: '#FFFFFF',
            accent: '#E17055'
        },
        fonts: {
            heading: 'Lobster',
            body: 'Roboto'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'cta'],
        keywords: ['coastal', 'sea', 'nautical', 'beach', 'summer']
    },

    'alpine-chalet': {
        id: 'alpine-chalet',
        name: 'Alpejski Szalet',
        icon: 'fa-skiing',
        category: 'family',
        description: 'Górski szalet z kominkiem i widokiem',
        colors: {
            primary: '#6C5B7B',
            secondary: '#F8B500',
            accent: '#C06C84'
        },
        fonts: {
            heading: 'Amatic SC',
            body: 'Nunito'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'cta'],
        keywords: ['alpine', 'ski', 'mountain', 'chalet', 'winter']
    },

    'desert-oasis': {
        id: 'desert-oasis',
        name: 'Pustynna Oaza',
        icon: 'fa-sun',
        category: 'luxury',
        description: 'Marokański riad w sercu pustyni',
        colors: {
            primary: '#CC8E35',
            secondary: '#F5E6D3',
            accent: '#D63031'
        },
        fonts: {
            heading: 'Cormorant Garamond',
            body: 'Lato'
        },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'spa', 'cta'],
        keywords: ['desert', 'morocco', 'riad', 'exotic', 'warm']
    },

    'urban-chic': {
        id: 'urban-chic',
        name: 'Urban Chic',
        icon: 'fa-city',
        category: 'apartments',
        description: 'Nowoczesny miejski styl życia',
        colors: {
            primary: '#6C5CE7',
            secondary: '#A29BFE',
            accent: '#FD79A8'
        },
        fonts: {
            heading: 'Poppins',
            body: 'Inter'
        },
        sections: ['intro', 'rooms', 'gallery', 'amenities', 'location', 'cta'],
        keywords: ['urban', 'chic', 'trendy', 'modern', 'city']
    },

    // ============================================
    // NEW CITY & APARTMENT TEMPLATES (20+)
    // ============================================

    'urban-loft-v2': {
        id: 'urban-loft-v2',
        name: 'Urban Loft V2',
        icon: 'fa-layer-group',
        category: 'apartments',
        description: 'Przestronny loft z industrialnym zacięciem',
        colors: { primary: '#2d3436', secondary: '#dfe6e9', accent: '#fdcb6e' },
        fonts: { heading: 'Oswald', body: 'Roboto' },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'cta'],
        keywords: ['loft', 'industrial', 'city', 'modern']
    },
    'metro-chic': {
        id: 'metro-chic',
        name: 'Metro Chic',
        icon: 'fa-subway',
        category: 'apartments',
        description: 'Elegancki apartament blisko metra',
        colors: { primary: '#2c3e50', secondary: '#ecf0f1', accent: '#e74c3c' },
        fonts: { heading: 'Raleway', body: 'Lato' },
        sections: ['intro', 'rooms', 'location', 'amenities', 'cta'],
        keywords: ['metro', 'chic', 'convenient', 'city']
    },
    'skyline-view': {
        id: 'skyline-view',
        name: 'Skyline View',
        icon: 'fa-city',
        category: 'luxury',
        description: 'Apartament z widokiem na panoramę miasta',
        colors: { primary: '#0984e3', secondary: '#74b9ff', accent: '#a29bfe' },
        fonts: { heading: 'Montserrat', body: 'Open Sans' },
        sections: ['intro', 'rooms', 'gallery', 'testimonials', 'cta'],
        keywords: ['view', 'skyline', 'luxury', 'high-rise']
    },
    'concrete-jungle': {
        id: 'concrete-jungle',
        name: 'Concrete Jungle',
        icon: 'fa-building',
        category: 'apartments',
        description: 'Surowy beton i ciepłe drewno',
        colors: { primary: '#636e72', secondary: '#b2bec3', accent: '#00b894' },
        fonts: { heading: 'Roboto Slab', body: 'Roboto' },
        sections: ['intro', 'rooms', 'amenities', 'location', 'cta'],
        keywords: ['concrete', 'modern', 'brutalist', 'city']
    },
    'downtown-luxury': {
        id: 'downtown-luxury',
        name: 'Downtown Luxury',
        icon: 'fa-gem',
        category: 'luxury',
        description: 'Luksus w samym sercu wydarzeń',
        colors: { primary: '#2d3436', secondary: '#000000', accent: '#d63031' },
        fonts: { heading: 'Playfair Display', body: 'Lato' },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'spa', 'cta'],
        keywords: ['downtown', 'luxury', 'premium', 'central']
    },
    'old-town-gem': {
        id: 'old-town-gem',
        name: 'Perła Starówki',
        icon: 'fa-landmark',
        category: 'historic',
        description: 'Historyczny klimat w nowoczesnym wydaniu',
        colors: { primary: '#5d4037', secondary: '#d7ccc8', accent: '#ff7043' },
        fonts: { heading: 'Cinzel', body: 'Lora' },
        sections: ['intro', 'rooms', 'location', 'gallery', 'cta'],
        keywords: ['old town', 'historic', 'charming', 'city']
    },
    'modernist-haven': {
        id: 'modernist-haven',
        name: 'Modernist Haven',
        icon: 'fa-square',
        category: 'modern',
        description: 'Geometryczne formy i funkcjonalność',
        colors: { primary: '#192a56', secondary: '#f5f6fa', accent: '#c23616' },
        fonts: { heading: 'Jost', body: 'Inter' },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'cta'],
        keywords: ['modernist', 'functional', 'clean', 'city']
    },
    'scandi-city': {
        id: 'scandi-city',
        name: 'Skandynawskie Miasto',
        icon: 'fa-snowflake',
        category: 'modern',
        description: 'Jasne wnętrza i przytulny minimalizm',
        colors: { primary: '#34495e', secondary: '#ecf0f1', accent: '#1abc9c' },
        fonts: { heading: 'Nunito', body: 'Nunito' },
        sections: ['intro', 'rooms', 'amenities', 'testimonials', 'cta'],
        keywords: ['scandi', 'bright', 'cozy', 'minimal']
    },
    'industrial-comfort': {
        id: 'industrial-comfort',
        name: 'Industrial Comfort',
        icon: 'fa-wrench',
        category: 'apartments',
        description: 'Fabryczny styl z domowym ciepłem',
        colors: { primary: '#2f3542', secondary: '#a4b0be', accent: '#ffa502' },
        fonts: { heading: 'Bebas Neue', body: 'Open Sans' },
        sections: ['intro', 'rooms', 'amenities', 'gallery', 'cta'],
        keywords: ['industrial', 'warm', 'unique', 'city']
    },
    'brick-and-glass': {
        id: 'brick-and-glass',
        name: 'Cegła i Szkło',
        icon: 'fa-cubes',
        category: 'apartments',
        description: 'Kontrastowe połączenie materiałów',
        colors: { primary: '#800000', secondary: '#f1f2f6', accent: '#3742fa' },
        fonts: { heading: 'Bitter', body: 'Source Sans Pro' },
        sections: ['intro', 'rooms', 'amenities', 'location', 'cta'],
        keywords: ['brick', 'glass', 'modern', 'contrast']
    },
    'city-penthouse': {
        id: 'city-penthouse',
        name: 'City Penthouse',
        icon: 'fa-arrow-up',
        category: 'luxury',
        description: 'Apartament na ostatnim piętrze',
        colors: { primary: '#1e272e', secondary: '#d2dae2', accent: '#ff3f34' },
        fonts: { heading: 'Manrope', body: 'Manrope' },
        sections: ['intro', 'rooms', 'gallery', 'amenities', 'cta'],
        keywords: ['penthouse', 'view', 'luxury', 'top']
    },
    'studio-central': {
        id: 'studio-central',
        name: 'Studio Central',
        icon: 'fa-compress',
        category: 'budget',
        description: 'Kompaktowe studio dla aktywnych',
        colors: { primary: '#57606f', secondary: '#dfe4ea', accent: '#7bed9f' },
        fonts: { heading: 'Rubik', body: 'Rubik' },
        sections: ['intro', 'rooms', 'location', 'cta'],
        keywords: ['studio', 'compact', 'budget', 'central']
    },
    'executive-suite': {
        id: 'executive-suite',
        name: 'Executive Suite',
        icon: 'fa-briefcase',
        category: 'business',
        description: 'Idealne dla podróży służbowych',
        colors: { primary: '#0c2461', secondary: '#dff9fb', accent: '#b33939' },
        fonts: { heading: 'Crimson Text', body: 'Lato' },
        sections: ['intro', 'rooms', 'amenities', 'location', 'cta'],
        keywords: ['business', 'executive', 'work', 'city']
    },
    'cultural-district': {
        id: 'cultural-district',
        name: 'Dzielnica Kultury',
        icon: 'fa-theater-masks',
        category: 'apartments',
        description: 'W sąsiedztwie teatrów i galerii',
        colors: { primary: '#40407a', secondary: '#f7f1e3', accent: '#ccae62' },
        fonts: { heading: 'Merriweather', body: 'Open Sans' },
        sections: ['intro', 'rooms', 'attractions', 'gallery', 'cta'],
        keywords: ['culture', 'art', 'location', 'city']
    },
    'nightlife-hub': {
        id: 'nightlife-hub',
        name: 'Centrum Rozrywki',
        icon: 'fa-cocktail',
        category: 'apartments',
        description: 'Blisko najlepszych klubów i restauracji',
        colors: { primary: '#2d3436', secondary: '#636e72', accent: '#e84393' },
        fonts: { heading: 'Righteous', body: 'Barlow' },
        sections: ['intro', 'rooms', 'location', 'dining', 'cta'],
        keywords: ['nightlife', 'party', 'fun', 'city']
    },
    'green-city-oasis': {
        id: 'green-city-oasis',
        name: 'Zielona Oaza',
        icon: 'fa-leaf',
        category: 'eco',
        description: 'Apartamenty z ogrodem w mieście',
        colors: { primary: '#218c74', secondary: '#d1ccc0', accent: '#ff5252' },
        fonts: { heading: 'Quicksand', body: 'Nunito' },
        sections: ['intro', 'rooms', 'amenities', 'location', 'cta'],
        keywords: ['green', 'garden', 'eco', 'city']
    },
    'tech-hub-stay': {
        id: 'tech-hub-stay',
        name: 'Tech Hub',
        icon: 'fa-laptop-code',
        category: 'business',
        description: 'Smart home dla cyfrowych nomadów',
        colors: { primary: '#341f97', secondary: '#c8d6e5', accent: '#00d2d3' },
        fonts: { heading: 'Fira Code', body: 'Inter' },
        sections: ['intro', 'rooms', 'amenities', 'cta'],
        keywords: ['tech', 'smart', 'modern', 'business']
    },
    'student-smart': {
        id: 'student-smart',
        name: 'Student Smart',
        icon: 'fa-graduation-cap',
        category: 'budget',
        description: 'Ekonomiczne i funkcjonalne',
        colors: { primary: '#222f3e', secondary: '#c8d6e5', accent: '#5f27cd' },
        fonts: { heading: 'Work Sans', body: 'Work Sans' },
        sections: ['intro', 'rooms', 'location', 'cta'],
        keywords: ['student', 'budget', 'smart', 'city']
    },
    'artist-atelier': {
        id: 'artist-atelier',
        name: 'Atelier Artysty',
        icon: 'fa-palette',
        category: 'apartments',
        description: 'Kreatywna przestrzeń pełna inspiracji',
        colors: { primary: '#b33771', secondary: '#f8c291', accent: '#18dcff' },
        fonts: { heading: 'Pacifico', body: 'Caveat' },
        sections: ['intro', 'rooms', 'gallery', 'cta'],
        keywords: ['art', 'creative', 'colorful', 'city']
    },
    'riverside-modern': {
        id: 'riverside-modern',
        name: 'Nad Rzeką',
        icon: 'fa-water',
        category: 'modern',
        description: 'Nowoczesne bulwary i widok na rzekę',
        colors: { primary: '#192a56', secondary: '#dcdde1', accent: '#44bd32' },
        fonts: { heading: 'Exo 2', body: 'Roboto' },
        sections: ['intro', 'rooms', 'location', 'gallery', 'cta'],
        keywords: ['river', 'view', 'modern', 'city']
    }
};

// Eksport
window.TEMPLATES = TEMPLATES;
