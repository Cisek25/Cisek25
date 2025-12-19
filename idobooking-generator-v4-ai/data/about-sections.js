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
        description: 'Nasz hotel to oaza spokoju, gdzie każdy detal został starannie przemyślany, by zapewnić Państwu niezapomniany pobyt. Połączenie klasycznej elegancji z nowoczesnymi udogodnieniami tworzy przestrzeń idealną zarówno dla podróży służbowych, jak i romantycznych weekendów.',
        category: 'luxury'
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
        description: 'Zanurz się w świecie absolutnego relaksu. Nasza strefa SPA oferuje holistyczne podejście do wellness, łącząc starożytne techniki z nowoczesnymi terapiami. Każdy zabieg to podróż ku głębokiej odnowie.',
        category: 'luxury'
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
    // DODATKOWE HOTELE I PENSJONATY
    // ============================================
    'hotel-mountain-resort': {
        id: 'hotel-mountain-resort',
        name: 'Górski Resort',
        layout: 'split-right-image',
        icon: 'fa-mountain-sun',
        stats: [
            { number: '5★', label: 'standard' },
            { number: 'Ski-in', label: 'ski-out' },
            { number: 'SPA', label: '800m²' }
        ],
        title: 'Magia gór o każdej porze roku',
        subtitle: 'Luksus w sercu Tatr',
        description: 'Zimą prosto na stok, latem na szlaki. Nasza lokalizacja to marzenie każdego miłośnika gór. Po dniu pełnym wrażeń czeka SPA z panoramicznymi oknami.'
    },

    'pension-countryside': {
        id: 'pension-countryside',
        name: 'Wiejski Pensjonat',
        layout: 'cards-grid',
        icon: 'fa-tractor',
        stats: [
            { number: 'Śniadanie', label: 'ze swojego' },
            { number: 'Zwierzęta', label: 'do karmienia' },
            { number: 'Cisza', label: 'absolutna' }
        ],
        title: 'Wróć do natury',
        subtitle: 'Autentyczna wieś, prawdziwe smaki',
        description: 'Jajka od własnych kur, warzywa z ogrodu, mleko od sąsiada. Dzieci pokochają karmienie zwierząt, a dorośli ciszę i spokój. To prawdziwy odpoczynek.'
    },

    'hotel-wellness-retreat': {
        id: 'hotel-wellness-retreat',
        name: 'Wellness Retreat',
        layout: 'full-width',
        icon: 'fa-om',
        stats: [
            { number: 'Yoga', label: 'codziennie' },
            { number: 'Detox', label: 'menu' },
            { number: 'Medytacja', label: 'ogród' }
        ],
        title: 'Odnów ciało i umysł',
        subtitle: 'Holistyczne podejście do zdrowia',
        description: 'Zajęcia jogi o świcie, zdrowe posiłki, sesje medytacji w ogrodzie. Oferujemy kompleksowy program wellness, który przywróci harmonię i równowagę.'
    },

    'hotel-boutique-art': {
        id: 'hotel-boutique-art',
        name: 'Boutique Art Hotel',
        layout: 'asymmetric',
        icon: 'fa-paintbrush',
        stats: [
            { number: '12', label: 'unikalnych pokoi' },
            { number: 'Galeria', label: 'sztuki' },
            { number: 'Design', label: 'nagradzany' }
        ],
        title: 'Sztuka w każdym detalu',
        subtitle: 'Gdzie każdy pokój to dzieło',
        description: 'Każdy pokój zaprojektowany przez innego artystę. Ściany zdobią oryginalne dzieła sztuki. To nie hotel – to żywa galeria, w której możesz zamieszkać.'
    },

    'pension-lake-view': {
        id: 'pension-lake-view',
        name: 'Pensjonat nad Jeziorem',
        layout: 'Split-left-image',
        icon: 'fa-water',
        stats: [
            { number: 'Plaża', label: 'prywatna' },
            { number: 'Kajaki', label: 'gratis' },
            { number: 'Widoki', label: 'zapierające dech' }
        ],
        title: 'Pobudka z widokiem na taflę wody',
        subtitle: 'Spokój i piękno każdego dnia',
        description: 'Poranna kawa na pomoście, popołudniowy spływ kajakiem, wieczór przy ognisku nad brzegiem. Jezioro to nie tylko widok – to styl życia.'
    },

    'hotel-historic-palace': {
        id: 'hotel-historic-palace',
        name: 'Pałac Hotel',
        layout: 'full-width',
        icon: 'fa-crown',
        stats: [
            { number: 'XVIII w', label: 'zabytek' },
            { number: 'Park', label: '10 ha' },
            { number: 'Luksus', label: 'królewski' }
        ],
        title: 'Poczuj się jak w pałacu',
        subtitle: 'Historia, elegancja, przepych',
        description: 'Zabytkowy pałac otoczony parkiem. Oryginalne freski, kryształowe żyrandole, meble z epoki. Każdy pokój opowiada historię arystokratycznego życia.'
    },

    'hostel-social-hub': {
        id: 'hostel-social-hub',
        name: 'Social Hostel',
        layout: 'cards-grid',
        icon: 'fa-users',
        stats: [
            { number: 'Party', label: 'roof top' },
            { number: 'Meet', label: 'new people' },
            { number: '€', label: 'budget friendly' }
        ],
        title: 'Poznaj podróżników z całego świata',
        subtitle: 'Więcej niż hostel - społeczność',
        description: 'Wspólna kuchnia wspaniałych znajomości. Wieczory gier planszowych, warsztaty, wycieczki grupowe. Tu nie tylko nocujesz – tu przeżywasz przygodę i zyskujesz przyjaciół.'
    },

    'pension-wine-country': {
        id: 'pension-wine-country',
        name: 'Pensjonat Winnica',
        layout: 'split-right-image',
        icon: 'fa-wine-bottle',
        stats: [
            { number: 'Degustacje', label: 'codziennie' },
            { number: 'Winnica', label: 'własna' },
            { number: 'Relaks', label: 'toskański' }
        ],
        title: 'Smakuj życie pośród winnic',
        subtitle: 'Gdzie wino to pasja',
        description: 'Spacery po winnicy, degustacje win, kolacje w towarzystwie winiarz. Odkryj tajniki winiarstwa i zatrac się w pięknie toskańskich krajobrazów.'
    },

    'hotel-golf-club': {
        id: 'hotel-golf-club',
        name: 'Golf & Country Club',
        layout: 'asymmetric',
        icon: 'fa-golf-ball-tee',
        stats: [
            { number: '18', label: 'holes' },
            { number: 'Pro', label: 'instructor' },
            { number: 'Green', label: 'championship' }
        ],
        title: 'Raj dla miłośników golfa',
        subtitle: 'Graj na poziomie mistrzów',
        description: 'Profesjonalne pole golfowe z widokiem na góry. Instruktorzy PGA, najlepszy sprzęt, driving range. Po rundzie - drink w klubie XIX dołka.'
    },

    'pension-agritourism': {
        id: 'pension-agritourism',
        name: 'Agroturystyka Premium',
        layout: 'split-left-image',
        icon: 'fa-wheat-awn',
        stats: [
            { number: 'Farm', label: 'to table' },
            { number: 'Ekologia', label: '100%' },
            { number: 'Tradycja', label: 'rodzinna' }
        ],
        title: 'Prawdziwy smak wsi',
        subtitle: 'Od pola prosto na stół',
        description: 'Świeże warzywa z grządki na śniadanie, ser i masło własnej produkcji, mięso od lokalnego hodowcy. Poznaj życie na wsi i zatrac się w prostych przyjemnościach.'
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
    },

    // ============================================
    // DODATKOWE APARTAMENTY - CZĘŚĆ 1
    // ============================================
    'apt-beach-view': {
        id: 'apt-beach-view',
        name: 'Apartament z widokiem na morze',
        layout: 'split-right-image',
        icon: 'fa-umbrella-beach',
        category: 'apartments',
        stats: [
            { number: '50m', label: 'od plaży' },
            { number: '2', label: 'sypialnie' },
            { number: 'Balkon', label: 'widokowy' }
        ],
        title: 'Budź się z widokiem na morze',
        subtitle: 'Twoje okno na nieskończoność',
        description: 'Spacer na plażę zajmie Ci zaledwie minutę. Z balkonu rozciąga się zapierający dech widok na morze. Wieczory spędzone przy szumie fal to coś, czego nie da się zapomnieć.'
    },

    'apt-penthouse-luxury': {
        id: 'apt-penthouse-luxury',
        name: 'Penthouse z Jacuzzi',
        layout: 'full-width',
        icon: 'fa-champagne-glasses',
        category: 'apartments',
        stats: [
            { number: '120m²', label: 'ekskluzywności' },
            { number: 'Jacuzzi', label: 'na tarasie' },
            { number: '360°', label: 'panorama' }
        ],
        title: 'Życie na szczycie',
        subtitle: 'Luksus, który zapiera dech',
        description: 'Najwyższe piętro, najlepsze widoki. Prywatne jacuzzi na tarasie, gdzie możesz podziwiać zachody słońca z lampką wina. To nie jest tylko apartament – to styl życia.'
    },

    'apt-downtown-chic': {
        id: 'apt-downtown-chic',
        name: 'Apartament w Centrum',
        layout: 'cards-grid',
        icon: 'fa-city',
        category: 'apartments',
        stats: [
            { number: '2 min', label: 'do metra' },
            { number: '24/7', label: 'life' },
            { number: 'Smart', label: 'Home' }
        ],
        title: 'Serce miasta u Twoich stóp',
        subtitle: 'Wszystko w zasięgu ręki',
        description: 'Restauracje, kluby, sklepy – wszystko na wyciągnięcie ręki. Mieszkasz tam, gdzie bije serce miasta. Inteligentny system zarządzania sprawia, że komfort jest maksymalny.'
    },

    'apt-garden-ground': {
        id: 'apt-garden-ground',
        name: 'Apartament z Ogrodem',
        layout: 'split-left-image',
        icon: 'fa-seedling',
        category: 'apartments',
        stats: [
            { number: '100m²', label: 'ogrodu' },
            { number: 'Grill', label: 'w cenie' },
            { number: 'Parter', label: 'wygoda' }
        ],
        title: 'Twoja prywatna oaza zieleni',
        subtitle: 'Całkiem jak własny dom',
        description: 'Wyjdź rano na taras z kawą, wieczorem rozpal grilla. Dzieci będą zachwycone własnym placem zabaw, a Ty ciszą i spokojem.'
    },

    'apt-mountain-cabin': {
        id: 'apt-mountain-cabin',
        name: 'Górski Apartament',
        layout: 'asymmetric',
        icon: 'fa-mountain',
        category: 'apartments',
        stats: [
            { number: '1200m', label: 'n.p.m.' },
            { number: 'Kominek', label: 'prawdziwy' },
            { number: 'Szlaki', label: 'z drzwi' }
        ],
        title: 'Oddech gór, świeże powietrze',
        subtitle: 'Natura tuż za oknem',
        description: 'Budzisz się z widokiem na szczyty. Popołudnia przy kominku z książką. Wieczory pod rozgwieżdżonym niebem. Góry to nie tylko krajobraz – to sposób na życie.'
    },

    'apt-student-friendly': {
        id: 'apt-student-friendly',
        name: 'Przyjazny Studentom',
        layout: 'split-right-image',
        icon: 'fa-graduation-cap',
        category: 'apartments',
        stats: [
            { number: 'WiFi', label: '300 Mbps' },
            { number: 'Biurko', label: 'ergonomiczne' },
            { number: 'Cena', label: 'rozsądna' }
        ],
        title: 'Focus na naukę i wygodę',
        subtitle: 'Idealne dla młodych',
        description: 'Szybki internet, przestronne biurko, spokojna okolica. Wszystko, czego potrzebujesz do efektywnej nauki. A po sesji – pełna kuchnia do wspólnych kolacji z kolegami.'
    },

    'apt-pet-paradise': {
        id: 'apt-pet-paradise',
        name: 'Przyjazny zwierzętom',
        layout: 'cards-grid',
        icon: 'fa-paw',
        category: 'apartments',
        stats: [
            { number: 'Park', label: '2 min' },
            { number: 'Parter', label: 'łatwy dostęp' },
            { number: 'Ogród', label: 'dla pupila' }
        ],
        title: 'Wasze futrzaki są mile widziane',
        subtitle: 'Wakacje dla całej rodziny',
        description: 'Park tuż obok, ogródek do biegania, a nawet miska i legowisko w cenie. Twój czworonożny przyjaciel będzie tu równie szczęśliwy jak Ty.'
    },

    'apt-eco-green': {
        id: 'apt-eco-green',
        name: 'Eko Apartament',
        layout: 'full-width',
        icon: 'fa-leaf',
        category: 'apartments',
        stats: [
            { number: 'A+++', label: 'energia' },
            { number: 'Zero', label: 'waste' },
            { number: 'Bio', label: 'kosmetyki' }
        ],
        title: 'Komfort z troską o planetę',
        subtitle: 'Ekologiczny luksus',
        description: 'Panele słoneczne, deszczówka do podlewania, biodegradowalne kosmetyki. Ciesz się komfortem wiedząc, że Twój pobyt nie szkodzi środowisku.'
    },

    'apt-historic-charm': {
        id: 'apt-historic-charm',
        name: 'Zabytkowa Kamienica',
        layout: 'asymmetric',
        icon: 'fa-landmark',
        category: 'apartments',
        stats: [
            { number: '1920', label: 'rok budowy' },
            { number: '3.5m', label: 'wysokość' },
            { number: 'Oryginał', label: 'parkiet' }
        ],
        title: 'Historia w każdym detalu',
        subtitle: 'Elegancja sprzed wieku',
        description: 'Oryginalne sztukaterie, wysokie sufity, drewniane parkiety – każdy element opowiada historię. Współczesny komfort w historycznej oprawie.'
    },

    'apt-family-duplex': {
        id: 'apt-family-duplex',
        name: 'Rodzinny Duplex',
        layout: 'split-left-image',
        icon: 'fa-house-user',
        category: 'apartments',
        stats: [
            { number: '2', label: 'poziomy' },
            { number: '3', label: 'sypialnie' },
            { number: 'Plac', label: 'zabaw w ogrodzie' }
        ],
        title: 'Przestrzeń dla całej rodziny',
        subtitle: 'Dwa piętra komfortu',
        description: 'Rodzice na górze, dzieci na dole – każdy ma swoją przestrzeń. Ogromny salon idealny na rodzinne wieczory. Ogród z placem zabaw to raj dla małych odkrywców.'
    },

    'apt-artist-workshop': {
        id: 'apt-artist-workshop',
        name: 'Pracownia Artysty',
        layout: 'split-right-image',
        icon: 'fa-palette',
        category: 'apartments',
        stats: [
            { number: '4m', label: 'wysokość' },
            { number: 'Świetlne', label: 'okna' },
            { number: 'Inspiracja', label: 'w cenie' }
        ],
        title: 'Przestrzeń, która inspiruje',
        subtitle: 'Twoja kreatywna enklawa',
        description: 'Wysokie sufity, ogromne okna wpuszczające naturalne światło. Industrialny charakter i artystyczna dusza. Idealne miejsce dla twórców i marzycieli.'
    },

    'apt-minimalist-zen': {
        id: 'apt-minimalist-zen',
        name: 'Minimalistyczny Zen',
        layout: 'cards-grid',
        icon: 'fa-spa',
        category: 'apartments',
        stats: [
            { number: 'Less', label: 'is more' },
            { number: 'Cisza', label: 'garantowana' },
            { number: 'Medytacja', label: 'kącik' }
        ],
        title: 'Prostota, która uspokaja',
        subtitle: 'Harmonia i równowaga',
        description: 'Niczego zbędnego. Czyste linie, naturalne materiały, maksimum przestrzeni. Tutaj odnajdziesz spokój i możesz skupić się na tym, co naprawdę ważne.'
    },

    'apt-vintage-retro': {
        id: 'apt-vintage-retro',
        name: 'Retro-Vintage',
        layout: 'asymmetric',
        icon: 'fa-record-vinyl',
        category: 'apartments',
        stats: [
            { number: 'Vinyl', label: 'kolekcja' },
            { number: '60s', label: 'design' },
            { number: 'Unique', label: 'atmosfera' }
        ],
        title: 'Podróż w czasie',
        subtitle: 'Vintage vibes, współczesny komfort',
        description: 'Meble z lat 60., gramofon z kolekcją winyli, psychodeliczne tapety. To miejsce ma duszę i opowiada historie. Idealne dla tych, którzy kochają klimat minionej epoki.'
    },

    'apt-work-remote-hub': {
        id: 'apt-work-remote-hub',
        name: 'Digital Nomad Hub',
        layout: 'full-width',
        icon: 'fa-laptop',
        category: 'apartments',
        stats: [
            { number: 'Fiber', label: '1 Gb/s' },
            { number: 'Biuro', label: 'dedykowane' },
            { number: '24/7', label: 'co-working' }
        ],
        title: 'Pracuj z dowolnego miejsca',
        subtitle: 'Twoje domowe biuro marzeń',
        description: 'Błyskawiczny internet, ergonomiczne biurko z dwoma monitorami, profesjonalne oświetlenie do video callów. Mieszkaj i pracuj w miejscu stworzonym dla cyfrowych nomadów.'
    },

    'apt-newlyweds-nest': {
        id: 'apt-newlyweds-nest',
        name: 'Gniazdo Młodej Pary',
        layout: 'split-left-image',
        icon: 'fa-heart',
        category: 'apartments',
        stats: [
            { number: 'Romantyk', label: 'balkon' },
            { number: 'Śniadanie', label: 'do łóżka' },
            { number: '∞', label: 'wspomnień' }
        ],
        title: 'Miejsce na pierwsze wspomnienia',
        subtitle: 'Wasz pierwszy wspólny dom',
        description: 'Mały, przytulny, pełen miłości. Balkon na poranną kawę we dwoje, wygodna kuchnia na wspólne gotowanie, sypialnia jak z bajki. Idealne miejsce na start waszej wspólnej przygody.'
    },
    // ============================================
    // NOWE APARTAMENTY - EXPANSION PACK
    // ============================================
    'apt-glamping-luxe': {
        id: 'apt-glamping-luxe',
        name: 'Glamping Luxe',
        layout: 'full-width',
        icon: 'fa-campground',
        category: 'apartments',
        stats: [
            { number: 'Natura', label: '100% blisko' },
            { number: 'Komfort', label: '5 gwiazdek' },
            { number: 'Gwiazdy', label: 'nad głową' }
        ],
        title: 'Luksus pod gołym niebem',
        subtitle: 'Kemping w wersji premium',
        description: 'Połączenie bliskości natury z hotelowym komfortem. Śpij w luksusowym namiocie, budź się przy śpiewie ptaków, a wieczorem ciesz się prywatnym jacuzzi na tarasie pod gwiazdami.'
    },

    'apt-tiny-house': {
        id: 'apt-tiny-house',
        name: 'Tiny House',
        layout: 'split-right-image',
        icon: 'fa-house-chimney-window',
        category: 'apartments',
        stats: [
            { number: '25m²', label: 'smart space' },
            { number: 'Las', label: 'dookoła' },
            { number: 'Minimal', label: 'design' }
        ],
        title: 'Mały dom, wielkie wrażenia',
        subtitle: 'Minimalizm w sercu lasu',
        description: 'Odkryj urok życia w skali mikro. Nasz Tiny House to mistrzostwo ergonomii i designu. Idealna kryjówka dla par szukających ucieczki od zgiełku miasta w objęcia natury.'
    },

    'apt-industrial-loft': {
        id: 'apt-industrial-loft',
        name: 'Industrial Loft',
        layout: 'asymmetric',
        icon: 'fa-industry',
        category: 'apartments',
        stats: [
            { number: '4m', label: 'strop' },
            { number: 'Cegła', label: 'oryginalna' },
            { number: 'Centrum', label: '5 min' }
        ],
        title: 'Surowy klimat, czysty styl',
        subtitle: 'Loft w starej fabryce',
        description: 'Autentyczna pofabryczna przestrzeń. Czerwona cegła, betonowe stropy, wielkie okna. Przestrzeń, która robi wrażenie i pozwala poczuć puls miasta.'
    },

    'apt-scandi-hygge': {
        id: 'apt-scandi-hygge',
        name: 'Scandi Hygge',
        layout: 'split-left-image',
        icon: 'fa-mug-hot',
        category: 'apartments',
        stats: [
            { number: 'Hygge', label: 'poziom max' },
            { number: 'Kominek', label: 'na drewno' },
            { number: 'Drewno', label: 'naturalne' }
        ],
        title: 'Przytulność w stylu północy',
        subtitle: 'Znajdź swoje hygge',
        description: 'Jasne wnętrza, naturalne materiały, dużo światła i ciepło kominka. Tutaj czas zwalnia, a proste przyjemności stają się najważniejsze. Idealne miejsce na reset.'
    },

    'apt-boho-chic': {
        id: 'apt-boho-chic',
        name: 'Boho Chic',
        layout: 'cards-grid',
        icon: 'fa-guitar',
        category: 'apartments',
        stats: [
            { number: 'Art', label: 'dusza' },
            { number: 'Hamak', label: 'w salonie' },
            { number: 'Rośliny', label: 'wszędzie' }
        ],
        title: 'Swoboda, kolory, natura',
        subtitle: 'Artystyczna dusza wnętrza',
        description: 'Wnętrze pełne życia, kolorów i roślin. Plecione dodatki, etniczne wzory i artystyczny nieład tworzą niepowtarzalną atmosferę luzu i kreatywności.'
    },

    'apt-glass-cube': {
        id: 'apt-glass-cube',
        name: 'Szklana Kostka',
        layout: 'full-width',
        icon: 'fa-cube',
        category: 'apartments',
        stats: [
            { number: '360°', label: 'widoku' },
            { number: 'Szkło', label: 'ściany' },
            { number: 'Las', label: 'prywatny' }
        ],
        title: 'Zatrzyj granice z naturą',
        subtitle: 'Mieszkaj w widoku',
        description: 'Dom, w którym ściany są oknami. Budź się w środku lasu, obserwuj sarny z kanapy. Architektura, która znika, by dać pierwszeństwo naturze.'
    },

    'apt-surfers-shack': {
        id: 'apt-surfers-shack',
        name: 'Surfer\'s Shack',
        layout: 'split-right-image',
        icon: 'fa-water',
        category: 'apartments',
        stats: [
            { number: 'Deski', label: 'dla gości' },
            { number: 'Plaża', label: 'na boso' },
            { number: 'Chill', label: 'strefa' }
        ],
        title: 'Dla kochających fale',
        subtitle: 'Aloha vibes nad Bałtykiem',
        description: 'Luz, deski na ścianach, zapach morskiej bryzy. Idealna baza dla kitesurferów i miłośników plażowania. Po sesji na wodzie zrelaksuj się w hamaku na tarasie.'
    },

    'apt-floating-house': {
        id: 'apt-floating-house',
        name: 'Dom na Wodzie',
        layout: 'asymmetric',
        icon: 'fa-ship',
        category: 'apartments',
        stats: [
            { number: '0m', label: 'do wody' },
            { number: 'Taras', label: 'na dachu' },
            { number: 'Kołysanie', label: 'do snu' }
        ],
        title: 'Życie na fali',
        subtitle: 'Dosłownie nad wodą',
        description: 'Wyjątkowy dom zacumowany w porcie. Śniadanie na tarasie z widokiem na jachty, delikatne kołysanie do snu. Niezapomniane doświadczenie życia na wodzie.'
    },

    'apt-forest-cabin': {
        id: 'apt-forest-cabin',
        name: 'Leśna Chatka',
        layout: 'split-left-image',
        icon: 'fa-tree',
        category: 'apartments',
        stats: [
            { number: 'Las', label: 'dookoła' },
            { number: 'Bania', label: 'z gorącą wodą' },
            { number: 'WiFi', label: 'detox' }
        ],
        title: 'Ucieczka do lasu',
        subtitle: 'Tylko Ty i natura',
        description: 'Drewniana chatka ukryta głęboko w lesie. Brak sąsiadów, tylko śpiew ptaków i szum drzew. Wieczory w gorącej bani pod gwiazdami. Idealne miejsce na cyfrowy detoks.'
    },

    'apt-ski-resort': {
        id: 'apt-ski-resort',
        name: 'Apartament Ski-In',
        layout: 'split-right-image',
        icon: 'fa-person-skiing',
        category: 'apartments',
        stats: [
            { number: 'Stok', label: 'za oknem' },
            { number: 'Ski', label: 'room' },
            { number: 'Grzaniec', label: 'przy kominku' }
        ],
        title: 'Z łóżka na stok',
        subtitle: 'Zimowe szaleństwo',
        description: 'Nie trać czasu na dojazdy. Zapnij narty przed drzwiami i ruszaj na stok. Po całym dniu wróć do ciepłego apartamentu na après-ski we własnym salonie.'
    },

    // ============================================
    // DODATKOWE HOTELE - EXPANSION PACK
    // ============================================

    'hotel-castle': {
        id: 'hotel-castle',
        name: 'Zamek Hotel',
        layout: 'full-width',
        icon: 'fa-chess-rook',
        stats: [
            { number: 'XIV w', label: 'historia' },
            { number: 'Duch', label: 'przyjazny' },
            { number: 'Komnaty', label: 'królewskie' }
        ],
        title: 'Noc w średniowiecznej twierdzy',
        subtitle: 'Poczuj historię murów',
        description: 'Nocleg w prawdziwym zamku to podróż w czasie. Grube mury, tajemne przejścia, uczty w sali rycerskiej. Poczuj atmosferę dawnych wieków z nowoczesnym komfortem.'
    },

    'hotel-cyber-city': {
        id: 'hotel-cyber-city',
        name: 'Cyber City Hotel',
        layout: 'cards-grid',
        icon: 'fa-robot',
        stats: [
            { number: 'Check-in', label: 'automatyczny' },
            { number: 'App', label: 'sterowanie' },
            { number: 'Neon', label: 'design' }
        ],
        title: 'Przyszłość hotelarstwa',
        subtitle: 'Technologia i komfort',
        description: 'W pełni zautomatyzowany hotel przyszłości. Steruj całym pokojem ze smartfona, korzystaj z wirtualnego konsjerża. Futurystyczny design i najnowsze technologie dla geeków.'
    },

    'hotel-yoga-retreat': {
        id: 'hotel-yoga-retreat',
        name: 'Yoga & Meditation',
        layout: 'split-left-image',
        icon: 'fa-om',
        stats: [
            { number: 'Shala', label: 'z widokiem' },
            { number: 'Vege', label: 'kuchnia' },
            { number: 'Guru', label: 'na miejscu' }
        ],
        title: 'Odnajdź wewnętrzny spokój',
        subtitle: 'Twoja droga do równowagi',
        description: 'Miejsce stworzone do praktyki jogi i medytacji. Codzienne zajęcia, warsztaty oddechowe, zdrowa kuchnia roślinna. Zadbaj o ciało i ducha w pięknym otoczeniu.'
    },

    'hotel-convention-center': {
        id: 'hotel-convention-center',
        name: 'Centrum Kongresowe',
        layout: 'full-width',
        icon: 'fa-handshake',
        stats: [
            { number: '2000', label: 'osób' },
            { number: 'Expo', label: 'hala' },
            { number: 'Catering', label: 'premium' }
        ],
        title: 'Wydarzenia na wielką skalę',
        subtitle: 'Profesjonalizm i przestrzeń',
        description: 'Największe centrum konferencyjne w regionie. Organizujemy kongresy, targi i bankiety. Kompleksowa obsługa techniczna i gastronomiczna dla najbardziej wymagających klientów biznesowych.'
    },

    'hotel-lighthouse': {
        id: 'hotel-lighthouse',
        name: 'Latarnia Morska',
        layout: 'asymmetric',
        icon: 'fa-tower-observation',
        stats: [
            { number: '360°', label: 'morza' },
            { number: 'Wiatr', label: 'i fale' },
            { number: 'Światło', label: 'nawigacyjne' }
        ],
        title: 'Na straży wybrzeża',
        subtitle: 'Noc w latarni morskiej',
        description: 'Unikalna okazja spędzenia nocy w aktywnej latarni morskiej. Szum morza, krzyki mew i nieskończony horyzont. Dla poszukiwaczy wyjątkowych wrażeń i morskich opowieści.'
    },
    'mountain-chalet': {
        id: 'mountain-chalet',
        name: 'Górski Chalet',
        layout: 'split-right-image', // Obrazek po prawej
        icon: 'fa-mountain-sun',
        category: 'hotel',
        stats: [
            { number: '2000m', label: 'n.p.m.' },
            { number: 'Ski', label: 'in/out' },
            { number: 'Kominek', label: 'w każdym pokoju' }
        ],
        title: 'Luksus na szczycie',
        subtitle: 'Górska Oaza',
        description: 'Ekskluzywny chalet położony na zboczu góry, oferujący bezpośredni dostęp do stoków narciarskich. Połączenie alpejskiej tradycji z nowoczesnym komfortem.'
    },
    'seaside-villa': {
        id: 'seaside-villa',
        name: 'Nadmorska Willa',
        layout: 'asymmetric', // Asymetryczny
        icon: 'fa-umbrella-beach',
        category: 'apartments',
        stats: [
            { number: '50m', label: 'do plaży' },
            { number: 'Prywatny', label: 'basen' },
            { number: 'Taras', label: 'widokowy' }
        ],
        title: 'Twoja prywatna plaża',
        subtitle: 'Relaks nad morzem',
        description: 'Przestronna willa z bezpośrednim zejściem na piaszczystą plażę. Idealne miejsce na rodzinne wakacje z dala od tłumów, z szumem fal o poranku.'
    },
    'urban-loft': {
        id: 'urban-loft',
        name: 'Miejski Loft',
        layout: 'split-left-image',
        icon: 'fa-city',
        category: 'apartments',
        stats: [
            { number: 'Centrum', label: 'miasta' },
            { number: 'Design', label: 'industrialny' },
            { number: 'Smart', label: 'Home' }
        ],
        title: 'Żyj w rytmie miasta',
        subtitle: 'Industrialny Szyk',
        description: 'Nowoczesne apartamenty w sercu metropolii, urządzone w stylu industrialnym. Surowa cegła, beton i szkło tworzą niepowtarzalny klimat dla miłośników miejskiego stylu życia.'
    },
    'historic-manor': {
        id: 'historic-manor',
        name: 'Zabytkowy Dwór',
        layout: 'full-width',
        icon: 'fa-landmark',
        category: 'hotel',
        stats: [
            { number: 'XIX', label: 'wiek' },
            { number: 'Park', label: 'krajobrazowy' },
            { number: 'Stadnina', label: 'koni' }
        ],
        title: 'Podróż w czasie',
        subtitle: 'Szlachecka Tradycja',
        description: 'Odrestaurowany dwór szlachecki otoczony zabytkowym parkiem. Poczuj atmosferę minionych wieków, delektując się staropolską gościnnością i kuchnią.'
    },
    'wellness-retreat': {
        id: 'wellness-retreat',
        name: 'Uzdrowisko Wellness',
        layout: 'cards-grid',
        icon: 'fa-spa',
        category: 'hotel',
        stats: [
            { number: '100%', label: 'bio' },
            { number: 'Joga', label: 'codziennie' },
            { number: 'Detox', label: 'programy' }
        ],
        title: 'Odzyskaj równowagę',
        subtitle: 'Holistyczne Zdrowie',
        description: 'Kameralny ośrodek wellness dedykowany regeneracji ciała i umysłu. Ekologiczna kuchnia, medytacja i zabiegi naturalne w otoczeniu kojącej przyrody.'
    },
    'family-resort': {
        id: 'family-resort',
        name: 'Rodzinny Kurort',
        layout: 'full-width',
        icon: 'fa-users',
        category: 'hotel',
        stats: [
            { number: 'Aquapark', label: 'na miejscu' },
            { number: 'Animacje', label: 'dla dzieci' },
            { number: 'All', label: 'Inclusive' }
        ],
        title: 'Raj dla rodzin',
        subtitle: 'Niezapomniane Wakacje',
        description: 'Ogromny kompleks wypoczynkowy stworzony z myślą o rodzinach. Baseny, zjeżdżalnie, kluby dla dzieci i wieczorne show – tu nuda nie ma wstępu.'
    },
    'business-hub': {
        id: 'business-hub',
        name: 'Centrum Biznesowe',
        layout: 'split-right-image',
        icon: 'fa-briefcase',
        category: 'hotel',
        stats: [
            { number: 'Coworking', label: 'space' },
            { number: 'Szybkie', label: 'WiFi 1Gb' },
            { number: 'Sale', label: 'konferencyjne' }
        ],
        title: 'Praca i wypoczynek',
        subtitle: 'Biznes Klasa',
        description: 'Nowoczesny hotel biznesowy z pełnym zapleczem konferencyjnym. Idealne miejsce na spotkania biznesowe, szkolenia oraz pracę zdalną w komfortowych warunkach.'
    },
    'eco-lodge': {
        id: 'eco-lodge',
        name: 'Eko Osada',
        layout: 'asymmetric',
        icon: 'fa-leaf',
        category: 'hotel',
        stats: [
            { number: 'Zero', label: 'Waste' },
            { number: 'Energia', label: 'słoneczna' },
            { number: 'Las', label: 'dookoła' }
        ],
        title: 'W zgodzie z naturą',
        subtitle: 'Ekologiczny Wybór',
        description: 'Domki zbudowane całkowicie z naturalnych materiałów, zasilane energią odnawialną. Prawdziwy powrót do natury bez rezygnacji z komfortu.'
    },
    'art-hotel': {
        id: 'art-hotel',
        name: 'Art Hotel',
        layout: 'split-left-image',
        icon: 'fa-palette',
        category: 'hotel',
        stats: [
            { number: 'Galeria', label: 'sztuki' },
            { number: 'Designerskie', label: 'wnętrza' },
            { number: 'Wernisaże', label: 'cykliczne' }
        ],
        title: 'Sztuka życia',
        subtitle: 'Inspirujące Wnętrza',
        description: 'Butikowy hotel będący jednocześnie galerią sztuki współczesnej. Każdy pokój to inne dzieło, a korytarze pełne są obrazów i rzeźb młodych artystów.'
    },
    'sky-scraper': {
        id: 'sky-scraper',
        name: 'Podniebny Apartament',
        layout: 'full-width',
        icon: 'fa-building',
        category: 'apartments',
        stats: [
            { number: '40.', label: 'piętro' },
            { number: 'Panorama', label: '360°' },
            { number: 'VIP', label: 'concierge' }
        ],
        title: 'Głowa w chmurach',
        subtitle: 'Luksus Wysokości',
        description: 'Ekskluzywny penthouse na szczycie drapacza chmur. Zapierające dech w piersiach widoki na całą panoramę miasta, prywatna winda i obsługa na najwyższym poziomie.'
    },

    'hotel-modern-dark': {
        id: 'hotel-modern-dark',
        name: 'Nowoczesna Ciemna',
        layout: 'full-width',
        icon: 'fa-moon',
        theme: 'dark',
        stats: [
            { number: '24/7', label: 'serwis' },
            { number: 'Gold', label: 'standard' },
            { number: '100%', label: 'komfort' }
        ],
        title: 'Odkryj nową definicję luksusu',
        subtitle: 'Minimalizm, który zachwyca',
        description: 'Stworzyliśmy przestrzeń dla osób ceniących spokój i nowoczesny design. Ciemne, stonowane barwy, naturalne materiały i inteligentne rozwiązania sprawią, że Twój pobyt będzie czystą przyjemnością.',
        category: 'luxury'
    },

    'apt-grid-features': {
        id: 'apt-grid-features',
        name: 'Siatka Atutów',
        layout: 'cards-grid',
        icon: 'fa-table-cells',
        stats: [
            { number: 'WiFi 6', label: 'szybkość' },
            { number: 'Parking', label: 'podziemny' },
            { number: 'Self', label: 'check-in' }
        ],
        title: 'Wszystko czego potrzebujesz, by poczuć się jak w domu',
        subtitle: 'Komfort bez kompromisów',
        description: 'Nasze apartamenty to nie tylko miejsce do spania. To w pełni wyposażone przestrzenie do życia, pracy i relaksu. Zależy nam na Twojej niezależności, dlatego oferujemy system bezobsługowy i pełne wsparcie online.'
    },

    'eco-nature-hero': {
        id: 'eco-nature-hero',
        name: 'Natura Hero',
        layout: 'full-width',
        icon: 'fa-mountain-sun',
        stats: [
            { number: 'Zero', label: 'plastyku' },
            { number: '100%', label: 'eko' },
            { number: 'Cisza', label: 'leśna' }
        ],
        title: 'Zwolnij tempo i poczuj rytm natury',
        subtitle: 'Ucieczka od zgiełku miasta',
        description: 'Wierzymy, że najlepszy odpoczynek to ten w bliskości z przyrodą. Nasz obiekt został zbudowany z poszanowaniem ekosystemu, oferując Ci autentyczne doświadczenie życia w lesie, ale w wersji premium.'
    },

    'boutique-elegant-split': {
        id: 'boutique-elegant-split',
        name: 'Elegancka Dzielona',
        layout: 'split-right-image',
        icon: 'fa-vest-patches',
        stats: [
            { number: 'Design', label: 'Unique' },
            { number: 'Klimat', label: 'Kameralny' },
            { number: 'Obsługa', label: 'Personal' }
        ],
        title: 'Hotel z Duszą i Charakterem',
        subtitle: 'Butikowe doświadczenie gościnności',
        description: 'Nie jesteśmy kolejnym anonimowym hotelem. Znamy naszych gości po imieniu, parzymy ich ulubioną kawę i dbamy o to, by czuli się u nas wyjątkowo. Każdy detal ma swoją historię, którą chętnie Ci opowiemy.',
        category: 'luxury'
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
                <img src="${settings.mainImage || (window.getRandomImage ? window.getRandomImage('luxury') : 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200')}" alt="${settings.propertyName}">
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
                <img src="${settings.mainImage || (window.getRandomImage ? window.getRandomImage('luxury') : 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200')}" alt="${settings.propertyName}">
            </div>
        </div>
    </div>
</section>`,

    'full-width': (variant, settings) => `
<section class="section-intro section-intro-fullwidth" id="o-nas">
    <div class="intro-hero" style="background-image: url('${settings.mainImage || (window.getRandomImage ? window.getRandomImage('luxury') : 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200')}')">
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
                <img src="${settings.mainImage || (window.getRandomImage ? window.getRandomImage('luxury') : 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200')}" alt="${settings.propertyName}">
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
// ============================================
// GENERATE ABOUT SECTION
// ============================================
function generateAboutSection(variantId, settings) {
    let variant = ABOUT_SECTION_VARIANTS[variantId];
    if (!variant) {
        console.warn('About section variant not found:', variantId);
        // Fallback to a default if ID not found
        variant = ABOUT_SECTION_VARIANTS['hotel-elegant'];
    }

    // clone to avoid mutation
    variant = { ...variant };

    // 1. Override Layout if global setting exists
    if (window.appState?.introLayout && window.appState.introLayout !== 'auto') {
        variant.layout = window.appState.introLayout;
    }

    // 2. Override Content from App State (Editor)
    if (window.appState?.sectionContent?.intro) {
        const custom = window.appState.sectionContent.intro;
        if (custom.title) variant.title = custom.title;
        if (custom.subtitle) variant.subtitle = custom.subtitle;
        if (custom.description) variant.description = custom.description;
    }

    const layoutGenerator = AboutSectionLayouts[variant.layout];
    if (!layoutGenerator) {
        console.warn('Layout generator not found:', variant.layout);
        // Fallback layout
        return AboutSectionLayouts['split-left-image'](variant, settings);
    }
    return layoutGenerator(variant, settings);
}

// ============================================
// POLISH CITIES - 10 UNIQUE ABOUT SECTIONS
// ============================================
const CITY_ABOUT_SECTIONS = {
    'city-sopot-about': {
        id: 'city-sopot-about',
        name: 'Sopot - Nadmorskie Perły',
        layout: 'split-left-image',
        icon: 'fa-umbrella-beach',
        category: 'apartments-city',
        city: 'sopot',
        stats: [
            { number: '150m', label: 'do plaży' },
            { number: '5 min', label: 'do mola' },
            { number: '24/7', label: 'recepcja' }
        ],
        title: 'W sercu sopockiego kurortu',
        subtitle: 'Gdzie elegancja spotyka morską bryzę',
        description: 'Nasz apartament to idealna baza wypadowa do odkrywania najpiękniejszego polskiego kurortu. Zaledwie kilka kroków dzieli Cię od słynnego mola, kawiarenek Monte Cassino i złocistej plaży.',
        attractions: [
            { name: 'Molo w Sopocie', distance: '5 min', icon: 'fa-bridge' },
            { name: 'Monte Cassino', distance: '3 min', icon: 'fa-street-view' },
            { name: 'Opera Leśna', distance: '10 min', icon: 'fa-music' }
        ]
    },
    'city-zakopane-about': {
        id: 'city-zakopane-about',
        name: 'Zakopane - Góralski Klimat',
        layout: 'split-right-image',
        icon: 'fa-mountain',
        category: 'apartments-city',
        city: 'zakopane',
        stats: [
            { number: '1000m', label: 'n.p.m.' },
            { number: '5 min', label: 'do Krupówek' },
            { number: 'Góry', label: 'za oknem' }
        ],
        title: 'Pod Giewontem, blisko nieba',
        subtitle: 'Góralska gościnność i tatrzańskie widoki',
        description: 'Przytulny apartament w sercu Zakopanego, gdzie tradycja góralska łączy się z nowoczesnym komfortem.',
        attractions: [
            { name: 'Krupówki', distance: '5 min', icon: 'fa-street-view' },
            { name: 'Gubałówka', distance: '10 min', icon: 'fa-mountain' },
            { name: 'Termy', distance: '15 min', icon: 'fa-hot-tub' }
        ]
    },
    'city-krakow-about': {
        id: 'city-krakow-about',
        name: 'Kraków - Starówka Premium',
        layout: 'full-width',
        icon: 'fa-crown',
        category: 'apartments-city',
        city: 'krakow',
        stats: [
            { number: 'Rynek', label: '3 min' },
            { number: 'Wawel', label: '10 min' },
            { number: 'UNESCO', label: 'dziedzictwo' }
        ],
        title: 'Królewskie serce Krakowa',
        subtitle: 'Historia i magia na wyciągnięcie ręki',
        description: 'Zamieszkaj w zabytkowej kamienicy, gdzie każdy kamień opowiada historię.',
        attractions: [
            { name: 'Rynek Główny', distance: '3 min', icon: 'fa-store' },
            { name: 'Wawel', distance: '10 min', icon: 'fa-chess-rook' },
            { name: 'Kazimierz', distance: '12 min', icon: 'fa-synagogue' }
        ]
    },
    'city-warszawa-about': {
        id: 'city-warszawa-about',
        name: 'Warszawa - Metropolitan Chic',
        layout: 'cards-grid',
        icon: 'fa-city',
        category: 'apartments-city',
        city: 'warszawa',
        stats: [
            { number: 'Metro', label: '2 min' },
            { number: 'Smart', label: 'home' },
            { number: '5G', label: 'internet' }
        ],
        title: 'W rytmie stolicy',
        subtitle: 'Nowoczesność i energia wielkiego miasta',
        description: 'Nowoczesny apartament w dynamicznym sercu Warszawy.',
        attractions: [
            { name: 'Stare Miasto', distance: '10 min', icon: 'fa-landmark' },
            { name: 'Pałac Kultury', distance: '5 min', icon: 'fa-building' },
            { name: 'Łazienki', distance: '15 min', icon: 'fa-tree' }
        ]
    },
    'city-gdansk-about': {
        id: 'city-gdansk-about',
        name: 'Gdańsk - Hanzeatycki Urok',
        layout: 'asymmetric',
        icon: 'fa-landmark',
        category: 'apartments-city',
        city: 'gdansk',
        stats: [
            { number: 'Długi Targ', label: '2 min' },
            { number: 'Żuraw', label: '5 min' },
            { number: 'Bursztyn', label: 'miasto' }
        ],
        title: 'Kolorowe kamienice i morze',
        subtitle: 'Hanzeatyckie dziedzictwo w każdym detalu',
        description: 'Apartament w samym sercu gdańskiej Starówki.',
        attractions: [
            { name: 'Długi Targ', distance: '2 min', icon: 'fa-store' },
            { name: 'Bazylika Mariacka', distance: '4 min', icon: 'fa-church' },
            { name: 'Żuraw', distance: '5 min', icon: 'fa-anchor' }
        ]
    },
    'city-trojmiasto-about': {
        id: 'city-trojmiasto-about',
        name: 'Trójmiasto - Perła Bałtyku',
        layout: 'split-left-image',
        icon: 'fa-water',
        category: 'apartments-city',
        city: 'trojmiasto',
        stats: [
            { number: '3', label: 'miasta' },
            { number: 'SKM', label: '15 min' },
            { number: 'Plaże', label: 'km długości' }
        ],
        title: 'Trzy miasta, jedno morze',
        subtitle: 'Najlepsza baza do odkrywania wybrzeża',
        description: 'Strategiczna lokalizacja w sercu Trójmiasta.',
        attractions: [
            { name: 'Molo Sopot', distance: 'Sopot', icon: 'fa-bridge' },
            { name: 'Starówka', distance: 'Gdańsk', icon: 'fa-landmark' },
            { name: 'Klif Orłowo', distance: 'Gdynia', icon: 'fa-mountain' }
        ]
    },
    'city-wroclaw-about': {
        id: 'city-wroclaw-about',
        name: 'Wrocław - Miasto Mostów',
        layout: 'cards-grid',
        icon: 'fa-bridge',
        category: 'apartments-city',
        city: 'wroclaw',
        stats: [
            { number: '100+', label: 'mostów' },
            { number: '300+', label: 'krasnali' },
            { number: '12', label: 'wysp' }
        ],
        title: 'Między wyspami i mostami',
        subtitle: 'Artystyczna dusza Dolnego Śląska',
        description: 'Wrocław zachwyca na każdym kroku.',
        attractions: [
            { name: 'Ostrów Tumski', distance: '8 min', icon: 'fa-church' },
            { name: 'Rynek', distance: '5 min', icon: 'fa-store' },
            { name: 'ZOO', distance: '15 min', icon: 'fa-hippo' }
        ]
    },
    'city-poznan-about': {
        id: 'city-poznan-about',
        name: 'Poznań - Staropolski Szyk',
        layout: 'split-right-image',
        icon: 'fa-building-columns',
        category: 'apartments-city',
        city: 'poznan',
        stats: [
            { number: '12:00', label: 'koziołki' },
            { number: 'Rogale', label: 'świętomarcińskie' },
            { number: 'Targi', label: 'miasto' }
        ],
        title: 'Tu Polska się zaczęła',
        subtitle: 'Tradycja, handel i poznańska duma',
        description: 'Poznań to miasto z charakterem.',
        attractions: [
            { name: 'Stary Rynek', distance: '3 min', icon: 'fa-store' },
            { name: 'Stary Browar', distance: '10 min', icon: 'fa-shopping-bag' },
            { name: 'Katedra', distance: '12 min', icon: 'fa-church' }
        ]
    },
    'city-kolobrzeg-about': {
        id: 'city-kolobrzeg-about',
        name: 'Kołobrzeg - Uzdrowiskowy Relaks',
        layout: 'full-width',
        icon: 'fa-spa',
        category: 'apartments-city',
        city: 'kolobrzeg',
        stats: [
            { number: 'Plaża', label: '200m' },
            { number: 'Tężnie', label: 'w parku' },
            { number: 'SPA', label: 'w cenie' }
        ],
        title: 'Uzdrowisko nad Bałtykiem',
        subtitle: 'Gdzie zdrowie spotyka morze',
        description: 'Kołobrzeg to idealne połączenie wypoczynku nad morzem z prozdrowotną regeneracją.',
        attractions: [
            { name: 'Molo', distance: '5 min', icon: 'fa-bridge' },
            { name: 'Park Zdrojowy', distance: '3 min', icon: 'fa-tree' },
            { name: 'Latarnia', distance: '10 min', icon: 'fa-tower-observation' }
        ]
    },
    'city-karpacz-about': {
        id: 'city-karpacz-about',
        name: 'Karpacz - Karkonoska Ucieczka',
        layout: 'asymmetric',
        icon: 'fa-person-hiking',
        category: 'apartments-city',
        city: 'karpacz',
        stats: [
            { number: 'Śnieżka', label: 'wycieczka' },
            { number: 'Wang', label: '10 min' },
            { number: 'Wodospad', label: '15 min' }
        ],
        title: 'U stóp Śnieżki',
        subtitle: 'Karkonosze w zasięgu ręki',
        description: 'Przytulny apartament z widokiem na góry, skąd wyruszysz na szczyt Śnieżki.',
        attractions: [
            { name: 'Świątynia Wang', distance: '10 min', icon: 'fa-church' },
            { name: 'Śnieżka', distance: '1h', icon: 'fa-mountain' },
            { name: 'Wodospad', distance: '15 min', icon: 'fa-water' }
        ]
    }
};

// Merge city sections into main object
Object.assign(ABOUT_SECTION_VARIANTS, CITY_ABOUT_SECTIONS);

// Get all apartment variants
function getApartmentAboutVariants() {
    return Object.values(ABOUT_SECTION_VARIANTS).filter(v => v.category === 'apartments');
}

// Get all hotel variants
function getHotelAboutVariants() {
    return Object.values(ABOUT_SECTION_VARIANTS).filter(v => !v.category || v.category === 'hotel');
}

// Get city-specific about variants
function getCityAboutVariants() {
    return Object.values(ABOUT_SECTION_VARIANTS).filter(v => v.category === 'apartments-city');
}

// Get about variant for specific city
function getCityAboutVariant(cityId) {
    return Object.values(ABOUT_SECTION_VARIANTS).find(v => v.city === cityId);
}

// Export
window.ABOUT_SECTION_VARIANTS = ABOUT_SECTION_VARIANTS;
window.CITY_ABOUT_SECTIONS = CITY_ABOUT_SECTIONS;
window.AboutSectionLayouts = AboutSectionLayouts;
window.generateAboutSection = generateAboutSection;
window.getApartmentAboutVariants = getApartmentAboutVariants;
window.getHotelAboutVariants = getHotelAboutVariants;
window.getCityAboutVariants = getCityAboutVariants;
window.getCityAboutVariant = getCityAboutVariant;

