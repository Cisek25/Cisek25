// ============================================
// SECTIONS DATA - Sekcje do wyboru
// ============================================

const SECTIONS = {
    intro: {
        id: 'intro',
        name: 'O nas / Intro',
        icon: 'fa-info-circle',
        description: 'Przedstawienie obiektu z kluczowymi informacjami',
        required: true,
        defaultBackground: 'light'
    },
    rooms: {
        id: 'rooms',
        name: 'Pokoje / Apartamenty',
        icon: 'fa-bed',
        description: 'Lista wszystkich typów pokoi z cenami',
        required: true,
        defaultBackground: 'white'
    },
    amenities: {
        id: 'amenities',
        name: 'Udogodnienia',
        icon: 'fa-concierge-bell',
        description: 'Lista wszystkich udogodnień obiektu',
        required: false,
        defaultBackground: 'gradient'
    },
    gallery: {
        id: 'gallery',
        name: 'Galeria zdjęć',
        icon: 'fa-images',
        description: 'Galeria z lightboxem',
        required: false,
        defaultBackground: 'white'
    },
    location: {
        id: 'location',
        name: 'Lokalizacja',
        icon: 'fa-map-marker-alt',
        description: 'Mapa Google i informacje o lokalizacji',
        required: false,
        defaultBackground: 'light'
    },
    attractions: {
        id: 'attractions',
        name: 'Atrakcje w okolicy',
        icon: 'fa-mountain',
        description: 'Pobliskie atrakcje turystyczne i miejsca warte odwiedzenia',
        required: false,
        defaultBackground: 'white'
    },
    testimonials: {
        id: 'testimonials',
        name: 'Opinie gości',
        icon: 'fa-star',
        description: 'Opinie i oceny od gości',
        required: false,
        defaultBackground: 'light'
    },
    faq: {
        id: 'faq',
        name: 'FAQ',
        icon: 'fa-question-circle',
        description: 'Najczęściej zadawane pytania z accordion',
        required: false,
        defaultBackground: 'white'
    },
    dining: {
        id: 'dining',
        name: 'Wyżywienie',
        icon: 'fa-utensils',
        description: 'Restauracja, śniadania, opcje gastronomiczne',
        required: false,
        defaultBackground: 'white'
    },
    pricing: {
        id: 'pricing',
        name: 'Cennik / Pakiety',
        icon: 'fa-tags',
        description: 'Tabela cenowa i specjalne pakiety pobytowe',
        required: false,
        defaultBackground: 'light'
    },
    spa: {
        id: 'spa',
        name: 'SPA & Wellness',
        icon: 'fa-spa',
        description: 'Usługi SPA, masaże, sauna, basen',
        required: false,
        defaultBackground: 'gradient'
    },
    events: {
        id: 'events',
        name: 'Eventy / Konferencje',
        icon: 'fa-calendar-alt',
        description: 'Sale konferencyjne, wesela, imprezy firmowe',
        required: false,
        defaultBackground: 'white'
    },
    transport: {
        id: 'transport',
        name: 'Dojazd / Parking',
        icon: 'fa-car',
        description: 'Informacje o dojeździe, parkingu, transferze',
        required: false,
        defaultBackground: 'light'
    },
    rules: {
        id: 'rules',
        name: 'Regulamin',
        icon: 'fa-clipboard-list',
        description: 'Zasady pobytu, godziny ciszy, zwierzęta',
        required: false,
        defaultBackground: 'white'
    },
    cta: {
        id: 'cta',
        name: 'Rezerwacja (CTA)',
        icon: 'fa-calendar-check',
        description: 'Sekcja zachęcająca do rezerwacji',
        required: true,
        defaultBackground: 'gradient'
    },
    social: {
        id: 'social',
        name: 'Social Proof',
        icon: 'fa-thumbs-up',
        description: 'Oceny z Booking.com, TripAdvisor itp.',
        required: false,
        defaultBackground: 'light'
    },
    partners: {
        id: 'partners',
        name: 'Partnerzy',
        icon: 'fa-handshake',
        description: 'Logotypy partnerów i certyfikatów',
        required: false,
        defaultBackground: 'white'
    }
};

// Eksport
window.SECTIONS = SECTIONS;
