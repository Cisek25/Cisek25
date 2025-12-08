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
        shadowIntensity: 'medium' // 'none' | 'light' | 'medium' | 'strong'
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
    nextObjectId: 1
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
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
// OBJECTS MANAGEMENT
// ============================================
function addDefaultObjects() {
    const defaultRooms = [
        {
            id: appState.nextObjectId++,
            name: 'Pokój Standard',
            description: 'Przytulny pokój z wszystkim, czego potrzebujesz na komfortowy wypoczynek.',
            price: '199 zł',
            images: [
                'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=600'
            ],
            amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom'],
            badge: 'Popularny',
            category: 'standard'
        },
        {
            id: appState.nextObjectId++,
            name: 'Pokój z Widokiem na Morze',
            description: 'Piękny pokój z panoramicznym widokiem na morze. Idealne miejsce aby podziwiać wschody i zachody słońca.',
            price: '349 zł',
            images: [
                'https://images.pexels.com/photos/1578253/pexels-photo-1578253.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=600'
            ],
            amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'balcony', 'sea-view'],
            badge: 'Widok na morze',
            category: 'sea-view'
        },
        {
            id: appState.nextObjectId++,
            name: 'Pokój Deluxe Górski',
            description: 'Przestronny pokój z widokiem na góry. Doskonały dla miłośników natury.',
            price: '399 zł',
            images: [
                'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=600'
            ],
            amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'minibar', 'safe', 'mountain-view'],
            badge: 'Widok na góry',
            category: 'mountain'
        },
        {
            id: appState.nextObjectId++,
            name: 'Apartament Family',
            description: 'Dwupokojowy apartament idealny dla rodzin z dziećmi, z aneksem kuchennym.',
            price: '499 zł',
            images: [
                'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600'
            ],
            amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'kitchen', 'washing-machine'],
            badge: 'Dla rodzin',
            category: 'standard'
        },
        {
            id: appState.nextObjectId++,
            name: 'Suite Romantyczny',
            description: 'Elegancki apartament dla par z wanną wolnostojącą i romantycznym wystrojem.',
            price: '599 zł',
            images: [
                'https://images.pexels.com/photos/3773575/pexels-photo-3773575.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/3754595/pexels-photo-3754595.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=600'
            ],
            amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'bathtub', 'champagne', 'bathrobe'],
            badge: 'Dla par',
            category: 'premium'
        },
        {
            id: appState.nextObjectId++,
            name: 'Penthouse VIP',
            description: 'Ekskluzywny apartament z tarasem, jacuzzi i panoramicznym widokiem.',
            price: '899 zł',
            images: [
                'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600',
                'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600'
            ],
            amenities: ['wifi', 'tv', 'air-conditioning', 'private-bathroom', 'jacuzzi', 'terrace', 'butler', 'champagne'],
            badge: 'VIP',
            category: 'premium'
        }
    ];

    defaultRooms.forEach(room => appState.objects.push(room));
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
                <input type="text" id="obj-image" value="${obj.images?.[0] || ''}" placeholder="https://...">
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
                ${obj.images?.[0]
            ? `<img src="${obj.images[0]}" alt="${obj.name}">`
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
function generateCode() {
    const settings = appState.globalSettings;
    const objects = appState.objects;
    const enabledSections = appState.enabledSections;

    // Generate all parts
    const head = TemplateEngine.generateHead(settings);
    const sections = TemplateEngine.generateSections(settings, objects, enabledSections);
    const styles = CSSEngine.generate(settings);
    const scripts = generateScriptsFile();

    // Display in modal
    document.getElementById('code-head').textContent = head;
    document.getElementById('code-sections').textContent = sections;
    document.getElementById('code-styles').textContent = styles;
    document.getElementById('code-scripts').textContent = scripts;

    // Show modal
    document.getElementById('export-modal').classList.remove('hidden');
}

function generateScriptsFile() {
    return `<!-- ============================================
     ${appState.globalSettings.propertyName || 'Nazwa Obiektu'} - SCRIPTS
     
     Wklej w panelu CMS → Koniec sekcji body
     ============================================ -->

<script>
// Lightbox - powiększanie zdjęć w galerii
function openLightbox(element) {
    var img = element.querySelector('img');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Zamknij lightbox klawiszem Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
});
<\/script>`;
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
// MODALS
// ============================================
function closeExportModal() {
    document.getElementById('export-modal').classList.add('hidden');
}

function closeObjectModal() {
    document.getElementById('object-modal').classList.add('hidden');
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
function renderTemplateGallery() {
    const container = document.getElementById('templates-gallery');
    if (!container) return;

    const templates = Object.values(TEMPLATES);

    container.innerHTML = templates.slice(0, 8).map(template => `
        <div class="template-card ${appState.selectedTemplate?.id === template.id ? 'selected' : ''}" 
             onclick="selectTemplate('${template.id}')"
             style="--tpl-primary: ${template.colors.primary}; --tpl-secondary: ${template.colors.secondary}">
            <div class="template-colors">
                <span style="background: ${template.colors.primary}"></span>
                <span style="background: ${template.colors.secondary}"></span>
                <span style="background: ${template.colors.accent}"></span>
            </div>
            <div class="template-name">${template.name}</div>
        </div>
    `).join('');
}

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

function setGradient(preset) {
    if (!appState.effectsSettings) return;
    appState.effectsSettings.gradientPreset = preset;
    appState.effectsSettings.useGradients = preset !== 'none';

    // Update UI
    document.querySelectorAll('.gradient-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.gradient === preset);
    });
    Preview.debouncedRender();
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

// Eksport funkcji efektów
window.updateFontScale = updateFontScale;
window.setGradient = setGradient;
window.toggleEffect = toggleEffect;
window.setRoomsDisplayMode = setRoomsDisplayMode;
window.toggleRoomCategories = toggleRoomCategories;

// Setup fullscreen button listener
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-fullscreen')?.addEventListener('click', toggleFullscreen);
});
