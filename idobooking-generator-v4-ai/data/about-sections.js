// ============================================
// ABOUT-SECTIONS.JS - Różne warianty sekcji "O nas"
// ============================================

const ABOUT_SECTION_VARIANTS = {
    // ============================================
    // HOTELE I PENSJONATY
    // ============================================
    'hotel-elegant': {
        id: 'hotel-elegant',
        name: 'Elegancki Hotel',
        layout: 'split-left-image',
        icon: 'fa-hotel',
        stats: [
            { number: '50+', label: 'pokoi' },
            { number: '4.9', label: 'ocena' },
            { number: '15', label: 'lat tradycji' }
        ],
        title: 'Elegancja i komfort w sercu miasta',
        subtitle: 'Gdzie tradycja spotyka nowoczesność',
        description: 'Nasz hotel to oaza spokoju, gdzie każdy detal został starannie przemyślany, by zapewnić Państwu niezapomniany pobyt. Połączenie klasycznej elegancji z nowoczesnymi udogodnieniami tworzy przestrzeń idealną zarówno dla podróży służbowych, jak i romantycznych weekendów.'
    },

    'hotel-family': {
        id: 'hotel-family',
        name: 'Rodzinny Pensjonat',
        layout: 'split-right-image',
        icon: 'fa-house-chimney',
        stats: [
            { number: '25', label: 'pokoi' },
            { number: '100+', label: 'zadowolonych rodzin' },
            { number: '5 min', label: 'do plaży' }
        ],
        title: 'Twój dom z dala od domu',
        subtitle: 'Rodzinna atmosfera, niezapomniane wspomnienia',
        description: 'Prowadzimy nasz pensjonat od trzech pokoleń, przekazując sobie nawzajem pasję do gościnności. U nas dzieci bawią się bezpiecznie na placu zabaw, rodzice relaksują się przy porannej kawie, a wieczorami wszyscy spotykają się przy ognisku.'
    },

    'hotel-luxury-spa': {
        id: 'hotel-luxury-spa',
        name: 'Luksusowe SPA',
        layout: 'full-width',
        icon: 'fa-spa',
        stats: [
            { number: '1000m²', label: 'strefy SPA' },
            { number: '20+', label: 'zabiegów' },
            { number: '24/7', label: 'obsługa' }
        ],
        title: 'Harmonia ciała i umysłu',
        subtitle: 'Luksusowe zabiegi, kompletny relaks',
        description: 'Zanurz się w świecie absolutnego relaksu. Nasza strefa SPA oferuje holistyczne podejście do wellness, łącząc starożytne techniki z nowoczesnymi terapiami. Każdy zabieg to podróż ku głębokiej odnowie.'
    },

    'hotel-business': {
        id: 'hotel-business',
        name: 'Business Hotel',
        layout: 'cards-grid',
        icon: 'fa-briefcase',
        stats: [
            { number: '5', label: 'sal konferencyjnych' },
            { number: '150', label: 'miejsc' },
            { number: 'Fiber', label: 'internet' }
        ],
        title: 'Profesjonalizm na każdym kroku',
        subtitle: 'Idealne miejsce dla biznesu',
        description: 'Rozumiemy potrzeby współczesnego biznesu. Nowoczesne sale konferencyjne, błyskawiczny internet, usługi concierge 24/7 i doskonała lokalizacja – wszystko, czego potrzeba, by Twoje spotkania biznesowe zakończyły się sukcesem.'
    },

    'hotel-romantic': {
        id: 'hotel-romantic',
        name: 'Romantyczna Ucieczka',
        layout: 'asymmetric',
        icon: 'fa-heart',
        stats: [
            { number: '12', label: 'apartamentów' },
            { number: '∞', label: 'wspomnień' },
            { number: '100%', label: 'prywatności' }
        ],
        title: 'Chwile tylko dla Was',
        subtitle: 'Romantyczny pobyt pełen magii',
        description: 'Stworzyliśmy miejsce, gdzie czas płynie wolniej, a każda chwila jest wyjątkowa. Kolacja przy świecach, prywatne jacuzzi, śniadanie do łóżka – odkryj na nowo siłę waszej miłości.'
    },

    // ============================================
    // APARTAMENTY - 10 WARIANTÓW
    // ============================================
    'apt-modern-loft': {
        id: 'apt-modern-loft',
        name: 'Nowoczesny Loft',
        layout: 'split-left-image',
        icon: 'fa-building',
        category: 'apartments',
        stats: [
            { number: '80m²', label: 'powierzchni' },
            { number: '4K', label: 'Smart TV' },
            { number: '5★', label: 'wyposażenie' }
        ],
        title: 'Przestrzeń, która inspiruje',
        subtitle: 'Nowoczesny design, maksymalny komfort',
        description: 'Nasz loft to idealne połączenie industrialnego charakteru z nowoczesnym designem. Wysokie sufity, otwarta przestrzeń i panoramiczne okna tworzą wyjątkową atmosferę. Pełna kuchnia pozwala na samodzielne przygotowywanie posiłków.'
    },

    'apt-seaside-villa': {
        id: 'apt-seaside-villa',
        name: 'Nadmorska Willa',
        layout: 'full-width',
        icon: 'fa-umbrella-beach',
        category: 'apartments',
        stats: [
            { number: '150m²', label: 'przestrzeni' },
            { number: '50m', label: 'do plaży' },
            { number: '6', label: 'osób max' }
        ],
        title: 'Wakacje marzeń nad morzem',
        subtitle: 'Twój prywatny raj przy plaży',
        description: 'Obudź się z widokiem na morze i szumem fal. Nasza willa oferuje prywatny taras z leżakami, bezpośrednie zejście na plażę i w pełni wyposażoną kuchnię. Idealna dla rodzin szukających luksusowego wypoczynku.'
    },

    'apt-mountain-chalet': {
        id: 'apt-mountain-chalet',
        name: 'Górski Szalet',
        layout: 'split-right-image',
        icon: 'fa-mountain',
        category: 'apartments',
        stats: [
            { number: '120m²', label: 'powierzchni' },
            { number: 'Sauna', label: 'w apartamencie' },
            { number: '360°', label: 'widok na góry' }
        ],
        title: 'Alpejski luksus w polskich górach',
        subtitle: 'Kominek, sauna, góry za oknem',
        description: 'Drewniany szalet z prawdziwym kominkiem, prywatną sauną i tarasem widokowym. Zimą prosto na stok, latem szlaki turystyczne dosłownie za progiem. Ciepło i przytulność na wyciągnięcie ręki.'
    },

    'apt-city-center': {
        id: 'apt-city-center',
        name: 'Centrum Miasta',
        layout: 'cards-grid',
        icon: 'fa-city',
        category: 'apartments',
        stats: [
            { number: '60m²', label: 'nowoczesności' },
            { number: '0 min', label: 'do atrakcji' },
            { number: '24/7', label: 'check-in' }
        ],
        title: 'W sercu akcji',
        subtitle: 'Wszystko na wyciągnięcie ręki',
        description: 'Położony w ścisłym centrum, nasz apartament to baza wypadowa do odkrywania miasta. Restauracje, muzea, kluby – wszystko w zasięgu spaceru. Nowoczesne wnętrze z pełnym wyposażeniem dla maksymalnej wygody.'
    },

    'apt-lake-house': {
        id: 'apt-lake-house',
        name: 'Domek nad Jeziorem',
        layout: 'asymmetric',
        icon: 'fa-water',
        category: 'apartments',
        stats: [
            { number: '100m²', label: 'spokoju' },
            { number: 'Kajak', label: 'w cenie' },
            { number: 'Pomost', label: 'prywatny' }
        ],
        title: 'Cisza, woda, natura',
        subtitle: 'Twoja prywatna przystań',
        description: 'Drewniany dom z własnym pomostem nad krystalicznie czystym jeziorem. Rano kawa na tarasie z widokiem na mgłę nad wodą, po południu pływanie kajakiem, wieczorem ognisko pod gwiazdami.'
    },

    'apt-eco-nest': {
        id: 'apt-eco-nest',
        name: 'Ekologiczne Gniazdko',
        layout: 'split-left-image',
        icon: 'fa-leaf',
        category: 'apartments',
        stats: [
            { number: '100%', label: 'eko materiały' },
            { number: 'Solar', label: 'energia' },
            { number: 'Bio', label: 'śniadanie' }
        ],
        title: 'W harmonii z naturą',
        subtitle: 'Odpoczynek bez śladu węglowego',
        description: 'Nasz apartament to dowód, że luksus może być ekologiczny. Naturalne materiały, energia odnawialna, produkty lokalne. Odpoczywaj z czystym sumieniem, wiedząc że Twój pobyt nie obciąża planety.'
    },

    'apt-artist-studio': {
        id: 'apt-artist-studio',
        name: 'Studio Artysty',
        layout: 'full-width',
        icon: 'fa-palette',
        category: 'apartments',
        stats: [
            { number: '90m²', label: 'kreatywności' },
            { number: '3m', label: 'sufity' },
            { number: 'Północ', label: 'światło' }
        ],
        title: 'Gdzie rodzi się sztuka',
        subtitle: 'Inspirująca przestrzeń dla twórców',
        description: 'Dawna pracownia malarza przekształcona w wyjątkowy apartament. Olbrzymie okna dające naturalne północne światło, oryginalne dzieła sztuki, fortepian w salonie. Miejsce, które pobudza wyobraźnię.'
    },

    'apt-historic-charm': {
        id: 'apt-historic-charm',
        name: 'Historyczny Urok',
        layout: 'split-right-image',
        icon: 'fa-landmark',
        category: 'apartments',
        stats: [
            { number: 'XVIII w.', label: 'kamienica' },
            { number: '130m²', label: 'historii' },
            { number: 'Freski', label: 'oryginalne' }
        ],
        title: 'Zamieszkaj w historii',
        subtitle: 'Autentyczny duch przeszłości',
        description: 'Apartament w zabytkowej kamienicy z zachowanymi oryginalnymi freskami i sztukateriami. Wyposażenie łączy antyki z nowoczesnymi udogodnieniami. Śpij jak hrabia, korzystaj z internetu jak w XXI wieku.'
    },

    'apt-penthouse': {
        id: 'apt-penthouse',
        name: 'Penthouse z Widokiem',
        layout: 'cards-grid',
        icon: 'fa-crown',
        category: 'apartments',
        stats: [
            { number: '200m²', label: 'luksusu' },
            { number: '25 p.', label: 'piętro' },
            { number: '180°', label: 'panorama' }
        ],
        title: 'Na szczycie miasta',
        subtitle: 'Widoki, które zapierają dech',
        description: 'Dwupoziomowy penthouse na ostatnim piętrze wieżowca. Prywatny taras z jacuzzi, panoramiczne widoki na miasto, profesjonalna kuchnia. Dla tych, którzy oczekują tylko tego, co najlepsze.'
    },

    'apt-cozy-studio': {
        id: 'apt-cozy-studio',
        name: 'Przytulne Studio',
        layout: 'asymmetric',
        icon: 'fa-home',
        category: 'apartments',
        stats: [
            { number: '35m²', label: 'funkcjonalności' },
            { number: 'Netflix', label: 'w cenie' },
            { number: 'Mini', label: 'kuchnia' }
        ],
        title: 'Małe, ale zachwycające',
        subtitle: 'Wszystko czego potrzebujesz',
        description: 'Kompaktowe studio zaprojektowane z myślą o maksymalnej funkcjonalności. Każdy metr wykorzystany perfekcyjnie – od wygodnego łóżka przez miniaturową kuchnię po przytulny kącik do pracy lub relaksu.'
    }
};

