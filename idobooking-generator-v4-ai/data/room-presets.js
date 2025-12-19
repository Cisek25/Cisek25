// ============================================
// ROOM PRESETS - Predefined objects for different property types
// ============================================

window.ROOM_PRESETS = {
    'glamping': [
        { name: 'Namiot Sferyczny "Gwiazda"', type: 'dome', price: 350, personCount: 2, image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1200&q=80', description: 'Luksusowy namiot sferyczny z panoramicznym widokiem na niebo.' },
        { name: 'Jurta Mongolska', type: 'yurt', price: 280, personCount: 4, image: 'https://images.unsplash.com/photo-1618767699309-88746ba6eb49?w=1200&q=80', description: 'Tradycyjna jurta z nowoczesnym wyposażeniem i kominkiem.' },
        { name: 'Domek na Drzewie', type: 'treehouse', price: 500, personCount: 2, image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80', description: 'Spełnienie dziecięcych marzeń w wersji premium. Pełna prywatność.' },
        { name: 'Namiot Safari Deluxe', type: 'tent', price: 420, personCount: 4, image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&q=80', description: 'Przestronny namiot w stylu safari z drewnianą podłogą i luksusową łazienką.' },
        { name: 'Kapsuła Widokowa', type: 'capsule', price: 400, personCount: 2, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1200&q=80', description: 'Futurystyczna kapsuła zawieszona na zboczu góry.' },
        { name: 'Wóz Drzymały', type: 'wagon', price: 180, personCount: 2, image: 'https://images.unsplash.com/photo-1621293954908-eae050c8429c?w=1200&q=80', description: 'Klimatyczny wóz cygański w otoczeniu natury.' },
        { name: 'A-Frame Cabin', type: 'cabin', price: 550, personCount: 2, image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&q=80', description: 'Ikona designu w środku lasu. Szklane ściany i totalna prywatność.' }
    ],
    'apartments': [
        { name: 'Apartament "City View"', type: 'apartment', price: 450, personCount: 4, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80', description: 'Nowoczesny apartament w centrum z widokiem na panoramę miasta.' },
        { name: 'Loft Industrialny', type: 'loft', price: 550, personCount: 2, image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=80', description: 'Przestronny loft w postindustrialnym budynku. Cegła i beton.' },
        { name: 'Studio "Cozy Corner"', type: 'studio', price: 280, personCount: 2, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80', description: 'Przytulna kawalerka idealna dla par.' },
        { name: 'Penthouse z Tarasem', type: 'penthouse', price: 1200, personCount: 6, image: 'https://images.unsplash.com/photo-1512918760383-5658fa63a363?w=1200&q=80', description: 'Luksus na najwyższym piętrze z prywatnym jacuzzi na tarasie.' },
        { name: 'Apartament Rodzinny', type: 'apartment', price: 600, personCount: 5, image: 'https://images.unsplash.com/photo-1502005229766-9397ebb86c98?w=1200&q=80', description: 'Dwie sypialnie i duży salon dla całej rodziny.' },
        { name: 'Apartament przy Plaży', type: 'apartment', price: 700, personCount: 4, image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1200&q=80', description: 'Tylko 50 metrów od morza. Balkon z widokiem na fale.' },
        { name: 'Duplex Modern', type: 'apartment', price: 850, personCount: 4, image: 'https://images.unsplash.com/photo-1484154218962-a1c002085aac?w=1200&q=80', description: 'Dwupoziomowy apartament z antresolą i minimalistycznym wykończeniem.' }
    ],
    'hotel': [
        { name: 'Pokój Standard', type: 'room', price: 250, personCount: 2, image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80', description: 'Komfortowy pokój z łóżkiem typu King-size.' },
        { name: 'Pokój Deluxe', type: 'room', price: 350, personCount: 2, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80', description: 'Większy metraż i widok na ogród.' },
        { name: 'Apartament Prezydencki', type: 'suite', price: 1500, personCount: 2, image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80', description: 'Szczyt luksusu z prywatną obsługą i panoramicznym widokiem.' },
        { name: 'Pokój Rodzinny', type: 'room', price: 450, personCount: 4, image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1200&q=80', description: 'Dwa połączone pokoje dla wygody rodziców i dzieci.' },
        { name: 'Junior Suite', type: 'suite', price: 600, personCount: 3, image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=80', description: 'Pokój z wydzieloną częścią wypoczynkową.' },
        { name: 'Pokój Ekonomiczny', type: 'room', price: 180, personCount: 1, image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80', description: 'Idealny dla podróżujących służbowo.' },
        { name: 'Superior Balcony', type: 'room', price: 420, personCount: 2, image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1200&q=80', description: 'Wysoki standard z prywatnym balkonem i ekspressem do kawy.' }
    ],
    'boutique': [
        { name: 'Retro Chic Room', type: 'room', price: 500, personCount: 2, image: 'https://images.unsplash.com/photo-1551516594-56cb78394645?w=1200&q=80', description: 'Unikalny design inspirowany latami 60.' },
        { name: 'Art Studio Suite', type: 'suite', price: 750, personCount: 2, image: 'https://images.unsplash.com/photo-1505692794401-b3166fc914dc?w=1200&q=80', description: 'Przestronna suita z autentycznymi dziełami sztuki.' },
        { name: 'Industrial Gem', type: 'room', price: 450, personCount: 2, image: 'https://images.unsplash.com/photo-1534349762230-e5de624ac95a?w=1200&q=80', description: 'Surowy beton spotyka jedwab i aksamit.' },
        { name: 'Boho Dream', type: 'room', price: 480, personCount: 2, image: 'https://images.unsplash.com/photo-1522771753035-4a5046258283?w=1200&q=80', description: 'Naturalne materiały i ciepła atmosfera.' }
    ],
    'houses': [
        { name: 'Willa z Basenem', type: 'villa', price: 1800, personCount: 8, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80', description: 'Cała rezydencja tylko dla Ciebie. Podgrzewany basen.' },
        { name: 'Domek Góralski', type: 'cottage', price: 600, personCount: 6, image: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1200&q=80', description: 'Drewniany dom z duszą i kominkiem.' },
        { name: 'Nowoczesna Stodoła', type: 'barn', price: 900, personCount: 5, image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200&q=80', description: 'Designerski dom w stylu nowoczesnej stodoły.' },
        { name: 'Dom nad Jeziorem', type: 'house', price: 800, personCount: 6, image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&q=80', description: 'Prywatny pomost i łódka w cenie.' },
        { name: 'Leśniczówka', type: 'cottage', price: 500, personCount: 4, image: 'https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?w=1200&q=80', description: 'Dom w sercu puszczy, z dala od cywilizacji.' },
        { name: 'Bungalow', type: 'bungalow', price: 400, personCount: 2, image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f8e?w=1200&q=80', description: 'Parterowy domek z dużym tarasem.' }
    ],
    'vineyard': [
        { name: 'Apartament Sommeliera', type: 'suite', price: 650, personCount: 2, image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=1200&q=80', description: 'Elegancki apartament z widokiem na winnicę i prywatną piwniczką.' },
        { name: 'Domek w Winnicy', type: 'cottage', price: 450, personCount: 4, image: 'https://images.unsplash.com/photo-1533241242324-a95267da1203?w=1200&q=80', description: 'Rustykalny domek położony pośród krzewów winorośli.' },
        { name: 'Pokój Degustacyjny', type: 'room', price: 300, personCount: 2, image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?w=1200&q=80', description: 'Przytulny pokój w głównym budynku z dostępem do sali kominkowej.' },
        { name: 'Loft Winiarza', type: 'loft', price: 550, personCount: 2, image: 'https://images.unsplash.com/photo-1556912173-3db996e7fa83?w=1200&q=80', description: 'Industrialne wnętrze w odrestaurowanej winiarni.' },
        { name: 'Rezydencja "Szczep"', type: 'villa', price: 1200, personCount: 8, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80', description: 'Luksusowa willa dla grupy przyjaciół, otoczona winnicami.' }
    ]
};

// Helper: Get presets by wizard type
window.getRoomPresets = function (wizardType) {
    if (!wizardType) return window.ROOM_PRESETS['hotel'];

    // Map wizard types to presest categories
    if (['glamping', 'tent', 'yurt'].includes(wizardType)) return window.ROOM_PRESETS['glamping'];
    if (['apartments', 'flat', 'condo'].includes(wizardType)) return window.ROOM_PRESETS['apartments'];
    if (['villa', 'chalet', 'cottage', 'house'].includes(wizardType)) return window.ROOM_PRESETS['houses'];
    if (['vineyard', 'winnica', 'agrotourism'].includes(wizardType)) return window.ROOM_PRESETS['vineyard'];
    if (['boutique'].includes(wizardType)) return window.ROOM_PRESETS['boutique'];
    if (['hotel-5', 'hotel-4', 'hotel-3', 'resort', 'hostel', 'pension', 'bnb'].includes(wizardType)) return window.ROOM_PRESETS['hotel'];

    return window.ROOM_PRESETS['hotel']; // Fallback
};
