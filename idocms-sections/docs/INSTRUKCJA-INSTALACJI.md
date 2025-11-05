# 📖 Kompletna Instrukcja Instalacji
## System Uniwersalnych Sekcji dla idoBooking CMS - Szklarska Poręba

---

## 📋 Spis Treści

1. [Wprowadzenie](#wprowadzenie)
2. [Wymagania](#wymagania)
3. [Instalacja CSS](#instalacja-css)
4. [Instalacja Sekcji HTML](#instalacja-sekcji-html)
5. [Personalizacja](#personalizacja)
6. [Integracja z Systemem Wyróżnionych Ofert](#integracja-z-systemem-wyróżnionych-ofert)
7. [Troubleshooting](#troubleshooting)
8. [FAQ](#faq)

---

## 🎯 Wprowadzenie

Ten system zawiera **4 uniwersalne sekcje** zaprojektowane specjalnie dla apartamentów górskich w Szklarskiej Porębie:

- ✅ **Sekcja Apartamentów** (4 obiekty, zakodowane na sztywno)
- ✅ **Górskie Udogodnienia** (12 udogodnień z eleganckimi ikonami)
- ✅ **Timeline Atrakcji** (Odkryj Karkonosze - 6 atrakcji)
- ✅ **Lokalizacja z Mapą** (Split layout z Google Maps)

### Cechy systemu:

- 🎨 **Luksusowa kolorystyka górska**: Granat, złoto, krem
- 📱 **Mobile First**: Perfekcyjnie responsywne
- ♿ **WCAG AA**: Dostępność dla wszystkich
- 🚀 **Full Width**: Sekcje na całą szerokość ekranu
- 🔗 **Integracja**: Kompatybilność z systemem wyróżnionych ofert

---

## ⚙️ Wymagania

### System:
- idoBooking CMS (stary system oparty na Smarty)
- Dostęp do:
  - ✅ Arkusza stylów CSS
  - ✅ Sekcji Head strony głównej
  - ✅ Sekcji Body
  - ✅ Możliwości dodawania własnych sekcji CMS

### Przygotowanie:
- [ ] Zdjęcia apartamentów (zalecane: WebP, min. 1200x800px)
- [ ] Ceny apartamentów
- [ ] Opisy apartamentów
- [ ] Link do systemu rezerwacji (obecnie: https://engine55004.idobooking.com/)

---

## 🎨 Instalacja CSS

### KROK 1: Wejdź do Panelu CSS

1. Zaloguj się do panelu idoBooking
2. Przejdź do: **Wygląd → Arkusz stylów CSS**

### KROK 2: Wklej CSS

1. Otwórz plik: `css/complete-luxury-mountain.css`
2. **Skopiuj CAŁY kod**
3. **Wklej NA SAMYM POCZĄTKU** arkusza stylów (przed istniejącym kodem)
4. Kliknij **Zapisz**

### KROK 3: Weryfikacja

1. Odśwież stronę (Ctrl+F5 / Cmd+Shift+R)
2. Sprawdź czy czcionki się załadowały (Playfair Display + Lato)
3. Jeśli nie widzisz zmian, wyczyść cache przeglądarki

### ⚠️ WAŻNE:

```css
/* CSS MUSI być na początku arkusza! */
/* Jeśli wkleisz go na końcu, mogą być konflikty */
```

---

## 📄 Instalacja Sekcji HTML

### Kolejność wklejania sekcji:

1. **Apartamenty Premium** (PIERWSZA)
2. **Górskie Udogodnienia**
3. **Timeline Atrakcji**
4. **Lokalizacja z Mapą** (OSTATNIA)

---

### SEKCJA 1: Apartamenty Premium

#### Instalacja:

1. Panel idoBooking → **Treść → Sekcje CMS**
2. Kliknij **+ Nowa sekcja**
3. Wypełnij:
   - **Nazwa**: "Apartamenty Premium"
   - **Poziom**: Body
   - **Widoczność**: Strona główna
4. Otwórz: `html/1-apartamenty-section.html`
5. **Skopiuj CAŁY kod** i wklej w edytor
6. Kliknij **Zapisz**

#### Personalizacja:

Otwórz wklejony kod w edytorze i zmień:

```html
<!-- ZMIEŃ NAZWĘ APARTAMENTU -->
<h3 class="apartment-name">Twoja Nazwa</h3>

<!-- ZMIEŃ OPIS -->
<p class="apartment-description">
  Twój opis apartamentu...
</p>

<!-- ZMIEŃ ZDJĘCIE -->
<img src="TWOJ_URL_ZDJECIA.jpg" alt="Opis dla screenreaderów">

<!-- ZMIEŃ DANE -->
<span class="feature-value">6</span> <!-- liczba osób -->
<span class="feature-value">3</span> <!-- pokoi -->
<span class="feature-value">2</span> <!-- łazienek -->

<!-- ZMIEŃ CENĘ -->
<span class="price-amount">450 zł</span>
```

#### Powtórz dla wszystkich 4 apartamentów!

---

### SEKCJA 2: Górskie Udogodnienia

#### Instalacja:

1. Panel idoBooking → **Treść → Sekcje CMS**
2. Kliknij **+ Nowa sekcja**
3. Wypełnij:
   - **Nazwa**: "Górskie Udogodnienia"
   - **Poziom**: Body
   - **Widoczność**: Strona główna
4. Otwórz: `html/2-gorskie-udogodnienia-section.html`
5. **Skopiuj CAŁY kod** i wklej
6. Kliknij **Zapisz**

#### Personalizacja:

```html
<!-- ZMIEŃ IKONY (obecnie emoji, można zamienić na SVG) -->
<div class="amenity-icon">🔥</div>

<!-- ZMIEŃ NAZWĘ -->
<h3 class="amenity-title">Twoja Nazwa</h3>

<!-- ZMIEŃ OPIS -->
<p class="amenity-description">
  Twój opis udogodnienia...
</p>
```

#### Jak zamienić emoji na ikony SVG?

1. Idź na: https://heroicons.com/ (darmowe ikony)
2. Znajdź ikonę (np. "fire")
3. Skopiuj kod SVG
4. Zamień:

```html
<!-- ZAMIAST -->
<div class="amenity-icon">🔥</div>

<!-- UŻYJ -->
<div class="amenity-icon">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10s4-2 4-2 .5 5 2 6.5v.5z"/>
  </svg>
</div>
```

---

### SEKCJA 3: Timeline Atrakcji

#### Instalacja:

1. Panel idoBooking → **Treść → Sekcje CMS**
2. Kliknij **+ Nowa sekcja**
3. Wypełnij:
   - **Nazwa**: "Odkryj Karkonosze"
   - **Poziom**: Body
   - **Widoczność**: Strona główna
4. Otwórz: `html/3-timeline-atrakcje-section.html`
5. **Skopiuj CAŁY kod** i wklej
6. Kliknij **Zapisz**

#### Personalizacja:

```html
<!-- ZMIEŃ DYSTANS -->
<span class="timeline-distance">6 km • 15 min autem</span>

<!-- ZMIEŃ NAZWĘ ATRAKCJI -->
<h3 class="timeline-content-title">Twoja Atrakcja</h3>

<!-- ZMIEŃ OPIS -->
<p class="timeline-content-description">
  Twój opis atrakcji...
</p>

<!-- ZMIEŃ TAGI -->
<span class="timeline-feature-tag">Rodzina</span>
<span class="timeline-feature-tag">Natura</span>

<!-- ZMIEŃ ZDJĘCIE -->
<img src="TWOJ_URL.jpg" alt="Opis atrakcji">
```

#### Jak sprawdzić dystanse?

1. Idź na: https://google.com/maps
2. Kliknij prawym na "Górna 22c, Szklarska Poręba"
3. Wybierz "Wyznacz trasę"
4. Wpisz cel (np. "Wodospad Kamieńczyka")
5. Skopiuj czas i dystans

---

### SEKCJA 4: Lokalizacja z Mapą

#### Instalacja:

1. Panel idoBooking → **Treść → Sekcje CMS**
2. Kliknij **+ Nowa sekcja**
3. Wypełnij:
   - **Nazwa**: "Lokalizacja"
   - **Poziom**: Body
   - **Widoczność**: Strona główna
4. Otwórz: `html/4-lokalizacja-mapa-section.html`
5. **Skopiuj CAŁY kod** i wklej
6. Kliknij **Zapisz**

#### Personalizacja:

```html
<!-- ZMIEŃ ADRES -->
<span>
  ul. Górna 22c<br>
  58-580 Szklarska Poręba
</span>

<!-- ZMIEŃ STATYSTYKI -->
<span class="stat-number">5 min</span>
<span class="stat-label">Do centrum pieszo</span>

<!-- ZMIEŃ PUNKTY POI -->
<div class="poi-name">Promenada</div>
<div class="poi-distance">2 km • 25 min pieszo</div>
```

#### Jak zmienić mapę Google?

1. Idź na: https://google.com/maps
2. Wyszukaj swój adres
3. Kliknij **Share** / **Udostępnij**
4. Wybierz **Embed a map** / **Osadź mapę**
5. Skopiuj kod `<iframe>`
6. Zamień w sekcji:

```html
<iframe
  src="TWOJ_NOWY_URL_EMBED"
  class="location-map"
  loading="lazy"
  ...
></iframe>
```

---

## 🎨 Personalizacja

### Zmiana Kolorystyki

Jeśli chcesz zmienić kolory, edytuj w CSS (na początku pliku):

```css
:root {
  /* ZMIEŃ NA SWOJE KOLORY */
  --mountain-gold: #B8935E;        /* Złoty akcent */
  --mountain-navy: #1C3C5A;        /* Granatowy główny */
  --mountain-cream: #F5F1EA;       /* Krem tło */

  /* Lub użyj generatora: https://coolors.co/ */
}
```

### Zmiana Czcionek

```css
@import url('https://fonts.googleapis.com/css2?family=TWOJA_CZCIONKA&display=swap');

:root {
  --font-display: 'TWOJA_CZCIONKA', serif;
  --font-body: 'TWOJA_CZCIONKA', sans-serif;
}
```

Znajdź czcionki na: https://fonts.google.com/

---

## 🔗 Integracja z Systemem Wyróżnionych Ofert

### Jak działa?

System idoBooking generuje automatycznie sekcję `.container-hotspot` z wyróżnionymi ofertami.

**Nasz CSS automatycznie stylizuje tę sekcję!**

### Jak włączyć?

1. Panel idoBooking → **Oferty**
2. Znajdź ofertę
3. Zaznacz **Wyróżniona oferta**
4. Zapisz

### Co się stanie?

- Oferta pojawi się w sekcji "Wyróżnione Oferty"
- Automatycznie będzie miała nasze style (karty, hover, itp.)
- Będzie wyglądać spójnie z resztą strony

### Personalizacja:

Jeśli chcesz zmienić wygląd wyróżnionych ofert, edytuj w CSS:

```css
/* Znajdź sekcję 7 w CSS: */
/* INTEGRACJA Z SYSTEMEM WYRÓŻNIONYCH OFERT IDOBOOKING */

/* Zmień co chcesz */
.offerslist .offer {
  border-radius: 24px; /* zaokrąglenie */
  box-shadow: 0 8px 24px rgba(0,0,0,0.10); /* cień */
}
```

---

## 🛠️ Troubleshooting

### Problem: Sekcje nie są na pełną szerokość

**Rozwiązanie 1:** Sprawdź czy CSS jest na początku arkusza

**Rozwiązanie 2:** Dodaj do sekcji HEAD:

```html
<style>
.apartments-premium-section,
.mountain-amenities-section,
.timeline-section,
.location-split-section {
  width: 100vw !important;
  position: relative !important;
  left: 50% !important;
  right: 50% !important;
  margin-left: -50vw !important;
  margin-right: -50vw !important;
}
</style>
```

**Rozwiązanie 3:** Sprawdź czy sekcje nie są zagnieżdżone w `<div>` z `max-width`

---

### Problem: Czcionki się nie załadowały

**Rozwiązanie 1:** Sprawdź czy masz połączenie z Google Fonts

**Rozwiązanie 2:** Dodaj do sekcji HEAD:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">
```

---

### Problem: Kolory się nie zmieniają

**Rozwiązanie:** Wyczyść cache:

1. Przeglądarka: Ctrl+Shift+Delete (wybierz cache)
2. idoBooking: Panel → Narzędzia → Wyczyść cache
3. Hard refresh: Ctrl+F5 (Windows) / Cmd+Shift+R (Mac)

---

### Problem: Mapa Google nie działa

**Sprawdź:**
- [ ] Czy iframe ma poprawny URL embed (nie zwykły link!)
- [ ] Czy nie blokuje go Content Security Policy
- [ ] Czy w przeglądarce nie jest wyłączone iframe embedding

**Jak pobrać poprawny embed:**
1. Google Maps → Twój adres → Share → **Embed a map** (nie "Send a link"!)
2. Skopiuj CAŁY kod `<iframe>...</iframe>`

---

### Problem: Sekcje wyświetlają się w złej kolejności

**Rozwiązanie:**
1. Panel idoBooking → Treść → Sekcje CMS
2. Przeciągnij sekcje w odpowiedniej kolejności:
   - Apartamenty (1)
   - Udogodnienia (2)
   - Timeline (3)
   - Lokalizacja (4)

---

### Problem: Na mobile jest źle

**Sprawdź:**
1. Czy CSS jest w całości wklejony (responsive kod jest na końcu)
2. Czy w HEAD jest: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
3. Przetestuj na prawdziwym urządzeniu (nie tylko emulator)

---

## ❓ FAQ

### Q: Czy mogę używać tylko wybranych sekcji?

**A:** Tak! Sekcje są niezależne. Możesz wkleić tylko te, które chcesz.

---

### Q: Czy mogę zmienić kolejność sekcji?

**A:** Tak! W panelu CMS przeciągnij sekcje w dowolnej kolejności.

---

### Q: Czy mogę dodać więcej apartamentów?

**A:** Tak! W pliku HTML skopiuj całą strukturę `<article class="apartment-card">...</article>` i wklej przed `</div><!-- /.apartments-grid -->`. Zmień dane.

---

### Q: Czy mogę usunąć niektóre udogodnienia?

**A:** Tak! Usuń całą strukturę `<article class="amenity-card">...</article>` dla danego udogodnienia.

---

### Q: Czy mogę dodać więcej atrakcji na timeline?

**A:** Tak! Skopiuj `<article class="timeline-item">...</article>` i wklej w odpowiednim miejscu. Zmień dane.

---

### Q: Czy muszę używać systemu wyróżnionych ofert?

**A:** Nie! Mamy sekcję Apartamentów zakodowaną na sztywno w HTML. To daje Ci pełną kontrolę. System wyróżnionych ofert jest opcjonalny i jeśli go użyjesz, będzie automatycznie stylizowany.

---

### Q: Czy mogę zmienić link rezerwacji?

**A:** Tak! Znajdź w HTML wszystkie wystąpienia:
```html
href="https://engine55004.idobooking.com/"
```
Zamień na swój link rezerwacji. Użyj funkcji Find & Replace (Ctrl+H).

---

### Q: Jak dodać Google Analytics?

**A:** Dodaj kod śledzenia do sekcji HEAD w panelu idoBooking.

---

### Q: Czy to jest SEO-friendly?

**A:** Tak!
- ✅ Semantyczny HTML5 (`<section>`, `<article>`, `<header>`)
- ✅ Odpowiednie nagłówki (`<h2>`, `<h3>`)
- ✅ Alt text dla obrazków
- ✅ ARIA labels dla dostępności
- ✅ Fast loading (lazy loading obrazków)

---

### Q: Czy mogę używać tego dla innych obiektów?

**A:** Tak! System jest uniwersalny. Zmień:
- Nazwę lokalizacji
- Zdjęcia
- Atrakcje lokalne
- Dystanse
- Kolory (opcjonalnie)

I gotowe!

---

## 📞 Wsparcie

### Potrzebujesz pomocy?

1. **Przeczytaj tę instrukcję** jeszcze raz 😊
2. **Sprawdź Troubleshooting** powyżej
3. **Sprawdź FAQ** - może znajdziesz odpowiedź
4. **Sprawdź konsole przeglądarki** (F12) - czy są błędy?

### Zgłoś problem:

Jeśli coś nie działa, przygotuj:
- [ ] Screenshot problemu
- [ ] URL strony
- [ ] Przeglądarka i wersja
- [ ] Kroki do reprodukcji

---

## ✅ Checklist Instalacji

Użyj tego checklistu, aby upewnić się, że wszystko jest OK:

### Przed instalacją:
- [ ] Mam backup obecnej strony
- [ ] Mam przygotowane zdjęcia apartamentów
- [ ] Znam ceny apartamentów
- [ ] Mam link do systemu rezerwacji

### CSS:
- [ ] CSS wklejony NA POCZĄTKU arkusza stylów
- [ ] CSS zapisany
- [ ] Cache wyczyszczony
- [ ] Czcionki załadowane (sprawdzone w przeglądarce)

### Sekcja 1 - Apartamenty:
- [ ] Sekcja utworzona w CMS
- [ ] HTML wklejony
- [ ] Nazwy apartamentów zmienione
- [ ] Opisy zmienione
- [ ] Zdjęcia zmienione (4 apartamenty)
- [ ] Ceny zmienione
- [ ] Liczby osób/pokoi/łazienek zmienione
- [ ] Link rezerwacji zaktualizowany
- [ ] Zapisane i przetestowane

### Sekcja 2 - Udogodnienia:
- [ ] Sekcja utworzona w CMS
- [ ] HTML wklejony
- [ ] Nazwy udogodnień dostosowane (opcjonalnie)
- [ ] Opisy dostosowane (opcjonalnie)
- [ ] Ikony zamienione na SVG (opcjonalnie)
- [ ] Zapisane i przetestowane

### Sekcja 3 - Timeline:
- [ ] Sekcja utworzona w CMS
- [ ] HTML wklejony
- [ ] Dystanse sprawdzone i zmienione
- [ ] Nazwy atrakcji zmienione (opcjonalnie)
- [ ] Opisy zmienione (opcjonalnie)
- [ ] Zdjęcia zmienione (opcjonalnie)
- [ ] Tagi dostosowane (opcjonalnie)
- [ ] Zapisane i przetestowane

### Sekcja 4 - Lokalizacja:
- [ ] Sekcja utworzona w CMS
- [ ] HTML wklejony
- [ ] Adres zmieniony
- [ ] Mapa Google zaktualizowana (iframe)
- [ ] Link nawigacji zaktualizowany
- [ ] Statystyki zmienione
- [ ] Punkty POI zmienione
- [ ] Zapisane i przetestowane

### Testy finalne:
- [ ] Wszystkie sekcje widoczne na stronie głównej
- [ ] Sekcje w odpowiedniej kolejności
- [ ] Full width działa (sekcje na całą szerokość)
- [ ] Hover effects działają
- [ ] Linki działają (szczególnie rezerwacja!)
- [ ] Mapa Google działa
- [ ] Przetestowane na desktop
- [ ] Przetestowane na tablet
- [ ] Przetestowane na mobile
- [ ] Przetestowane w różnych przeglądarkach
- [ ] Szybkość ładowania OK
- [ ] Nie ma błędów w konsoli (F12)

### Opcjonalnie - System wyróżnionych ofert:
- [ ] Oferty oznaczone jako wyróżnione w idoBooking
- [ ] Sekcja generuje się automatycznie
- [ ] Style są spójne z resztą strony

---

## 🎉 Gratulacje!

Jeśli wszystkie checkboxy są zaznaczone - Twoja strona jest gotowa!

Masz teraz **nowoczesną, responsywną, dostępną** stronę dla apartamentów górskich z:
- ✨ Luksusowym designem
- 📱 Pełnym mobile support
- ♿ WCAG AA accessibility
- 🚀 Fast loading
- 🎨 Profesjonalnym UI/UX

**Powodzenia!** 🏔️

---

*Ostatnia aktualizacja: 2025-11-05*
*Wersja: 1.0*
