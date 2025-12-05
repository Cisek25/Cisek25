// Amenities data - 72+ opcji
const amenitiesData = {
    basic: [
        '📶 WiFi', '🅿️ Parking', '🍳 Kuchnia', '📺 TV', '❄️ Klimatyzacja', '🔥 Ogrzewanie',
        '🥐 Śniadanie', '🍽️ Restauracja', '☕ Ekspres do kawy', '🧺 Pralka', '👕 Suszarka',
        '🍽️ Zmywarka', '📟 Mikrofalówka', '🧊 Lodówka', '🍳 Kuchenka', '🔪 Sztućce',
        '🧼 Pralnia', '👔 Żelazko', '💇 Suszarka do włosów'
    ],
    premium: [
        '💆 SPA', '🏊 Basen', '🧖 Sauna', '🛁 Jacuzzi', '💪 Siłownia', '🧘 Sala fitness',
        '🎾 Kort tenisowy', '⛳ Pole golfowe', '🎱 Bilard', '🎯 Sala gier', '🎬 Kino domowe',
        '🎹 Fortepian', '📚 Biblioteka', '🍷 Piwniczka z winem', '🎨 Galeria sztuki',
        '💼 Centrum biznesowe', '🖨️ Drukar/skaner', '📞 Sala konferencyjna'
    ],
    outdoor: [
        '🌆 Balkon', '☀️ Taras', '🌳 Ogród', '🔥 Grill', '🪵 Kominek zewnętrzny',
        '🏖️ Dostęp do plaży', '⛰️ Widok na góry', '🌊 Widok na morze', '🏞️ Widok na jezioro',
        '🚣 Kajaki', '🏄 Deski SUP', '🚴 Rowery', '⛷️ Sprzęt narciarski', '🎿 Przechowalnia',
        '🐴 Stajnia', '🦌 Safari', '🎣 Wędkarstwo', '⛺ Miejsce na ognisko'
    ],
    other: [
        '🐾 Zwierzęta', '🚭 Dla niepalących', '🔇 Dźwiękoszczelne', '♿ Dostępność',
        '🛗 Winda', '🔐 Sejf', '🔒 Ochrona 24h', '🕐 Recepcja 24h', '🧳 Przechowywalni bagażu',
        '🚗 Transfer', '🚕 Taxi', '🚌 Transport', '🚪 Oddzielne wejście', '💼 Biurko',
        '👗 Szafa', '🪞 Lustro', '🛏️ Pościel premium', '🛁 Szlafroki', '🧴 Kosmetyki',
        '📖 Przewodniki', '🗺️ Mapy', '🎫 Bilety', '🎟️ Concierge'
    ]
};

