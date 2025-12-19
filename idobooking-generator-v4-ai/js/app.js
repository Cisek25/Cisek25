// ============================================
// APP.JS - Główna logika aplikacji
// ============================================

// ============================================
// GLOBAL STATE
// ============================================
const appState = {
    mode: 'wizard', // 'wizard' | 'builder'
    wizardData: null,
    aiRecommendation: null,
    selectedTemplate: null,
    globalSettings: {
        propertyName: '',
        address: '',
        colors: {
            primary: '#1A365D',
            secondary: '#C9A227',
            accent: '#00B894'
        },
        fonts: {
            heading: 'Playfair Display',
            body: 'Inter'
        },
        bookingUrl: 'https://engine55007.idobooking.com/i',
        phone: '+48 123 456 789',
        faqItems: [
            { question: 'O której godzinie zameldowanie/wymeldowanie?', answer: 'Zameldowanie od 15:00, wymeldowanie do 11:00. Wcześniejsze/późniejsze godziny możliwe po uzgodnieniu.' },
            { question: 'Czy można przyjechać ze zwierzętami?', answer: 'Tak! Zwierzęta są mile widziane. Prosimy o wcześniejszą informację przy rezerwacji.' },
            { question: 'Czy jest parking?', answer: 'Tak, dysponujemy bezpłatnym parkingiem dla gości.' },
            { question: 'Jakie formy płatności akceptujecie?', answer: 'Akceptujemy gotówkę, karty płatnicze oraz przelewy bankowe.' },
            { question: 'Czy śniadanie jest wliczone w cenę?', answer: 'Zależy od wybranej oferty. Sprawdź szczegóły przy rezerwacji.' },
            { question: 'Czy jest możliwość anulowania rezerwacji?', answer: 'Tak, bezpłatna anulacja możliwa do 48h przed przyjazdem.' }
        ]
    },
    // ============================================
    // EFFECTS SETTINGS - Mega opcje efektów
    // ============================================
    effectsSettings: {
        // Gradienty
        useGradients: true,
        gradientType: 'linear', // 'linear' | 'radial' | 'conic'
        gradientAngle: 135,
        gradientPreset: 'sunset', // 'sunset', 'aurora', 'ocean', 'forest', 'royal', 'custom'

        // Efekty Hover
        hoverEffects: {
            cards: true,           // Hover na kartach pokoi
            buttons: true,         // Hover na przyciskach
            images: true,          // Hover na obrazkach (zoom)
            links: true,           // Hover na linkach
            flipCards: false       // Karty obracane 3D
        },

        // Animacje
        animations: {
            fadeIn: true,          // Animacja wejścia
            slideUp: true,         // Wsuwanie od dołu
            parallax: false,       // Efekt parallax
            smoothScroll: true,    // Płynne przewijanie
            countUp: true          // Animacja liczników
        },

        // Rozmiary czcionek (skalowanie %)
        fontScale: {
            headings: 100,         // Nagłówki (50-150%)
            body: 100,             // Tekst główny (50-150%)
            labels: 100            // Etykiety (50-150%)
        },

        // Style kart
        cardStyle: 'elevated',    // 'flat' | 'elevated' | 'bordered' | 'glass'
        borderRadius: 'medium',   // 'none' | 'small' | 'medium' | 'large' | 'full'
        shadowIntensity: 'medium', // 'none' | 'light' | 'medium' | 'strong'

        // Efekty atmosferyczne
        atmosphericEffect: 'none'  // 'none' | 'snow' | 'aurora' | 'rain' | 'drizzle' | 'sunrays' | 'leaves' | 'fireflies' | 'particles'
    },
    // ============================================
    // ROOMS DISPLAY SETTINGS
    // ============================================
    roomsSettings: {
        displayMode: 'grid',      // 'grid' | 'slider' | 'masonry'
        showCategories: true,     // Pokazuj kategorie
        categories: [
            { id: 'sea-view', name: 'Z widokiem na morze', icon: 'fa-water' },
            { id: 'mountain', name: 'Z widokiem na góry', icon: 'fa-mountain' },
            { id: 'garden', name: 'Z widokiem na ogród', icon: 'fa-leaf' },
            { id: 'standard', name: 'Pokoje standardowe', icon: 'fa-bed' },
            { id: 'premium', name: 'Premium & Suite', icon: 'fa-crown' }
        ],
        itemsPerRow: 3,
        showPrices: true,
        showAmenities: true
    },
    // Edytowalne treści sekcji
    sectionContent: {
        intro: {
            title: 'Witamy w Naszym Obiekcie',
            subtitle: 'Twoje miejsce na wyjątkowy wypoczynek',
            description: 'Odkryj komfort i spokój w sercu pięknej okolicy. Oferujemy wyjątkowe doświadczenia dla każdego gościa.'
        },
        amenities: {
            title: 'Udogodnienia',
            subtitle: 'Wszystko czego potrzebujesz'
        },
        gallery: {
            title: 'Galeria',
            subtitle: 'Zobacz jak u nas wygląda'
        },
        location: {
            title: 'Lokalizacja',
            subtitle: 'Znajdź nas łatwo'
        },
        testimonials: {
            title: 'Opinie Gości',
            subtitle: 'Co mówią o nas nasi goście'
        },
        attractions: {
            title: 'Atrakcje w Okolicy',
            subtitle: 'Co warto zobaczyć',
            items: [
                { name: 'Stare Miasto', desc: 'Zabytkowe centrum z klimatycznymi uliczkami', distance: '10 min pieszo' },
                { name: 'Park Miejski', desc: 'Rozległy park ze stawem i placem zabaw', distance: '5 min samochodem' },
                { name: 'Centrum Handlowe', desc: 'Ponad 100 sklepów i restauracji', distance: '15 min autobusem' },
                { name: 'Teatr Miejski', desc: 'Przedstawienia teatralne i koncerty', distance: '20 min pieszo' }
            ]
        },
        dining: {
            title: 'Wyżywienie',
            subtitle: 'Oferta gastronomiczna',
            meals: [
                { name: 'Śniadanie', desc: 'Bogaty bufet 7:00-10:30', price: '49 zł/os.' },
                { name: 'Obiad', desc: 'Dwudaniowy obiad z deserem', price: '59 zł/os.' },
                { name: 'Kolacja', desc: 'À la carte w restauracji', price: 'od 79 zł' },
                { name: 'Pełne wyżywienie', desc: 'Pakiet promocyjny', price: '149 zł/os.' }
            ]
        },
        pricing: {
            title: 'Pakiety Pobytowe',
            subtitle: 'Wybierz idealny dla siebie',
            packages: [
                { name: 'Weekend Relax', price: '399 zł/os.', features: ['2 noce', 'Śniadania', 'Strefa SPA', 'Parking gratis'] },
                { name: 'Tydzień Wypoczynku', price: '1299 zł/os.', features: ['7 nocy', 'Pełne wyżywienie', 'Masaż 30 min', 'Basen & SPA'], featured: true },
                { name: 'Romantyczny Pobyt', price: '599 zł/para', features: ['1 noc', 'Kolacja przy świecach', 'Szampan', 'Późne wymeldowanie'] }
            ]
        },
        spa: {
            title: 'SPA & Wellness',
            subtitle: 'Strefa relaksu',
            description: 'Zapraszamy do naszej strefy SPA, gdzie czas płynie wolniej.',
            features: ['Jacuzzi', 'Sauna fińska', 'Łaźnia parowa', 'Basen', 'Siłownia'],
            treatments: [
                { name: 'Masaż relaksacyjny (60 min)', price: '199 zł' },
                { name: 'Masaż gorącymi kamieniami', price: '249 zł' },
                { name: 'Peeling całego ciała', price: '149 zł' },
                { name: 'Rytuał SPA (120 min)', price: '399 zł' }
            ]
        },
        events: {
            title: 'Organizacja Wydarzeń',
            subtitle: 'Eventy i konferencje',
            types: [
                { name: 'Konferencje', desc: 'Sale od 10 do 200 osób' },
                { name: 'Wesela', desc: 'Profesjonalna obsługa' },
                { name: 'Spotkania firmowe', desc: 'Integracje, szkolenia' },
                { name: 'Uroczystości', desc: 'Komunie, chrzciny, rocznice' }
            ]
        },
        transport: {
            title: 'Dojazd',
            subtitle: 'Jak do nas dotrzeć',
            options: [
                { type: 'Samochodem', desc: 'Bezpłatny parking. Wjazd od ul. Głównej' },
                { type: 'Pociągiem', desc: 'Dworzec główny: 10 min taksówką' },
                { type: 'Samolotem', desc: 'Lotnisko: 25 min. Transfer dostępny' },
                { type: 'Autobusem', desc: 'Przystanek 200m. Linie: 102, 115' }
            ]
        },
        rules: {
            title: 'Regulamin',
            subtitle: 'Zasady pobytu',
            items: [
                { title: 'Check-in/out', desc: 'Zameldowanie od 15:00, wymeldowanie do 11:00' },
                { title: 'Cisza nocna', desc: 'Od 22:00 do 7:00' },
                { title: 'Zwierzęta', desc: 'Mile widziane. Dopłata: 50 zł/doba' },
                { title: 'Palenie', desc: 'Tylko na zewnątrz budynku' },
                { title: 'Anulacja', desc: 'Bezpłatna do 48h przed przyjazdem' },
                { title: 'Dzieci', desc: 'Do lat 3 gratis. Łóżeczka dostępne' }
            ]
        },
        cta: {
            title: 'Zarezerwuj Pobyt',
            subtitle: 'Sprawdź dostępność już teraz!',
            perks: ['Najlepsza cena gwarantowana', 'Bezpłatna anulacja', 'Płatność przy zameldowaniu']
        }
    },
    objects: [],
    enabledSections: ['intro', 'rooms', 'amenities', 'gallery', 'location', 'testimonials', 'faq', 'cta'],
    nextObjectId: 1,
    // Section background settings - each section can have: 'white', 'light', 'gradient', 'dark', 'pattern'
    sectionBackgrounds: {
        intro: 'light',
        rooms: 'white',
        amenities: 'gradient',
        gallery: 'white',
        location: 'light',
        attractions: 'white',
        testimonials: 'light',
        faq: 'white',
        dining: 'white',
        pricing: 'light',
        spa: 'gradient',
        events: 'white',
        transport: 'light',
        rules: 'white',
        cta: 'gradient',
        social: 'light',
        partners: 'white'
    },
    // ============================================
    // OFFERS PAGE SETTINGS (for /offers subpage styling)
    // ============================================
    offersSettings: {
        enabled: false,
        filtersCollapsible: true,
        filtersModern: true,
        cardsHover: true,
        cardsRounded: true,
        cardsShadow: true,
        buttonsRounded: true,
        buttonsGradient: false,
        background: 'white'
    }
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // Check for auto-saved project
    checkAutoSave();

    // Initialize wizard
    initWizard();

    // Setup event listeners
    setupEventListeners();

    console.log('✅ IdoBooking AI Generator v4.0 loaded!');
}

