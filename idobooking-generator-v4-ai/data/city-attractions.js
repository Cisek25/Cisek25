// ============================================
// CITY-ATTRACTIONS.JS - Lokalne atrakcje dla polskich miast
// ============================================

const CITY_ATTRACTIONS = {
    // ============================================
    // SOPOT - Nadmorskie Perły
    // ============================================
    sopot: {
        name: 'Sopot',
        region: 'Pomorze',
        type: 'seaside',
        tagline: 'Elegancki kurort nad Bałtykiem',
        description: 'Sopot to perła polskiego wybrzeża – miasto słynące z najdłuższego drewnianego molo w Europie, tętniącej życiem ulicy Monte Cassino i wyjątkowej atmosfery kurortu.',
        landmarks: [
            { name: 'Molo w Sopocie', type: 'landmark', distance: '5 min', icon: 'fa-bridge', description: 'Najdłuższe drewniane molo w Europie (511,5 m)' },
            { name: 'Ulica Monte Cassino', type: 'entertainment', distance: '3 min', icon: 'fa-street-view', description: 'Deptak pełen kawiarni, restauracji i sklepów' },
            { name: 'Opera Leśna', type: 'culture', distance: '10 min', icon: 'fa-music', description: 'Legendarny amfiteatr i miejsce festiwali' },
            { name: 'Krzywy Domek', type: 'landmark', distance: '4 min', icon: 'fa-building', description: 'Unikalna architektura - jeden z najczęściej fotografowanych budynków' }
        ],
        restaurants: [
            { name: 'Bulaj', cuisine: 'seafood', priceRange: '$$' },
            { name: 'Bar Przystań', cuisine: 'polish', priceRange: '$$' },
            { name: 'Surf Messa', cuisine: 'mediterranean', priceRange: '$$$' }
        ],
        activities: ['beach', 'sailing', 'spa', 'nightlife', 'cycling'],
        bestFor: ['couples', 'nightlife', 'beach-lovers'],
        seasonHighlights: {
            summer: 'Plaża, festiwale muzyczne, życie nocne',
            winter: 'Spacery molo, SPA, restauracje'
        }
    },

    // ============================================
    // ZAKOPANE - Góralski Klimat
    // ============================================
    zakopane: {
        name: 'Zakopane',
        region: 'Małopolska',
        type: 'mountain',
        tagline: 'Zimowa stolica Polski u stóp Tatr',
        description: 'Zakopane to serce polskich Tatr, oferujące górskie szlaki, narciarstwo, termy i autentyczną kulturę góralską. Idealne miejsce zarówno latem, jak i zimą.',
        landmarks: [
            { name: 'Krupówki', type: 'entertainment', distance: '2 min', icon: 'fa-street-view', description: 'Słynny deptak z regionalnymi sklepami i restauracjami' },
            { name: 'Gubałówka', type: 'nature', distance: '15 min', icon: 'fa-mountain', description: 'Punkt widokowy z kolejką linową i panoramą Tatr' },
            { name: 'Morskie Oko', type: 'nature', distance: '40 min', icon: 'fa-water', description: 'Najpiękniejsze górskie jezioro w Polsce' },
            { name: 'Dolina Kościeliska', type: 'nature', distance: '20 min', icon: 'fa-tree', description: 'Malownicza dolina z jaskiniami i szlakami' }
        ],
        restaurants: [
            { name: 'Karczma Przy Młynie', cuisine: 'highland', priceRange: '$$' },
            { name: 'Góralska Tradycja', cuisine: 'polish', priceRange: '$$' },
            { name: 'Bakowo Zohylina', cuisine: 'regional', priceRange: '$$$' }
        ],
        activities: ['skiing', 'hiking', 'thermal-baths', 'sledding', 'regional-cuisine'],
        bestFor: ['families', 'skiers', 'nature-lovers', 'adventurers'],
        seasonHighlights: {
            winter: 'Narciarstwo, termy, grzane wino',
            summer: 'Trekking, Morskie Oko, rafting'
        }
    },

    // ============================================
    // KRAKÓW - Starówka Premium
    // ============================================
    krakow: {
        name: 'Kraków',
        region: 'Małopolska',
        type: 'historic',
        tagline: 'Królewskie miasto UNESCO',
        description: 'Kraków to dawna stolica Polski, miasto królów z niezrównanym dziedzictwem kulturowym. Wawel, Rynek Główny, Kazimierz – każdy zakątek opowiada historię.',
        landmarks: [
            { name: 'Wawel', type: 'landmark', distance: '10 min', icon: 'fa-chess-rook', description: 'Zamek królewski i katedra - serce polskiej historii' },
            { name: 'Rynek Główny', type: 'landmark', distance: '5 min', icon: 'fa-store', description: 'Największy średniowieczny rynek w Europie' },
            { name: 'Sukiennice', type: 'landmark', distance: '5 min', icon: 'fa-landmark', description: 'Historyczna hala targowa z pamiątkami' },
            { name: 'Kazimierz', type: 'culture', distance: '15 min', icon: 'fa-synagogue', description: 'Dawna dzielnica żydowska - dziś artystyczne centrum' }
        ],
        restaurants: [
            { name: 'Pod Aniołami', cuisine: 'polish', priceRange: '$$$' },
            { name: 'Szara Gęś', cuisine: 'european', priceRange: '$$$' },
            { name: 'Starka', cuisine: 'jewish', priceRange: '$$' }
        ],
        activities: ['sightseeing', 'museums', 'nightlife', 'food-tours', 'day-trips'],
        bestFor: ['history-buffs', 'couples', 'culture-seekers'],
        seasonHighlights: {
            spring: 'Rynek w kwiatach, kawiarnie na zewnątrz',
            winter: 'Jarmark bożonarodzeniowy, Sukiennice'
        }
    },

    // ============================================
    // WARSZAWA - Metropolitan Chic
    // ============================================
    warszawa: {
        name: 'Warszawa',
        region: 'Mazowsze',
        type: 'metropolitan',
        tagline: 'Dynamiczna stolica Polski',
        description: 'Warszawa to miasto kontrastów – odbudowana Starówka UNESCO obok nowoczesnych wieżowców. Centrum biznesu, kultury i nocnego życia.',
        landmarks: [
            { name: 'Pałac Kultury i Nauki', type: 'landmark', distance: '5 min', icon: 'fa-building', description: 'Ikoniczny wieżowiec z tarasem widokowym' },
            { name: 'Starówka', type: 'landmark', distance: '10 min', icon: 'fa-landmark', description: 'Odbudowane Stare Miasto - dziedzictwo UNESCO' },
            { name: 'Łazienki Królewskie', type: 'nature', distance: '15 min', icon: 'fa-tree', description: 'Przepiękny park z pałacem na wodzie' },
            { name: 'Wilanów', type: 'culture', distance: '25 min', icon: 'fa-chess-rook', description: 'Barokowy pałac i ogrody królewskie' }
        ],
        restaurants: [
            { name: 'Atelier Amaro', cuisine: 'modern-polish', priceRange: '$$$$' },
            { name: 'Butchery and Wine', cuisine: 'steakhouse', priceRange: '$$$' },
            { name: 'Pyzy Flaki Gorące', cuisine: 'polish', priceRange: '$' }
        ],
        activities: ['business', 'museums', 'shopping', 'nightlife', 'rooftop-bars'],
        bestFor: ['business-travelers', 'culture-seekers', 'foodies'],
        seasonHighlights: {
            summer: 'Koncerty plenerowe, kawiarnie nad Wisłą',
            autumn: 'Festiwale filmowe, muzea'
        }
    },

    // ============================================
    // GDAŃSK - Hanzeatycki Urok
    // ============================================
    gdansk: {
        name: 'Gdańsk',
        region: 'Pomorze',
        type: 'historic',
        tagline: 'Hanzeatyckie miasto bursztynu',
        description: 'Gdańsk zachwyca kolorowymi kamienicami, bogatą historią hanzeatycką i bliskością morza. Miasto bursztynu, wolności i niezwykłej architektury.',
        landmarks: [
            { name: 'Długi Targ', type: 'landmark', distance: '3 min', icon: 'fa-store', description: 'Reprezentacyjny trakt z Ratuszem i Fontanną Neptuna' },
            { name: 'Żuraw', type: 'landmark', distance: '5 min', icon: 'fa-anchor', description: 'Największy średniowieczny dźwig portowy w Europie' },
            { name: 'Bazylika Mariacka', type: 'culture', distance: '5 min', icon: 'fa-church', description: 'Monumentalna gotycka świątynia z 400 schodami' },
            { name: 'Oliwa', type: 'culture', distance: '20 min', icon: 'fa-tree', description: 'Katedra ze słynnymi organami i park' }
        ],
        restaurants: [
            { name: 'Gdański Bowke', cuisine: 'fish', priceRange: '$$' },
            { name: 'Tawerna Mestwin', cuisine: 'polish', priceRange: '$$' },
            { name: 'Mercato', cuisine: 'italian', priceRange: '$$$' }
        ],
        activities: ['sightseeing', 'amber-shopping', 'museum-visits', 'boat-tours', 'beach-trips'],
        bestFor: ['history-buffs', 'families', 'shoppers'],
        seasonHighlights: {
            summer: 'Jarmark Dominikański, rejsy statkiem',
            winter: 'Jarmark świąteczny, muzea'
        }
    },

    // ============================================
    // TRÓJMIASTO - Perła Bałtyku
    // ============================================
    trojmiasto: {
        name: 'Trójmiasto',
        region: 'Pomorze',
        type: 'seaside',
        tagline: 'Trzy miasta - nieskończone możliwości',
        description: 'Trójmiasto to unikalne połączenie trzech nadmorskich miast: historycznego Gdańska, elegancko Sopotu i nowoczesnej Gdyni. Plaże, kultura, rozrywka.',
        landmarks: [
            { name: 'Molo w Sopocie', type: 'landmark', distance: 'Sopot', icon: 'fa-bridge', description: 'Najdłuższe drewniane molo w Europie' },
            { name: 'Długi Targ', type: 'landmark', distance: 'Gdańsk', icon: 'fa-store', description: 'Serce hanzeatyckiego Gdańska' },
            { name: 'Skwer Kościuszki', type: 'entertainment', distance: 'Gdynia', icon: 'fa-ship', description: 'Bulwar z widokiem na port i Dar Pomorza' },
            { name: 'Klif Orłowo', type: 'nature', distance: 'Gdynia', icon: 'fa-mountain', description: 'Malowniczy klif z widokiem na morze' }
        ],
        restaurants: [
            { name: 'Avocado Sopot', cuisine: 'healthy', priceRange: '$$' },
            { name: 'Pueblo Gdańsk', cuisine: 'mexican', priceRange: '$$' },
            { name: 'Biała Róża Gdynia', cuisine: 'seafood', priceRange: '$$$' }
        ],
        activities: ['beach', 'cycling', 'sailing', 'city-hopping', 'nightlife'],
        bestFor: ['beach-lovers', 'active-travelers', 'families'],
        seasonHighlights: {
            summer: 'Plaże, festiwale, żeglarstwo',
            autumn: 'Spacery nadmorskie, muzea'
        }
    },

    // ============================================
    // WROCŁAW - Miasto Mostów
    // ============================================
    wroclaw: {
        name: 'Wrocław',
        region: 'Dolny Śląsk',
        type: 'urban',
        tagline: 'Miasto 100 mostów i krasnali',
        description: 'Wrocław zachwyca wyspami na Odrze, setkami mostów i ukrytymi krasnalami. Młodzieżowa energia, znakomita kuchnia i wyjątkowa architektura.',
        landmarks: [
            { name: 'Ostrów Tumski', type: 'landmark', distance: '10 min', icon: 'fa-church', description: 'Najstarsza część miasta z katedrą i mostami' },
            { name: 'Rynek', type: 'entertainment', distance: '5 min', icon: 'fa-store', description: 'Jeden z największych i najpiękniejszych rynków w Europie' },
            { name: 'Hala Stulecia', type: 'culture', distance: '20 min', icon: 'fa-landmark', description: 'Arcydzieło modernizmu - dziedzictwo UNESCO' },
            { name: 'ZOO Wrocław', type: 'nature', distance: '15 min', icon: 'fa-hippo', description: 'Jeden z najlepszych ogrodów zoologicznych w Europie' }
        ],
        restaurants: [
            { name: 'Konspira', cuisine: 'modern-polish', priceRange: '$$$' },
            { name: 'Bernard', cuisine: 'czech-polish', priceRange: '$$' },
            { name: 'Vinyl Cafe', cuisine: 'brunch', priceRange: '$$' }
        ],
        activities: ['gnome-hunting', 'island-hopping', 'nightlife', 'zoo-visit', 'cycling'],
        bestFor: ['young-travelers', 'families', 'culture-seekers'],
        seasonHighlights: {
            summer: 'Wyspy, rejsy, ogrody',
            winter: 'Jarmark świąteczny, kawiarnie'
        }
    },

    // ============================================
    // POZNAŃ - Staropolski Szyk
    // ============================================
    poznan: {
        name: 'Poznań',
        region: 'Wielkopolska',
        type: 'urban',
        tagline: 'Gdzie tradycja spotyka biznes',
        description: 'Poznań to miasto z duszą - słynne koziołki, rogale świętomarcińskie i energia największych targów. Historia, biznes i doskonała kuchnia w jednym.',
        landmarks: [
            { name: 'Stary Rynek', type: 'landmark', distance: '5 min', icon: 'fa-store', description: 'Piękny rynek z koziołkami o 12:00' },
            { name: 'Ratusz', type: 'landmark', distance: '5 min', icon: 'fa-building-columns', description: 'Renesansowy ratusz ze słynnymi koziołkami' },
            { name: 'Stary Browar', type: 'shopping', distance: '10 min', icon: 'fa-shopping-bag', description: 'Designerskie centrum handlowe w zabytkowym browarze' },
            { name: 'Katedra', type: 'culture', distance: '15 min', icon: 'fa-church', description: 'Najstarsza katedra w Polsce na Ostrowie Tumskim' }
        ],
        restaurants: [
            { name: 'Modra Kuchnia', cuisine: 'polish', priceRange: '$$' },
            { name: 'Muga', cuisine: 'fusion', priceRange: '$$$' },
            { name: 'Ratuszova', cuisine: 'regional', priceRange: '$$' }
        ],
        activities: ['sightseeing', 'shopping', 'business', 'food-tours', 'nightlife'],
        bestFor: ['business-travelers', 'foodies', 'history-buffs'],
        seasonHighlights: {
            autumn: 'Dzień Rogala, jarmarki',
            spring: 'Targi, festiwale kulinarne'
        }
    },

    // ============================================
    // KOŁOBRZEG - Uzdrowiskowy Relaks
    // ============================================
    kolobrzeg: {
        name: 'Kołobrzeg',
        region: 'Zachodniopomorskie',
        type: 'spa-seaside',
        tagline: 'Uzdrowisko nad Bałtykiem',
        description: 'Kołobrzeg to idealne połączenie plaży i wellness. Słynne sanatoria, tężnie solankowe, długa plaża i malowniczy port rybacki.',
        landmarks: [
            { name: 'Molo', type: 'landmark', distance: '5 min', icon: 'fa-bridge', description: 'Długie molo z restauracją i widokiem' },
            { name: 'Latarnia Morska', type: 'landmark', distance: '10 min', icon: 'fa-tower-observation', description: 'XIX-wieczna latarnia z punktem widokowym' },
            { name: 'Park Zdrojowy', type: 'nature', distance: '5 min', icon: 'fa-tree', description: 'Zabytkowy park z tężniami i fontannami' },
            { name: 'Katedra', type: 'culture', distance: '10 min', icon: 'fa-church', description: 'Monumentalna gotycka bazylika' }
        ],
        restaurants: [
            { name: 'Sola', cuisine: 'seafood', priceRange: '$$' },
            { name: 'Kapitan', cuisine: 'fish', priceRange: '$$' },
            { name: 'Domek Kata', cuisine: 'polish', priceRange: '$$' }
        ],
        activities: ['spa', 'beach', 'wellness', 'brine-therapy', 'fishing'],
        bestFor: ['wellness-seekers', 'seniors', 'families'],
        seasonHighlights: {
            summer: 'Plaża, port, festiwale',
            winter: 'Zabiegi SPA, tężnie, spacery'
        }
    },

    // ============================================
    // KARPACZ - Karkonoska Ucieczka
    // ============================================
    karpacz: {
        name: 'Karpacz',
        region: 'Dolny Śląsk',
        type: 'mountain',
        tagline: 'U stóp Śnieżki w Karkonoszach',
        description: 'Karpacz to brama do Karkonoszy - góry Śnieżka, zabytkowa Świątynia Wang, wodospady i szlaki. Idealne dla miłośników natury i aktywnego wypoczynku.',
        landmarks: [
            { name: 'Śnieżka', type: 'nature', distance: '30 min', icon: 'fa-mountain', description: 'Najwyższy szczyt Karkonoszy (1603 m n.p.m.)' },
            { name: 'Świątynia Wang', type: 'culture', distance: '5 min', icon: 'fa-church', description: 'XII-wieczny norweski kościół drewniany' },
            { name: 'Wodospad Kamieńczyka', type: 'nature', distance: '15 min', icon: 'fa-water', description: 'Najwyższy wodospad w polskich Sudetach' },
            { name: 'Wielki Staw', type: 'nature', distance: '45 min', icon: 'fa-water', description: 'Polodowcowe jezioro w kotle Śnieżki' }
        ],
        restaurants: [
            { name: 'Złoty Widok', cuisine: 'polish', priceRange: '$$' },
            { name: 'Manekin', cuisine: 'pancakes', priceRange: '$' },
            { name: 'Karczma Śnieżka', cuisine: 'regional', priceRange: '$$' }
        ],
        activities: ['hiking', 'skiing', 'nature', 'photography', 'wellness'],
        bestFor: ['nature-lovers', 'hikers', 'families', 'photographers'],
        seasonHighlights: {
            winter: 'Narciarstwo, sanki, gorąca czekolada',
            summer: 'Szlaki, wodospady, nordic walking'
        }
    }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get attractions for a specific city
 * @param {string} cityId - City identifier (e.g., 'sopot', 'krakow')
 * @returns {Object} City attractions data
 */
function getCityAttractions(cityId) {
    return CITY_ATTRACTIONS[cityId] || null;
}

/**
 * Get all cities of a specific type
 * @param {string} type - City type ('seaside', 'mountain', 'historic', etc.)
 * @returns {Array} Array of city objects
 */
function getCitiesByType(type) {
    return Object.values(CITY_ATTRACTIONS).filter(city => city.type === type);
}

/**
 * Get recommended cities for a traveler type
 * @param {string} travelerType - Type of traveler ('couples', 'families', etc.)
 * @returns {Array} Array of recommended cities
 */
function getRecommendedCities(travelerType) {
    return Object.entries(CITY_ATTRACTIONS)
        .filter(([id, city]) => city.bestFor.includes(travelerType))
        .map(([id, city]) => ({ id, ...city }));
}

/**
 * Generate HTML for landmarks section
 * @param {string} cityId - City identifier
 * @returns {string} HTML string for landmarks
 */
function generateLandmarksHTML(cityId) {
    const city = CITY_ATTRACTIONS[cityId];
    if (!city) return '';

    return city.landmarks.map(landmark => `
        <div class="landmark-item">
            <i class="fas ${landmark.icon}"></i>
            <div class="landmark-info">
                <h4>${landmark.name}</h4>
                <p>${landmark.description}</p>
                <span class="distance"><i class="fas fa-walking"></i> ${landmark.distance}</span>
            </div>
        </div>
    `).join('');
}

// Eksport
window.CITY_ATTRACTIONS = CITY_ATTRACTIONS;
window.getCityAttractions = getCityAttractions;
window.getCitiesByType = getCitiesByType;
window.getRecommendedCities = getRecommendedCities;
window.generateLandmarksHTML = generateLandmarksHTML;