// Templates - 17 szablonów
const templates = {
    'luxury-mountain': {
        name: 'Luksusowe Apartamenty Tatrzańskie',
        short: 'Ekskluzywne apartamenty z panoramicznym widokiem na Tatry. Premium wyposażenie i 5-gwiazdkowy standard.',
        long: 'Nasze luksusowe apartamenty położone są w sercu Zakopanego, oferując zapierające dech w piersiach widoki na Tatry. Każdy apartament został zaprojektowany z myślą o maksymalnym komforcie i elegancji, wyposażony w najnowocześniejszy sprzęt AGD, klimatyzację, system Smart Home oraz ekskluzywne meble. Goście mają do dyspozycji prywatny parking, całodobową recepcję oraz dostęp do strefy wellness z sauną i jacuzzi.',
        area: 85, price: 650, guests: 6, rooms: 3, beds: 3, bathrooms: 2,
        col1: '#2C3E50', col2: '#F59E0B',
        amenities: {basic: [0,1,2,3,4,5,6,8,9,10,11,12,18], premium: [0,1,2,3,4,5,15,16], outdoor: [0,1,2,6], other: [3,4,5,6,7]}
    },
    'mountain-chalet': {
        name: 'Alpine Chalet Premium',
        short: 'Ekskluzywny chalet w stylu alpejskim z kominkiem, sauną i widokiem na szczyty.',
        long: 'Oryginalny alpejski chalet połączony z nowoczesnym komfortem. Drewniana konstrukcja, stylowe wnętrza, prywatna sauna i panoramiczne okna. Idealny na rodzinny wypoczynek w górach.',
        area: 120, price: 890, guests: 8, rooms: 4, beds: 4, bathrooms: 3,
        col1: '#92400E', col2: '#16A34A',
        amenities: {basic: [0,1,2,3,4,5,8,9,13], premium: [0,2,3,4,11,13], outdoor: [1,2,3,4,6,12,13], other: [0,1,3,4,7]}
    },
    'ski-resort': {
        name: 'Mountain Ski Resort',
        short: 'Resort narciarski ski-in/ski-out. Bezpośredni dostęp do stoków, wypożyczalnia, szkoła narciarska.',
        long: 'Kompletny resort narciarski z bezpośrednim dostępem do tras zjazdowych. Wypożyczalnia sprzętu, szkoła narciarska, SPA wellness, restauracje. Wszystko czego potrzebujesz w jednym miejscu.',
        area: 55, price: 420, guests: 5, rooms: 2, beds: 2, bathrooms: 2,
        col1: '#3B82F6', col2: '#F59E0B',
        amenities: {basic: [0,1,3,4,5,6,7,8,18], premium: [0,1,2,3,4,6], outdoor: [0,6,12,13], other: [1,3,4,5,7,8,9]}
    },
    'beach-resort': {
        name: 'Seaside Luxury Resort',
        short: 'Resort 5* nad morzem. Prywatna plaża, basen infinity, SPA, all inclusive.',
        long: 'Ekskluzywny resort położony bezpośrednio przy piaszczystej plaży. Basen infinity z widokiem na ocean, prywatna plaża, program all inclusive, SPA & wellness, animacje dla dzieci i dorosłych.',
        area: 65, price: 850, guests: 4, rooms: 2, beds: 2, bathrooms: 2,
        col1: '#0EA5E9', col2: '#F59E0B',
        amenities: {basic: [0,1,3,4,5,6,7,8], premium: [0,1,2,3,4,5,13,15], outdoor: [0,1,5,7,9,10], other: [1,3,4,5,6,7,8,9,10]}
    },
    'beach-villa': {
        name: 'Ocean View Villa',
        short: 'Luksusowa willa z basenem i widokiem na ocean. Bezpośredni dostęp do plaży.',
        long: 'Prywatna willa na wybrzeżu z niesamowitym widokiem na ocean. Basen infinity, jacuzzi, taras z leżakami, prywatny dostęp do plaży. Dom zaprojektowany dla maksymalnej prywatności i relaksu.',
        area: 180, price: 1200, guests: 10, rooms: 5, beds: 5, bathrooms: 4,
        col1: '#0EA5E9', col2: '#EC4899',
        amenities: {basic: [0,1,2,3,4,5,8,9,10,11,12,13,14], premium: [0,1,2,3,4,10,13,14], outdoor: [0,1,2,3,5,7,9,10], other: [0,1,3,5,6,12,14]}
    },
    'lighthouse': {
        name: 'Lighthouse Boutique Stay',
        short: 'Butikowy hotel w zabytkowej latarni morskiej. Wyjątkowe doświadczenie nad morzem.',
        long: 'Odnowiona latarnia morska przekształcona w ekskluzywny butikowy hotel. Unikalne wnętrza, panoramiczne widoki 360°, romantyczna atmosfera. Idealne na wyjątkowy pobyt.',
        area: 45, price: 550, guests: 2, rooms: 1, beds: 1, bathrooms: 1,
        col1: '#E74C3C', col2: '#3498DB',
        amenities: {basic: [0,3,4,5,8,13], premium: [10,11,12], outdoor: [0,7,17], other: [1,3,4,7,12,19,20]}
    },
    'city-hostel': {
        name: 'Urban Hub Hostel',
        short: 'Nowoczesny hostel w centrum miasta. Wspaniała lokalizacja, przystępne ceny, świetna atmosfera.',
        long: 'Hostel w samym sercu miasta, idealny dla backpackerów i młodych podróżników. Czyste pokoje, wspólna kuchnia, strefa coworkingowa, organizowane eventy. Wszystkie atrakcje w zasięgu spaceru.',
        area: 25, price: 45, guests: 4, rooms: 1, beds: 4, bathrooms: 1,
        col1: '#3B82F6', col2: '#10B981',
        amenities: {basic: [0,2,3,5,9,18], premium: [16], outdoor: [], other: [1,4,5,7,8,9,14,20,21,22]}
    },
    'boutique-hotel': {
        name: 'The Grand Boutique Hotel',
        short: 'Butikowy hotel w zabytkowej kamienicy. Elegancja, design i wyjątkowa atmosfera.',
        long: 'Ekskluzywny butikowy hotel mieszczący się w odnowionej kamienicy z XIX wieku. Stylowe wnętrza łączące historię z nowoczesnością, wysoki standard obsługi, restauracja ze znakomitą kuchnią.',
        area: 40, price: 380, guests: 2, rooms: 1, beds: 1, bathrooms: 1,
        col1: '#8B5CF6', col2: '#EC4899',
        amenities: {basic: [0,1,3,4,5,6,7,8,18], premium: [0,4,11,12,15,17], outdoor: [0], other: [1,3,4,5,6,7,8,14,17,18,20,22]}
    },
    'loft': {
        name: 'Industrial Loft Downtown',
        short: 'Stylowy loft w centrum miasta. Design industrialny, wysokie sufity, naturalne światło.',
        long: 'Przestronny loft w poprzemysłowej kamienicy. Ceglane ściany, otwarta przestrzeń, industrialny design. Idealne miejsce dla miłośników nowoczesnej architektury i miejskiego stylu życia.',
        area: 95, price: 420, guests: 4, rooms: 2, beds: 2, bathrooms: 1,
        col1: '#2C3E50', col2: '#E67E22',
        amenities: {basic: [0,1,2,3,4,5,8,9,10,11,12,13,14], premium: [10,16], outdoor: [0], other: [1,3,4,12,14,15]}
    },
    'cottage': {
        name: 'Forest Hideaway Cottage',
        short: 'Drewniany domek w lesie. Cisza, spokój, kontakt z naturą. Kominek i prywatny grill.',
        long: 'Klimatyczny domek w głębi lasu, idealny na ucieczkę od codzienności. Drewniana konstrukcja, kominek, w pełni wyposażona kuchnia, taras z widokiem na las. Prawdziwy relaks z dala od zgiełku.',
        area: 55, price: 280, guests: 5, rooms: 2, beds: 2, bathrooms: 1,
        col1: '#92400E', col2: '#16A34A',
        amenities: {basic: [0,1,2,3,5,8,9,13,14], premium: [], outdoor: [1,2,3,4,8,11,17], other: [0,1,12,14]}
    },
    'farm-stay': {
        name: 'Sunshine Farm Agroturystyka',
        short: 'Rodzinna agroturystyka. Świeże produkty, kontakt ze zwierzętami, rekreacja na łonie natury.',
        long: 'Tradycyjna agroturystyka prowadzona przez rodzinę od pokoleń. Domowe jedzenie ze świeżych produktów, zwierzęta gospodarskie, warsztaty kulinarne, spacery po okolicy. Prawdziwa wiejska atmosfera.',
        area: 40, price: 180, guests: 4, rooms: 2, beds: 2, bathrooms: 1,
        col1: '#F59E0B', col2: '#10B981',
        amenities: {basic: [0,1,2,3,5,6,8], premium: [], outdoor: [2,3,11,14,16,17], other: [0,7,19,20]}
    },
    'vineyard': {
        name: 'Vineyard Estate Wine & Stay',
        short: 'Winnica z noclegami. Degustacje win, spacery po winnicy, wykwintna kuchnia.',
        long: 'Ekskluzywny nocleg na terenie rodzinnej winnicy. Degustacje win, warsztaty enologiczne, spacery po winnicy, restauracja serwująca dania z lokalnych produktów. Połączenie relaksu z odkrywaniem świata win.',
        area: 70, price: 520, guests: 4, rooms: 2, beds: 2, bathrooms: 2,
        col1: '#9B59B6', col2: '#E74C3C',
        amenities: {basic: [0,1,2,3,4,5,6,7,8], premium: [0,13,14], outdoor: [1,2,3,8,11,17], other: [1,3,5,7,12,19,20,22]}
    },
    'spa': {
        name: 'Serenity Wellness Retreat',
        short: 'Ośrodek wellness & SPA. Zabiegi, masaże, joga, medytacja, detoks. Pełna regeneracja.',
        long: 'Ekskluzywny ośrodek wellness oferujący kompleksową regenerację ciała i umysłu. Profesjonalne SPA z szeroką gamą zabiegów, basen, sauna, jacuzzi, siłownia, zajęcia jogi i medytacji. Zdrowa, organiczna kuchnia.',
        area: 45, price: 580, guests: 2, rooms: 1, beds: 1, bathrooms: 1,
        col1: '#8B5CF6', col2: '#EC4899',
        amenities: {basic: [0,1,3,4,5,6,7,8,18], premium: [0,1,2,3,4,5,11,15], outdoor: [1,2], other: [1,3,4,5,6,7,8,17,18]}
    },
    'yoga-retreat': {
        name: 'Mountain Yoga Sanctuary',
        short: 'Retreat jogi w górach. Codzienne zajęcia, medytacja, wegańska kuchnia, spokój.',
        long: 'Sanktuarium jogi w otoczeniu gór. Codzienn zajęcia jogi i medytacji prowadzone przez doświadczonych instruktorów, wegańska kuchnia, warsztaty mindfulness, spacery po górach. Idealne miejsce na reset i odnowę.',
        area: 35, price: 350, guests: 2, rooms: 1, beds: 1, bathrooms: 1,
        col1: '#10B981', col2: '#F59E0B',
        amenities: {basic: [0,3,5,6,8], premium: [0,2,5,11], outdoor: [1,2,6,8,17], other: [1,3,7,19,20]}
    },
    'castle': {
        name: 'Royal Castle Experience',
        short: 'Nocleg w zamku. Historia, elegancja, przepych. Wyjątkowe przeżycie w królewskim stylu.',
        long: 'Zabytkowy zamek otwarty dla gości pragnących doświadczyć życia w królewskim stylu. Zabytkowe komnaty, stylowe wnętrza, ekskluzywna restauracja, park zamkowy. Każdy pokój opowiada swoją historię.',
        area: 90, price: 950, guests: 4, rooms: 2, beds: 2, bathrooms: 2,
        col1: '#8E44AD', col2: '#E74C3C',
        amenities: {basic: [0,1,3,4,5,6,7,8,18], premium: [0,4,11,12,14,15,17], outdoor: [2,8,14], other: [3,4,5,6,7,8,14,17,18,19,20,22]}
    },
    'mansion': {
        name: 'Heritage Mansion Estate',
        short: 'Luksusowa rezydencja w zabytkowym majątku. Elegancja, przestrzeń, prywatność.',
        long: 'Zabytkowa rezydencja z XIX wieku w otoczeniu parku. Stylowe wnętrza, antyczne meble, nowoczesne udogodnienia. Idealne na rodzinne święta, eventy czy romantyczny wypoczynek z dala od zgiełku.',
        area: 250, price: 1500, guests: 12, rooms: 6, beds: 6, bathrooms: 5,
        col1: '#2C3E50', col2: '#F39C12',
        amenities: {basic: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,18], premium: [0,1,2,3,4,10,11,12,13,14,15,16,17], outdoor: [0,1,2,3,8,14,15], other: [0,3,4,5,6,12,14,15,16,17,18]}
    }
};