function setupEventListeners() {
    // Wizard navigation
    document.getElementById('btn-next').addEventListener('click', nextStep);
    document.getElementById('btn-prev').addEventListener('click', prevStep);

    // New project button
    document.getElementById('btn-new').addEventListener('click', resetApp);

    // 7. Intensity Slider
    document.getElementById('effect-intensity').addEventListener('input', (e) => {
        const val = e.target.value;
        document.getElementById('intensity-value').textContent = Math.round(val * 100) + '%';
        appState.effectsSettings.intensity = val;

        // Update live
        if (window.VisualEffects) {
            VisualEffects.setIntensity(val);
        }
    });

    // 8. Generate Code
    document.getElementById('btn-generate-code')?.addEventListener('click', generateCode);
    // Builder events (will be active after wizard)
    document.getElementById('btn-add-object')?.addEventListener('click', addNewObject);
    document.getElementById('btn-generate')?.addEventListener('click', generateCode);

    // Color pickers
    document.getElementById('color-primary')?.addEventListener('input', (e) => updateColor('primary', e.target.value));
    document.getElementById('color-secondary')?.addEventListener('input', (e) => updateColor('secondary', e.target.value));
    document.getElementById('color-accent')?.addEventListener('input', (e) => updateColor('accent', e.target.value));

    // Font selects
    document.getElementById('font-heading')?.addEventListener('change', (e) => updateFont('heading', e.target.value));
    document.getElementById('font-body')?.addEventListener('change', (e) => updateFont('body', e.target.value));

    // Export modal
    document.getElementById('close-export')?.addEventListener('click', closeExportModal);
    document.querySelector('#export-modal .modal-overlay')?.addEventListener('click', closeExportModal);

    // Object modal
    document.getElementById('close-object')?.addEventListener('click', closeObjectModal);
    document.querySelector('#object-modal .modal-overlay')?.addEventListener('click', closeObjectModal);

    // Export tabs
    document.querySelectorAll('.export-tab').forEach(tab => {
        tab.addEventListener('click', () => switchExportTab(tab.dataset.tab));
    });
}

// ============================================
// BUILDER INITIALIZATION
// ============================================
function initBuilder(recommendation) {
    appState.mode = 'builder';

    // Save AI recommendation for later use
    appState.aiRecommendation = recommendation;

    // Apply AI recommendation
    if (recommendation && recommendation.template) {
        const template = recommendation.template;

        appState.selectedTemplate = template;
        appState.globalSettings.colors = { ...template.colors };
        appState.globalSettings.fonts = { ...template.fonts };
        appState.enabledSections = [...template.sections];

        // DIVERSITY: Randomize section order and enable optional sections
        if (appState.wizardData && !appState.wizardData.skipped) {
            // 1. Randomly add optional sections that fit the theme
            const optionalSections = ['attractions', 'testimonials', 'faq', 'dining', 'spa', 'events', 'transport', 'rules', 'cta'];
            optionalSections.forEach(sec => {
                if (!appState.enabledSections.includes(sec) && Math.random() > 0.6) {
                    appState.enabledSections.push(sec);
                }
            });

            // 2. Shuffle sections (keep Intro first)
            const contentSections = appState.enabledSections.filter(s => s !== 'intro');
            for (let i = contentSections.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [contentSections[i], contentSections[j]] = [contentSections[j], contentSections[i]];
            }
            appState.enabledSections = ['intro', ...contentSections];
        }

        // Update AI recommendation UI
        document.getElementById('ai-template-name').textContent = template.name;
        document.getElementById('ai-template-desc').textContent = template.description;

        // Generate property name
        if (appState.wizardData) {
            appState.globalSettings.propertyName = AIEngine.generatePropertyName(appState.wizardData);
            document.getElementById('property-name').value = appState.globalSettings.propertyName;
        }
    }

    // Update color pickers
    document.getElementById('color-primary').value = appState.globalSettings.colors.primary;
    document.getElementById('color-secondary').value = appState.globalSettings.colors.secondary;
    document.getElementById('color-accent').value = appState.globalSettings.colors.accent;

    // Update font selects
    document.getElementById('font-heading').value = appState.globalSettings.fonts.heading;
    document.getElementById('font-body').value = appState.globalSettings.fonts.body;

    // Synchronize gradient buttons with effectsSettings (from wizard palette)
    const currentGradient = appState.effectsSettings.gradientPreset || 'none';
    document.querySelectorAll('.gradient-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.gradient === currentGradient);
    });

    // Render sections checklist
    renderSectionsChecklist();

    // Render template gallery
    renderTemplateGallery();

    // Render FAQ list
    renderFaqList();

    // Add 6 default rooms/apartments
    addDefaultObjects();

    // Initialize preview
    Preview.init();

    // ============================================
    // SYNC UI WITH STATE (Phase D & E)
    // ============================================

    // 1. Hero Content
    if (appState.sectionContent?.intro) {
        if (appState.sectionContent.intro.title) {
            document.getElementById('hero-title').value = appState.sectionContent.intro.title;
        }
        if (appState.sectionContent.intro.subtitle) {
            document.getElementById('hero-subtitle').value = appState.sectionContent.intro.subtitle;
        }
        if (appState.sectionContent.intro.description) {
            document.getElementById('property-desc').value = appState.sectionContent.intro.description;
        }
    }

    // 2. Main Image
    if (appState.globalSettings.mainImage) {
        const imgUrl = appState.globalSettings.mainImage;
        document.getElementById('hero-image').value = imgUrl;
        const previewEl = document.getElementById('hero-image-preview');
        if (previewEl) {
            previewEl.style.backgroundImage = `url('${imgUrl}')`;
        }
    }

    // 3. Atmospheric Effects UI
    const currentEffect = appState.effectsSettings.atmosphericEffect || 'none';
    const effectRadio = document.querySelector(`input[name="atmospheric-effect"][value="${currentEffect}"]`);
    if (effectRadio) {
        effectRadio.checked = true;
    }
}

function renderSectionsChecklist() {
    const container = document.getElementById('sections-checklist');

    // Sort sections based on enabledSections order, then remaining
    const allSections = Object.values(SECTIONS);
    const sortedSections = [
        ...appState.enabledSections.map(id => SECTIONS[id]).filter(Boolean),
        ...allSections.filter(s => !appState.enabledSections.includes(s.id))
    ];

    container.innerHTML = sortedSections.map((section, index) => {
        const isEnabled = appState.enabledSections.includes(section.id);
        const enabledIndex = appState.enabledSections.indexOf(section.id);
        const canMoveUp = isEnabled && enabledIndex > 0;
        const canMoveDown = isEnabled && enabledIndex < appState.enabledSections.length - 1;
        const currentBg = appState.sectionBackgrounds[section.id] || section.defaultBackground || 'white';

        return `
        <div class="section-check ${isEnabled ? 'enabled' : ''}" data-section-id="${section.id}" draggable="${isEnabled}">
            <div class="section-drag-handle" title="Przeciągnij aby zmienić kolejność">
                <i class="fas fa-grip-vertical"></i>
            </div>
            <input type="checkbox" id="section-${section.id}" 
                   ${isEnabled ? 'checked' : ''}
                   ${section.required ? 'disabled' : ''}
                   onchange="toggleSection('${section.id}')">
            <label for="section-${section.id}">
                <i class="fas ${section.icon}"></i> ${section.name}
            </label>
            ${isEnabled ? `
            <div class="section-bg-controls">
                <select class="section-bg-select" onchange="changeSectionBackground('${section.id}', this.value)">
                    <option value="white" ${currentBg === 'white' ? 'selected' : ''}>⬜ Białe</option>
                    <option value="light" ${currentBg === 'light' ? 'selected' : ''}>◻️ Jasne</option>
                    <option value="gradient" ${currentBg === 'gradient' ? 'selected' : ''}>🌈 Gradient</option>
                    <option value="dark" ${currentBg === 'dark' ? 'selected' : ''}>⬛ Ciemne</option>
                    <option value="pattern" ${currentBg === 'pattern' ? 'selected' : ''}>🔲 Wzór</option>
                </select>
            </div>
            <div class="section-order-controls">
                <button class="order-btn edit-btn" onclick="editSectionContent('${section.id}')" title="Edytuj treść">
                    <i class="fas fa-pen"></i>
                </button>
                <button class="order-btn ${canMoveUp ? '' : 'disabled'}" onclick="moveSectionUp('${section.id}')" title="Przesuń w górę">
                    <i class="fas fa-chevron-up"></i>
                </button>
                <button class="order-btn ${canMoveDown ? '' : 'disabled'}" onclick="moveSectionDown('${section.id}')" title="Przesuń w dół">
                    <i class="fas fa-chevron-down"></i>
                </button>
            </div>
            ` : ''}
        </div>
    `}).join('');

    // Setup drag & drop
    setupSectionsDragDrop();
}

function setupSectionsDragDrop() {
    const container = document.getElementById('sections-checklist');
    const items = container.querySelectorAll('.section-check[draggable="true"]');

    items.forEach(item => {
        item.addEventListener('dragstart', handleSectionDragStart);
        item.addEventListener('dragend', handleSectionDragEnd);
        item.addEventListener('dragover', handleSectionDragOver);
        item.addEventListener('drop', handleSectionDrop);
    });
}

let draggedSection = null;

