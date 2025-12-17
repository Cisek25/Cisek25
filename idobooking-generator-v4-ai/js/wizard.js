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
            { value: 'villa', label: 'Willa', icon: 'fa-house-user', score: { luxury: 2, romantic: 2, family: 1 } },
            { value: 'chalet', label: 'Domek górski', icon: 'fa-house-chimney-window', score: { family: 2, eco: 2 } },
            { value: 'cottage', label: 'Domek letniskowy', icon: 'fa-house-flag', score: { family: 3, eco: 1 } }
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
            { value: 'lake', label: 'Jezioro', icon: 'fa-water', score: { family: 2, romantic: 1 } }
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
        id: 'season',
        title: 'Jaka sezonowość?',
        subtitle: 'Kiedy obiekt jest najpopularniejszy?',
        options: [
            { value: 'year-round', label: 'Całoroczny', icon: 'fa-calendar', score: {} },
            { value: 'summer', label: 'Lato', icon: 'fa-sun', score: { family: 1 } },
            { value: 'autumn', label: 'Jesień', icon: 'fa-leaf', score: { romantic: 1, eco: 1 } },
            { value: 'winter', label: 'Zima', icon: 'fa-snowflake', score: { family: 1 } },
            { value: 'spring', label: 'Wiosna', icon: 'fa-seedling', score: { eco: 1 } }
        ]
    },
    {
        id: 'facilities',
        title: 'Główne udogodnienia?',
        subtitle: 'Wybierz najważniejsze',
        multiSelect: true,
        options: [
            { value: 'pool', label: 'Basen', icon: 'fa-person-swimming', score: { family: 1, luxury: 1 } },
            { value: 'spa', label: 'SPA & Wellness', icon: 'fa-spa', score: { luxury: 2 } },
            { value: 'restaurant', label: 'Restauracja', icon: 'fa-utensils', score: { luxury: 1 } },
            { value: 'parking', label: 'Parking', icon: 'fa-square-parking', score: {} },
            { value: 'wifi', label: 'Darmowe WiFi', icon: 'fa-wifi', score: {} },
            { value: 'pets', label: 'Przyjazny zwierzętom', icon: 'fa-paw', score: { family: 1 } },
            { value: 'kids-area', label: 'Strefa dla dzieci', icon: 'fa-child', score: { family: 2 } },
            { value: 'conference', label: 'Sale konferencyjne', icon: 'fa-users-rectangle', score: { business: 2 } },
            { value: 'garden', label: 'Ogród', icon: 'fa-tree', score: { eco: 1, family: 1 } }
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
            { value: 'peach', label: 'Brzoskwinia', icon: 'fa-apple-whole', colors: ['#ffb199', '#ff0844', '#ffb199'], gradient: true, score: { romantic: 1 } },
            { value: 'amber', label: 'Bursztyn', icon: 'fa-gem', colors: ['#ff9966', '#ff5e62', '#ff6e7f'], gradient: true, score: { luxury: 1 } },
            { value: 'ice', label: 'Lód', icon: 'fa-snowflake', colors: ['#a8edea', '#fed6e3', '#ffffff'], gradient: true, score: { modern: 1 } },
            { value: 'moss', label: 'Mech', icon: 'fa-leaf', colors: ['#606c38', '#283618', '#fefae0'], gradient: true, score: { eco: 2 } },
            { value: 'meadow', label: 'Łąka', icon: 'fa-leaf', colors: ['#74c69d', '#52b788', '#40916c'], gradient: true, score: { eco: 2 } },
            { value: 'custom', label: 'Własna', icon: 'fa-palette', colors: ['#6366F1', '#A855F7', '#EC4899'], isCustom: true }
        ]
    }
];