// Init
function init() {
    renderAmenities();
    addImg();
    syncColors();
}

function renderAmenities() {
    Object.keys(amenitiesData).forEach(category => {
        const container = document.getElementById('amenities-' + category);
        amenitiesData[category].forEach((amenity, idx) => {
            const div = document.createElement('div');
            div.className = 'amenity';
            div.innerHTML = '<input type="checkbox" id="am-' + category + '-' + idx + '" value="' + escHtml(amenity) + '"><label for="am-' + category + '-' + idx + '">' + escHtml(amenity) + '</label>';
            container.appendChild(div);
        });
    });
}

function syncColors() {
    document.getElementById('col1').oninput = e => document.getElementById('col1t').value = e.target.value;
    document.getElementById('col1t').oninput = e => document.getElementById('col1').value = e.target.value;
    document.getElementById('col2').oninput = e => document.getElementById('col2t').value = e.target.value;
    document.getElementById('col2t').oninput = e => document.getElementById('col2').value = e.target.value;
}

function setColors(c1, c2) {
    document.getElementById('col1').value = c1;
    document.getElementById('col1t').value = c1;
    document.getElementById('col2').value = c2;
    document.getElementById('col2t').value = c2;
}

function showTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.amenities-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('amenities-' + tab).classList.add('active');
}