function handleSectionDragStart(e) {
    draggedSection = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleSectionDragEnd(e) {
    this.classList.remove('dragging');
    draggedSection = null;
}

function handleSectionDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleSectionDrop(e) {
    e.preventDefault();
    if (!draggedSection || draggedSection === this) return;

    const fromId = draggedSection.dataset.sectionId;
    const toId = this.dataset.sectionId;

    const fromIndex = appState.enabledSections.indexOf(fromId);
    const toIndex = appState.enabledSections.indexOf(toId);

    if (fromIndex > -1 && toIndex > -1) {
        // Swap positions
        appState.enabledSections.splice(fromIndex, 1);
        appState.enabledSections.splice(toIndex, 0, fromId);

        renderSectionsChecklist();
        Preview.debouncedRender();
        triggerAutoSave();
    }
}

function moveSectionUp(sectionId) {
    const index = appState.enabledSections.indexOf(sectionId);
    if (index > 0) {
        const temp = appState.enabledSections[index - 1];
        appState.enabledSections[index - 1] = appState.enabledSections[index];
        appState.enabledSections[index] = temp;
        renderSectionsChecklist();
        Preview.debouncedRender();
        triggerAutoSave();
    }
}

function moveSectionDown(sectionId) {
    const index = appState.enabledSections.indexOf(sectionId);
    if (index < appState.enabledSections.length - 1) {
        const temp = appState.enabledSections[index + 1];
        appState.enabledSections[index + 1] = appState.enabledSections[index];
        appState.enabledSections[index] = temp;
        renderSectionsChecklist();
        Preview.debouncedRender();
        triggerAutoSave();
    }
}

function toggleSection(sectionId) {
    const index = appState.enabledSections.indexOf(sectionId);
    if (index > -1) {
        appState.enabledSections.splice(index, 1);
    } else {
        appState.enabledSections.push(sectionId);
    }
    renderSectionsChecklist();
    Preview.debouncedRender();
    triggerAutoSave();
}

function changeSectionBackground(sectionId, backgroundType) {
    appState.sectionBackgrounds[sectionId] = backgroundType;
    Preview.debouncedRender();
    triggerAutoSave();
}


// ============================================
// SECTION CONTENT EDITOR
// ============================================
let currentEditingSection = null;

function editSectionContent(sectionId) {
    currentEditingSection = sectionId;
    const sectionData = SECTIONS[sectionId];
    const content = appState.sectionContent[sectionId] || {};

    const modal = document.getElementById('section-editor-modal');
    const titleEl = document.getElementById('section-editor-title');
    const formEl = document.getElementById('section-editor-form');

    titleEl.innerHTML = `<i class="fas ${sectionData.icon}"></i> Edytuj: ${sectionData.name}`;

    // Generate form based on section type
    formEl.innerHTML = renderSectionEditorForm(sectionId, content);

    modal.classList.remove('hidden');
}

function renderSectionEditorForm(sectionId, content) {
    let html = '';

    // Zawsze dodawaj pola tytuł i podtytuł dla sekcji
    const defaultContent = appState.sectionContent[sectionId] || {};
    const mergedContent = { ...defaultContent, ...content };


    // Wariant sekcji (tylko dla intro)
    if (sectionId === 'intro' && window.ABOUT_SECTION_VARIANTS) {
        const currentVariant = appState.aboutVariant || 'hotel-elegant';
        html += `
            <div class="form-group">
                <label>Wariant układu</label>
                <select id="intro-variant-select" class="form-control">
                    ${Object.values(window.ABOUT_SECTION_VARIANTS).map(v =>
            `<option value="${v.id}" ${v.id === currentVariant ? 'selected' : ''}>${v.name}</option>`
        ).join('')}
                </select>
            </div>
        `;
    }

    // Tytuł sekcji - zawsze pokazuj
    html += `
        <div class="form-group">
            <label>Tytuł sekcji</label>
            <input type="text" id="section-title" value="${mergedContent.title || ''}" placeholder="Wpisz tytuł sekcji...">
        </div>
    `;

    // Podtytuł - zawsze pokazuj (oprócz rooms)
    if (sectionId !== 'rooms') {
        html += `
            <div class="form-group">
                <label>Podtytuł</label>
                <input type="text" id="section-subtitle" value="${mergedContent.subtitle || ''}" placeholder="Wpisz podtytuł...">
            </div>
        `;
    }

    // Opis - dla sekcji które go mają
    if (['intro', 'spa'].includes(sectionId)) {
        html += `
            <div class="form-group">
                <label>Opis</label>
                <textarea id="section-description" rows="4" placeholder="Wpisz opis sekcji...">${mergedContent.description || ''}</textarea>
            </div>
        `;
    }

    // Section-specific fields - używamy mergedContent
    switch (sectionId) {
        case 'attractions':
            html += renderAttractionsEditor(mergedContent.items || []);
            break;
        case 'dining':
            html += renderDiningEditor(mergedContent.meals || []);
            break;
        case 'pricing':
            html += renderPricingEditor(mergedContent.packages || []);
            break;
        case 'spa':
            html += renderSpaEditor(mergedContent);
            break;
        case 'events':
            html += renderEventsEditor(mergedContent.types || []);
            break;
        case 'transport':
            html += renderTransportEditor(mergedContent.options || []);
            break;
        case 'rules':
            html += renderRulesEditor(mergedContent.items || []);
            break;
        case 'cta':
            html += renderCtaEditor(mergedContent.perks || []);
            break;
    }

    return html;
}

function renderAttractionsEditor(items) {
    return `
        <div class="editor-items-list">
            <label>Atrakcje (nazwa | opis | odległość)</label>
            ${items.map((item, i) => `
                <div class="editor-item-row">
                    <input type="text" data-field="attractions-name-${i}" value="${item.name || ''}" placeholder="Nazwa">
                    <input type="text" data-field="attractions-desc-${i}" value="${item.desc || ''}" placeholder="Opis">
                    <input type="text" data-field="attractions-distance-${i}" value="${item.distance || ''}" placeholder="Odległość">
                </div>
            `).join('')}
        </div>
    `;
}

function renderDiningEditor(meals) {
    return `
        <div class="editor-items-list">
            <label>Posiłki (nazwa | opis | cena)</label>
            ${meals.map((meal, i) => `
                <div class="editor-item-row">
                    <input type="text" data-field="dining-name-${i}" value="${meal.name || ''}" placeholder="Nazwa">
                    <input type="text" data-field="dining-desc-${i}" value="${meal.desc || ''}" placeholder="Opis">
                    <input type="text" data-field="dining-price-${i}" value="${meal.price || ''}" placeholder="Cena">
                </div>
            `).join('')}
        </div>
    `;
}

function renderPricingEditor(packages) {
    return `
        <div class="editor-items-list">
            <label>Pakiety (edytuj podstawowe pola)</label>
            ${packages.map((pkg, i) => `
                <div class="editor-item-row">
                    <input type="text" data-field="pricing-name-${i}" value="${pkg.name || ''}" placeholder="Nazwa pakietu">
                    <input type="text" data-field="pricing-price-${i}" value="${pkg.price || ''}" placeholder="Cena">
                </div>
            `).join('')}
        </div>
    `;
}

function renderSpaEditor(content) {
    return `
        <div class="form-group">
            <label>Udogodnienia SPA (oddzielone przecinkami)</label>
            <input type="text" id="spa-features" value="${(content.features || []).join(', ')}" placeholder="Jacuzzi, Sauna, Basen...">
        </div>
        <div class="editor-items-list">
            <label>Zabiegi (nazwa | cena)</label>
            ${(content.treatments || []).map((t, i) => `
                <div class="editor-item-row">
                    <input type="text" data-field="spa-treatment-name-${i}" value="${t.name || ''}" placeholder="Nazwa zabiegu">
                    <input type="text" data-field="spa-treatment-price-${i}" value="${t.price || ''}" placeholder="Cena">
                </div>
            `).join('')}
        </div>
    `;
}

function renderEventsEditor(types) {
    return `
        <div class="editor-items-list">
            <label>Typy wydarzeń (nazwa | opis)</label>
            ${types.map((type, i) => `
                <div class="editor-item-row">
                    <input type="text" data-field="events-name-${i}" value="${type.name || ''}" placeholder="Nazwa">
                    <input type="text" data-field="events-desc-${i}" value="${type.desc || ''}" placeholder="Opis">
                </div>
            `).join('')}
        </div>
    `;
}

function renderTransportEditor(options) {
    return `
        <div class="editor-items-list">
            <label>Opcje dojazdu (typ | opis)</label>
            ${options.map((opt, i) => `
                <div class="editor-item-row">
                    <input type="text" data-field="transport-type-${i}" value="${opt.type || ''}" placeholder="Typ">
                    <input type="text" data-field="transport-desc-${i}" value="${opt.desc || ''}" placeholder="Opis">
                </div>
            `).join('')}
        </div>
    `;
}

function renderRulesEditor(items) {
    return `
        <div class="editor-items-list">
            <label>Zasady (tytuł | opis)</label>
            ${items.map((item, i) => `
                <div class="editor-item-row">
                    <input type="text" data-field="rules-title-${i}" value="${item.title || ''}" placeholder="Tytuł">
                    <input type="text" data-field="rules-desc-${i}" value="${item.desc || ''}" placeholder="Opis">
                </div>
            `).join('')}
        </div>
    `;
}

function renderCtaEditor(perks) {
    return `
        <div class="form-group">
            <label>Korzyści (oddzielone przecinkami)</label>
            <input type="text" id="cta-perks" value="${perks.join(', ')}" placeholder="Najlepsza cena, Bezpłatna anulacja...">
        </div>
    `;
}


// ============================================
// CITY CONTENT LOADER
// ============================================
function applyCityContent(cityId) {
    if (!window.CITY_ATTRACTIONS) {
        console.error("City attractions data not loaded!");
        return;
    }

    const cityData = window.CITY_ATTRACTIONS[cityId];
    if (!cityData) {
        console.warn(`No data found for city: ${cityId}`);
        return;
    }

    // 1. Update Global Settings (Address)
    // Don't overwrite if user already typed something specific, unless it's default
    if (!appState.globalSettings.address || appState.globalSettings.address === 'Polska') {
        const zipMap = {
            'sopot': '81-700 Sopot',
            'zakopane': '34-500 Zakopane',
            'krakow': '30-001 Kraków',
            'warszawa': '00-001 Warszawa',
            'gdansk': '80-001 Gdańsk',
            'trojmiasto': '81-001 Trójmiasto',
            'wroclaw': '50-001 Wrocław',
            'poznan': '60-001 Poznań',
            'kolobrzeg': '78-100 Kołobrzeg',
            'karpacz': '58-540 Karpacz'
        };
        appState.globalSettings.address = `ul. Przykładowa 1, ${zipMap[cityId] || cityData.name}`;
    }

    // 2. Update Intro Content
    appState.sectionContent.intro.subtitle = cityData.tagline || appState.sectionContent.intro.subtitle;
    // Append city description to existing or replace if generic
    if (appState.sectionContent.intro.description.includes('Odkryj komfort')) {
        appState.sectionContent.intro.description = cityData.description;
    }

    // 3. Update Attractions Section
    if (cityData.landmarks) {
        appState.sectionContent.attractions = {
            title: `Atrakcje w ${cityData.name === 'Zakopane' || cityData.name === 'Karpacz' || cityData.name === 'Sopot' ? 'mieście' : 'mieście'} ${cityData.name}`,
            subtitle: 'Co warto zobaczyć w okolicy',
            items: cityData.landmarks.map(l => ({
                name: l.name,
                desc: l.description,
                distance: l.distance
            }))
        };
    }

    // 4. Update Dining (Optional - based on restaurants)
    if (cityData.restaurants) {
        // Just flavor text updates or keep generic
    }

    // 5. Update UI Inputs if in Builder Mode
    if (appState.mode === 'builder') {
        updateSidebarInputs();
    }

    console.log(`✅ Applied content for ${cityData.name}`);

    // Force re-render
    Preview.debouncedRender();
}

window.applyCityContent = applyCityContent;

function saveSectionContent() {
    if (!currentEditingSection) return;

    const sectionId = currentEditingSection;
    const content = appState.sectionContent[sectionId] || {};

    // Get common fields
    const titleEl = document.getElementById('section-title');
    const subtitleEl = document.getElementById('section-subtitle');
    const descEl = document.getElementById('section-description');

    if (titleEl) content.title = titleEl.value;
    if (subtitleEl) content.subtitle = subtitleEl.value;
    if (descEl) content.description = descEl.value;

    // Save Intro Variant
    if (sectionId === 'intro') {
        const variantSelect = document.getElementById('intro-variant-select');
        if (variantSelect) {
            appState.aboutVariant = variantSelect.value;
            console.log('Saved About Variant:', appState.aboutVariant);
        }
    }

    // Get section-specific fields
    switch (sectionId) {
        case 'attractions':
            content.items = getEditorItems(['name', 'desc', 'distance'], 'attractions');
            break;
        case 'dining':
            content.meals = getEditorItems(['name', 'desc', 'price'], 'dining');
            break;
        case 'pricing':
            content.packages = content.packages.map((pkg, i) => ({
                ...pkg,
                name: document.querySelector(`[data-field="pricing-name-${i}"]`)?.value || pkg.name,
                price: document.querySelector(`[data-field="pricing-price-${i}"]`)?.value || pkg.price
            }));
            break;
        case 'spa':
            const spaFeaturesEl = document.getElementById('spa-features');
            if (spaFeaturesEl) content.features = spaFeaturesEl.value.split(',').map(s => s.trim()).filter(Boolean);
            content.treatments = content.treatments.map((t, i) => ({
                name: document.querySelector(`[data-field="spa-treatment-name-${i}"]`)?.value || t.name,
                price: document.querySelector(`[data-field="spa-treatment-price-${i}"]`)?.value || t.price
            }));
            break;
        case 'events':
            content.types = getEditorItems(['name', 'desc'], 'events');
            break;
        case 'transport':
            content.options = getEditorItems(['type', 'desc'], 'transport');
            break;
        case 'rules':
            content.items = getEditorItems(['title', 'desc'], 'rules');
            break;
        case 'cta':
            const perksEl = document.getElementById('cta-perks');
            if (perksEl) content.perks = perksEl.value.split(',').map(s => s.trim()).filter(Boolean);
            break;
    }

    appState.sectionContent[sectionId] = content;
    closeSectionEditor();
    Preview.debouncedRender();
}

function getEditorItems(fields, prefix) {
    const items = [];
    let i = 0;
    while (document.querySelector(`[data-field="${prefix}-${fields[0]}-${i}"]`)) {
        const item = {};
        fields.forEach(field => {
            const el = document.querySelector(`[data-field="${prefix}-${field}-${i}"]`);
            if (el) item[field] = el.value;
        });
        items.push(item);
        i++;
    }
    return items;
}

function closeSectionEditor() {
    document.getElementById('section-editor-modal')?.classList.add('hidden');
    currentEditingSection = null;
}

// Helper to update inputs in Sidebar from AppState
function updateSidebarInputs() {
    // Hero
    safeSetVal('hero-title', appState.sectionContent?.intro?.title);
    safeSetVal('hero-subtitle', appState.sectionContent?.intro?.subtitle);
    safeSetVal('property-desc', appState.sectionContent?.intro?.description);
    safeSetVal('hero-image', appState.globalSettings?.mainImage);

    // Address
    safeSetVal('property-name', appState.globalSettings?.propertyName);
    safeSetVal('location-address', appState.globalSettings?.address);

    // Colors
    safeSetVal('color-primary', appState.globalSettings?.colors?.primary);
    safeSetVal('color-secondary', appState.globalSettings?.colors?.secondary);
    safeSetVal('color-accent', appState.globalSettings?.colors?.accent);
}

function safeSetVal(id, val) {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.value = val;
}
window.updateSidebarInputs = updateSidebarInputs;

// OBJECTS MANAGEMENT
// ============================================
function addDefaultObjects() {
    // Get property type from wizard data
    let wizardType = 'hotel-3';
    if (appState.wizardData) {
        if (appState.wizardData.answers && appState.wizardData.answers['property-type']) {
            wizardType = appState.wizardData.answers['property-type'];
        } else if (appState.wizardData['property-type']) {
            wizardType = appState.wizardData['property-type'];
        }
    }

    console.log('Generating objects for type:', wizardType);

    // Use functionality from data/room-presets.js if available
    let presets = [];
    if (window.getRoomPresets) {
        presets = window.getRoomPresets(wizardType);
    }

    // Fallback if no presets or script not loaded
    if (!presets || presets.length === 0) {
        console.warn('No presets found, using default hotel rooms');
        presets = [
            { name: 'Pokój Standard', type: 'room', price: 250, personCount: 2, image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Komfortowy pokój z łóżkiem typu King-size.' },
            { name: 'Pokój Deluxe', type: 'room', price: 350, personCount: 2, image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Większy metraż i widok na ogród.' },
            { name: 'Apartament', type: 'suite', price: 500, personCount: 4, image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Przestronny apartament z aneksem kuchennym.' }
        ];
    }

    // Convert presets to objects
    appState.objects = presets.map((p, index) => {
        let roomImage = p.image;
        if (!roomImage && window.getRandomImage) {
            roomImage = window.getRandomImage('rooms');
        }

        return {
            id: index + 1,
            name: p.name,
            type: p.type,
            price: p.price,
            persons: p.personCount,
            image: roomImage,
            images: [roomImage],
            description: p.description
        };
    });

    appState.nextObjectId = appState.objects.length + 1;
    renderObjectsGrid();
}

function addNewObject() {
    const newObject = {
        id: appState.nextObjectId++,
        name: 'Nowy pokój',
        description: '',
        price: '',
        images: [],
        amenities: [],
        badge: ''
    };

    appState.objects.push(newObject);
    renderObjectsGrid();
    editObject(newObject.id);
}

function editObject(objectId) {
    const obj = appState.objects.find(o => o.id === objectId);
    if (!obj) return;

    const modal = document.getElementById('object-modal');
    const body = document.getElementById('object-modal-body');

    body.innerHTML = `
        <form id="object-form" onsubmit="saveObject(${objectId}); return false;">
            <div class="form-group">
                <label>Nazwa pokoju</label>
                <input type="text" id="obj-name" value="${obj.name || ''}" required>
            </div>
            <div class="form-group">
                <label>Opis</label>
                <textarea id="obj-description" rows="3">${obj.description || ''}</textarea>
            </div>
            <div class="form-group">
                <label>Cena</label>
                <input type="text" id="obj-price" value="${obj.price || ''}" placeholder="np. 299 zł">
            </div>
            <div class="form-group">
                <label>URL zdjęcia</label>
                <input type="text" id="obj-image" value="${obj.images?.[0] || obj.image || ''}" placeholder="https://...">
            </div>
            <div class="form-group">
                <label>Badge (opcjonalnie)</label>
                <input type="text" id="obj-badge" value="${obj.badge || ''}" placeholder="np. Bestseller">
            </div>
            <div class="form-group">
                <label>Udogodnienia</label>
                <div class="amenities-selector" id="amenities-selector">
                    ${renderAmenitiesSelector(obj.amenities || [])}
                </div>
            </div>
            <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                <button type="submit" class="btn btn-primary" style="flex:1">
                    <i class="fas fa-save"></i> Zapisz
                </button>
                <button type="button" class="btn btn-secondary" onclick="closeObjectModal()">
                    Anuluj
                </button>
            </div>
        </form>
    `;

    modal.classList.remove('hidden');
}

function renderAmenitiesSelector(selectedAmenities) {
    let html = '';

    Object.entries(AMENITIES).forEach(([categoryId, category]) => {
        if (!category.items) return;

        html += `<div style="margin-bottom: 1rem;">
            <strong style="color: var(--text-secondary); font-size: 0.8rem; text-transform: uppercase;">${category.name}</strong>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">`;

        category.items.forEach(item => {
            const isSelected = selectedAmenities.includes(item.id);
            html += `<label class="amenity-label ${isSelected ? 'selected' : ''}"
                            data-id="${item.id}"
                            onclick="toggleAmenity(this, '${item.id}')">
                <input type="checkbox" value="${item.id}" ${isSelected ? 'checked' : ''}
                       style="display: none;" class="amenity-checkbox">
                <i class="fas ${item.icon}"></i>
                <span>${item.name}</span>
            </label>`;
        });

        html += `</div></div>`;
    });

    return html;
}

function toggleAmenity(label, amenityId) {
    const checkbox = label.querySelector('input');
    checkbox.checked = !checkbox.checked;
    label.classList.toggle('selected', checkbox.checked);
}

function saveObject(objectId) {
    const obj = appState.objects.find(o => o.id === objectId);
    if (!obj) return;

    obj.name = document.getElementById('obj-name').value;
    obj.description = document.getElementById('obj-description').value;
    obj.price = document.getElementById('obj-price').value;
    obj.badge = document.getElementById('obj-badge').value;

    const imageUrl = document.getElementById('obj-image').value;
    obj.images = imageUrl ? [imageUrl] : [];

    // Collect selected amenities
    obj.amenities = [];
    document.querySelectorAll('.amenity-checkbox:checked').forEach(cb => {
        obj.amenities.push(cb.value);
    });

    closeObjectModal();
    renderObjectsGrid();
    Preview.debouncedRender();
}

function deleteObject(objectId) {
    if (!confirm('Czy na pewno usunąć ten pokój?')) return;

    appState.objects = appState.objects.filter(o => o.id !== objectId);
    renderObjectsGrid();
    Preview.debouncedRender();
}

function duplicateObject(objectId) {
    const obj = appState.objects.find(o => o.id === objectId);
    if (!obj) return;

    const newObj = {
        ...obj,
        id: appState.nextObjectId++,
        name: obj.name + ' (kopia)'
    };

    appState.objects.push(newObj);
    renderObjectsGrid();
    Preview.debouncedRender();
}

function renderObjectsGrid() {
    const container = document.getElementById('objects-grid');
    if (!container) return;

    if (appState.objects.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <i class="fas fa-bed" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>Dodaj pierwszy pokój klikając przycisk powyżej</p>
            </div>
        `;
        return;
    }

    container.innerHTML = appState.objects.map(obj => `
        <div class="object-card">
            <div class="object-image">
                ${(obj.images?.[0] || obj.image)
            ? `<img src="${obj.images?.[0] || obj.image}" alt="${obj.name}">`
            : '<i class="fas fa-image"></i>'
        }
            </div>
            <div class="object-content">
                <h4>${obj.name}</h4>
                <p>${obj.description || 'Brak opisu'}</p>
                <div class="object-price">${obj.price || 'Cena do ustalenia'}</div>
                <div class="object-actions">
                    <button class="btn btn-secondary btn-sm" onclick="editObject(${obj.id})">
                        <i class="fas fa-edit"></i> Edytuj
                    </button>
                    <button class="btn btn-secondary btn-sm" onclick="duplicateObject(${obj.id})">
                        <i class="fas fa-copy"></i>
                    </button>
                    <button class="btn btn-secondary btn-sm" onclick="deleteObject(${obj.id})" style="color: var(--accent-danger)">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// COLOR & FONT UPDATES
// ============================================
function updateColor(type, value) {
    appState.globalSettings.colors[type] = value;
    Preview.debouncedRender();
}

function updateFont(type, value) {
    appState.globalSettings.fonts[type] = value;
    Preview.debouncedRender();
}

// ============================================
// ADDRESS & PROPERTY NAME UPDATES
// ============================================
function updateAddress(value) {
    appState.globalSettings.address = value;
    Preview.debouncedRender();
}

function updatePropertyName(value) {
    appState.globalSettings.propertyName = value;
    Preview.debouncedRender();
}

// ============================================
// SYNC UI WITH STATE
// ============================================
function updateSidebarInputs() {
    console.log('Syncing sidebar inputs with appState...');

    // Property Name & Address
    if (document.getElementById('property-name')) {
        document.getElementById('property-name').value = appState.globalSettings.propertyName || '';
    }
    if (document.getElementById('location-address')) {
        document.getElementById('location-address').value = appState.globalSettings.address || '';
    }

    // Intro Content
    const intro = appState.sectionContent.intro;
    if (document.getElementById('hero-title')) document.getElementById('hero-title').value = intro.title || '';
    if (document.getElementById('hero-subtitle')) document.getElementById('hero-subtitle').value = intro.subtitle || '';
    if (document.getElementById('property-desc')) document.getElementById('property-desc').value = intro.description || '';
    if (document.getElementById('hero-image')) {
        document.getElementById('hero-image').value = intro.mainImage || '';
        const preview = document.getElementById('hero-image-preview');
        if (preview && intro.mainImage) {
            preview.style.backgroundImage = `url(${intro.mainImage})`;
        }
    }

    // Colors
    Object.keys(appState.globalSettings.colors).forEach(type => {
        const input = document.querySelector(`input[type="color"][onchange*="updateColor('${type}'"]`);
        if (input) input.value = appState.globalSettings.colors[type];
    });

    // Checkboxes (Sections)
    const checklist = document.getElementById('sections-checklist');
    if (checklist) {
        const checkboxes = checklist.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => {
            cb.checked = appState.enabledSections.includes(cb.value);
        });
    }

    // Gradient presets
    if (appState.effectsSettings && appState.effectsSettings.gradientPreset) {
        document.querySelectorAll('.gradient-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-gradient') === appState.effectsSettings.gradientPreset);
        });
    }
}

// ============================================
// FULLSCREEN PREVIEW
// ============================================
function toggleFullscreen() {
    const previewPanel = document.getElementById('builder-preview');
    const btn = document.getElementById('btn-fullscreen');

    previewPanel.classList.toggle('fullscreen');

    if (previewPanel.classList.contains('fullscreen')) {
        btn.innerHTML = '<i class="fas fa-compress"></i>';
        document.body.style.overflow = 'hidden';
    } else {
        btn.innerHTML = '<i class="fas fa-expand"></i>';
        document.body.style.overflow = '';
    }
}

// ============================================
// CODE GENERATION
// ============================================
async function generateCode() {
    // Collect data
    const objects = appState.objects;
    const enabledSections = appState.enabledSections;

    // Fetch Visual Effects Script for Inlining
    let effectsLib = '';
    try {
        const res = await fetch('js/visual-effects.js');
        if (res.ok) {
            let text = await res.text();
            // Minify: Remove comments and trim whitespace to save space in CMS
            effectsLib = text
                .replace(/\/\*[\s\S]*?\*\//g, '')     // Remove block comments
                .replace(/\/\/.*$/gm, '')            // Remove line comments
                .replace(/^\s*[\r\n]/gm, '')         // Remove empty lines
                .replace(/\s+/g, ' ')                // Collapse whitespace
                .trim();
        } else {
            console.warn('Failed to load visual-effects.js');
        }
    } catch (e) {
        console.error('Error loading visual-effects.js for inline:', e);
    }

    // Generate all parts
    const settings = {
        ...appState.globalSettings,
        propertyName: appState.globalSettings.propertyName || 'Nazwa Obiektu'
    };
    const head = TemplateEngine.generateHead(settings);
    const sections = TemplateEngine.generateSections(settings, objects, enabledSections);

    // Generate main CSS
    let styles = '';
    try {
        styles = CSSEngine.generate(settings, appState.effectsSettings, appState.sectionBackgrounds);
    } catch (e) {
        console.error('Error generating main CSS:', e);
        styles = '/* CSS generation error: ' + e.message + ' */';
    }

    // Generate /offers page CSS if enabled
    let offersCSS = '';
    try {
        offersCSS = CSSEngine.generateOffersPageCSS(settings, appState.effectsSettings, appState.offersSettings);
        if (offersCSS) {
            styles += `

${offersCSS}`;
        }
    } catch (e) {
        console.error('Error generating /offers CSS:', e);
    }

    const scripts = generateScriptsFile(effectsLib);

    // Generate subpage (body-only content)
    const subpage = generateSubpageCode(settings, objects, enabledSections, styles, scripts);

    // Display in modal
    document.getElementById('code-head').textContent = head;
    document.getElementById('code-sections').textContent = sections;
    document.getElementById('code-styles').textContent = styles;
    document.getElementById('code-scripts').textContent = scripts;
    document.getElementById('code-subpage').textContent = subpage;

    // Show modal
    document.getElementById('export-modal').classList.remove('hidden');
}

// Generate subpage code (body-only content for CMS subpages)
function generateSubpageCode(settings, objects, enabledSections, styles, scripts) {
    // Generate only body sections without header/footer
    const sectionsHTML = TemplateEngine.generateSections(settings, objects, enabledSections);

    return `<!-- ============================================
     ${settings.propertyName || 'Nazwa Obiektu'} - KOD PODSTRONY
     
     Wklej jako nową podstronę w CMS (tylko zawartość BODY)
     ============================================ -->

${sectionsHTML}

<!-- Inline styles for subpage -->
<style>
${styles}
</style>

${scripts}`;
}

function generateScriptsFile(effectsLib) {
    const effect = appState.effectsSettings.atmosphericEffect || 'none';

    // Decide whether to inline or link
    let effectsScriptTag = '';
    if (effectsLib) {
        effectsScriptTag = `<!-- Inlined Visual Effects -->
<script>
${effectsLib}
</script>`;
    } else {
        effectsScriptTag = `<!-- External Effects Script (Fallback) -->
<script src="https://cisek25.github.io/IdoBooking/js/visual-effects.js"></script>`;
    }

    return `<!-- ============================================
     ${appState.globalSettings.propertyName || 'Nazwa Obiektu'} - SCRIPTS
     
     Wklej w panelu CMS → Koniec sekcji body
     ============================================ -->

${effectsScriptTag}

<script>
(function() {
    function initEffects() {
        if (window.VisualEffects && '${effect}' !== 'none') {
            VisualEffects.setIntensity(${appState.effectsSettings.intensity || 1.0});
            VisualEffects.start('${effect}', document.body);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initEffects);
    } else {
        initEffects();
    }

    // 2. Gallery Lightbox
    window.openLightbox = function(element) {
        var img = element.querySelector('img');
        var lightbox = document.getElementById('lightbox');
        var lightboxImg = document.getElementById('lightbox-img');
        if(lightbox && lightboxImg) {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };
    
    window.closeLightbox = function() {
        var lightbox = document.getElementById('lightbox');
        if(lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
})();
</script>`;
}


// ============================================
// EXPORT FUNCTIONS
// ============================================
function switchExportTab(tabId) {
    document.querySelectorAll('.export-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.export-pane').forEach(p => p.classList.remove('active'));

    document.querySelector(`.export-tab[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(`pane-${tabId}`).classList.add('active');
}

function copyCode(type) {
    const codeElement = document.getElementById(`code-${type}`);
    navigator.clipboard.writeText(codeElement.textContent).then(() => {
        alert('Skopiowano do schowka!');
    });
}

function downloadCode(filename, type) {
    const codeElement = document.getElementById(`code-${type}`);
    const blob = new Blob([codeElement.textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ============================================
// MODAL CONTROLS
// ============================================
function closeExportModal() {
    document.getElementById('export-modal').classList.add('hidden');
}

function closeObjectModal() {
    document.getElementById('object-modal').classList.add('hidden');
}

// ============================================
// SUBPAGE CREATOR
// ============================================
function openSubpageModal() {
    document.getElementById('subpage-modal').classList.remove('hidden');
}

function closeSubpageModal() {
    document.getElementById('subpage-modal').classList.add('hidden');
}

function generateSubpage() {
    // Get selected sections
    const checkboxes = document.querySelectorAll('.subpage-section-checkbox:checked');
    const selectedSections = Array.from(checkboxes).map(cb => cb.value);

    if (selectedSections.length === 0) {
        alert('Wybierz przynajmniej jedną sekcję!');
        return;
    }

    console.log('Generating subpage for sections:', selectedSections);

    // Get settings and objects
    const settings = {
        ...appState.globalSettings,
        propertyName: appState.globalSettings.propertyName || 'Nazwa Obiektu'
    };
    const objects = appState.objects;

    // Generate HTML for selected sections
    const bodyHTML = TemplateEngine.generateSections(settings, objects, selectedSections);

    // Generate CSS
    const css = CSSEngine.generate(appState.globalSettings, appState.effectsSettings, appState.sectionBackgrounds);

    // Create head styles (inline)
    const headStyles = `<style>\n${css}\n</style>`;

    // Update code blocks
    document.getElementById('subpage-body-html').textContent = bodyHTML;
    document.getElementById('subpage-head-styles').textContent = headStyles;
    document.getElementById('subpage-css-styles').textContent = css;

    console.log('✅ Subpage code generated');
}

function copySubpageCode(type) {
    const elementId = `subpage-${type}`;
    const codeElement = document.getElementById(elementId);

    if (!codeElement || !codeElement.textContent) {
        alert('Najpierw wygeneruj kod podstrony!');
        return;
    }

    navigator.clipboard.writeText(codeElement.textContent).then(() => {
        alert('Kod skopiowany!');
    }).catch(err => {
        console.error('Copy failed:', err);
        alert('Błąd podczas kopiowania');
    });
}


// ============================================
// RESET
// ============================================
function resetApp() {
    if (!confirm('Czy na pewno chcesz zacząć od nowa? Wszystkie dane zostaną utracone.')) return;

    // Reset state
    appState.mode = 'wizard';
    appState.wizardData = null;
    appState.objects = [];
    appState.nextObjectId = 1;
    appState.globalSettings = {
        propertyName: '',
        address: '',
        colors: { primary: '#1A365D', secondary: '#C9A227', accent: '#00B894' },
        fonts: { heading: 'Playfair Display', body: 'Inter' },
        bookingUrl: 'https://engine55007.idobooking.com/i',
        phone: '+48 123 456 789'
    };
    appState.enabledSections = ['intro', 'rooms', 'amenities', 'gallery', 'testimonials', 'cta'];

    // Reset wizard
    window.wizardState = {
        currentStep: 0,
        answers: {},
        scores: { luxury: 0, family: 0, budget: 0, business: 0, romantic: 0, eco: 0, apartments: 0, historic: 0 }
    };

    // Show wizard, hide builder
    document.getElementById('wizard-panel').classList.remove('hidden');
    document.getElementById('builder-panel').classList.add('hidden');

    initWizard();
}

// ============================================
// TOOLTIP HANDLER (Fixes clipping issues)
// ============================================
function initTooltips() {
    const tooltip = document.createElement('div');
    tooltip.className = 'app-tooltip-popup';
    tooltip.style.cssText = `
        position: fixed;
        background: #1e1e24; /* Dark for contrast against light theme */
        color: #fff;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 12px;
        z-index: 10000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s;
        max-width: 250px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        line-height: 1.4;
    `;
    document.body.appendChild(tooltip);

    let activeElement = null;

    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('.help-tooltip');
        if (!target) return;

        const title = target.getAttribute('title') || target.getAttribute('data-title');
        if (!title) return;

        // Move title to data-title to prevent native tooltip
        if (target.getAttribute('title')) {
            target.setAttribute('data-title', title);
            target.removeAttribute('title');
        }

        activeElement = target;
        tooltip.textContent = title;
        tooltip.style.opacity = '1';

        // Position
        const rect = target.getBoundingClientRect();

        // Default: Top Center
        let top = rect.top - tooltip.offsetHeight - 8;
        let left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2);

        // Check overflow top
        if (top < 10) {
            top = rect.bottom + 8; // Move to bottom
        }

        // Check overflow right
        if (left + tooltip.offsetWidth > window.innerWidth - 10) {
            left = window.innerWidth - tooltip.offsetWidth - 10;
        }

        // Check overflow left
        if (left < 10) {
            left = 10;
        }

        tooltip.style.top = top + 'px';
        tooltip.style.left = left + 'px';
    });

    document.addEventListener('mouseout', (e) => {
        const target = e.target.closest('.help-tooltip');
        if (target && target === activeElement) {
            tooltip.style.opacity = '0';
            activeElement = null;
        }
    });
}

// ============================================
// AUTO RECOVERY SYSTEM
// ============================================
const AUTOSAVE_KEY = 'idobooking_generator_autosave';

function saveProject() {
    const projectData = {
        version: '4.0',
        savedAt: new Date().toISOString(),
        appState: {
            mode: appState.mode,
            wizardData: appState.wizardData,
            globalSettings: appState.globalSettings,
            effectsSettings: appState.effectsSettings,
            roomsSettings: appState.roomsSettings,
            sectionContent: appState.sectionContent,
            objects: appState.objects,
            enabledSections: appState.enabledSections,
            nextObjectId: appState.nextObjectId,
            sectionBackgrounds: appState.sectionBackgrounds
        }
    };

    const json = JSON.stringify(projectData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `idobooking-project-${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    console.log('✅ Project saved');
}

function loadProject() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';

    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const projectData = JSON.parse(event.target.result);

                if (!projectData.appState) {
                    alert('Nieprawidłowy format pliku projektu!');
                    return;
                }

                // Restore state
                Object.assign(appState, projectData.appState);

                // Switch to builder mode
                document.getElementById('wizard-panel').classList.add('hidden');
                document.getElementById('builder-panel').classList.remove('hidden');

                // Refresh UI
                renderSectionsChecklist();
                renderObjectsGrid();
                renderFaqList();
                Preview.render();

                console.log('✅ Project loaded from:', projectData.savedAt);
                alert('Projekt wczytany pomyślnie!');
            } catch (err) {
                console.error('Error loading project:', err);
                alert('Błąd podczas wczytywania projektu!');
            }
        };
        reader.readAsText(file);
    };

    input.click();
}

function autoSave() {
    if (appState.mode !== 'builder') return;

    const projectData = {
        version: '4.0',
        savedAt: new Date().toISOString(),
        appState: {
            mode: appState.mode,
            wizardData: appState.wizardData,
            globalSettings: appState.globalSettings,
            effectsSettings: appState.effectsSettings,
            roomsSettings: appState.roomsSettings,
            sectionContent: appState.sectionContent,
            objects: appState.objects,
            enabledSections: appState.enabledSections,
            nextObjectId: appState.nextObjectId,
            sectionBackgrounds: appState.sectionBackgrounds
        }
    };

    try {
        localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(projectData));
        console.log('💾 Auto-saved project');
    } catch (err) {
        console.error('Auto-save failed:', err);
    }
}