// Defaults based on property type
const PROPERTY_DEFAULTS = {
    'hotel-5': { effect: 'particles', gradient: 'royal', mainImage: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Luksus na jaki zasługujesz', subtitle: 'Wyjątkowy hotel 5-gwiazdkowy' },
    'hotel-4': { effect: 'none', gradient: 'steel', mainImage: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Komfort w sercu miasta', subtitle: 'Idealny dla biznesu i wypoczynku' },
    'resort': { effect: 'sunrays', gradient: 'tropical-paradise', mainImage: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Twój Raj na Ziemi', subtitle: 'Zrelaksuj się w naszym resorcie' },
    'apartments': { effect: 'none', gradient: 'modern', mainImage: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Twój drugi dom', subtitle: 'Nowoczesne apartamenty' },
    'glamping': { effect: 'fireflies', gradient: 'forest', mainImage: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Noc pod gwiazdami', subtitle: 'Luksusowy kemping w naturze' },
    'chalet': { effect: 'snow', gradient: 'winter-forest', mainImage: 'https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Górski Klimat', subtitle: 'Przytulny domek w górach' },
    'villa': { effect: 'none', gradient: 'champagne', mainImage: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Ekskluzywna Willa', subtitle: 'Prywatność i komfort' },
    'bnb': { effect: 'particles', gradient: 'cozy', mainImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', title: 'Domowa Atmosfera', subtitle: 'Bed & Breakfast' }
};

// Wizard state
let wizardState = {
    currentStep: 0,
    answers: {},
    scores: {
        luxury: 0, family: 0, budget: 0, business: 0,
        romantic: 0, eco: 0, apartments: 0, historic: 0
    }
};

// ... (initWizard, renderProgressSteps, updateProgressBar, renderCurrentStep, selectOption, nextStep, prevStep functions remain the same) ...
// NOTE: I am omitting the unchanged functions to save space, but please ensure they are preserved in the file.
// I will include them in the full content below to ensure validity.

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
        let colorPreview = '';
        if (option.colors) {
            colorPreview = `<div class="color-preview">${option.colors.map(c => `<span style="background:${c}"></span>`).join('')}</div>`;
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
        if (!wizardState.answers[stepId]) wizardState.answers[stepId] = [];
        const index = wizardState.answers[stepId].indexOf(value);
        if (index > -1) wizardState.answers[stepId].splice(index, 1);
        else wizardState.answers[stepId].push(value);
    } else {
        wizardState.answers[stepId] = value;
    }
    const option = step.options.find(o => o.value === value);
    if (option && option.score) {
        Object.keys(option.score).forEach(category => {
            if (multiSelect) {
                const isSelected = wizardState.answers[stepId].includes(value);
                wizardState.scores[category] += isSelected ? option.score[category] : -option.score[category];
            } else {
                wizardState.scores[category] += option.score[category];
            }
        });
    }
    renderCurrentStep();

    // Auto-advance if not multiselect
    if (!multiSelect && wizardState.currentStep < WIZARD_STEPS.length - 1) {
        setTimeout(nextStep, 300);
    }
}

// Navigate wizard
function nextStep() {
    const currentStepData = WIZARD_STEPS[wizardState.currentStep];
    if (!wizardState.answers[currentStepData.id] || (Array.isArray(wizardState.answers[currentStepData.id]) && wizardState.answers[currentStepData.id].length === 0)) {
        // Allow default
    }
    if (wizardState.currentStep < WIZARD_STEPS.length - 1) {
        wizardState.currentStep++;
        renderCurrentStep();
        updateProgressBar();
    } else {
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
    // 1. Calculate best template
    const recommendedTemplate = AIEngine.findBestTemplate(wizardState.scores);

    // 2. Apply Palette
    if (wizardState.answers.palette) {
        const paletteOption = WIZARD_STEPS.find(s => s.id === 'palette')
            .options.find(o => o.value === wizardState.answers.palette);
        if (paletteOption && paletteOption.colors && !paletteOption.isCustom) {
            appState.globalSettings.colors = {
                primary: paletteOption.colors[0],
                secondary: paletteOption.colors[1],
                accent: paletteOption.colors[2]
            };
            appState.effectsSettings.gradientPreset = paletteOption.gradient ? wizardState.answers.palette : 'none';
            appState.effectsSettings.useGradients = !!paletteOption.gradient;
        }
    }

    // 3. DIVERSE SECTIONS BACKGROUNDS (Randomize background types for valid sections)
    const bgTypes = ['white', 'light', 'gradient', 'pattern'];
    const sections = Object.keys(appState.sectionBackgrounds);
    sections.forEach(sec => {
        // Keep some fixed for UX sanity, randomize others
        if (sec === 'intro') appState.sectionBackgrounds.intro = Math.random() > 0.5 ? 'light' : 'white';
        else if (sec === 'gallery') appState.sectionBackgrounds.gallery = 'white'; // Gallery usually looks best on white
        else {
            appState.sectionBackgrounds[sec] = bgTypes[Math.floor(Math.random() * bgTypes.length)];
        }
    });

    // 4. SELECT ABOUT VARIANT (Unique per generation)
    if (window.ABOUT_SECTION_VARIANTS) {
        const isApartment = wizardState.answers['property-type'] === 'apartments' || wizardState.scores.apartments > wizardState.scores.hotel;
        const variants = isApartment ? window.getApartmentAboutVariants() : window.getHotelAboutVariants();
        // Pick random variant from available ones
        if (variants.length > 0) {
            const randomVariant = variants[Math.floor(Math.random() * variants.length)];
            appState.aboutVariant = randomVariant.id;
        }
    }

    // 5. SEASONAL THEMES & MOOD
    const seasonalThemes = {
        'autumn': { gradient: 'autumn-leaves', effect: 'leaves' },
        'winter': { gradient: 'winter-forest', effect: 'snow' },
        'summer': { gradient: 'summer-sunset', effect: 'sunrays' },
        'spring': { gradient: 'spring-bloom', effect: 'sunrays' }
    };

    const season = wizardState.answers['season'];
    if (season && seasonalThemes[season]) {
        if (!appState.effectsSettings.gradientPreset || appState.effectsSettings.gradientPreset === 'none') {
            appState.effectsSettings.gradientPreset = seasonalThemes[season].gradient;
            appState.effectsSettings.useGradients = true;
        }
        appState.effectsSettings.atmosphericEffect = seasonalThemes[season].effect;
    }

    // Apply defaults from Property Type if not overruled
    const propertyType = wizardState.answers['property-type'];
    if (propertyType && PROPERTY_DEFAULTS[propertyType]) {
        const defaults = PROPERTY_DEFAULTS[propertyType];
        if (!appState.effectsSettings.atmosphericEffect || appState.effectsSettings.atmosphericEffect === 'none') {
            if (defaults.effect) appState.effectsSettings.atmosphericEffect = defaults.effect;
        }
        if (!appState.globalSettings.mainImage) {
            appState.globalSettings.mainImage = defaults.mainImage;
        }
    }

    // Store wizard data
    appState.wizardData = {
        answers: wizardState.answers,
        scores: wizardState.scores,
        recommendedTemplate: recommendedTemplate
    };

    // Switch to Builder
    document.getElementById('wizard-panel').classList.add('hidden');
    document.getElementById('builder-panel').classList.remove('hidden');
    document.getElementById('builder-panel').classList.add('active');

    // Initialize Builder
    initBuilder(recommendedTemplate);
}

// Skip wizard
function skipWizard() {
    const defaultTemplate = TEMPLATES['luxury-resort'] || Object.values(TEMPLATES)[0];
    appState.globalSettings.colors = { ...defaultTemplate.colors };

    // Randomize for skip too
    appState.aboutVariant = 'hotel-elegant';

    appState.wizardData = {
        answers: {},
        scores: {},
        recommendedTemplate: defaultTemplate,
        skipped: true
    };
    document.getElementById('wizard-panel').classList.add('hidden');
    document.getElementById('builder-panel').classList.remove('hidden');
    initBuilder(defaultTemplate);
}

window.initWizard = initWizard;
window.selectOption = selectOption;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.skipWizard = skipWizard;
window.wizardState = wizardState;