function addImg() {
    const container = document.getElementById('images');
    const div = document.createElement('div');
    div.className = 'image-row';
    div.innerHTML = '<input type="text" class="img-url" placeholder="https://..."><button class="btn-remove" onclick="removeImg(this)">×</button>';
    container.appendChild(div);
}

function removeImg(btn) {
    if (document.querySelectorAll('.image-row').length > 1) {
        btn.parentElement.remove();
    }
}

function loadTemplate() {
    const key = document.getElementById('template').value;
    const t = templates[key];
    if (!t) return;

    document.getElementById('name').value = t.name;
    document.getElementById('short').value = t.short;
    document.getElementById('long').value = t.long;
    document.getElementById('area').value = t.area;
    document.getElementById('price').value = t.price;
    document.getElementById('guests').value = t.guests;
    document.getElementById('rooms').value = t.rooms;
    document.getElementById('beds').value = t.beds;
    document.getElementById('bathrooms').value = t.bathrooms || '';
    setColors(t.col1, t.col2);

    document.querySelectorAll('.amenity input').forEach(cb => cb.checked = false);
    Object.keys(t.amenities).forEach(category => {
        t.amenities[category].forEach(idx => {
            const cb = document.getElementById('am-' + category + '-' + idx);
            if (cb) cb.checked = true;
        });
    });
}

function escHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function generate() {
    const name = document.getElementById('name').value.trim();
    if (!name) {
        alert('Proszę podać nazwę obiektu!');
        return;
    }

    const data = {
        name: name,
        short: document.getElementById('short').value.trim(),
        long: document.getElementById('long').value.trim(),
        area: document.getElementById('area').value,
        price: document.getElementById('price').value,
        guests: document.getElementById('guests').value,
        rooms: document.getElementById('rooms').value,
        beds: document.getElementById('beds').value,
        bathrooms: document.getElementById('bathrooms').value,
        col1: document.getElementById('col1t').value,
        col2: document.getElementById('col2t').value,
        images: Array.from(document.querySelectorAll('.img-url')).map(i => i.value.trim()).filter(v => v),
        amenities: Array.from(document.querySelectorAll('.amenity input:checked')).map(cb => cb.value)
    };

    const output = document.getElementById('output');
    output.innerHTML = '';

    const sections = [
        {title: '📄 Kod do &lt;head&gt;', id: 'head', code: genHead(data)},
        {title: '🔝 Hero Section (&lt;body&gt;)', id: 'hero', code: genHero(data)},
        {title: '🎨 Sekcja CMS', id: 'cms', code: genCMS(data)},
        {title: '🔚 JavaScript (&lt;/body&gt;)', id: 'js', code: genJS(data)},
        {title: '💎 Arkusz CSS', id: 'css', code: genCSS(data)}
    ];

    sections.forEach(s => {
        const card = document.createElement('div');
        card.className = 'code-card';
        card.innerHTML = '<div class="code-header"><h3>' + s.title + '</h3><button class="btn-copy" onclick="copy(\'' + s.id + '\', this)">Kopiuj</button></div><div class="code-box"><pre id="' + s.id + '">' + escHtml(s.code) + '</pre></div>';
        output.appendChild(card);
    });

    output.scrollIntoView({behavior: 'smooth'});
}

