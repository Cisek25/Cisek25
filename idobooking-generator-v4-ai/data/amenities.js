// ============================================
// AMENITIES DATA - 100+ udogodnień
// ============================================

const AMENITIES = {
    // ============================================
    // PODSTAWOWE
    // ============================================
    basic: {
        name: 'Podstawowe',
        icon: 'fa-check',
        items: [
            { id: 'wifi', name: 'Bezpłatne WiFi', icon: 'fa-wifi' },
            { id: 'parking', name: 'Parking', icon: 'fa-parking' },
            { id: 'parking-free', name: 'Bezpłatny parking', icon: 'fa-parking' },
            { id: 'reception', name: 'Recepcja 24/7', icon: 'fa-concierge-bell' },
            { id: 'air-conditioning', name: 'Klimatyzacja', icon: 'fa-snowflake' },
            { id: 'heating', name: 'Ogrzewanie', icon: 'fa-temperature-high' },
            { id: 'elevator', name: 'Winda', icon: 'fa-elevator' },
            { id: 'luggage-storage', name: 'Przechowalnia bagażu', icon: 'fa-suitcase' },
            { id: 'safe', name: 'Sejf', icon: 'fa-lock' },
            { id: 'non-smoking', name: 'Pokoje dla niepalących', icon: 'fa-smoking-ban' }
        ]
    },

    // ============================================
    // POKÓJ
    // ============================================
    room: {
        name: 'W pokoju',
        icon: 'fa-bed',
        items: [
            { id: 'king-bed', name: 'Łóżko King-size', icon: 'fa-bed' },
            { id: 'queen-bed', name: 'Łóżko Queen-size', icon: 'fa-bed' },
            { id: 'twin-beds', name: 'Dwa łóżka pojedyncze', icon: 'fa-bed' },
            { id: 'bunk-beds', name: 'Łóżka piętrowe', icon: 'fa-bed' },
            { id: 'tv', name: 'Telewizor', icon: 'fa-tv' },
            { id: 'smart-tv', name: 'Smart TV', icon: 'fa-tv' },
            { id: 'minibar', name: 'Minibar', icon: 'fa-glass-whiskey' },
            { id: 'fridge', name: 'Lodówka', icon: 'fa-snowflake' },
            { id: 'kettle', name: 'Czajnik elektryczny', icon: 'fa-mug-hot' },
            { id: 'coffee-machine', name: 'Ekspres do kawy', icon: 'fa-coffee' },
            { id: 'balcony', name: 'Balkon', icon: 'fa-door-open' },
            { id: 'terrace', name: 'Taras', icon: 'fa-umbrella-beach' },
            { id: 'view', name: 'Widok', icon: 'fa-mountain' },
            { id: 'desk', name: 'Biurko', icon: 'fa-desktop' },
            { id: 'wardrobe', name: 'Szafa', icon: 'fa-door-closed' },
            { id: 'iron', name: 'Żelazko', icon: 'fa-iron' },
            { id: 'hair-dryer', name: 'Suszarka do włosów', icon: 'fa-wind' }
        ]
    },

    // ============================================
    // ŁAZIENKA
    // ============================================
    bathroom: {
        name: 'Łazienka',
        icon: 'fa-bath',
        items: [
            { id: 'private-bathroom', name: 'Prywatna łazienka', icon: 'fa-bath' },
            { id: 'shared-bathroom', name: 'Łazienka wspólna', icon: 'fa-bath' },
            { id: 'shower', name: 'Prysznic', icon: 'fa-shower' },
            { id: 'bathtub', name: 'Wanna', icon: 'fa-bath' },
            { id: 'jacuzzi', name: 'Jacuzzi', icon: 'fa-hot-tub' },
            { id: 'toiletries', name: 'Przybory toaletowe', icon: 'fa-soap' },
            { id: 'towels', name: 'Ręczniki', icon: 'fa-scroll' },
            { id: 'bathrobe', name: 'Szlafrok', icon: 'fa-tshirt' },
            { id: 'slippers', name: 'Kapcie', icon: 'fa-socks' }
        ]
    },

    // ============================================
    // GASTRONOMIA
    // ============================================
    food: {
        name: 'Gastronomia',
        icon: 'fa-utensils',
        items: [
            { id: 'breakfast', name: 'Śniadanie', icon: 'fa-egg' },
            { id: 'breakfast-buffet', name: 'Śniadanie bufet', icon: 'fa-utensils' },
            { id: 'half-board', name: 'Półpensjonat', icon: 'fa-utensils' },
            { id: 'full-board', name: 'Pełne wyżywienie', icon: 'fa-utensils' },
            { id: 'restaurant', name: 'Restauracja', icon: 'fa-utensils' },
            { id: 'bar', name: 'Bar', icon: 'fa-cocktail' },
            { id: 'cafe', name: 'Kawiarnia', icon: 'fa-coffee' },
            { id: 'room-service', name: 'Room service', icon: 'fa-concierge-bell' },
            { id: 'kitchen', name: 'Kuchnia dla gości', icon: 'fa-kitchen-set' },
            { id: 'kitchenette', name: 'Aneks kuchenny', icon: 'fa-sink' },
            { id: 'bbq', name: 'Grill', icon: 'fa-fire' },
            { id: 'vegan', name: 'Opcje wegańskie', icon: 'fa-leaf' },
            { id: 'gluten-free', name: 'Opcje bezglutenowe', icon: 'fa-wheat-awn-slash' }
        ]
    },

    // ============================================
    // WELLNESS & SPA
    // ============================================
    wellness: {
        name: 'Wellness & SPA',
        icon: 'fa-spa',
        items: [
            { id: 'spa', name: 'SPA', icon: 'fa-spa' },
            { id: 'sauna', name: 'Sauna', icon: 'fa-hot-tub-person' },
            { id: 'steam-room', name: 'Łaźnia parowa', icon: 'fa-cloud' },
            { id: 'massage', name: 'Masaże', icon: 'fa-hands' },
            { id: 'pool-indoor', name: 'Basen kryty', icon: 'fa-person-swimming' },
            { id: 'pool-outdoor', name: 'Basen zewnętrzny', icon: 'fa-water-ladder' },
            { id: 'hot-tub', name: 'Jacuzzi', icon: 'fa-hot-tub' },
            { id: 'fitness', name: 'Siłownia', icon: 'fa-dumbbell' },
            { id: 'yoga', name: 'Joga', icon: 'fa-om' },
            { id: 'beauty-salon', name: 'Salon kosmetyczny', icon: 'fa-cut' }
        ]
    },

    // ============================================
    // AKTYWNOŚCI
    // ============================================
    activities: {
        name: 'Aktywności',
        icon: 'fa-running',
        items: [
            { id: 'ski', name: 'Narty', icon: 'fa-skiing' },
            { id: 'ski-storage', name: 'Przechowalnia nart', icon: 'fa-skiing' },
            { id: 'ski-rental', name: 'Wypożyczalnia nart', icon: 'fa-skiing' },
            { id: 'bike-rental', name: 'Wypożyczalnia rowerów', icon: 'fa-bicycle' },
            { id: 'hiking', name: 'Szlaki turystyczne', icon: 'fa-hiking' },
            { id: 'kayak', name: 'Kajaki', icon: 'fa-water' },
            { id: 'golf', name: 'Golf', icon: 'fa-golf-ball-tee' },
            { id: 'tennis', name: 'Kort tenisowy', icon: 'fa-table-tennis' },
            { id: 'playground', name: 'Plac zabaw', icon: 'fa-child' },
            { id: 'games-room', name: 'Sala gier', icon: 'fa-gamepad' },
            { id: 'billiard', name: 'Bilard', icon: 'fa-circle' },
            { id: 'table-tennis', name: 'Ping-pong', icon: 'fa-table-tennis-paddle-ball' }
        ]
    },

    // ============================================
    // BIZNES
    // ============================================
    business: {
        name: 'Biznes',
        icon: 'fa-briefcase',
        items: [
            { id: 'conference-room', name: 'Sale konferencyjne', icon: 'fa-users' },
            { id: 'meeting-room', name: 'Sale spotkań', icon: 'fa-handshake' },
            { id: 'business-center', name: 'Centrum biznesowe', icon: 'fa-building' },
            { id: 'printer', name: 'Drukarka/kopiarka', icon: 'fa-print' },
            { id: 'coworking', name: 'Coworking', icon: 'fa-laptop' }
        ]
    },

    // ============================================
    // TRANSPORT
    // ============================================
    transport: {
        name: 'Transport',
        icon: 'fa-car',
        items: [
            { id: 'airport-transfer', name: 'Transfer lotniskowy', icon: 'fa-plane' },
            { id: 'shuttle', name: 'Autobus hotelowy', icon: 'fa-bus' },
            { id: 'car-rental', name: 'Wynajem samochodów', icon: 'fa-car' },
            { id: 'taxi', name: 'Zamówienie taxi', icon: 'fa-taxi' },
            { id: 'ev-charging', name: 'Ładowanie EV', icon: 'fa-charging-station' }
        ]
    },

    // ============================================
    // RODZINA
    // ============================================
    family: {
        name: 'Rodzina',
        icon: 'fa-child',
        items: [
            { id: 'family-rooms', name: 'Pokoje rodzinne', icon: 'fa-users' },
            { id: 'cribs', name: 'Łóżeczka dziecięce', icon: 'fa-baby' },
            { id: 'high-chair', name: 'Krzesełko do karmienia', icon: 'fa-chair' },
            { id: 'babysitting', name: 'Opieka nad dziećmi', icon: 'fa-baby-carriage' },
            { id: 'kids-club', name: 'Klub dla dzieci', icon: 'fa-child' },
            { id: 'kids-pool', name: 'Basen dla dzieci', icon: 'fa-water' },
            { id: 'animation', name: 'Animacje dla dzieci', icon: 'fa-masks-theater' }
        ]
    },

    // ============================================
    // ZWIERZĘTA
    // ============================================
    pets: {
        name: 'Zwierzęta',
        icon: 'fa-paw',
        items: [
            { id: 'pets-allowed', name: 'Zwierzęta dozwolone', icon: 'fa-paw' },
            { id: 'pets-free', name: 'Zwierzęta bezpłatnie', icon: 'fa-paw' },
            { id: 'dog-bed', name: 'Legowisko dla psa', icon: 'fa-dog' },
            { id: 'pet-food', name: 'Karma dla zwierząt', icon: 'fa-bone' }
        ]
    },

    // ============================================
    // DOSTĘPNOŚĆ
    // ============================================
    accessibility: {
        name: 'Dostępność',
        icon: 'fa-wheelchair',
        items: [
            { id: 'wheelchair', name: 'Dostęp dla wózków', icon: 'fa-wheelchair' },
            { id: 'accessible-room', name: 'Pokoje dla niepełnosprawnych', icon: 'fa-wheelchair' },
            { id: 'grab-rails', name: 'Uchwyty w łazience', icon: 'fa-hands-holding' }
        ]
    },

    // ============================================
    // HOSTEL
    // ============================================
    hostel: {
        name: 'Hostel',
        icon: 'fa-bed',
        items: [
            { id: 'locker', name: 'Szafka na zamek', icon: 'fa-lock' },
            { id: 'reading-light', name: 'Lampka do czytania', icon: 'fa-lightbulb' },
            { id: 'usb-port', name: 'Port USB przy łóżku', icon: 'fa-plug' },
            { id: 'privacy-curtain', name: 'Kurtyna prywatności', icon: 'fa-grip-lines' },
            { id: 'female-dorm', name: 'Pokój tylko dla kobiet', icon: 'fa-female' },
            { id: 'common-room', name: 'Wspólna przestrzeń', icon: 'fa-couch' },
            { id: 'laundry', name: 'Pralnia', icon: 'fa-soap' },
            { id: 'tours', name: 'Organizacja wycieczek', icon: 'fa-map' }
        ]
    }
};

// Eksport
window.AMENITIES = AMENITIES;