function checkAutoSave() {
    try {
        const saved = localStorage.getItem(AUTOSAVE_KEY);
        if (!saved) return;

        const projectData = JSON.parse(saved);
        const savedDate = new Date(projectData.savedAt);
        const now = new Date();
        const hoursSince = (now - savedDate) / (1000 * 60 * 60);

        // Only offer to restore if saved less than 24 hours ago
        if (hoursSince < 24) {
            const restore = confirm(`Znaleziono zapisany projekt z ${savedDate.toLocaleString()}.\n\nCzy chcesz go przywrócić?`);

            if (restore) {
                Object.assign(appState, projectData.appState);

                // Switch to builder mode
                document.getElementById('wizard-panel').classList.add('hidden');
                document.getElementById('builder-panel').classList.remove('hidden');

                renderSectionsChecklist();
                renderObjectsGrid();
                renderFaqList();
                Preview.render();

                console.log('✅ Restored from auto-save');
            }
        }
    } catch (err) {
        console.error('Error checking auto-save:', err);
    }
}

function clearAutoSave() {
    localStorage.removeItem(AUTOSAVE_KEY);
    console.log('🗑️ Auto-save cleared');
}

// Auto-save every 30 seconds when in builder mode
setInterval(autoSave, 30000);

// Expose save/load functions
window.saveProject = saveProject;
window.loadProject = loadProject;
window.checkAutoSave = checkAutoSave;
window.clearAutoSave = clearAutoSave;