function copy(id, btn) {
    const code = document.getElementById(id).textContent;
    navigator.clipboard.writeText(code).then(() => {
        btn.textContent = '✓ Skopiowano!';
        btn.classList.add('success');
        setTimeout(() => {
            btn.textContent = 'Kopiuj';
            btn.classList.remove('success');
        }, 2000);
    }).catch(() => alert('Błąd kopiowania'));
}

function genHead(d) {
    return '<!-- Meta tags -->\n<meta name="description" content="' + escHtml(d.short) + '">\n<meta property="og:title" content="' + escHtml(d.name) + '">\n<meta property="og:description" content="' + escHtml(d.short) + '">\n' + (d.images[0] ? '<meta property="og:image" content="' + d.images[0] + '">\n' : '') + '\n<!-- Fonts -->\n<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">\n\n<!-- CSS -->\n<link rel="stylesheet" href="styles.css">';
}

function genHero(d) {
    let badges = '';
    if (d.area) badges += '<span class="badge">📏 ' + d.area + ' m²</span>\n            ';
    if (d.guests) badges += '<span class="badge">👥 ' + d.guests + ' os.</span>\n            ';
    if (d.rooms) badges += '<span class="badge">🚪 ' + d.rooms + ' pok.</span>\n            ';
    if (d.beds) badges += '<span class="badge">🛏️ ' + d.beds + ' łóż.</span>\n            ';
    if (d.bathrooms) badges += '<span class="badge">🛁 ' + d.bathrooms + ' łaz.</span>\n            ';
    if (d.price) badges += '<span class="badge">💰 Od ' + d.price + ' zł</span>';

    return '<section class="hero" style="background: linear-gradient(135deg, ' + d.col1 + ', ' + d.col2 + ');">\n    <div class="hero-content">\n        <h1>' + escHtml(d.name) + '</h1>\n        <p>' + escHtml(d.short) + '</p>\n        <div class="hero-badges">\n            ' + badges + '\n        </div>\n        <a href="#booking" class="cta">Zarezerwuj</a>\n    </div>\n</section>';
}

function genCMS(d) {
    let amenitiesHTML = '';
    if (d.amenities.length > 0) {
        amenitiesHTML = '\n    <div class="amenities">\n        <h3>✨ Udogodnienia</h3>\n        <div class="amenities-grid">\n            ' + d.amenities.map(a => '<div class="amenity">' + escHtml(a) + '</div>').join('\n            ') + '\n        </div>\n    </div>';
    }

    let galleryHTML = '';
    if (d.images.length > 0) {
        galleryHTML = '\n    <div class="gallery">\n        <h3>📸 Galeria</h3>\n        <div class="gallery-grid">\n            ' + d.images.map(img => '<div class="gallery-item"><img src="' + img + '" alt="' + escHtml(d.name) + '" loading="lazy"></div>').join('\n            ') + '\n        </div>\n    </div>';
    }

    return '<section class="content">\n    <div class="container">\n        <div class="description">\n            <h2>O obiekcie</h2>\n            <p>' + escHtml(d.long) + '</p>\n        </div>' + amenitiesHTML + galleryHTML + '\n        <div class="booking">\n            <h3>📅 Rezerwacja</h3>\n            <p>Sprawdź dostępność i zarezerwuj pobyt</p>\n            <a href="#booking" class="btn">Sprawdź dostępność</a>\n        </div>\n    </div>\n</section>';
}

