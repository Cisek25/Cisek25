// MAIN APP.JS - Główna logika aplikacji generatora
// Integracja: Wizard + Builder + Templates + CSS Engine + Multi-Object System

// ========================================
// GLOBAL STATE
// ========================================

const appState = {
    mode: 'wizard', // 'wizard' lub 'builder'
    wizardData: null,
    suggestedTheme: null,

    // Konfiguracja globalna
    globalSettings: {
        propertyName: '',
        primaryColor: '#2C3E50',
        secondaryColor: '#ECF0F1',
        accentColor: '#CDD789',
        fontHeading: 'Cinzel',
        fontBody: 'Inter',
        selectedTemplate: null
    },

    // Lista obiektów/pokoi
    objects: [],

    // Licznik ID
    objectIdCounter: 1
};

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupEventListeners();
    loadGoogleFonts();
});

function initApp() {
    console.log('🚀 idobooking Generator v3.0 Professional - Starting...');

    // Sprawdź czy wizard został ukończony
    if (appState.mode === 'wizard') {
        console.log('📋 Wizard mode active');
    } else {
        console.log('🏗️ Builder mode active');
        renderBuilderUI();
    }
}

// ========================================
// EVENT LISTENERS
// ========================================

function setupEventListeners() {
    // Przycisk dodawania obiektu
    const addObjectBtn = document.getElementById('addObjectBtn');
    if (addObjectBtn) {
        addObjectBtn.addEventListener('click', addNewObject);
    }

    // Przycisk generowania kodu
    const generateBtn = document.getElementById('generateBtn');
    if (generateBtn) {
        generateBtn.addEventListener('click', generateCode);
    }

    // Zmiana koloru globalnego
    document.querySelectorAll('input[type="color"]').forEach(input => {
        input.addEventListener('change', (e) => {
            updateGlobalColor(e.target.id, e.target.value);
        });
    });

    // Zmiana fonta
    document.querySelectorAll('select[id^="font"]').forEach(select => {
        select.addEventListener('change', (e) => {
            updateGlobalFont(e.target.id, e.target.value);
            loadGoogleFonts();
        });
    });

    // Nazwa obiektu głównego
    const propertyNameInput = document.getElementById('propertyName');
    if (propertyNameInput) {
        propertyNameInput.addEventListener('input', (e) => {
            appState.globalSettings.propertyName = e.target.value;
        });
    }

    // Wybór szablonu
    const templateSelect = document.getElementById('templateSelect');
    if (templateSelect) {
        templateSelect.addEventListener('change', handleTemplateChange);
    }
}

// ========================================
// MULTI-OBJECT SYSTEM
// ========================================

function addNewObject() {
    const newObject = {
        id: appState.objectIdCounter++,
        name: `Pokój ${appState.objects.length + 1}`,
        description: '',
        price: '',
        images: [],
        amenities: [],
        customFields: {}
    };

    appState.objects.push(newObject);
    renderObjectsList();
    openObjectEditor(newObject.id);

    console.log('✅ Dodano nowy obiekt:', newObject);
}

function removeObject(objectId) {
    if (confirm('Czy na pewno chcesz usunąć ten obiekt?')) {
        appState.objects = appState.objects.filter(obj => obj.id !== objectId);
        renderObjectsList();
        console.log('🗑️ Usunięto obiekt:', objectId);
    }
}

