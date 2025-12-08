// ============================================
// TEMPLATES DATA - 30+ szablonów
// ============================================

const TEMPLATES = {
    // ============================================
    // LUXURY & PREMIUM
    // ============================================
    'luxury-resort': {
        id: 'luxury-resort',
        name: 'Luksusowy Resort',
        icon: 'fa-gem',
        category: 'luxury',
        description: 'Ekskluzywny resort dla najbardziej wymagających gości',
        colors: {
            primary: '#1A365D',
            secondary: '#C9A227',
            accent: '#8B6914'
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
            primary: '#2D3436',
            secondary: '#D4A574',
            accent: '#8E7161'
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
            primary: '#0277BD',
            secondary: '#4FC3F7',
            accent: '#FFB74D'
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
            primary: '#FF6B35',
            secondary: '#F7C948',
            accent: '#00B894'
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
            primary: '#37474F',
            secondary: '#78909C',
            accent: '#00BCD4'
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
            primary: '#1565C0',
            secondary: '#42A5F5',
            accent: '#FFC107'
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
            primary: '#880E4F',
            secondary: '#F48FB1',
            accent: '#FFD54F'
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
            primary: '#33691E',
            secondary: '#8BC34A',
            accent: '#795548'
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
            primary: '#4E342E',
            secondary: '#8D6E63',
            accent: '#FFA000'
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
    }
};

// Eksport
window.TEMPLATES = TEMPLATES;