function genJS(d) {
    return '<script>\n// Smooth scroll\ndocument.querySelectorAll(\'a[href^="#"]\').forEach(a => {\n    a.addEventListener(\'click\', e => {\n        e.preventDefault();\n        const t = document.querySelector(a.getAttribute(\'href\'));\n        if (t) t.scrollIntoView({behavior: \'smooth\'});\n    });\n});\n\n// Lazy load images\nif (\'IntersectionObserver\' in window) {\n    const obs = new IntersectionObserver(entries => {\n        entries.forEach(entry => {\n            if (entry.isIntersecting) {\n                const img = entry.target;\n                img.src = img.dataset.src || img.src;\n                obs.unobserve(img);\n            }\n        });\n    });\n    document.querySelectorAll(\'.gallery img\').forEach(img => obs.observe(img));\n}\n</' + 'script>';
}

function genCSS(d) {
    return '/* ' + escHtml(d.name) + ' */\n:root {\n    --primary: ' + d.col1 + ';\n    --accent: ' + d.col2 + ';\n}\n\n* { margin: 0; padding: 0; box-sizing: border-box; }\n\nbody {\n    font-family: \'Inter\', sans-serif;\n    color: #1a1a1a;\n    line-height: 1.6;\n}\n\n.hero {\n    padding: 120px 20px 80px;\n    text-align: center;\n    color: white;\n}\n\n.hero-content {\n    max-width: 900px;\n    margin: 0 auto;\n}\n\n.hero h1 {\n    font-size: clamp(2.5rem, 5vw, 4rem);\n    font-weight: 800;\n    margin-bottom: 20px;\n}\n\n.hero p {\n    font-size: clamp(1.1rem, 2vw, 1.4rem);\n    margin-bottom: 30px;\n    opacity: 0.95;\n}\n\n.hero-badges {\n    display: flex;\n    gap: 15px;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin-bottom: 40px;\n}\n\n.badge {\n    background: rgba(255,255,255,0.2);\n    backdrop-filter: blur(10px);\n    padding: 10px 20px;\n    border-radius: 50px;\n    font-weight: 600;\n}\n\n.cta, .btn {\n    display: inline-block;\n    background: white;\n    color: var(--primary);\n    padding: 18px 40px;\n    border-radius: 50px;\n    text-decoration: none;\n    font-weight: 700;\n    transition: transform 0.3s;\n}\n\n.cta:hover, .btn:hover {\n    transform: translateY(-3px);\n}\n\n.content {\n    padding: 80px 20px;\n    background: #f7fafc;\n}\n\n.container {\n    max-width: 1200px;\n    margin: 0 auto;\n}\n\n.description, .amenities, .gallery, .booking {\n    background: white;\n    padding: 40px;\n    border-radius: 20px;\n    margin-bottom: 40px;\n    box-shadow: 0 4px 20px rgba(0,0,0,0.08);\n}\n\n.description h2, .amenities h3, .gallery h3 {\n    color: var(--primary);\n    font-size: 2rem;\n    margin-bottom: 20px;\n}\n\n.amenities-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 15px;\n}\n\n.amenity {\n    background: linear-gradient(135deg, var(--primary), var(--accent));\n    color: white;\n    padding: 15px 20px;\n    border-radius: 12px;\n    text-align: center;\n    font-weight: 600;\n}\n\n.gallery-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 20px;\n}\n\n.gallery-item {\n    border-radius: 15px;\n    overflow: hidden;\n    aspect-ratio: 4/3;\n}\n\n.gallery-item img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n}\n\n.booking {\n    background: linear-gradient(135deg, var(--primary), var(--accent));\n    color: white;\n    text-align: center;\n}\n\n@media (max-width: 768px) {\n    .hero { padding: 80px 20px 60px; }\n    .hero-badges { flex-direction: column; }\n    .amenities-grid, .gallery-grid { grid-template-columns: 1fr; }\n}';
}

init();