function renderObjectsList() {
    const container = document.getElementById('objectsList');
    if (!container) return;

    if (appState.objects.length === 0) {
        container.innerHTML = `
            <div class="empty-state-small">
                <p>Nie dodano jeszcze żadnych pokoi/obiektów.</p>
                <p class="hint">Kliknij "+ Dodaj obiekt" aby rozpocząć</p>
            </div>
        `;
        return;
    }

    container.innerHTML = appState.objects.map(obj => `
        <div class="object-card" data-id="${obj.id}">
            <div class="object-card-header">
                <h4>${obj.name || 'Bez nazwy'}</h4>
                <div class="object-actions">
                    <button class="btn-icon" onclick="editObject(${obj.id})" title="Edytuj">
                        ✏️
                    </button>
                    <button class="btn-icon" onclick="duplicateObject(${obj.id})" title="Duplikuj">
                        📋
                    </button>
                    <button class="btn-icon btn-danger" onclick="removeObject(${obj.id})" title="Usuń">
                        🗑️
                    </button>
                </div>
            </div>
            <div class="object-card-content">
                <p class="object-description">${obj.description || 'Brak opisu'}</p>
                ${obj.price ? `<p class="object-price"><strong>Cena:</strong> ${obj.price}</p>` : ''}
                <p class="object-meta">
                    <span>📸 ${obj.images.length} zdjęć</span>
                    <span>✨ ${obj.amenities.length} udogodnień</span>
                </p>
            </div>
        </div>
    `).join('');
}

function editObject(objectId) {
    openObjectEditor(objectId);
}

function duplicateObject(objectId) {
    const original = appState.objects.find(obj => obj.id === objectId);
    if (!original) return;

    const duplicate = {
        ...JSON.parse(JSON.stringify(original)),
        id: appState.objectIdCounter++,
        name: `${original.name} (kopia)`
    };

    appState.objects.push(duplicate);
    renderObjectsList();
    console.log('📋 Zduplikowano obiekt:', duplicate);
}

function openObjectEditor(objectId) {
    const obj = appState.objects.find(o => o.id === objectId);
    if (!obj) return;

    // Otwórz modal z edytorem
    const modal = createObjectEditorModal(obj);
    document.body.appendChild(modal);
    modal.classList.add('active');
}

