# 📋 INSTRUKCJA: Sekcja Ofert Wyróżnionych

## ✅ Co zostało już dodane:
- ✅ **CSS dla ofert** - dodany do `pensjonat.css` (linie 1153-1416)

---

## 🎯 CO MUSISZ DODAĆ:

### 1️⃣ DO PLIKU `pensjonat-sections.html` - SEKCJA W BODY

Dodaj tę sekcję **GDZIEKOLWIEK W BODY** (np. po sekcji "Nasze Pokoje"):

```html
<!-- OFERTY WYRÓŻNIONE - STREFA 1 -->
<div class="offers --zone1">
    <h2 class="offers__header">Pokoje Wyróżnione</h2>
    <div id="strefa1" class="offers__box">

        <!-- ITEM 1 -->
        <div class="item-box">
            <div class="item">
                <div class="item__img-box">
                    <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop" alt="Górski Apartament Deluxe" class="item__img">
                    <div class="item__param">
                        <i class="fas fa-expand"></i>
                        <span class="item__m2">70 m²</span>
                        <i class="fas fa-users"></i>
                        <span class="item__persons">Maks. osób 4</span>
                    </div>
                </div>
                <div class="item__body">
                    <span class="item__name">Górski Apartament Deluxe</span>
                    <p class="item__txt">Przestronny apartament z panoramicznym widokiem na las i jezioro. Salon z kominkiem, luksusowa łazienka z wanną wolnostojącą i prywatny taras.</p>
                    <span class="item__priceBox">cena: <span class="item__price">520 zł</span> / noc</span>
                    <a class="item__btn" href="#">Zarezerwuj</a>
                </div>
            </div>
        </div>

        <!-- ITEM 2 -->
        <div class="item-box">
            <div class="item">
                <div class="item__img-box">
                    <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop" alt="Romantyczny Zakątek" class="item__img">
                    <div class="item__param">
                        <i class="fas fa-expand"></i>
                        <span class="item__m2">45 m²</span>
                        <i class="fas fa-users"></i>
                        <span class="item__persons">Maks. osób 2</span>
                    </div>
                </div>
                <div class="item__body">
                    <span class="item__name">Romantyczny Zakątek</span>
                    <p class="item__txt">Stworzony dla par pragnących intymności i romantycznej atmosfery. Łóżko z baldachimem, jacuzzi dla dwojga i prywatny taras z huśtawką.</p>
                    <span class="item__priceBox">cena: <span class="item__price">450 zł</span> / noc</span>
                    <a class="item__btn" href="#">Zarezerwuj</a>
                </div>
            </div>
        </div>

        <!-- ITEM 3 -->
        <div class="item-box">
            <div class="item">
                <div class="item__img-box">
                    <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop" alt="Mazurskie Gniazdo Rodzinne" class="item__img">
                    <div class="item__param">
                        <i class="fas fa-expand"></i>
                        <span class="item__m2">62 m²</span>
                        <i class="fas fa-users"></i>
                        <span class="item__persons">Maks. osób 5</span>
                    </div>
                </div>
                <div class="item__body">
                    <span class="item__name">Mazurskie Gniazdo Rodzinne</span>
                    <p class="item__txt">Przestronny apartament rodzinny z dwoma sypialniami i strefą dzienną. Wyposażony w gry planszowe, książki i kącik dla dzieci.</p>
                    <span class="item__priceBox">cena: <span class="item__price">550 zł</span> / noc</span>
                    <a class="item__btn" href="#">Zarezerwuj</a>
                </div>
            </div>
        </div>

    </div>

    <!-- SVG Wave -->
    <div class="container-svg">
        <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
            <path d="M0, 20 C150, 60 350, 0 500, 20 L500, 00 L0, 0 Z" style="stroke:none;"></path>
        </svg>
    </div>
</div>
```

---

### 2️⃣ PRZED ZAMKNIĘCIEM `</body>` - SKRYPT KONFIGURACYJNY

Dodaj ten kod **NA SAMYM KOŃCU, TUŻ PRZED `</body>`**:

```html
<script>
// Konfiguracja limitów dla każdej strefy ofert
const offersSectionLimits = {
  strefa1: 7,  // Pokoje Wyróżnione
  strefa2: 6,  // Nad jeziorem
  strefa3: 6,  // Z widokiem na las
  strefa4: 6   // Apartamenty rodzinne
}
</script>

<script type="text/javascript">
// Animacja parallax dla pierwszego slajdu (jeśli istnieje)
$(function(){
    if($(".firstslide").length){
        $("#parallax_topslider").after($(".firstslide").animate({top:'0'},1500));
    }
})

// Przycisk "Pokaż wszystko" (jeśli potrzebny)
const showAllBtn = document.querySelector('.welcome__show-all');
let showAllBox = document.querySelector('.welcome__show');
if (showAllBtn) {
    showAllBtn.addEventListener('click', function () {
        showAllBox.classList.toggle('--active');
    })
}

// Funkcja ładowania skryptów
function loadScript(scriptUrl) {
  const script = document.createElement('script');
  script.src = scriptUrl;
  document.body.appendChild(script);

  return new Promise((res, rej) => {
    script.onload = function() {
      res();
    }
    script.onerror = function () {
      rej();
    }
  });
}

// Ładowanie jQuery Cookie i obsługa bannera (opcjonalne)
loadScript('https://cdn.jsdelivr.net/npm/js-cookie@rc/dist/js.cookie.min.js')
  .then(() => {
    ($.cookie('bannerTop_clicked') === null) ?  $('#bannerTop').remove() :  $('html').addClass('--bannerTop');
    $('.bannerTop__close').on('click' , function hidebannerTop(e) {
      e.preventDefault();
      let expiryDate = new Date();
      const month = (expiryDate.getMonth() + 1) % 12;
      expiryDate.setMonth(month);
      $.cookie('bannerTop_clicked', true, {
        expires: expiryDate
      });
      $('#bannerTop').remove();
      $('html').removeClass('--bannerTop');
      return false;
    })
    $('#bannerTop').prependTo('header')
  })
  .catch(() => {
    console.error('Script loading failed! Handle this error');
  });
</script>
```

---

## 📚 JAK TO DZIAŁA:

### System automatyczny:
- **Panel admina** wyróżnia pokoje
- Pierwsze 3 wyróżnione → Strefa 1 (strefa1)
- Kolejne 3 → Strefa 2 (strefa2)
- Itd.

### Strefy (możesz dodać więcej):
- **strefa1** - Pokoje Wyróżnione (klasa `--zone1`)
- **strefa2** - Nad jeziorem (klasa `--zone2`)
- **strefa3** - Z widokiem na las (klasa `--zone3`)
- **strefa4** - Apartamenty rodzinne

### Tła sekcji:
- `--zone1` - gradient miętowy z pattern
- `--zone2` - gradient biały z liniami
- `--zone3` - gradient piaskowy z plamami

---

## 🎨 STYLIZACJA:

CSS jest już dodany i zawiera:
- ✅ Responsywne karty (3 kolumny → 2 → 1)
- ✅ Animacje hover (zoom zdjęcia, podniesienie karty)
- ✅ Gradient buttons z shine effect
- ✅ SVG wave divider na dole sekcji
- ✅ Overlay z parametrami na zdjęciu

---

## 🔧 CUSTOMIZACJA:

### Zmiana nagłówka sekcji:
```html
<h2 class="offers__header">TWÓJ NOWY TYTUŁ</h2>
```

### Zmiana tła sekcji:
```html
<div class="offers --zone1">  <!-- użyj --zone1, --zone2 lub --zone3 -->
```

### Dodanie nowej strefy:
1. Dodaj w skrypcie: `strefa5: 6`
2. Skopiuj całą sekcję `<div class="offers --zone2">` i zmień ID na `strefa5`

---

## ⚠️ WAŻNE:

- **Nie ruszaj** `id="strefa1"` - to identyfikator dla systemu automatycznego
- **Zachowaj** strukturę HTML - system backend ją wypełnia
- **FontAwesome** musi być załadowany (już jest w `head.html`)
- **jQuery** potrzebne do skryptu (Bootstrap już go ładuje)

---

## 📍 GDZIE W KODZIE:

### Lokalizacja plików:
- CSS: `pensjonat-pod-jodlami/pensjonat.css` (linie 1153-1416)
- HTML: dodaj do `pensjonat-pod-jodlami/pensjonat-sections.html`
- Skrypt: dodaj przed `</body>` w `pensjonat-pod-jodlami/pensjonat-sections.html`

### Przykładowe miejsce w HTML:
```
<body>
  <!-- O NAS -->
  ...
  <!-- POKOJE -->
  ...

  <!-- ↓↓↓ TUTAJ DODAJ SEKCJĘ OFERT ↓↓↓ -->
  <div class="offers --zone1">
  ...
  </div>

  <!-- ODKRYJ MAZURY -->
  ...

  <!-- ↓↓↓ NA SAMYM KOŃCU PRZED </body> ↓↓↓ -->
  <script>
  const offersSectionLimits = {...}
  </script>
</body>
```

---

✅ **GOTOWE!** Sekcja ofert wyróżnionych jest w pełni stylizowana w motywie Alpine Serenity.