// ============================================
// LAYOUT GENERATORS
// ============================================
const AboutSectionLayouts = {
    'split-left-image': (variant, settings) => `
<section class="section-intro" id="o-nas">
    <div class="container">
        <div class="intro-grid">
            <div class="intro-image">
                <img src="${settings.mainImage || 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800'}" alt="${settings.propertyName}">
            </div>
            <div class="intro-content">
                <span class="section-label"><i class="fas ${variant.icon}"></i> ${variant.subtitle}</span>
                <h2 class="section-title">${variant.title}</h2>
                <p class="intro-lead">${variant.description}</p>
                <div class="intro-stats">
                    ${variant.stats.map(s => `
                    <div class="stat-item">
                        <span class="stat-number">${s.number}</span>
                        <span class="stat-label">${s.label}</span>
                    </div>`).join('')}
                </div>
            </div>
        </div>
    </div>
</section>`,

    'split-right-image': (variant, settings) => `
<section class="section-intro section-intro-reverse" id="o-nas">
    <div class="container">
        <div class="intro-grid intro-grid-reverse">
            <div class="intro-content">
                <span class="section-label"><i class="fas ${variant.icon}"></i> ${variant.subtitle}</span>
                <h2 class="section-title">${variant.title}</h2>
                <p class="intro-lead">${variant.description}</p>
                <div class="intro-stats">
                    ${variant.stats.map(s => `
                    <div class="stat-item">
                        <span class="stat-number">${s.number}</span>
                        <span class="stat-label">${s.label}</span>
                    </div>`).join('')}
                </div>
            </div>
            <div class="intro-image">
                <img src="${settings.mainImage || 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800'}" alt="${settings.propertyName}">
            </div>
        </div>
    </div>
</section>`,

    'full-width': (variant, settings) => `
<section class="section-intro section-intro-fullwidth" id="o-nas">
    <div class="intro-hero" style="background-image: url('${settings.mainImage || 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600'}')">
        <div class="intro-hero-overlay"></div>
        <div class="container">
            <div class="intro-hero-content">
                <span class="section-label section-label-light"><i class="fas ${variant.icon}"></i> ${variant.subtitle}</span>
                <h2 class="section-title section-title-light">${variant.title}</h2>
                <p class="intro-lead intro-lead-light">${variant.description}</p>
                <div class="intro-stats intro-stats-light">
                    ${variant.stats.map(s => `
                    <div class="stat-item">
                        <span class="stat-number">${s.number}</span>
                        <span class="stat-label">${s.label}</span>
                    </div>`).join('')}
                </div>
            </div>
        </div>
    </div>
</section>`,

    'cards-grid': (variant, settings) => `
<section class="section-intro section-intro-cards" id="o-nas">
    <div class="container">
        <div class="intro-header-center">
            <span class="section-label"><i class="fas ${variant.icon}"></i> ${variant.subtitle}</span>
            <h2 class="section-title">${variant.title}</h2>
            <p class="intro-lead">${variant.description}</p>
        </div>
        <div class="intro-cards-grid">
            ${variant.stats.map(s => `
            <div class="intro-stat-card">
                <span class="stat-number">${s.number}</span>
                <span class="stat-label">${s.label}</span>
            </div>`).join('')}
        </div>
    </div>
</section>`,

    'asymmetric': (variant, settings) => `
<section class="section-intro section-intro-asymmetric" id="o-nas">
    <div class="container">
        <div class="intro-asymmetric-grid">
            <div class="intro-main-image">
                <img src="${settings.mainImage || 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800'}" alt="${settings.propertyName}">
            </div>
            <div class="intro-side-content">
                <span class="section-label"><i class="fas ${variant.icon}"></i> ${variant.subtitle}</span>
                <h2 class="section-title">${variant.title}</h2>
                <p class="intro-lead">${variant.description}</p>
            </div>
            <div class="intro-side-stats">
                ${variant.stats.map(s => `
                <div class="stat-block">
                    <span class="stat-number">${s.number}</span>
                    <span class="stat-label">${s.label}</span>
                </div>`).join('')}
            </div>
        </div>
    </div>
</section>`
};

// ============================================
// GENERATE ABOUT SECTION
// ============================================
function generateAboutSection(variantId, settings) {
    const variant = ABOUT_SECTION_VARIANTS[variantId];
    if (!variant) {
        console.warn('About section variant not found:', variantId);
        return '';
    }

    const layoutGenerator = AboutSectionLayouts[variant.layout];
    if (!layoutGenerator) {
        console.warn('Layout generator not found:', variant.layout);
        return '';
    }

    return layoutGenerator(variant, settings);
}

// Get all apartment variants
function getApartmentAboutVariants() {
    return Object.values(ABOUT_SECTION_VARIANTS).filter(v => v.category === 'apartments');
}

// Get all hotel variants
function getHotelAboutVariants() {
    return Object.values(ABOUT_SECTION_VARIANTS).filter(v => !v.category || v.category === 'hotel');
}

// Export
window.ABOUT_SECTION_VARIANTS = ABOUT_SECTION_VARIANTS;
window.AboutSectionLayouts = AboutSectionLayouts;
window.generateAboutSection = generateAboutSection;
window.getApartmentAboutVariants = getApartmentAboutVariants;
window.getHotelAboutVariants = getHotelAboutVariants;
