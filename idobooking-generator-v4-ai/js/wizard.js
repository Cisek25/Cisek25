// ============================================
// WIZARD.JS - Logika wizarda 12 kroków
// ============================================

const WIZARD_STEPS = [
    {
        id: 'property-type',
        title: 'Jaki typ obiektu?',
        subtitle: 'Wybierz typ, który najlepiej opisuje Twój obiekt',
        options: [
            { value: 'hotel-3', label: 'Hotel 3★', icon: 'fa-hotel', score: { luxury: 1, family: 2, budget: 2 } },
            { value: 'hotel-4', label: 'Hotel 4★', icon: 'fa-hotel', score: { luxury: 2, business: 2 } },
            { value: 'hotel-5', label: 'Hotel 5★', icon: 'fa-gem', score: { luxury: 3, romantic: 2 } },
            { value: 'boutique', label: 'Boutique Hotel', icon: 'fa-star', score: { luxury: 2, romantic: 2 } },
            { value: 'pension', label: 'Pensjonat', icon: 'fa-house-chimney', score: { family: 3, eco: 1 } },
            { value: 'hostel', label: 'Hostel', icon: 'fa-bed', score: { budget: 3 } },
            { value: 'apartments', label: 'Apartamenty', icon: 'fa-building', score: { apartments: 3 } },
            { value: 'resort', label: 'Resort', icon: 'fa-umbrella-beach', score: { luxury: 2, family: 2 } },
            { value: 'bnb', label: 'B&B', icon: 'fa-home', score: { family: 2, romantic: 1 } },
            { value: 'glamping', label: 'Glamping', icon: 'fa-campground', score: { eco: 3, romantic: 1 } },
            { value: 'motel', label: 'Motel', icon: 'fa-road', score: { budget: 3 } },
            { value: 'villa', label: 'Willa', icon: 'fa-house-user', score: { luxury: 2, romantic: 2, family: 1 } },
            { value: 'chalet', label: 'Domek górski', icon: 'fa-house-chimney-window', score: { family: 2, eco: 2 } },
            { value: 'cottage', label: 'Domek letniskowy', icon: 'fa-house-flag', score: { family: 3, eco: 1 } },
            { value: 'farm-stay', label: 'Agroturystyka', icon: 'fa-tractor', score: { family: 2, eco: 3 } }
        ]
    },
    {
        id: 'location',
        title: 'Gdzie znajduje się obiekt?',
        subtitle: 'Lokalizacja wpływa na sugerowany styl',
        options: [
            { value: 'mountains', label: 'Góry', icon: 'fa-mountain', score: { family: 1, eco: 2 } },
            { value: 'sea', label: 'Morze', icon: 'fa-umbrella-beach', score: { family: 2, budget: 1 } },
            { value: 'city', label: 'Miasto', icon: 'fa-city', score: { business: 2, budget: 1 } },
            { value: 'countryside', label: 'Wieś', icon: 'fa-tractor', score: { family: 2, eco: 2 } },
            { value: 'forest', label: 'Las', icon: 'fa-tree', score: { eco: 3 } },
            { value: 'lake', label: 'Jezioro', icon: 'fa-water', score: { family: 2, romantic: 1 } },
            { value: 'spa-town', label: 'Uzdrowisko', icon: 'fa-spa', score: { luxury: 2 } },
            { value: 'thermal-springs', label: 'Źródła termalne', icon: 'fa-hot-tub-person', score: { luxury: 2, wellness: 2 } },
            { value: 'historical', label: 'Miasto historyczne', icon: 'fa-landmark', score: { luxury: 1, romantic: 1 } },
            { value: 'island', label: 'Wyspa', icon: 'fa-globe', score: { luxury: 2, romantic: 2 } },
            { value: 'desert', label: 'Pustynna oaza', icon: 'fa-sun', score: { luxury: 2, eco: 1 } },
            { value: 'vineyard', label: 'Winnica', icon: 'fa-wine-glass', score: { luxury: 2, romantic: 2 } }
        ]
    },
    {
        id: 'style',
        title: 'Jaki styl preferujesz?',
        subtitle: 'Styl wizualny strony',
        options: [
            { value: 'luxury', label: 'Luksusowy', icon: 'fa-crown', score: { luxury: 3 } },
            { value: 'modern', label: 'Nowoczesny', icon: 'fa-shapes', score: { business: 2, apartments: 1 } },
            { value: 'rustic', label: 'Rustykalny', icon: 'fa-wheat-awn', score: { family: 2, eco: 1 } },
            { value: 'minimalist', label: 'Minimalistyczny', icon: 'fa-minus', score: { business: 1, apartments: 2 } },
            { value: 'cozy', label: 'Przytulny', icon: 'fa-mug-hot', score: { family: 3 } },
            { value: 'eco', label: 'Ekologiczny', icon: 'fa-leaf', score: { eco: 3 } }
        ]
    },
    {
        id: 'atmosphere',
        title: 'Jaka atmosfera?',
        subtitle: 'Jakie wrażenie ma mieć gość?',
        options: [
            { value: 'romantic', label: 'Romantyczna', icon: 'fa-heart', score: { romantic: 3, luxury: 1 } },
            { value: 'family', label: 'Rodzinna', icon: 'fa-users', score: { family: 3 } },
            { value: 'business', label: 'Biznesowa', icon: 'fa-briefcase', score: { business: 3 } },
            { value: 'adventure', label: 'Przygoda', icon: 'fa-compass', score: { budget: 2, eco: 1 } },
            { value: 'wellness', label: 'Wellness', icon: 'fa-spa', score: { luxury: 2 } },
            { value: 'social', label: 'Towarzyska', icon: 'fa-comments', score: { budget: 2 } }
        ]
    },
    {
        id: 'target',
        title: 'Kto jest grupą docelową?',
        subtitle: 'Dla kogo jest Twój obiekt?',
        options: [
            { value: 'couples', label: 'Pary', icon: 'fa-heart', score: { romantic: 3, luxury: 1 } },
            { value: 'families', label: 'Rodziny', icon: 'fa-child', score: { family: 3 } },
            { value: 'solo', label: 'Podróżujący solo', icon: 'fa-user', score: { budget: 2 } },
            { value: 'business', label: 'Biznes', icon: 'fa-briefcase', score: { business: 3 } },
            { value: 'groups', label: 'Grupy', icon: 'fa-users', score: { budget: 1, family: 1 } },
            { value: 'seniors', label: 'Seniorzy', icon: 'fa-user-tie', score: { family: 1, luxury: 1 } }
        ]
    },
    {
        id: 'season',
        title: 'Jaka sezonowość?',
        subtitle: 'Kiedy obiekt jest najpopularniejszy?',
        options: [
            { value: 'year-round', label: 'Całoroczny', icon: 'fa-calendar', score: {} },
            { value: 'summer', label: 'Letni', icon: 'fa-sun', score: { family: 1 } },
            { value: 'winter', label: 'Zimowy', icon: 'fa-snowflake', score: { family: 1 } },
            { value: 'weekends', label: 'Weekendy', icon: 'fa-calendar-week', score: { romantic: 1 } }
        ]
    },
    {
        id: 'attractions',
        title: 'Główne atrakcje?',
        subtitle: 'Wybierz 1-3 najważniejsze (możesz kliknąć wiele)',
        multiSelect: true,
        options: [
            { value: 'spa', label: 'SPA', icon: 'fa-spa', score: { luxury: 2 } },
            { value: 'pool', label: 'Basen', icon: 'fa-swimmer', score: { family: 1, luxury: 1 } },
            { value: 'restaurant', label: 'Restauracja', icon: 'fa-utensils', score: { luxury: 1 } },
            { value: 'ski', label: 'Narty', icon: 'fa-skiing', score: { family: 1 } },
            { value: 'beach', label: 'Plaża', icon: 'fa-umbrella-beach', score: { family: 1 } },
            { value: 'hiking', label: 'Hiking', icon: 'fa-hiking', score: { eco: 1 } },
            { value: 'bike', label: 'Rowery', icon: 'fa-bicycle', score: { eco: 1 } },
            { value: 'conference', label: 'Konferencje', icon: 'fa-users', score: { business: 2 } },
            { value: 'sauna', label: 'Sauna', icon: 'fa-hot-tub-person', score: { luxury: 1 } },
            { value: 'gym', label: 'Siłownia', icon: 'fa-dumbbell', score: { business: 1 } },
            { value: 'jacuzzi', label: 'Jacuzzi', icon: 'fa-hot-tub', score: { luxury: 1, romantic: 1 } },
            { value: 'kids-club', label: 'Klub dla dzieci', icon: 'fa-child', score: { family: 2 } },
            { value: 'pet-friendly', label: 'Zwierzęta dozwolone', icon: 'fa-paw', score: { family: 1 } },
            { value: 'parking-free', label: 'Bezpłatny parking', icon: 'fa-square-parking', score: { budget: 1 } },
            { value: 'airport-transfer', label: 'Transfer lotniskowy', icon: 'fa-plane-arrival', score: { luxury: 1 } },
            { value: 'laundry', label: 'Pralnia', icon: 'fa-soap', score: { family: 1 } },
            { value: 'room-service', label: 'Room service', icon: 'fa-concierge-bell', score: { luxury: 1 } },
            { value: 'ev-charging', label: 'Ładowanie EV', icon: 'fa-charging-station', score: { eco: 1 } }
        ]
    },
    {
        id: 'facilities',
        title: 'Główne udogodnienia obiektu?',
        subtitle: 'Wybierz maksymalnie 5 (multiselect)',
        multiSelect: true,
        options: [
            { value: 'pool', label: 'Basen', icon: 'fa-person-swimming', score: { family: 1, luxury: 1 } },
            { value: 'spa', label: 'SPA & Wellness', icon: 'fa-spa', score: { luxury: 2 } },
            { value: 'gym', label: 'Siłownia', icon: 'fa-dumbbell', score: { business: 1 } },
            { value: 'sauna', label: 'Sauna', icon: 'fa-hot-tub-person', score: { luxury: 1 } },
            { value: 'restaurant', label: 'Restauracja', icon: 'fa-utensils', score: { luxury: 1 } },
            { value: 'bar', label: 'Bar / Lounge', icon: 'fa-martini-glass-citrus', score: { business: 1 } },
            { value: 'parking', label: 'Parking', icon: 'fa-square-parking', score: {} },
            { value: 'wifi', label: 'Darmowe WiFi', icon: 'fa-wifi', score: {} },
            { value: 'pets', label: 'Przyjazny zwierzętom', icon: 'fa-paw', score: { family: 1 } },
            { value: 'kids-area', label: 'Strefa dla dzieci', icon: 'fa-child', score: { family: 2 } },
            { value: 'conference', label: 'Sale konferencyjne', icon: 'fa-users-rectangle', score: { business: 2 } },
            { value: 'garden', label: 'Ogród', icon: 'fa-tree', score: { eco: 1, family: 1 } }
        ]
    },
    {
        id: 'room-standard',
        title: 'Standard pokoi?',
        subtitle: 'Jaki typ pokoi dominuje?',
        options: [
            { value: 'standard', label: 'Standard', icon: 'fa-bed', score: { budget: 2 } },
            { value: 'comfort', label: 'Comfort+', icon: 'fa-star', score: { family: 1 } },
            { value: 'superior', label: 'Superior', icon: 'fa-crown', score: { luxury: 1 } },
            { value: 'deluxe', label: 'Deluxe', icon: 'fa-gem', score: { luxury: 2 } },
            { value: 'suite', label: 'Suite / Apartament', icon: 'fa-door-open', score: { luxury: 3, romantic: 1 } },
            { value: 'mixed', label: 'Mieszany', icon: 'fa-layer-group', score: {} }
        ]
    },
    {
        id: 'meals',
        title: 'Opcje wyżywienia?',
        subtitle: 'Co oferujesz gościom?',
        multiSelect: true,
        options: [
            { value: 'bb', label: 'Śniadanie (B&B)', icon: 'fa-egg', score: { family: 1 } },
            { value: 'hb', label: 'Półpensjonat (HB)', icon: 'fa-utensils', score: { family: 1 } },
            { value: 'fb', label: 'Pełne wyżywienie (FB)', icon: 'fa-bowl-food', score: { luxury: 1 } },
            { value: 'ai', label: 'All Inclusive', icon: 'fa-infinity', score: { luxury: 2, family: 1 } },
            { value: 'self-catering', label: 'Własne gotowanie', icon: 'fa-kitchen-set', score: { apartments: 1 } },
            { value: 'none', label: 'Brak wyżywienia', icon: 'fa-xmark', score: { budget: 1 } }
        ]
    },
    {
        id: 'price-range',
        title: 'Segment cenowy?',
        subtitle: 'Pozycjonowanie obiektu',
        options: [
            { value: 'budget', label: 'Ekonomiczny', icon: 'fa-piggy-bank', score: { budget: 3 } },
            { value: 'mid-range', label: 'Średni', icon: 'fa-coins', score: {} },
            { value: 'upscale', label: 'Wyższy', icon: 'fa-gem', score: { luxury: 1 } },
            { value: 'luxury', label: 'Luksusowy', icon: 'fa-crown', score: { luxury: 3 } },
            { value: 'ultra-luxury', label: 'Ultra-luksusowy', icon: 'fa-star', score: { luxury: 4 } }
        ]
    },
    {
        id: 'palette',
        title: 'Wybierz paletę kolorów',
        subtitle: 'Kolory możesz później dostosować',
        options: [
            { value: 'elegant', label: 'Elegancka', icon: 'fa-gem', colors: ['#1A365D', '#C9A227', '#8B6914'], score: { luxury: 2 } },
            { value: 'nature', label: 'Naturalna', icon: 'fa-leaf', colors: ['#2E7D32', '#81C784', '#FFA726'], score: { eco: 2, family: 1 } },
            { value: 'ocean', label: 'Oceaniczna', icon: 'fa-water', colors: ['#0277BD', '#4FC3F7', '#FFB74D'], score: { family: 1 } },
            { value: 'warm', label: 'Ciepła', icon: 'fa-fire', colors: ['#FF6B35', '#F7C948', '#00B894'], score: { budget: 1 } },
            { value: 'romantic', label: 'Romantyczna', icon: 'fa-heart', colors: ['#880E4F', '#F48FB1', '#FFD54F'], score: { romantic: 2 } },
            { value: 'earth', label: 'Ziemista', icon: 'fa-mountain', colors: ['#5D4037', '#A1887F', '#FF7043'], score: { eco: 1, family: 1 } },
            { value: 'modern', label: 'Nowoczesna', icon: 'fa-shapes', colors: ['#37474F', '#78909C', '#00BCD4'], score: { business: 1, apartments: 1 } },
            { value: 'sunset', label: 'Zachód słońca', icon: 'fa-sun', colors: ['#FF6B6B', '#FFA502', '#FFD93D'], gradient: true, score: { romantic: 1 } },
            { value: 'aurora', label: 'Aurora', icon: 'fa-star', colors: ['#667EEA', '#764BA2', '#F093FB'], gradient: true, score: { luxury: 1 } },
            { value: 'forest', label: 'Leśna', icon: 'fa-tree', colors: ['#134E5E', '#71B280', '#38EF7D'], gradient: true, score: { eco: 2 } },
            { value: 'royal', label: 'Królewska', icon: 'fa-crown', colors: ['#141E30', '#243B55', '#D4AF37'], gradient: true, score: { luxury: 2 } },
            { value: 'coral', label: 'Koralowa', icon: 'fa-shell', colors: ['#FF9A9E', '#FECFEF', '#A8EDEA'], gradient: true, score: { family: 1 } },
            { value: 'midnight', label: 'Północ', icon: 'fa-moon', colors: ['#0F2027', '#203A43', '#2C5364'], gradient: true, score: { luxury: 1 } },
            // 20 nowych gradientów
            { value: 'tropical', label: 'Tropikalny', icon: 'fa-palm-tree', colors: ['#11998e', '#38ef7d', '#f5af19'], gradient: true, score: { eco: 1, family: 1 } },
            { value: 'lavender', label: 'Lawendowy', icon: 'fa-seedling', colors: ['#834d9b', '#d04ed6', '#e8b5ce'], gradient: true, score: { romantic: 2 } },
            { value: 'rose-gold', label: 'Różowe złoto', icon: 'fa-ring', colors: ['#b76e79', '#e8b5ce', '#f1c40f'], gradient: true, score: { luxury: 2, romantic: 1 } },
            { value: 'arctic', label: 'Arktyczny', icon: 'fa-snowflake', colors: ['#74ebd5', '#ACB6E5', '#ffffff'], gradient: true, score: { luxury: 1 } },
            { value: 'volcano', label: 'Wulkan', icon: 'fa-fire-flame-curved', colors: ['#cc2b5e', '#753a88', '#ff416c'], gradient: true, score: { luxury: 1 } },
            { value: 'emerald', label: 'Szmaragdowy', icon: 'fa-gem', colors: ['#1d976c', '#93f9b9', '#2c3e50'], gradient: true, score: { eco: 2 } },
            { value: 'champagne', label: 'Szampan', icon: 'fa-champagne-glasses', colors: ['#f7e7ce', '#d4af37', '#8b7355'], gradient: true, score: { luxury: 3 } },
            { value: 'cyberpunk', label: 'Cyberpunk', icon: 'fa-robot', colors: ['#00d4ff', '#ff00ff', '#7b00ff'], gradient: true, score: { apartments: 1 } },
            { value: 'sahara', label: 'Sahara', icon: 'fa-sun', colors: ['#c99a65', '#e6c79f', '#8b5a2b'], gradient: true, score: { eco: 1 } },
            { value: 'twilight', label: 'Zmierzch', icon: 'fa-cloud-moon', colors: ['#0f0c29', '#302b63', '#24243e'], gradient: true, score: { luxury: 2 } },
            { value: 'spring', label: 'Wiosenny', icon: 'fa-seedling', colors: ['#f8cdda', '#1d976c', '#f9d423'], gradient: true, score: { family: 1 } },
            { value: 'steel', label: 'Stalowy', icon: 'fa-building', colors: ['#485563', '#29323c', '#667085'], gradient: true, score: { business: 2 } },
            { value: 'terracotta', label: 'Terakota', icon: 'fa-house', colors: ['#bc6c25', '#dda15e', '#283618'], gradient: true, score: { eco: 2 } },
            { value: 'marine', label: 'Marynarski', icon: 'fa-anchor', colors: ['#1e3a5f', '#3d5a80', '#98c1d9'], gradient: true, score: { family: 1 } },
            { value: 'wine', label: 'Wino', icon: 'fa-wine-glass', colors: ['#722f37', '#a93545', '#f4d0d5'], gradient: true, score: { romantic: 2, luxury: 1 } },
            { value: 'neon', label: 'Neonowy', icon: 'fa-bolt', colors: ['#00ff87', '#60efff', '#ff00ff'], gradient: true, score: { apartments: 1 } },
            { value: 'candy', label: 'Cukierkowy', icon: 'fa-candy-cane', colors: ['#ff6fd8', '#3813c2', '#92fe9d'], gradient: true, score: { family: 2 } },
            { value: 'coffee', label: 'Kawowy', icon: 'fa-mug-saucer', colors: ['#2c1810', '#6f4e37', '#c9a66b'], gradient: true, score: { business: 1 } },
            { value: 'peacock', label: 'Pawi', icon: 'fa-feather', colors: ['#0a4d4a', '#137a7f', '#00b4d8'], gradient: true, score: { luxury: 2 } },
            { value: 'copper', label: 'Miedziany', icon: 'fa-coins', colors: ['#b87333', '#cd7f32', '#e8a87c'], gradient: true, score: { luxury: 1 } },
            // New Gradients
            { value: 'peach', label: 'Brzoskwinia', icon: 'fa-apple-whole', colors: ['#ffb199', '#ff0844', '#ffb199'], gradient: true, score: { romantic: 1 } },
            { value: 'amber', label: 'Bursztyn', icon: 'fa-gem', colors: ['#ff9966', '#ff5e62', '#ff6e7f'], gradient: true, score: { luxury: 1 } },
            { value: 'ice', label: 'Lód', icon: 'fa-snowflake', colors: ['#a8edea', '#fed6e3', '#ffffff'], gradient: true, score: { modern: 1 } },
            { value: 'azure', label: 'Lazur', icon: 'fa-water', colors: ['#36D1DC', '#5B86E5', '#667eea'], gradient: true, score: { luxury: 1 } },
            { value: 'neptune', label: 'Neptun', icon: 'fa-water', colors: ['#1e3c72', '#2a5298', '#7597de'], gradient: true, score: { business: 1 } },
            { value: 'moss', label: 'Mech', icon: 'fa-leaf', colors: ['#606c38', '#283618', '#fefae0'], gradient: true, score: { eco: 2 } },
            { value: 'meadow', label: 'Łąka', icon: 'fa-leaf', colors: ['#74c69d', '#52b788', '#40916c'], gradient: true, score: { eco: 2 } },
            { value: 'sage', label: 'Szałwia', icon: 'fa-leaf', colors: ['#b7b7a4', '#a5a58d', '#6b705c'], gradient: true, score: { eco: 1, minimalist: 1 } },
            { value: 'bamboo', label: 'Bambus', icon: 'fa-leaf', colors: ['#718355', '#87986a', '#c8d2b8'], gradient: true, score: { eco: 2 } },
            { value: 'earth', label: 'Ziemia', icon: 'fa-earth-europe', colors: ['#8b4513', '#a0522d', '#cd853f'], gradient: true, score: { rustic: 2 } },
            { value: 'desert', label: 'Pustynia', icon: 'fa-sun', colors: ['#d4a373', '#e6bc8f', '#f4e4c1'], gradient: true, score: { eco: 1 } },
            { value: 'galaxy', label: 'Galaktyka', icon: 'fa-star', colors: ['#2c3e50', '#3498db', '#9b59b6'], gradient: true, score: { modern: 2 } },
            { value: 'noir', label: 'Noir', icon: 'fa-moon', colors: ['#000000', '#434343', '#000000'], gradient: true, score: { minimalist: 2, luxury: 1 } },
            { value: 'velvet', label: 'Aksamit', icon: 'fa-crown', colors: ['#5f0a87', '#a4508b', '#ff6f91'], gradient: true, score: { luxury: 2 } },
            { value: 'plum', label: 'Śliwka', icon: 'fa-lemon', colors: ['#5a189a', '#9d4edd', '#e0aaff'], gradient: true, score: { luxury: 1 } },
            { value: 'custom', label: 'Własna', icon: 'fa-palette', colors: ['#6366F1', '#A855F7', '#EC4899'], isCustom: true }
        ]
    }
];