// ============================================
// EXPOSE TO WINDOW
// ============================================
window.appState = appState;
window.initBuilder = initBuilder;
window.toggleSection = toggleSection;
window.moveSectionUp = moveSectionUp;
window.moveSectionDown = moveSectionDown;
window.editSectionContent = editSectionContent;
window.saveSectionContent = saveSectionContent;
window.closeSectionEditor = closeSectionEditor;
window.addNewObject = addNewObject;
window.editObject = editObject;
window.saveObject = saveObject;
window.deleteObject = deleteObject;
window.duplicateObject = duplicateObject;
window.generateCode = generateCode;
window.copyCode = copyCode;
window.downloadCode = downloadCode;
window.closeExportModal = closeExportModal;
window.closeObjectModal = closeObjectModal;
window.updateAddress = updateAddress;
window.updatePropertyName = updatePropertyName;
window.toggleFullscreen = toggleFullscreen;
window.toggleAmenity = toggleAmenity;

// ============================================
// TEMPLATE GALLERY FUNCTIONS
// ============================================
let currentTemplateCategory = 'all';

function renderTemplateGallery(category = currentTemplateCategory) {
    const container = document.getElementById('templates-gallery');
    const cityContainer = document.getElementById('city-templates-grid');
    if (!container) return;

    // Get templates based on category
    let templates = Object.values(TEMPLATES);

    if (category === 'city') {
        templates = templates.filter(t => t.category === 'apartments-city');
    } else if (category !== 'all') {
        templates = templates.filter(t => t.category === category);
    }

    // Render main gallery
    container.innerHTML = templates.slice(0, 24).map(template => `
        <div class="template-card ${appState.selectedTemplate?.id === template.id ? 'selected' : ''}" 
             onclick="selectTemplate('${template.id}')"
             title="${template.description}"
             style="--tpl-primary: ${template.colors.primary}; --tpl-secondary: ${template.colors.secondary}">
            <div class="template-colors">
                <span style="background: ${template.colors.primary}"></span>
                <span style="background: ${template.colors.secondary}"></span>
                <span style="background: ${template.colors.accent}"></span>
            </div>
            <div class="template-name">${template.name}</div>
            ${template.city ? `<div class="template-city-badge"><i class="fas fa-map-marker-alt"></i> ${template.city}</div>` : ''}
        </div>
    `).join('');

    // Render city templates grid (if visible)
    if (cityContainer && category === 'city') {
        const cityTemplates = Object.values(TEMPLATES).filter(t => t.category === 'apartments-city');
        cityContainer.style.display = 'block';
        cityContainer.innerHTML = `
            <div style="font-size: 11px; color: var(--text-muted); margin-bottom: 8px;">
                <i class="fas fa-map-marker-alt"></i> Szablony dla polskich miast:
            </div>
            <div class="city-templates-list" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;">
                ${cityTemplates.map(t => `
                    <button class="city-template-btn ${appState.selectedTemplate?.id === t.id ? 'active' : ''}"
                            onclick="selectTemplate('${t.id}')"
                            style="padding: 8px 10px; font-size: 11px; border: 1px solid var(--border); border-radius: 6px; 
                                   background: linear-gradient(135deg, ${t.colors.primary}22, ${t.colors.secondary}22);
                                   cursor: pointer; text-align: left; transition: all 0.2s;">
                        <i class="fas ${t.icon}" style="color: ${t.colors.primary}; margin-right: 4px;"></i>
                        ${t.city ? t.city.charAt(0).toUpperCase() + t.city.slice(1) : t.name}
                    </button>
                `).join('')}
            </div>
        `;
    } else if (cityContainer) {
        cityContainer.style.display = 'none';
    }
}

