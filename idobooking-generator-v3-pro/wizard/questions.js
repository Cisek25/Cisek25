// SYSTEM PYTAŃ WIZARDA - Inteligentne dobieranie motywu i kolorów

const wizardQuestions = [
    {
        id: 'location',
        question: 'Gdzie znajduje się Twój obiekt?',
        type: 'select',
        options: [
            { value: 'mountains', label: '⛰️ W górach', theme: 'mountain' },
            { value: 'sea', label: '🏖️ Nad morzem', theme: 'coastal' },
            { value: 'city', label: '🏙️ W mieście', theme: 'urban' },
            { value: 'forest', label: '🌲 W lesie/na wsi', theme: 'nature' },
            { value: 'lake', label: '🏞️ Nad jeziorem', theme: 'lakeside' }
        ]
    },
    {
        id: 'type',
        question: 'Jaki typ obiektu prowadzisz?',
        type: 'select',
        options: [
            { value: 'luxury', label: '💎 Luksusowy (hotel 5*, resort)', theme: 'luxury' },
            { value: 'boutique', label: '🎨 Butikowy (unikatowy design)', theme: 'boutique' },
            { value: 'family', label: '👨‍👩‍👧‍👦 Rodzinny (pensjonat, agroturystyka)', theme: 'family' },
            { value: 'budget', label: '💰 Ekonomiczny (hostel, pokoje)', theme: 'budget' },
            { value: 'wellness', label: '🧘 Wellness & SPA', theme: 'wellness' }
        ]
    },
    {
        id: 'atmosphere',
        question: 'Jaka atmosfera najlepiej opisuje Twoje miejsce?',
        type: 'select',
        options: [
            { value: 'elegant', label: '✨ Elegancka, wyrafinowana', colors: ['#2C3E50', '#ECF0F1', '#E8D5C4'] },
            { value: 'cozy', label: '🏡 Przytulna, domowa', colors: ['#8B4513', '#F5F5DC', '#CD853F'] },
            { value: 'modern', label: '🔲 Nowoczesna, minimalistyczna', colors: ['#000000', '#FFFFFF', '#3498DB'] },
            { value: 'rustic', label: '🪵 Rustykalna, naturalna', colors: ['#654321', '#D2B48C', '#8FBC8F'] },
            { value: 'vibrant', label: '🌈 Żywa, kolorowa', colors: ['#E74C3C', '#F39C12', '#9B59B6'] }
        ]
    },
    {
        id: 'target',
        question: 'Do kogo kierujesz swoją ofertę?',
        type: 'multi',
        options: [
            { value: 'couples', label: '💑 Pary (romantyczne wyjazdy)' },
            { value: 'families', label: '👨‍👩‍👧 Rodziny z dziećmi' },
            { value: 'business', label: '💼 Biznes (konferencje, spotkania)' },
            { value: 'groups', label: '👥 Grupy (imprezy, eventy)' },
            { value: 'solo', label: '🎒 Indywidualni podróżnicy' }
        ]
    },
    {
        id: 'season',
        question: 'Kiedy masz najwięcej gości?',
        type: 'select',
        options: [
            { value: 'summer', label: '☀️ Lato (lipiec-sierpień)', colors: ['#FFD700', '#FF6B6B', '#4ECDC4'] },
            { value: 'winter', label: '❄️ Zima (grudzień-luty)', colors: ['#5DADE2', '#FFFFFF', '#34495E'] },
            { value: 'allYear', label: '📅 Cały rok', colors: ['#27AE60', '#3498DB', '#E67E22'] }
        ]
    },
    {
        id: 'vibe',
        question: 'Jakiego wrażenia chcesz, żeby strona robiła?',
        type: 'select',
        options: [
            { value: 'exclusive', label: '👑 Ekskluzywnie i prestiżowo', fontHeading: 'Cinzel' },
            { value: 'friendly', label: '😊 Przyjaźnie i ciepło', fontHeading: 'Poppins' },
            { value: 'professional', label: '💼 Profesjonalnie i poważnie', fontHeading: 'Montserrat' },
            { value: 'adventurous', label: '🏔️ Przygodowo i sportowo', fontHeading: 'Oswald' },
            { value: 'peaceful', label: '🕊️ Spokojnie i relaksująco', fontHeading: 'Playfair Display' }
        ]
    },
    {
        id: 'features',
        question: 'Jakie masz najważniejsze atuty? (wybierz max 3)',
        type: 'multi',
        maxSelections: 3,
        options: [
            { value: 'view', label: '🏔️ Niesamowity widok' },
            { value: 'spa', label: '💆 SPA & Wellness' },
            { value: 'food', label: '🍽️ Wyjątkowa kuchnia' },
            { value: 'location', label: '📍 Idealna lokalizacja' },
            { value: 'price', label: '💰 Świetne ceny' },
            { value: 'activities', label: '⚽ Atrakcje & aktywności' },
            { value: 'luxury', label: '✨ Luksusowe wyposażenie' },
            { value: 'nature', label: '🌿 Kontakt z naturą' }
        ]
    },
    {
        id: 'style',
        question: 'Który styl wizualny Ci się podoba?',
        type: 'image-select',
        options: [
            {
                value: 'alpine',
                label: 'Alpine Luxury',
                preview: 'Ciepłe drewno, stonowane kolory, góralskie akcenty',
                colors: ['#3A5F4F', '#CDD789', '#E8DCC4']
            },
            {
                value: 'coastal',
                label: 'Coastal Breeze',
                preview: 'Błękit oceanu, biel, świeże kolory',
                colors: ['#0EA5E9', '#FFFFFF', '#F59E0B']
            },
            {
                value: 'urban',
                label: 'Urban Chic',
                preview: 'Minimalizm, szarości, akcenty koloru',
                colors: ['#2C3E50', '#ECF0F1', '#E74C3C']
            },
            {
                value: 'botanical',
                label: 'Botanical Garden',
                preview: 'Zieleń, naturalne tekstury, organiczne formy',
                colors: ['#2D6A4F', '#95D5B2', '#F1FAEE']
            }
        ]
    }
];