// Wizard state
let wizardState = {
    currentStep: 0,
    answers: {},
    scores: {
        luxury: 0,
        family: 0,
        budget: 0,
        business: 0,
        romantic: 0,
        eco: 0,
        apartments: 0,
        historic: 0
    }
};

// Initialize wizard
function initWizard() {
    renderProgressSteps();
    renderCurrentStep();
    updateProgressBar();
}

// Render progress steps indicators
function renderProgressSteps() {
    const container = document.getElementById('progress-steps');
    container.innerHTML = WIZARD_STEPS.map((step, index) => `
        <div class="progress-step ${index === 0 ? 'active' : ''}" data-step="${index}">
            <span>${index + 1}</span>
        </div>
    `).join('');
}

// Update progress bar
function updateProgressBar() {
    const progress = ((wizardState.currentStep + 1) / WIZARD_STEPS.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;

    // Update step indicators
    document.querySelectorAll('.progress-step').forEach((el, index) => {
        el.classList.remove('active', 'completed');
        if (index < wizardState.currentStep) {
            el.classList.add('completed');
        } else if (index === wizardState.currentStep) {
            el.classList.add('active');
        }
    });
}

// Render current step
function renderCurrentStep() {
    const step = WIZARD_STEPS[wizardState.currentStep];
    const container = document.getElementById('wizard-content');
    const selectedValues = wizardState.answers[step.id] || (step.multiSelect ? [] : null);

    container.innerHTML = `
        <div class="wizard-step">
            <h2>${step.title}</h2>
            <p>${step.subtitle}</p>
            <div class="wizard-options">
                ${step.options.map(option => {
        const isSelected = step.multiSelect
            ? selectedValues.includes(option.value)
            : selectedValues === option.value;

        // Render colors for palette step
        let colorPreview = '';
        if (option.colors) {
            colorPreview = `
                            <div class="color-preview">
                                ${option.colors.map(c => `<span style="background:${c}"></span>`).join('')}
                            </div>
                        `;
        }

        return `
                        <div class="wizard-option ${isSelected ? 'selected' : ''}" 
                             data-value="${option.value}"
                             onclick="selectOption('${step.id}', '${option.value}', ${step.multiSelect || false})">
                            <i class="fas ${option.icon}"></i>
                            <span>${option.label}</span>
                            ${colorPreview}
                        </div>
                    `;
    }).join('')}
            </div>
        </div>
    `;

    // Update nav buttons
    document.getElementById('btn-prev').disabled = wizardState.currentStep === 0;

    const btnNext = document.getElementById('btn-next');
    if (wizardState.currentStep === WIZARD_STEPS.length - 1) {
        btnNext.innerHTML = 'Zakończ <i class="fas fa-check"></i>';
    } else {
        btnNext.innerHTML = 'Dalej <i class="fas fa-arrow-right"></i>';
    }
}

// Select option
function selectOption(stepId, value, multiSelect) {
    const step = WIZARD_STEPS.find(s => s.id === stepId);

    if (multiSelect) {
        if (!wizardState.answers[stepId]) {
            wizardState.answers[stepId] = [];
        }
        const index = wizardState.answers[stepId].indexOf(value);
        if (index > -1) {
            wizardState.answers[stepId].splice(index, 1);
        } else {
            wizardState.answers[stepId].push(value);
        }
    } else {
        wizardState.answers[stepId] = value;
    }

    // Update scores
    const option = step.options.find(o => o.value === value);
    if (option && option.score) {
        Object.keys(option.score).forEach(category => {
            if (multiSelect) {
                // For multiselect, toggle score
                const isSelected = wizardState.answers[stepId].includes(value);
                if (isSelected) {
                    wizardState.scores[category] += option.score[category];
                } else {
                    wizardState.scores[category] -= option.score[category];
                }
            } else {
                wizardState.scores[category] += option.score[category];
            }
        });
    }

    renderCurrentStep();
}

// Navigate wizard
function nextStep() {
    const currentStepData = WIZARD_STEPS[wizardState.currentStep];

    // Validate current step
    if (!wizardState.answers[currentStepData.id] ||
        (Array.isArray(wizardState.answers[currentStepData.id]) &&
            wizardState.answers[currentStepData.id].length === 0)) {
        // Allow proceeding without selection (with defaults)
    }

    if (wizardState.currentStep < WIZARD_STEPS.length - 1) {
        wizardState.currentStep++;
        renderCurrentStep();
        updateProgressBar();
    } else {
        // Wizard complete - show builder
        finishWizard();
    }
}

function prevStep() {
    if (wizardState.currentStep > 0) {
        wizardState.currentStep--;
        renderCurrentStep();
        updateProgressBar();
    }
}

// Finish wizard and show builder
function finishWizard() {
    // Calculate best template match
    const recommendedTemplate = AIEngine.findBestTemplate(wizardState.scores);

    // Apply colors from palette selection
    if (wizardState.answers.palette) {
        const paletteOption = WIZARD_STEPS.find(s => s.id === 'palette')
            .options.find(o => o.value === wizardState.answers.palette);
        if (paletteOption && paletteOption.colors && !paletteOption.isCustom) {
            appState.globalSettings.colors = {
                primary: paletteOption.colors[0],
                secondary: paletteOption.colors[1],
                accent: paletteOption.colors[2]
            };

            // Jeśli paleta ma gradient, ustaw go jako aktywny preset
            if (paletteOption.gradient) {
                appState.effectsSettings.gradientPreset = wizardState.answers.palette;
                appState.effectsSettings.useGradients = true;
            } else {
                // Paleta bez gradientu - wyłącz gradienty
                appState.effectsSettings.gradientPreset = 'none';
                appState.effectsSettings.useGradients = false;
            }
        }
    }

    // Store wizard data
    appState.wizardData = {
        answers: wizardState.answers,
        scores: wizardState.scores,
        recommendedTemplate: recommendedTemplate
    };

    // Switch to builder
    document.getElementById('wizard-panel').classList.add('hidden');
    document.getElementById('builder-panel').classList.remove('hidden');

    // Initialize builder with AI recommendation
    initBuilder(recommendedTemplate);
}

// Skip wizard - go directly to builder
function skipWizard() {
    // Set default template
    const defaultTemplate = TEMPLATES['luxury-resort'] || Object.values(TEMPLATES)[0];

    // Apply default colors
    appState.globalSettings.colors = {
        primary: defaultTemplate.colors.primary,
        secondary: defaultTemplate.colors.secondary,
        accent: defaultTemplate.colors.accent
    };

    // Store empty wizard data
    appState.wizardData = {
        answers: {},
        scores: {},
        recommendedTemplate: defaultTemplate,
        skipped: true
    };

    // Switch to builder
    document.getElementById('wizard-panel').classList.add('hidden');
    document.getElementById('builder-panel').classList.remove('hidden');

    // Initialize builder with default template
    initBuilder(defaultTemplate);
}

// Expose to window
window.initWizard = initWizard;
window.selectOption = selectOption;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.skipWizard = skipWizard;
window.wizardState = wizardState;