function createObjectEditorModal(obj) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(this)"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>✏️ Edycja obiektu</h3>
                <button class="btn-close" onclick="closeModal(this)">✕</button>
            </div>
            <div class="modal-body">
                <div class="field">
                    <label>Nazwa pokoju/obiektu</label>
                    <input type="text" id="editName" value="${obj.name}" placeholder="np. Apartament Deluxe">
                </div>

                <div class="field">
                    <label>Opis</label>
                    <textarea id="editDescription" rows="4" placeholder="Opisz pokój/obiekt...">${obj.description}</textarea>
                </div>

                <div class="field">
                    <label>Cena za noc</label>
                    <input type="text" id="editPrice" value="${obj.price}" placeholder="np. 299 zł">
                </div>

                <div class="field">
                    <label>URL zdjęć (każdy w nowej linii)</label>
                    <textarea id="editImages" rows="3" placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg">${obj.images.join('\n')}</textarea>
                    <span class="hint">Wklej linki do zdjęć, każdy w nowej linii</span>
                </div>

                <div class="field">
                    <label>Udogodnienia</label>
                    <div id="amenitiesSelector">
                        ${renderAmenitiesSelector(obj.amenities)}
                    </div>
                </div>

                <div class="field">
                    <label>Własne pola (opcjonalne)</label>
                    <div id="customFields">
                        ${renderCustomFields(obj.customFields)}
                    </div>
                    <button class="btn-secondary btn-sm" onclick="addCustomField()">+ Dodaj pole</button>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" onclick="closeModal(this)">Anuluj</button>
                <button class="btn-primary" onclick="saveObject(${obj.id})">💾 Zapisz</button>
            </div>
        </div>
    `;

    return modal;
}

function renderAmenitiesSelector(selectedAmenities) {
    const commonAmenities = [
        '🛏️ Łóżko king-size',
        '🚿 Prysznic',
        '🛁 Wanna',
        '📺 TV',
        '📶 WiFi',
        '❄️ Klimatyzacja',
        '🔥 Ogrzewanie',
        '☕ Ekspres do kawy',
        '🧊 Minibar',
        '🔒 Sejf',
        '👔 Szafa',
        '🪟 Okno',
        '🌅 Balkon',
        '🏔️ Widok na góry',
        '🌊 Widok na morze',
        '🌳 Widok na ogród',
        '🅿️ Parking',
        '🐾 Zwierzęta dozwolone'
    ];

    return `
        <div class="amenities-grid">
            ${commonAmenities.map(amenity => `
                <label class="amenity-checkbox">
                    <input type="checkbox" value="${amenity}" ${selectedAmenities.includes(amenity) ? 'checked' : ''}>
                    <span>${amenity}</span>
                </label>
            `).join('')}
        </div>
        <div class="field" style="margin-top: 1rem;">
            <input type="text" id="customAmenity" placeholder="Dodaj własne udogodnienie...">
            <button class="btn-sm btn-secondary" onclick="addCustomAmenity()">+ Dodaj</button>
        </div>
    `;
}

function renderCustomFields(customFields) {
    if (!customFields || Object.keys(customFields).length === 0) {
        return '<p class="hint">Brak dodatkowych pól</p>';
    }

    return Object.entries(customFields).map(([key, value]) => `
        <div class="custom-field-row">
            <input type="text" value="${key}" placeholder="Nazwa pola" class="field-key">
            <input type="text" value="${value}" placeholder="Wartość" class="field-value">
            <button class="btn-icon btn-danger" onclick="removeCustomField(this)">✕</button>
        </div>
    `).join('');
}

function addCustomField() {
    const container = document.getElementById('customFields');
    const newField = document.createElement('div');
    newField.className = 'custom-field-row';
    newField.innerHTML = `
        <input type="text" placeholder="Nazwa pola" class="field-key">
        <input type="text" placeholder="Wartość" class="field-value">
        <button class="btn-icon btn-danger" onclick="removeCustomField(this)">✕</button>
    `;
    container.insertBefore(newField, container.lastElementChild);
}

function removeCustomField(btn) {
    btn.closest('.custom-field-row').remove();
}

function addCustomAmenity() {
    const input = document.getElementById('customAmenity');
    if (!input.value.trim()) return;

    const grid = document.querySelector('.amenities-grid');
    const newAmenity = document.createElement('label');
    newAmenity.className = 'amenity-checkbox';
    newAmenity.innerHTML = `
        <input type="checkbox" value="${input.value}" checked>
        <span>${input.value}</span>
    `;
    grid.appendChild(newAmenity);
    input.value = '';
}

function saveObject(objectId) {
    const obj = appState.objects.find(o => o.id === objectId);
    if (!obj) return;

    // Pobierz wartości z formularza
    obj.name = document.getElementById('editName').value;
    obj.description = document.getElementById('editDescription').value;
    obj.price = document.getElementById('editPrice').value;

    // Images
    const imagesText = document.getElementById('editImages').value;
    obj.images = imagesText.split('\n').filter(url => url.trim()).map(url => url.trim());

    // Amenities
    obj.amenities = Array.from(document.querySelectorAll('.amenities-grid input:checked'))
        .map(checkbox => checkbox.value);

    // Custom fields
    obj.customFields = {};
    document.querySelectorAll('.custom-field-row').forEach(row => {
        const key = row.querySelector('.field-key').value.trim();
        const value = row.querySelector('.field-value').value.trim();
        if (key && value) {
            obj.customFields[key] = value;
        }
    });

    // Zaktualizuj UI
    renderObjectsList();

    // Zamknij modal
    closeModal();

    console.log('💾 Zapisano obiekt:', obj);
}

function closeModal(element) {
    const modal = element ? element.closest('.modal') : document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// ========================================
// GLOBAL SETTINGS
// ========================================

function updateGlobalColor(colorType, value) {
    const mapping = {
        'colorPrimary': 'primaryColor',
        'colorSecondary': 'secondaryColor',
        'colorAccent': 'accentColor'
    };

    if (mapping[colorType]) {
        appState.globalSettings[mapping[colorType]] = value;
        console.log(`🎨 Zaktualizowano ${mapping[colorType]}: ${value}`);
    }
}

function updateGlobalFont(fontType, value) {
    const mapping = {
        'fontHeading': 'fontHeading',
        'fontBody': 'fontBody'
    };

    if (mapping[fontType]) {
        appState.globalSettings[mapping[fontType]] = value;
        console.log(`🔤 Zaktualizowano ${mapping[fontType]}: ${value}`);
    }
}

function handleTemplateChange(e) {
    const templateId = e.target.value;
    if (!templateId) return;

    const template = getTemplateById(templateId);
    if (!template) return;

    // Zastosuj szablon
    appState.globalSettings.selectedTemplate = template;
    appState.globalSettings.primaryColor = template.colors.primary;
    appState.globalSettings.secondaryColor = template.colors.secondary;
    appState.globalSettings.accentColor = template.colors.accent;
    appState.globalSettings.fontHeading = template.fonts.heading;
    appState.globalSettings.fontBody = template.fonts.body;

    // Zaktualizuj UI
    document.getElementById('colorPrimary').value = template.colors.primary;
    document.getElementById('colorSecondary').value = template.colors.secondary;
    document.getElementById('colorAccent').value = template.colors.accent;
    document.getElementById('fontHeading').value = template.fonts.heading;
    document.getElementById('fontBody').value = template.fonts.body;

    loadGoogleFonts();

    console.log('📋 Zastosowano szablon:', template.name);
}

// ========================================
// CODE GENERATION
// ========================================

function generateCode() {
    console.log('🚀 Generowanie kodu...');

    if (appState.objects.length === 0) {
        alert('⚠️ Dodaj przynajmniej jeden obiekt/pokój przed generowaniem kodu!');
        return;
    }

    // Generuj CSS
    const generatedCSS = generateProfessionalCSS({
        colors: {
            primary: appState.globalSettings.primaryColor,
            secondary: appState.globalSettings.secondaryColor,
            accent: appState.globalSettings.accentColor,
            backgrounds: ['#FFFEF9', '#F5F1E8']
        },
        fonts: {
            heading: appState.globalSettings.fontHeading,
            body: appState.globalSettings.fontBody
        },
        theme: appState.suggestedTheme || 'luxury-mountain'
    });

    // Generuj HTML
    const generatedHTML = generateHTML();

    // Pokaż wyniki
    displayGeneratedCode(generatedHTML, generatedCSS);

    console.log('✅ Kod wygenerowany!');
}

function generateHTML() {
    const propertyName = appState.globalSettings.propertyName || 'Nasz Obiekt';

    // Zbierz wszystkie unikalne amenities ze wszystkich pokoi
    const allAmenities = [...new Set(appState.objects.flatMap(obj => obj.amenities))];

    // Zbierz wszystkie zdjęcia ze wszystkich pokoi
    const allImages = appState.objects.flatMap(obj => obj.images).filter(img => img);

    let html = `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${propertyName} - Rezerwacja online</title>
    <meta name="description" content="Zarezerwuj pobyt w ${propertyName}. Komfortowe pokoje, doskonała lokalizacja.">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=${appState.globalSettings.fontHeading.replace(' ', '+')}:wght@300;400;500;600;700&family=${appState.globalSettings.fontBody.replace(' ', '+')}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- HEADER -->
    <header class="site-header">
        <div class="container header-container">
            <a href="#" class="site-logo">${propertyName}</a>
            <nav class="main-nav">
                <ul>
                    <li><a href="#o-nas">O nas</a></li>
                    <li><a href="#pokoje">Pokoje</a></li>
                    <li><a href="#udogodnienia">Udogodnienia</a></li>
                    <li><a href="#galeria">Galeria</a></li>
                    <li><a href="#opinie">Opinie</a></li>
                    <li><a href="#kontakt">Kontakt</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- HERO -->
    <section class="hero">
        <div class="hero-content">
            <h1>${propertyName}</h1>
            <p class="lead">Odkryj wyjątkowe miejsce na Twój wypoczynek</p>
            <div class="hero-buttons">
                <a href="#pokoje" class="btn btn-primary btn-lg">Zobacz pokoje</a>
                <a href="#kontakt" class="btn btn-secondary btn-lg">Zarezerwuj teraz</a>
            </div>
        </div>
    </section>

    <!-- O NAS -->
    <section id="o-nas" class="section section-light">
        <div class="container">
            <div class="section-title">
                <h2>O Nas</h2>
                <p>Poznaj naszą historię</p>
            </div>

            <div class="section-description">
                <h3>Witamy w ${propertyName}</h3>
                <p>Jesteśmy dumni, że możemy gościć naszych gości w komfortowych warunkach. Nasz obiekt oferuje ${appState.objects.length} ${appState.objects.length === 1 ? 'pokój' : appState.objects.length < 5 ? 'pokoje' : 'pokoi'}, każdy z unikalnym charakterem i pełnym wyposażeniem.</p>
                <p>Stawiamy na indywidualne podejście do każdego gościa, dbając o każdy szczegół Państwa pobytu. Nasze doświadczenie i pasja do gościnności sprawiają, że pobyt u nas pozostawi niezapomniane wspomnienia.</p>
            </div>

            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">🏠</div>
                    <h4>Komfortowe Pokoje</h4>
                    <p>${appState.objects.length} ${appState.objects.length === 1 ? 'pokój' : 'pokoi'} do wyboru, każdy z unikalnym charakterem</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">⭐</div>
                    <h4>Wysoka Jakość</h4>
                    <p>Dbałość o każdy szczegół i najwyższe standardy obsługi</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">📍</div>
                    <h4>Doskonała Lokalizacja</h4>
                    <p>Idealne położenie blisko głównych atrakcji</p>
                </div>
            </div>
        </div>
    </section>

    <!-- POKOJE -->
    <section id="pokoje" class="section section-alt">
        <div class="container">
            <div class="section-title">
                <h2>Nasze Pokoje i Apartamenty</h2>
                <p>Wybierz idealny pokój dla siebie - mamy ${appState.objects.length} ${appState.objects.length === 1 ? 'opcję' : 'opcje'} do wyboru</p>
            </div>

            <div class="grid grid-cols-${appState.objects.length >= 3 ? '3' : appState.objects.length === 2 ? '2' : '1'}">
                ${appState.objects.map(obj => generateRoomCard(obj)).join('\n')}
            </div>
        </div>
    </section>

    <!-- UDOGODNIENIA -->
    <section id="udogodnienia" class="section section-light">
        <div class="container">
            <div class="section-title">
                <h2>Udogodnienia</h2>
                <p>Wszystko czego potrzebujesz dla komfortowego pobytu</p>
            </div>

            ${allAmenities.length > 0 ? `
            <div class="amenities-grid">
                ${allAmenities.map(amenity => `
                <div class="amenity-item">
                    <span class="amenity-icon">${amenity.split(' ')[0]}</span>
                    <span class="amenity-label">${amenity.substring(amenity.indexOf(' ') + 1)}</span>
                </div>`).join('')}
            </div>
            ` : `
            <div class="amenities-grid">
                <div class="amenity-item">
                    <span class="amenity-icon">📶</span>
                    <span class="amenity-label">Bezpłatne WiFi</span>
                </div>
                <div class="amenity-item">
                    <span class="amenity-icon">🅿️</span>
                    <span class="amenity-label">Parking</span>
                </div>
                <div class="amenity-item">
                    <span class="amenity-icon">🍳</span>
                    <span class="amenity-label">Śniadanie</span>
                </div>
                <div class="amenity-item">
                    <span class="amenity-icon">🛏️</span>
                    <span class="amenity-label">Czyste pościele</span>
                </div>
                <div class="amenity-item">
                    <span class="amenity-icon">🚿</span>
                    <span class="amenity-label">Łazienki</span>
                </div>
                <div class="amenity-item">
                    <span class="amenity-icon">📺</span>
                    <span class="amenity-label">Telewizja</span>
                </div>
            </div>
            `}
        </div>
    </section>

    <!-- GALERIA -->
    <section id="galeria" class="section section-alt">
        <div class="container">
            <div class="section-title">
                <h2>Galeria</h2>
                <p>Zobacz jak wygląda nasz obiekt</p>
            </div>

            ${allImages.length > 0 ? `
            <div class="gallery">
                ${allImages.slice(0, 6).map((image, index) => `
                <div class="gallery-item">
                    <img src="${image}" alt="Zdjęcie ${index + 1}">
                    <div class="gallery-caption">
                        <h4>${propertyName}</h4>
                        <p>Galeria zdjęć</p>
                    </div>
                </div>`).join('')}
            </div>
            ` : `
            <p style="text-align: center; color: #6B7280;">Dodaj zdjęcia w edytorze pokoi, aby wyświetlić galerię</p>
            `}
        </div>
    </section>

    <!-- OPINIE -->
    <section id="opinie" class="section section-light">
        <div class="container">
            <div class="section-title">
                <h2>Opinie Gości</h2>
                <p>Co mówią o nas nasi goście</p>
            </div>

            <div class="grid grid-cols-3">
                <div class="card">
                    <div class="card-content">
                        <div style="color: #F59E0B; margin-bottom: 1rem; font-size: 1.5rem;">⭐⭐⭐⭐⭐</div>
                        <p class="card-description">"Wspaniałe miejsce! Czysty pokój, miła obsługa, polecam!"</p>
                        <p style="font-weight: 600; margin-top: 1rem;">- Anna K.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div style="color: #F59E0B; margin-bottom: 1rem; font-size: 1.5rem;">⭐⭐⭐⭐⭐</div>
                        <p class="card-description">"Rewelacyjna lokalizacja i komfortowe warunki. Na pewno wrócimy!"</p>
                        <p style="font-weight: 600; margin-top: 1rem;">- Piotr M.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-content">
                        <div style="color: #F59E0B; margin-bottom: 1rem; font-size: 1.5rem;">⭐⭐⭐⭐⭐</div>
                        <p class="card-description">"Piękny obiekt, czysto i przytulnie. Gorąco polecam!"</p>
                        <p style="font-weight: 600; margin-top: 1rem;">- Katarzyna W.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- LOKALIZACJA -->
    <section id="lokalizacja" class="section section-alt">
        <div class="container">
            <div class="section-title">
                <h2>Lokalizacja</h2>
                <p>Znajdź nas łatwo</p>
            </div>

            <div class="grid grid-cols-2">
                <div>
                    <h3>Jak do nas trafić?</h3>
                    <p>Nasz obiekt znajduje się w doskonałej lokalizacji, z łatwym dojazdem zarówno samochodem jak i komunikacją miejską.</p>
                    <div style="margin-top: 2rem;">
                        <h4 style="margin-bottom: 1rem;">Dojazd:</h4>
                        <ul style="list-style: disc; padding-left: 1.5rem;">
                            <li style="margin-bottom: 0.5rem;">🚗 Parking dla gości</li>
                            <li style="margin-bottom: 0.5rem;">🚌 Przystanek autobusowy 200m</li>
                            <li style="margin-bottom: 0.5rem;">🚂 Dworzec kolejowy 2km</li>
                            <li style="margin-bottom: 0.5rem;">✈️ Lotnisko 15km</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div style="background: #E5E7EB; border-radius: 1rem; padding: 3rem; text-align: center; height: 100%; display: flex; align-items: center; justify-content: center;">
                        <div>
                            <p style="font-size: 3rem; margin-bottom: 1rem;">📍</p>
                            <p style="font-weight: 600;">Tutaj umieść mapę Google Maps</p>
                            <p style="font-size: 0.875rem; color: #6B7280; margin-top: 0.5rem;">Dodaj kod iframe mapy w idobooking</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- KONTAKT -->
    <section id="kontakt" class="section section-light">
        <div class="container">
            <div class="section-title">
                <h2>Kontakt i Rezerwacja</h2>
                <p>Skontaktuj się z nami lub zarezerwuj pobyt</p>
            </div>

            <div class="grid grid-cols-2">
                <div>
                    <h3>Dane kontaktowe</h3>
                    <div style="margin-top: 2rem;">
                        <div style="margin-bottom: 1.5rem;">
                            <strong>📧 Email:</strong><br>
                            <a href="mailto:kontakt@example.com" style="color: var(--color-primary);">kontakt@example.com</a>
                        </div>
                        <div style="margin-bottom: 1.5rem;">
                            <strong>📱 Telefon:</strong><br>
                            <a href="tel:+48123456789" style="color: var(--color-primary);">+48 123 456 789</a>
                        </div>
                        <div style="margin-bottom: 1.5rem;">
                            <strong>📍 Adres:</strong><br>
                            ul. Przykładowa 123<br>
                            00-000 Miasto
                        </div>
                        <div>
                            <strong>🕐 Godziny przyjazdu:</strong><br>
                            Zameldowanie: 14:00<br>
                            Wymeldowanie: 11:00
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Formularz kontaktowy</h3>
                    <form class="contact-form" style="margin-top: 2rem;">
                        <div class="form-group">
                            <label class="form-label">Imię i nazwisko</label>
                            <input type="text" class="form-input" placeholder="Jan Kowalski">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-input" placeholder="jan@example.com">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Wiadomość</label>
                            <textarea class="form-textarea" placeholder="Twoja wiadomość..."></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Wyślij wiadomość</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>${propertyName}</h4>
                    <p>Twoje miejsce na wyjątkowy wypoczynek. Zapraszamy do rezerwacji!</p>
                    <div class="footer-social">
                        <a href="#" aria-label="Facebook">📘</a>
                        <a href="#" aria-label="Instagram">📷</a>
                        <a href="#" aria-label="Twitter">🐦</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Linki</h4>
                    <div class="footer-links">
                        <a href="#o-nas">O nas</a>
                        <a href="#pokoje">Pokoje</a>
                        <a href="#udogodnienia">Udogodnienia</a>
                        <a href="#galeria">Galeria</a>
                        <a href="#kontakt">Kontakt</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Kontakt</h4>
                    <div class="footer-links">
                        <a href="mailto:kontakt@example.com">📧 kontakt@example.com</a>
                        <a href="tel:+48123456789">📱 +48 123 456 789</a>
                        <a href="#">📍 ul. Przykładowa 123</a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} ${propertyName}. Wszystkie prawa zastrzeżone.</p>
            </div>
        </div>
    </footer>

    <!-- SCRIPTS -->
    <script>
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.site-header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    </script>
</body>
</html>`;

    return html;
}

function generateRoomCard(obj) {
    const imageUrl = obj.images[0] || 'https://via.placeholder.com/400x300';

    return `                <div class="card">
                    ${obj.images.length > 0 ? `<div class="card-image">
                        <img src="${imageUrl}" alt="${obj.name}">
                    </div>` : ''}
                    <div class="card-content">
                        <h3 class="card-title">${obj.name}</h3>
                        <p class="card-description">${obj.description}</p>
                        ${obj.amenities.length > 0 ? `
                        <div class="amenities-grid">
                            ${obj.amenities.slice(0, 6).map(amenity => `
                            <div class="amenity-item">
                                <span class="amenity-icon">${amenity.split(' ')[0]}</span>
                                <span class="amenity-label">${amenity.substring(amenity.indexOf(' ') + 1)}</span>
                            </div>`).join('')}
                        </div>` : ''}
                    </div>
                    ${obj.price ? `<div class="card-footer">
                        <div class="card-price">${obj.price} <span>/ noc</span></div>
                        <a href="#rezerwuj" class="btn btn-primary">Rezerwuj</a>
                    </div>` : ''}
                </div>`;
}

function displayGeneratedCode(html, css) {
    // Utwórz modal z wynikami
    const modal = document.createElement('div');
    modal.className = 'modal modal-large';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeModal(this)"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>🎉 Kod wygenerowany!</h3>
                <button class="btn-close" onclick="closeModal(this)">✕</button>
            </div>
            <div class="modal-body">
                <div class="code-section">
                    <h4>📄 HTML (HEAD + BODY + END OF BODY)</h4>
                    <div class="code-actions">
                        <button class="btn-sm btn-secondary" onclick="copyToClipboard('html-code')">📋 Kopiuj</button>
                        <button class="btn-sm btn-secondary" onclick="downloadFile('index.html', 'html-code')">💾 Pobierz</button>
                    </div>
                    <pre><code id="html-code">${escapeHtml(html)}</code></pre>
                </div>

                <div class="code-section">
                    <h4>🎨 CSS (MOST IMPORTANT - 2000+ linii)</h4>
                    <div class="code-actions">
                        <button class="btn-sm btn-secondary" onclick="copyToClipboard('css-code')">📋 Kopiuj</button>
                        <button class="btn-sm btn-secondary" onclick="downloadFile('styles.css', 'css-code')">💾 Pobierz</button>
                    </div>
                    <pre><code id="css-code">${escapeHtml(css)}</code></pre>
                </div>

                <div class="info-box">
                    <h4>📝 Jak użyć w idobooking:</h4>
                    <ol>
                        <li><strong>HEAD:</strong> Skopiuj tag &lt;link rel="stylesheet"&gt; do sekcji HEAD</li>
                        <li><strong>BODY:</strong> Skopiuj zawartość &lt;body&gt; do sekcji BODY</li>
                        <li><strong>CMS (MOST IMPORTANT):</strong> Wklej cały CSS do sekcji CMS</li>
                        <li><strong>END OF BODY:</strong> Skopiuj &lt;script&gt; przed zamknięciem &lt;/body&gt;</li>
                    </ol>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-primary" onclick="closeModal(this)">Zamknij</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.classList.add('active');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;

    navigator.clipboard.writeText(text).then(() => {
        alert('✅ Skopiowano do schowka!');
    }).catch(err => {
        console.error('Błąd kopiowania:', err);
        alert('❌ Nie udało się skopiować');
    });
}

function downloadFile(filename, elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);

    console.log('💾 Pobrano plik:', filename);
}

// ========================================
// UTILITIES
// ========================================

function loadGoogleFonts() {
    const fonts = [
        appState.globalSettings.fontHeading,
        appState.globalSettings.fontBody
    ];

    // Usuń stare linki do fontów
    document.querySelectorAll('link[data-font]').forEach(link => link.remove());

    // Dodaj nowe
    fonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `https://fonts.googleapis.com/css2?family=${font.replace(' ', '+')}:wght@300;400;500;600;700&display=swap`;
        link.setAttribute('data-font', font);
        document.head.appendChild(link);
    });
}

function renderBuilderUI() {
    // Renderuj listę szablonów
    const templateSelect = document.getElementById('templateSelect');
    if (templateSelect && typeof templates !== 'undefined') {
        templateSelect.innerHTML = `
            <option value="">Wybierz szablon...</option>
            ${templates.map(t => `
                <option value="${t.id}">${t.name}</option>
            `).join('')}
        `;
    }

    // Renderuj listę obiektów
    renderObjectsList();
}

// Ekspozycja funkcji do window (dla onclick)
window.addNewObject = addNewObject;
window.removeObject = removeObject;
window.editObject = editObject;
window.duplicateObject = duplicateObject;
window.saveObject = saveObject;
window.closeModal = closeModal;
window.addCustomField = addCustomField;
window.removeCustomField = removeCustomField;
window.addCustomAmenity = addCustomAmenity;
window.generateCode = generateCode;
window.copyToClipboard = copyToClipboard;
window.downloadFile = downloadFile;

console.log('✅ App.js loaded successfully!');