function filterTemplates(category) {
    currentTemplateCategory = category;

    // Update active tab
    document.querySelectorAll('.template-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.category === category) {
            tab.classList.add('active');
        }
    });

    renderTemplateGallery(category);
}

window.filterTemplates = filterTemplates;

function selectTemplate(templateId) {
    const template = TEMPLATES[templateId];
    if (!template) return;

    appState.selectedTemplate = template;
    appState.globalSettings.colors = { ...template.colors };
    appState.globalSettings.fonts = { ...template.fonts };

    // Update color pickers
    document.getElementById('color-primary').value = template.colors.primary;
    document.getElementById('color-secondary').value = template.colors.secondary;
    document.getElementById('color-accent').value = template.colors.accent;

    // Update font selects
    document.getElementById('font-heading').value = template.fonts.heading;
    document.getElementById('font-body').value = template.fonts.body;

    renderTemplateGallery();
    Preview.debouncedRender();
}
window.selectTemplate = selectTemplate;

function updateTextContrast(value) {
    if (!appState.effectsSettings) appState.effectsSettings = {};
    appState.effectsSettings.textContrast = value;
    Preview.debouncedRender();
}
window.updateTextContrast = updateTextContrast;

// ============================================
// APPLY AI SUGGESTION WITH FEEDBACK
// ============================================
function applyAISuggestion() {
    if (!appState.aiRecommendation?.template) return;

    const template = appState.aiRecommendation.template;
    selectTemplate(template.id);

    // Show feedback message
    const msg = document.getElementById('ai-applied-msg');
    if (msg) {
        msg.classList.remove('hidden');
        setTimeout(() => msg.classList.add('hidden'), 2000);
    }
}
window.applyAISuggestion = applyAISuggestion;

// ============================================
// FAQ EDITOR FUNCTIONS
// ============================================
function renderFaqList() {
    const container = document.getElementById('faq-items-list');
    if (!container) return;

    const faqItems = appState.globalSettings.faqItems || [];

    if (faqItems.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="text-align: center; padding: 2rem; color: var(--text-muted);">
                <i class="fas fa-question-circle" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                <p>Brak pytań FAQ. Kliknij "Dodaj pytanie" aby rozpocząć.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = faqItems.map((item, index) => `
        <div class="faq-editor-item">
            <div class="faq-item-header">
                <input type="text" class="faq-question-input" value="${item.question}" 
                       onchange="updateFaqItem(${index}, 'question', this.value)" placeholder="Pytanie...">
                <button class="btn btn-icon btn-danger" onclick="deleteFaqItem(${index})" title="Usuń">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <textarea class="faq-answer-input" onchange="updateFaqItem(${index}, 'answer', this.value)" 
                      placeholder="Odpowiedź..." rows="2">${item.answer}</textarea>
        </div>
    `).join('');
}

function addFaqItem() {
    appState.globalSettings.faqItems = appState.globalSettings.faqItems || [];
    appState.globalSettings.faqItems.push({
        question: 'Nowe pytanie?',
        answer: 'Wprowadź odpowiedź...'
    });
    renderFaqList();
    Preview.debouncedRender();
}

function updateFaqItem(index, field, value) {
    if (appState.globalSettings.faqItems && appState.globalSettings.faqItems[index]) {
        appState.globalSettings.faqItems[index][field] = value;
        Preview.debouncedRender();
    }
}

function deleteFaqItem(index) {
    if (!confirm('Czy usunąć to pytanie?')) return;
    appState.globalSettings.faqItems.splice(index, 1);
    renderFaqList();
    Preview.debouncedRender();
}

window.addFaqItem = addFaqItem;
window.updateFaqItem = updateFaqItem;
window.deleteFaqItem = deleteFaqItem;
window.renderFaqList = renderFaqList;
window.renderTemplateGallery = renderTemplateGallery;

// ============================================
// EFFECTS FUNCTIONS - Mega opcje efektów
// ============================================

function updateFontScale(type, value) {
    if (!appState.effectsSettings) return;
    appState.effectsSettings.fontScale[type] = parseInt(value);
    document.getElementById(`${type === 'headings' ? 'heading' : 'body'}-scale-value`).textContent = value + '%';
    Preview.debouncedRender();
}

// ============================================
// GRADIENT CATEGORY SWITCHING
// ============================================
function switchGradientCategory(category) {
    // Update active tab
    document.querySelectorAll('.gradient-category-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.category === category) {
            tab.classList.add('active');
        }
    });

    // Show/hide gradient grids
    document.querySelectorAll('.gradients-grid').forEach(grid => {
        if (grid.dataset.category === category) {
            grid.classList.remove('hidden');
        } else {
            grid.classList.add('hidden');
        }
    });
}