// SYSTEM SCORINGOWY - automatyczne dobieranie motywu
const themeScoring = {
    'luxury-mountain': {
        keywords: ['mountains', 'luxury', 'elegant', 'exclusive', 'winter', 'alpine'],
        colors: {
            primary: '#2C3E50',
            secondary: '#ECF0F1',
            accent: '#CDD789',
            backgrounds: ['#FFFEF9', '#F5F1E8']
        },
        fonts: {
            heading: 'Cinzel',
            body: 'Inter'
        },
        description: 'Luksusowy styl alpejski - elegancja w górach'
    },
    'coastal-resort': {
        keywords: ['sea', 'luxury', 'summer', 'coastal', 'vibrant'],
        colors: {
            primary: '#0EA5E9',
            secondary: '#FFFFFF',
            accent: '#F59E0B',
            backgrounds: ['#F0F9FF', '#FFF7ED']
        },
        fonts: {
            heading: 'Montserrat',
            body: 'Open Sans'
        },
        description: 'Luksus nad morzem - błękit i elegancja'
    },
    'urban-boutique': {
        keywords: ['city', 'boutique', 'modern', 'professional', 'urban'],
        colors: {
            primary: '#1F2937',
            secondary: '#F3F4F6',
            accent: '#3B82F6',
            backgrounds: ['#FFFFFF', '#F9FAFB']
        },
        fonts: {
            heading: 'Poppins',
            body: 'Inter'
        },
        description: 'Minimalistyczny szyk miejski'
    },
    'family-countryside': {
        keywords: ['forest', 'family', 'cozy', 'friendly', 'nature', 'botanical'],
        colors: {
            primary: '#2D6A4F',
            secondary: '#F1FAEE',
            accent: '#E76F51',
            backgrounds: ['#FEFEFE', '#F8F9FA']
        },
        fonts: {
            heading: 'Playfair Display',
            body: 'Lato'
        },
        description: 'Ciepło rodzinnego wypoczynku na łonie natury'
    },
    'wellness-sanctuary': {
        keywords: ['wellness', 'peaceful', 'spa', 'nature'],
        colors: {
            primary: '#6B9080',
            secondary: '#EAF4F4',
            accent: '#CCE3DE',
            backgrounds: ['#FFFFFF', '#F6FFFA']
        },
        fonts: {
            heading: 'Playfair Display',
            body: 'Lato'
        },
        description: 'Spokój i regeneracja - sanctuarium wellness'
    },
    'budget-hostel': {
        keywords: ['budget', 'city', 'vibrant', 'friendly', 'groups'],
        colors: {
            primary: '#3B82F6',
            secondary: '#FFFFFF',
            accent: '#10B981',
            backgrounds: ['#F9FAFB', '#FFFFFF']
        },
        fonts: {
            heading: 'Poppins',
            body: 'Inter'
        },
        description: 'Energiczny i przystępny - hostel miejski'
    }
};

// Funkcja licząca score dla każdego motywu
function calculateThemeScore(answers) {
    const scores = {};

    // Inicjalizacja scores
    for (const theme in themeScoring) {
        scores[theme] = 0;
    }

    // Sprawdzanie odpowiedzi
    for (const answer of Object.values(answers)) {
        if (typeof answer === 'string') {
            for (const theme in themeScoring) {
                if (themeScoring[theme].keywords.includes(answer)) {
                    scores[theme] += 10;
                }
            }
        } else if (Array.isArray(answer)) {
            for (const item of answer) {
                for (const theme in themeScoring) {
                    if (themeScoring[theme].keywords.includes(item)) {
                        scores[theme] += 5;
                    }
                }
            }
        }
    }

    // Znajdź najlepszy motyw
    let bestTheme = null;
    let bestScore = 0;

    for (const theme in scores) {
        if (scores[theme] > bestScore) {
            bestScore = scores[theme];
            bestTheme = theme;
        }
    }

    return bestTheme || 'luxury-mountain';
}
