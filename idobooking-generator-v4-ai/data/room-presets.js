// ============================================
// ROOM PRESETS - Predefined objects for different property types
// ============================================

window.ROOM_PRESETS = {
    'glamping': [
        { name: 'Namiot Sferyczny "Gwiazda"', type: 'dome', price: 350, personCount: 2, image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Luksusowy namiot sferyczny z panoramicznym widokiem na niebo.' },
        { name: 'Jurta Mongolska', type: 'yurt', price: 280, personCount: 4, image: 'https://images.pexels.com/photos/9651543/pexels-photo-9651543.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Tradycyjna jurta z nowoczesnym wyposażeniem i kominkiem.' },
        { name: 'Domek na Drzewie', type: 'treehouse', price: 500, personCount: 2, image: 'https://images.pexels.com/photos/2873950/pexels-photo-2873950.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Spełnienie dziecięcych marzeń w wersji premium. Pełna prywatność.' },
        { name: 'Namiot Safari Deluxe', type: 'tent', price: 420, personCount: 4, image: 'https://images.pexels.com/photos/2609954/pexels-photo-2609954.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Przestronny namiot w stylu safari z drewnianą podłogą i luksusową łazienką.' },
        { name: 'Kapsuła Widokowa', type: 'capsule', price: 400, personCount: 2, image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Futurystyczna kapsuła zawieszona na zboczu góry.' },
        { name: 'Wóz Drzymały', type: 'wagon', price: 180, personCount: 2, image: 'https://images.pexels.com/photos/3049303/pexels-photo-3049303.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Klimatyczny wóz cygański w otoczeniu natury.' },
        { name: 'A-Frame Cabin', type: 'cabin', price: 550, personCount: 2, image: 'https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Ikona designu w środku lasu. Szklane ściany i totalna prywatność.' }
    ],
    'apartments': [
        { name: 'Apartament "City View"', type: 'apartment', price: 450, personCount: 4, image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Nowoczesny apartament w centrum z widokiem na panoramę miasta.' },
        { name: 'Loft Industrialny', type: 'loft', price: 550, personCount: 2, image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Przestronny loft w postindustrialnym budynku. Cegła i beton.' },
        { name: 'Studio "Cozy Corner"', type: 'studio', price: 280, personCount: 2, image: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Przytulna kawalerka idealna dla par.' },
        { name: 'Penthouse z Tarasem', type: 'penthouse', price: 1200, personCount: 6, image: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Luksus na najwyższym piętrze z prywatnym jacuzzi na tarasie.' },
        { name: 'Apartament Rodzinny', type: 'apartment', price: 600, personCount: 5, image: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Dwie sypialnie i duży salon dla całej rodziny.' },
        { name: 'Apartament przy Plaży', type: 'apartment', price: 700, personCount: 4, image: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Tylko 50 metrów od morza. Balkon z widokiem na fale.' },
        { name: 'Duplex Modern', type: 'apartment', price: 850, personCount: 4, image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Dwupoziomowy apartament z antresolą i minimalistycznym wykończeniem.' }
    ],
    'hotel': [
        { name: 'Pokój Standard', type: 'room', price: 250, personCount: 2, image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Komfortowy pokój z łóżkiem typu King-size.' },
        { name: 'Pokój Deluxe', type: 'room', price: 350, personCount: 2, image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Większy metraż i widok na ogród.' },
        { name: 'Apartament Prezydencki', type: 'suite', price: 1500, personCount: 2, image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Szczyt luksusu z prywatną obsługą i panoramicznym widokiem.' },
        { name: 'Pokój Rodzinny', type: 'room', price: 450, personCount: 4, image: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Dwa połączone pokoje dla wygody rodziców i dzieci.' },
        { name: 'Junior Suite', type: 'suite', price: 600, personCount: 3, image: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Pokój z wydzieloną częścią wypoczynkową.' },
        { name: 'Pokój Ekonomiczny', type: 'room', price: 180, personCount: 1, image: 'https://images.pexels.com/photos/271672/pexels-photo-271672.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Idealny dla podróżujących służbowo.' },
        { name: 'Superior Balcony', type: 'room', price: 420, personCount: 2, image: 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Wysoki standard z prywatnym balkonem i ekspressem do kawy.' }
    ],
    'boutique': [
        { name: 'Retro Chic Room', type: 'room', price: 500, personCount: 2, image: 'https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=800', description: 'Unikalny design inspirowany latami 60.' },
        { name: 'Art Studio Suite', type: 'suite', price: 750, personCount: 2, image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Przestronna suita z autentycznymi dziełami sztuki.' },
        { name: 'Industrial Gem', type: 'room', price: 450, personCount: 2, image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Surowy beton spotyka jedwab i aksamit.' },
        { name: 'Boho Dream', type: 'room', price: 480, personCount: 2, image: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Naturalne materiały i ciepła atmosfera.' }
    ],
    'houses': [
        { name: 'Willa z Basenem', type: 'villa', price: 1800, personCount: 8, image: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Cała rezydencja tylko dla Ciebie. Podgrzewany basen.' },
        { name: 'Domek Góralski', type: 'cottage', price: 600, personCount: 6, image: 'https://images.pexels.com/photos/730256/pexels-photo-730256.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Drewniany dom z duszą i kominkiem.' },
        { name: 'Nowoczesna Stodoła', type: 'barn', price: 900, personCount: 5, image: 'https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Designerski dom w stylu nowoczesnej stodoły.' },
        { name: 'Dom nad Jeziorem', type: 'house', price: 800, personCount: 6, image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Prywatny pomost i łódka w cenie.' },
        { name: 'Leśniczówka', type: 'cottage', price: 500, personCount: 4, image: 'https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Dom w sercu puszczy, z dala od cywilizacji.' },
        { name: 'Bungalow', type: 'bungalow', price: 400, personCount: 2, image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Parterowy domek z dużym tarasem.' }
    ],
    'vineyard': [
        { name: 'Apartament Sommeliera', type: 'suite', price: 650, personCount: 2, image: 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Elegancki apartament z widokiem na winnicę i prywatną piwniczką.' },
        { name: 'Domek w Winnicy', type: 'cottage', price: 450, personCount: 4, image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Rustykalny domek położony pośród krzewów winorośli.' },
        { name: 'Pokój Degustacyjny', type: 'room', price: 300, personCount: 2, image: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Przytulny pokój w głównym budynku z dostępem do sali kominkowej.' },
        { name: 'Loft Winiarza', type: 'loft', price: 550, personCount: 2, image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Industrialne wnętrze w odrestaurowanej winiarni.' },
        { name: 'Rezydencja "Szczep"', type: 'villa', price: 1200, personCount: 8, image: 'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=800', description: 'Luksusowa willa dla grupy przyjaciół, otoczona winnicami.' }
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