// ============================================
// GRADIENT CONTROLS
// ============================================
function setGradient(preset) {
    appState.effectsSettings.gradientPreset = preset;
    appState.effectsSettings.useGradients = (preset !== 'none');

    console.log('✅ Gradient preset set:', preset);
    console.log('Current effectsSettings:', appState.effectsSettings);

    // Update active button
    document.querySelectorAll('.gradient-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.gradient === preset) {
            btn.classList.add('active');
        }
    });

    // Regenerate CSS and preview IMMEDIATELY
    const css = CSSEngine.generate(appState.globalSettings, appState.effectsSettings, appState.sectionBackgrounds);
    console.log('Generated CSS length:', css.length);

    // Force immediate preview render
    if (window.Preview) {
        console.log('Calling Preview.render()...');
        Preview.render();
    } else {
        console.error('Preview object not found!');
    }
}
function toggleEffect(path, value) {
    if (!appState.effectsSettings) return;
    const parts = path.split('.');
    let obj = appState.effectsSettings;
    for (let i = 0; i < parts.length - 1; i++) {
        obj = obj[parts[i]];
    }
    obj[parts[parts.length - 1]] = value;
    Preview.debouncedRender();
}

function setRoomsDisplayMode(mode) {
    if (!appState.roomsSettings) return;
    appState.roomsSettings.displayMode = mode;

    // Update UI
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
    });
    Preview.debouncedRender();
}

function toggleRoomCategories(show) {
    if (!appState.roomsSettings) return;
    appState.roomsSettings.showCategories = show;
    Preview.debouncedRender();
}

// ============================================
// SLIDER FUNCTIONS - Nawigacja sliderem pokoi
// ============================================
let currentSlide = 0;

function slideRooms(direction) {
    const preview = document.getElementById('preview-frame');
    if (!preview?.contentDocument) return;

    const track = preview.contentDocument.querySelector('.rooms-slider-track');
    const cards = preview.contentDocument.querySelectorAll('.rooms-slider .room-card');
    const dots = preview.contentDocument.querySelectorAll('.slider-dot');

    if (!track || cards.length === 0) return;

    currentSlide += direction;
    if (currentSlide < 0) currentSlide = cards.length - 1;
    if (currentSlide >= cards.length) currentSlide = 0;

    const cardWidth = cards[0].offsetWidth + 24; // gap
    track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

function goToSlide(index) {
    const preview = document.getElementById('preview-frame');
    if (!preview?.contentDocument) return;

    const track = preview.contentDocument.querySelector('.rooms-slider-track');
    const cards = preview.contentDocument.querySelectorAll('.rooms-slider .room-card');
    const dots = preview.contentDocument.querySelectorAll('.slider-dot');

    if (!track || cards.length === 0) return;

    currentSlide = index;
    const cardWidth = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// Eksport funkcji efektów
window.updateFontScale = updateFontScale;
window.setGradient = setGradient;
window.toggleEffect = toggleEffect;
window.setRoomsDisplayMode = setRoomsDisplayMode;
window.toggleRoomCategories = toggleRoomCategories;
window.slideRooms = slideRooms;
window.goToSlide = goToSlide;

// ============================================
// ATMOSPHERIC EFFECTS
// ============================================
function setAtmosphericEffect(effectType) {
    appState.effectsSettings.atmosphericEffect = effectType;
    console.log('🌨️ Atmospheric effect set to:', effectType);

    // Show/hide duration controls
    const durationControls = document.getElementById('effect-duration-controls');
    if (durationControls) {
        if (effectType && effectType !== 'none') {
            durationControls.style.display = 'block';
            // Update duration value display
            const val = document.getElementById('effect-duration')?.value;
            const perm = document.getElementById('effect-permanent')?.checked;
            updateEffectDuration(val, perm);
        } else {
            durationControls.style.display = 'none';
        }
    }

    // Re-render preview to apply effect
    Preview.debouncedRender();
}

// Add updateEffectDuration function if missing or ensure it's exposed
function updateEffectDuration(value, isPermanent) {
    if (value === undefined) value = document.getElementById('effect-duration')?.value || 60;
    if (isPermanent === undefined) isPermanent = document.getElementById('effect-permanent')?.checked || false;

    // Save to state
    if (!appState.effectsSettings.duration) appState.effectsSettings.duration = {};
    appState.effectsSettings.duration.value = parseInt(value);
    appState.effectsSettings.duration.permanent = isPermanent;

    const label = document.getElementById('duration-value');
    if (label) {
        label.textContent = isPermanent ? '∞' : value + 's';
    }

    // Update canvas if exists
    const canvas = document.getElementById('atmospheric-canvas'); // In preview context? No, preview handles its own.
    // The Preview.render() will pass these settings to the iframe script.
    Preview.debouncedRender();
}

window.setAtmosphericEffect = setAtmosphericEffect;
window.updateEffectDuration = updateEffectDuration;
window.togglePermanentEffect = function (checked) {
    updateEffectDuration(undefined, checked);
};

// ============================================
// MAIN CONTENT UPDATES
// ============================================
function updateHeroContent(field, value) {
    // Ensure structure exists
    if (!appState.sectionContent) appState.sectionContent = {};
    if (!appState.sectionContent.intro) appState.sectionContent.intro = {};

    // Update specific field
    if (field === 'title') {
        appState.sectionContent.intro.title = value;
    } else if (field === 'subtitle') {
        appState.sectionContent.intro.subtitle = value;
    } else if (field === 'description') {
        appState.sectionContent.intro.description = value;
    } else if (field === 'image') {
        appState.globalSettings.mainImage = value;
        // Update preview thumbnail
        const previewEl = document.getElementById('hero-image-preview');
        if (previewEl) {
            previewEl.style.backgroundImage = `url('${value}')`;
        }
    }

    console.log(`✏️ Updated hero ${field}:`, value);
    Preview.debouncedRender();
}

function updateIntroLayout(layout) {
    appState.introLayout = layout;

    // Update UI buttons
    document.querySelectorAll('#intro-layout-controls .btn-layout').forEach(btn => {
        btn.style.background = btn.dataset.layout === layout ? 'var(--primary-color)' : 'var(--surface)';
        btn.style.borderColor = btn.dataset.layout === layout ? 'var(--primary-color)' : 'var(--border)';
        btn.style.color = btn.dataset.layout === layout ? '#fff' : 'var(--text-main)';
    });

    console.log(`📐 Updated intro layout:`, layout);
    Preview.debouncedRender();
}

window.updateHeroContent = updateHeroContent;
window.updateIntroLayout = updateIntroLayout;


// ============================================
// OFFERS PAGE STYLING
// ============================================
function toggleOffersPageStyling(enabled) {
    appState.offersSettings.enabled = enabled;

    // Show/hide options
    const optionsEl = document.getElementById('offers-options');
    if (optionsEl) {
        optionsEl.style.display = enabled ? 'block' : 'none';
    }

    console.log(`📋 Offers page styling ${enabled ? 'enabled' : 'disabled'}`);
}

function updateOffersSetting(setting, value) {
    appState.offersSettings[setting] = value;
    console.log(`📋 Updated offers setting ${setting}:`, value);
}

window.toggleOffersPageStyling = toggleOffersPageStyling;
window.updateOffersSetting = updateOffersSetting;

// ============================================
// COLLAPSIBLE SECTIONS
// ============================================
function initCollapsibleSections() {
    const collapsibles = document.querySelectorAll('.settings-section.collapsible h4');
    collapsibles.forEach(header => {
        header.addEventListener('click', (e) => {
            e.preventDefault();
            const section = header.parentElement;
            section.classList.toggle('collapsed');
        });
    });
}

// Toggle FAQ Editor Panel
function toggleFaqEditor() {
    const panel = document.getElementById('faq-editor-panel');
    if (panel) {
        panel.classList.toggle('collapsed');
    }
}

window.toggleFaqEditor = toggleFaqEditor;

// Setup fullscreen button listener and collapsible sections
// Setup fullscreen button listener and collapsible sections
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-fullscreen')?.addEventListener('click', toggleFullscreen);
    initCollapsibleSections();
    renderGradientButtons();
});

// ============================================
// ATMOSPHERIC EFFECT DURATION CONTROLS
// ============================================
let effectDurationTimeout = null;

function updateEffectDuration(value) {
    const valueEl = document.getElementById('duration-value');
    if (valueEl) {
        valueEl.textContent = value + 's';
    }

    appState.effectsSettings.effectDuration = parseInt(value);

    // If not permanent, schedule effect stop
    const permanentCheck = document.getElementById('effect-permanent');
    if (permanentCheck && !permanentCheck.checked) {
        scheduleEffectStop(parseInt(value));
    }
}

function togglePermanentEffect(isPermanent) {
    const durationRange = document.getElementById('effect-duration');
    const durationValue = document.getElementById('duration-value');

    if (isPermanent) {
        if (durationRange) durationRange.disabled = true;
        if (durationValue) durationValue.textContent = '∞';

        // Cancel any scheduled stop
        if (effectDurationTimeout) {
            clearTimeout(effectDurationTimeout);
            effectDurationTimeout = null;
        }

        appState.effectsSettings.effectPermanent = true;
    } else {
        if (durationRange) durationRange.disabled = false;
        const duration = durationRange ? parseInt(durationRange.value) : 30;
        if (durationValue) durationValue.textContent = duration + 's';

        appState.effectsSettings.effectPermanent = false;
        scheduleEffectStop(duration);
    }
}

function scheduleEffectStop(seconds) {
    // Clear any existing timeout
    if (effectDurationTimeout) {
        clearTimeout(effectDurationTimeout);
    }

    effectDurationTimeout = setTimeout(() => {
        // Stop the effect
        if (window.VisualEffects) {
            VisualEffects.destroy();
        }

        // Reset the radio buttons
        const noneRadio = document.querySelector('input[name="atmospheric-effect"][value="none"]');
        if (noneRadio) noneRadio.checked = true;

        appState.effectsSettings.atmosphericEffect = 'none';

        // Hide duration controls
        const durationControls = document.getElementById('effect-duration-controls');
        if (durationControls) durationControls.style.display = 'none';

        console.log('⏰ Effect duration expired');
    }, seconds * 1000);
}

// Extend setAtmosphericEffect to show duration controls
const originalSetAtmosphericEffect = window.setAtmosphericEffect;
window.setAtmosphericEffect = function (effectType) {
    originalSetAtmosphericEffect(effectType);

    const durationControls = document.getElementById('effect-duration-controls');
    if (durationControls) {
        durationControls.style.display = effectType === 'none' ? 'none' : 'block';
    }

    // Start with permanent by default
    const permanentCheck = document.getElementById('effect-permanent');
    if (permanentCheck && permanentCheck.checked && effectType !== 'none') {
        // Already permanent, no action needed
    } else if (!permanentCheck?.checked && effectType !== 'none') {
        // Schedule stop based on current duration
        const durationRange = document.getElementById('effect-duration');
        const duration = durationRange ? parseInt(durationRange.value) : 30;
        scheduleEffectStop(duration);
    }
};

window.updateEffectDuration = updateEffectDuration;
window.togglePermanentEffect = togglePermanentEffect;

// ============================================
// IMPROVED AUTO-RECOVERY WITH STYLED NOTIFICATION
// ============================================
function showRecoveryNotification(savedDate) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'recovery-notification';
    notification.innerHTML = `
        <i class="fas fa-clock-rotate-left" style="font-size: 1.5rem;"></i>
        <div>
            <strong>Znaleziono zapisany projekt</strong>
            <div style="font-size: 0.85rem; opacity: 0.9;">z ${savedDate.toLocaleString()}</div>
        </div>
        <button onclick="restoreAutoSave()" style="margin-left: auto;">
            <i class="fas fa-undo"></i> Przywróć
        </button>
        <button class="dismiss-btn" onclick="dismissRecovery()">
            <i class="fas fa-times"></i>
        </button>
    `;

    document.body.appendChild(notification);
}

