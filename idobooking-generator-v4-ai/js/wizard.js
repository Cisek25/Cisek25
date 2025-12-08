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
            { value: 'pension', label: 'Pensjonat', icon: 'fa-house-chimney', score: { family: 3, eco: 1 } },
            { value: 'hostel', label: 'Hostel', icon: 'fa-bed', score: { budget: 3 } },
            { value: 'apartments', label: 'Apartamenty', icon: 'fa-building', score: { apartments: 3 } },
            { value: 'resort', label: 'Resort', icon: 'fa-umbrella-beach', score: { luxury: 2, family: 2 } },
            { value: 'bnb', label: 'B&B', icon: 'fa-home', score: { family: 2, romantic: 1 } },
            { value: 'glamping', label: 'Glamping', icon: 'fa-campground', score: { eco: 3, romantic: 1 } }
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
            { value: 'spa-town', label: 'Uzdrowisko', icon: 'fa-spa', score: { luxury: 2 } }
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
            { value: 'conference', label: 'Konferencje', icon: 'fa-users', score: { business: 2 } }
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