function restoreAutoSave() {
    try {
        const saved = localStorage.getItem(AUTOSAVE_KEY);
        if (!saved) return;

        const projectData = JSON.parse(saved);
        Object.assign(appState, projectData.appState);

        // Switch to builder mode
        document.getElementById('wizard-panel').classList.add('hidden');
        document.getElementById('builder-panel').classList.remove('hidden');

        renderSectionsChecklist();
        renderObjectsGrid();
        renderFaqList();
        Preview.render();

        // Sync UI with restored state
        if (appState.globalSettings.colors) {
            document.getElementById('color-primary').value = appState.globalSettings.colors.primary;
            document.getElementById('color-secondary').value = appState.globalSettings.colors.secondary;
            document.getElementById('color-accent').value = appState.globalSettings.colors.accent;
        }

        console.log('✅ Restored from auto-save');

        // Show success indicator
        showAutoSaveIndicator('Projekt przywrócony!');
    } catch (err) {
        console.error('Error restoring auto-save:', err);
    }

    // Remove notification
    dismissRecovery();
}

function dismissRecovery() {
    const notification = document.querySelector('.recovery-notification');
    if (notification) {
        notification.remove();
    }
}

function showAutoSaveIndicator(message) {
    const indicator = document.createElement('div');
    indicator.className = 'auto-save-indicator';
    indicator.innerHTML = `<i class="fas fa-check-circle"></i> ${message || 'Zapisano automatycznie'}`;
    document.body.appendChild(indicator);

    // Remove after animation
    setTimeout(() => indicator.remove(), 2000);
}

// Override checkAutoSave to use styled notification
const originalCheckAutoSave = window.checkAutoSave;
window.checkAutoSave = function () {
    try {
        const saved = localStorage.getItem(AUTOSAVE_KEY);
        if (!saved) return;

        const projectData = JSON.parse(saved);
        const savedDate = new Date(projectData.savedAt);
        const now = new Date();
        const hoursSince = (now - savedDate) / (1000 * 60 * 60);

        // Only offer to restore if saved less than 24 hours ago
        if (hoursSince < 24) {
            showRecoveryNotification(savedDate);
        }
    } catch (err) {
        console.error('Error checking auto-save:', err);
    }
};

window.restoreAutoSave = restoreAutoSave;
window.dismissRecovery = dismissRecovery;
window.showAutoSaveIndicator = showAutoSaveIndicator;

// ============================================
// RANDOMIZATION LOGIC
// ============================================
function randomizeLayout(skipConfirm = false) {
    if (!skipConfirm && !confirm('Czy na pewno chcesz wylosować nowy wygląd i układ? Obecne ustawienia zostaną zmienione.')) return;

    console.log("🎲 Randomizing layout and theme...");

    // 1. Pick a random template
    const templateKeys = Object.keys(TEMPLATES);
    const randomTemplateKey = templateKeys[Math.floor(Math.random() * templateKeys.length)];
    const randomTemplate = TEMPLATES[randomTemplateKey];
    appState.selectedTemplate = randomTemplate;

    // Apply template colors and fonts
    appState.globalSettings.colors = { ...randomTemplate.colors };
    appState.globalSettings.fonts = { ...randomTemplate.fonts };

    // 2. Sections Shuffle (Constraint: Intro -> Rooms -> Rest)
    const alwaysFirst = ['intro', 'rooms'];
    const otherSections = appState.enabledSections.filter(s => !alwaysFirst.includes(s));

    // Shuffle others
    for (let i = otherSections.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [otherSections[i], otherSections[j]] = [otherSections[j], otherSections[i]];
    }

    // Reassemble: Intro -> Rooms -> Shuffled Others
    // Ensure 'rooms' is actually enabled before forcing it to 2nd position, otherwise just intro
    const hasRooms = appState.enabledSections.includes('rooms');
    appState.enabledSections = hasRooms ? ['intro', 'rooms', ...otherSections] : ['intro', ...otherSections];

    // 3. Randomize Backgrounds
    const bgTypes = ['white', 'light', 'gradient', 'pattern', 'dark'];
    appState.enabledSections.forEach(sectionId => {
        if (sectionId === 'intro') {
            appState.sectionBackgrounds[sectionId] = Math.random() > 0.6 ? 'white' : (Math.random() > 0.5 ? 'light' : 'dark');
        } else if (sectionId === 'gallery') {
            appState.sectionBackgrounds[sectionId] = 'white'; // Gallery looks best on white
        } else {
            appState.sectionBackgrounds[sectionId] = bgTypes[Math.floor(Math.random() * bgTypes.length)];
        }
    });

    // 4. Randomize About Variant & Content
    if (window.ABOUT_SECTION_VARIANTS) {
        let variants = Object.keys(window.ABOUT_SECTION_VARIANTS);
        const category = randomTemplate.category;

        // Filter variants by category if possible
        let matchedVariants = variants.filter(v => {
            const variantObj = window.ABOUT_SECTION_VARIANTS[v];
            return variantObj.category === category;
        });

        // Fallback to all if no specific match
        if (matchedVariants.length === 0) matchedVariants = variants;

        const chosenVariantId = matchedVariants[Math.floor(Math.random() * matchedVariants.length)];
        appState.aboutVariant = chosenVariantId;
        const variant = window.ABOUT_SECTION_VARIANTS[chosenVariantId];

        // Sync content
        appState.sectionContent.intro.title = variant.title;
        appState.sectionContent.intro.subtitle = variant.subtitle;
        appState.sectionContent.intro.description = variant.description;

        // Update property name if needed/wanted
        appState.globalSettings.propertyName = variant.name || randomTemplate.name; // This effectively changes "everything on the right"
    }

    // 5. Randomize Hero Image
    if (window.getRandomImage) {
        const theme = randomTemplate.category === 'eco' ? 'nature' :
            (randomTemplate.category === 'luxury' ? 'luxury' :
                (randomTemplate.category === 'apartments' ? 'apartments' : 'luxury'));

        const randomImage = window.getRandomImage(theme);
        appState.sectionContent.intro.mainImage = randomImage;
        appState.sectionContent.intro.image = randomImage; // Legacy support
        appState.globalSettings.mainImage = randomImage;   // Crucial for preview sync

        console.log('🎲 Randomized Hero Image:', randomImage);
    }

    // 6. Update Effects (Gradients)
    const categoryGradients = {
        'luxury': 'royal', 'family': 'coral', 'business': 'steel', 'romantic': 'lavender',
        'eco': 'forest', 'apartments': 'modern', 'budget': 'sunset', 'modern': 'midnight'
    };
    const matchedGradient = categoryGradients[randomTemplate.category] || 'emerald';
    appState.effectsSettings.gradientPreset = matchedGradient;
    appState.effectsSettings.useGradients = Math.random() > 0.1;

    // 7. Update UI
    // CRITICAL: Update Sidebar Inputs to match randomized state
    if (window.updateSidebarInputs) {
        window.updateSidebarInputs();
    }

    renderSectionsChecklist();
    Preview.debouncedRender();
    triggerAutoSave();

    // Show notification
    showAutoSaveIndicator('Wylosowano nowy styl: ' + randomTemplate.name);
}

window.randomizeLayout = randomizeLayout;

// ============================================
// AUTO-SAVE ON SIGNIFICANT CHANGES
// ============================================
function autoSave() {
    if (appState.mode !== 'builder') return;

    try {
        const dataToSave = {
            appState: {
                ...appState,
                // Don't save large objects if unnecessary, but here we save everything
                // except maybe volatile UI state
            },
            savedAt: new Date().toISOString()
        };
        localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(dataToSave));
        console.log('💾 Auto-saved project state');
    } catch (err) {
        console.error('Error auto-saving:', err);
    }
}

// Debounced auto-save on changes
let autoSaveDebounceTimer = null;
function triggerAutoSave() {
    if (appState.mode !== 'builder') return;

    if (autoSaveDebounceTimer) {
        clearTimeout(autoSaveDebounceTimer);
    }

    autoSaveDebounceTimer = setTimeout(() => {
        autoSave();
        showAutoSaveIndicator();
    }, 5000); // Wait 5 seconds after last change
}

// Make links open in new tab to preserve project
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="http"]');
    if (link && appState.mode === 'builder') {
        // Auto-save before navigating
        autoSave();

        // Ensure external links open in new tab
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    }
});

function renderGradientButtons() {
    const categories = {
        warm: ['sunset', 'coral', 'rose-gold', 'volcano', 'sahara', 'terracotta', 'coffee', 'copper', 'peach', 'amber', 'sunset-vibes', 'sandy-gold', 'desert-gold', 'golden-sands', 'autumn-glow', 'summer-heat', 'cherry-blossom', 'blush'],
        cool: ['ocean', 'arctic', 'midnight', 'twilight', 'marine', 'peacock', 'steel', 'ice', 'azure', 'neptune', 'morning-dew', 'deep-ocean', 'northern-lights', 'mystic-river', 'winter-blues', 'aqua-splash'],
        luxury: ['aurora', 'royal', 'lavender', 'champagne', 'cyberpunk', 'wine', 'neon', 'candy', 'galaxy', 'noir', 'velvet', 'plum', 'royal-velvet', 'mystic-mauve', 'urban-night', 'dark-volcano', 'silver-lining', 'bronze', 'midnight-bloom', 'berry-juice'],
        seasonal: ['arctic-frost', 'polar-night', 'frozen-lake', 'winter-forest', 'nordic-lights', 'snowstorm', 'ice-cave', 'frosty-morning', 'glacial', 'christmas', 'midnight-city', 'autumn-leaves', 'harvest', 'spring-bloom', 'summer-sunset', 'tropical-paradise', 'mountain-dawn', 'ocean-breeze', 'forest-mist', 'desert-dusk', 'lavender-fields', 'rainy-day', 'golden-hour', 'mountain-mist', 'tropical-jungle']
    };

    const presets = CSSEngine.gradientPresets;

    Object.keys(categories).forEach(cat => {
        const container = document.querySelector(`.gradients-grid[data-category="${cat}"]`);
        if (!container) return;

        let html = '';
        categories[cat].forEach(key => {
            const gradient = presets[key];
            if (gradient) {
                html += `
                    <button class="gradient-btn ${appState.effectsSettings.gradientPreset === key ? 'active' : ''}" 
                            data-gradient="${key}" 
                            onclick="setGradient('${key}')" 
                            title="${key}">
                        <span style="background: ${gradient}"></span>
                    </button>`;
            }
        });
        container.innerHTML = html;
    });
}
window.renderGradientButtons = renderGradientButtons;
// ============================================
// THEME & TESTIMONIALS LOGIC
// ============================================

window.toggleTheme = function () {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    const btn = document.getElementById('btn-theme-toggle');
    if (btn) btn.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    // Save preference if needed, but not strictly required
};

window.updateTestimonialsSettings = function (key, value) {
    if (!window.appState.testimonialsSettings) {
        window.appState.testimonialsSettings = { displayMode: 'grid', count: 3 };
    }
    window.appState.testimonialsSettings[key] = value;
    Preview.debouncedRender();
    triggerAutoSave();
};
