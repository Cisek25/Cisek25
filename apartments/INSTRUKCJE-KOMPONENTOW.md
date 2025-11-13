# INSTRUKCJE KOMPONENTÓW - APARTAMENTY GÓRSKIE

> **Data aktualizacji:** 2025-11-06
> **Wersja:** 2.0
> **Projekt:** Apartamenty Szklarska Poręba - Sekcje Custom dla idoBooking CMS

---

## 📋 SPIS TREŚCI

1. [Menu Przezroczyste](#1-menu-przezroczyste)
2. [Sekcja Apartamentów](#2-sekcja-apartamentów)
3. [Sekcja Udogodnień](#3-sekcja-udogodnień)
4. [Timeline Atrakcji](#4-timeline-atrakcji)
5. [Sekcja Lokalizacji z Mapą](#5-sekcja-lokalizacji-z-mapą)
6. [Efekt Ken Burns](#6-efekt-ken-burns)
7. [Kolory Booking Engine](#7-kolory-booking-engine)
8. [Galeria (nowa)](#8-galeria-nowa)

---

## 1. MENU PRZEZROCZYSTE

### 📁 Plik
`css/transparent-menu.css`

### 🎯 Funkcja
Nadpisuje domyślne menu idoBooking CMS i czyni je całkowicie przezroczystym z bardzo widocznymi napisami.

### 🔧 Jak używać

#### Metoda 1: Panel CMS (ZALECANE)
```
1. Zaloguj się do panelu CMS idoBooking
2. Przejdź do: Wygląd/Style → Custom CSS
3. Wklej zawartość pliku transparent-menu.css
4. Zapisz
```

#### Metoda 2: Sekcja Body
```html
<style>
  /* Wklej tutaj zawartość transparent-menu.css */
</style>
```

### ⚙️ Parametry do modyfikacji

| Parametr | Lokalizacja | Opis |
|----------|-------------|------|
| **Kolor tekstu** | `color: #0F2438` | Zmień na jaśniejszy jeśli za ciemny |
| **Font weight** | `font-weight: 800` | 700-900, większa = grubszy |
| **Tło pod tekstem** | `background: rgba(255,255,255,0.3)` | Zwiększ 0.3→0.5 dla mocniejszego tła |
| **Cień tekstu** | `text-shadow` | Zmniejsz wartości rgba jeśli za mocne |
| **Hover kolor** | `color: #B8935E` | Kolor złoty przy najechaniu |

### 📱 Responsywność
✅ Automatyczna - dostosowuje się do mobile (768px breakpoint)

### 🧪 Testowanie
Po wdrożeniu sprawdź:
- [ ] Czy napisy są widoczne na tle hero image
- [ ] Czy hover (najechanie myszką) działa
- [ ] Czy menu mobile działa poprawnie
- [ ] Czy logo jest czytelne

---

## 2. SEKCJA APARTAMENTÓW

### 📁 Pliki
- HTML: `html/1-apartamenty-section.html`
- CSS: `css/complete-luxury-mountain-UPDATED.css` (linie 174-390)

### 🎯 Funkcja
Wyświetla karty apartamentów z:
- Zdjęciem głównym
- Badge (TOP/NOWE/LUX)
- Nazwą i opisem
- Cechami (osoby, sypialnie, łazienki)
- Ceną od/noc
- Przyciskiem rezerwacji

### 🔧 Jak używać

```
1. Panel CMS → Treści → Edycja strony głównej
2. Znajdź sekcję "Koniec sekcji body"
3. Wklej kod z 1-apartamenty-section.html
4. Dostosuj treści (opisy, ceny, linki)
5. Zapisz
```

### ⚙️ Struktura karty apartamentu

```html
<article class="apartment-card">
  <div class="apartment-image">
    <img src="[URL_ZDJĘCIA]" alt="[OPIS]" loading="lazy">
    <span class="apartment-badge">TOP</span> <!-- Opcjonalnie -->
  </div>

  <div class="apartment-content">
    <h3 class="apartment-name">[NAZWA APARTAMENTU]</h3>
    <p class="apartment-description">[OPIS]</p>

    <div class="apartment-features">
      <div class="feature">
        <span class="feature-icon">👥</span>
        <span class="feature-value">[LICZBA]</span>
        <span class="feature-label">Osób</span>
      </div>
      <!-- Więcej cech -->
    </div>

    <div class="apartment-footer">
      <div class="apartment-price">
        <span class="price-from">Od</span>
        <span class="price-amount">[CENA] zł</span>
        <span class="price-period">/ noc</span>
      </div>
      <a href="[LINK_DO_REZERWACJI]" class="apartment-cta">Rezerwuj</a>
    </div>
  </div>
</article>
```

### 🎨 Parametry CSS do modyfikacji

| Element | Selektor CSS | Co zmienić |
|---------|--------------|------------|
| **Kolor badge** | `.apartment-badge` | `background: rgba(184, 147, 94, 0.95)` |
| **Wysokość zdjęcia** | `.apartment-image` | `height: 280px` |
| **Hover efekt** | `.apartment-card:hover` | `transform: translateY(-12px)` |
| **Kolor ceny** | `.price-amount` | `color: var(--mountain-gold-dark)` |
| **Przycisk CTA** | `.apartment-cta` | `background: var(--mountain-navy)` |

### 📝 Jak dodać nowy apartament

1. Skopiuj cały blok `<article class="apartment-card">...</article>`
2. Wklej go w `<div class="apartments-grid">` przed zamykającym `</div>`
3. Zmień:
   - URL zdjęcia
   - Nazwę apartamentu
   - Opis
   - Cechy (osoby, sypialnie, łazienki)
   - Cenę
   - Link do rezerwacji

---

## 3. SEKCJA UDOGODNIEŃ

### 📁 Pliki
- HTML: `html/2-gorskie-udogodnienia-section.html`
- CSS: `css/complete-luxury-mountain-UPDATED.css` (linie 392-520)

### 🎯 Funkcja
Wyświetla 8 kart udogodnień z:
- Ikoną SVG
- Tytułem
- Opisem

### 🔧 Struktura karty udogodnienia

```html
<article class="amenity-card">
  <div class="amenity-icon">
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <!-- Ikona SVG -->
    </svg>
  </div>
  <h3 class="amenity-title">[TYTUŁ]</h3>
  <p class="amenity-description">[OPIS]</p>
</article>
```

### 🎨 Ikony SVG
Źródło ikon: **Heroicons** (https://heroicons.com/)

Jak zmienić ikonę:
1. Wejdź na heroicons.com
2. Znajdź ikonę (np. "wifi")
3. Skopiuj kod SVG (Outline style)
4. Zastąp istniejący kod `<svg>...</svg>`

### 📝 Jak dodać nowe udogodnienie

1. Skopiuj blok `<article class="amenity-card">...</article>`
2. Wklej w `<div class="amenities-grid">`
3. Zmień ikonę, tytuł i opis

**UWAGA:** Grid automatycznie dostosowuje liczbę kolumn (min 280px szerokości)

---

## 4. TIMELINE ATRAKCJI

### 📁 Pliki
- HTML: `html/3-timeline-atrakcje-section.html`
- CSS: `css/complete-luxury-mountain-UPDATED.css` (linie 522-780)

### 🎯 Funkcja
Pionowa oś czasu z atrakcjami w okolicy. Każdy element zawiera:
- Odległość i czas dojazdu
- Tytuł atrakcji
- Opis
- Tagi (kategorie)
- Zdjęcie

### 🔧 Struktura elementu timeline

```html
<article class="timeline-item">
  <div class="timeline-dot"></div>

  <div class="timeline-content">
    <span class="timeline-distance">[ODLEGŁOŚĆ] • [CZAS]</span>
    <h3 class="timeline-content-title">[TYTUŁ ATRAKCJI]</h3>
    <p class="timeline-content-description">[OPIS]</p>

    <div class="timeline-features">
      <span class="timeline-feature-tag">[TAG 1]</span>
      <span class="timeline-feature-tag">[TAG 2]</span>
    </div>
  </div>

  <div class="timeline-image">
    <img src="[URL]" alt="[OPIS]" loading="lazy">
  </div>
</article>
```

### 📝 Jak dodać nową atrakcję

1. Skopiuj cały blok `<article class="timeline-item">...</article>`
2. Wklej w `<div class="timeline">`
3. Zmień:
   - Odległość i czas
   - Tytuł i opis
   - Tagi
   - Zdjęcie

### 🎨 Layout
- **Desktop:** Zdjęcia na przemian po lewej i prawej
- **Mobile:** Wszystko pod sobą

Zmiana następuje automatycznie przez CSS media query.

---

## 5. SEKCJA LOKALIZACJI Z MAPĄ

### 📁 Pliki
- HTML: `html/4-lokalizacja-mapa-section.html`
- CSS: `css/complete-luxury-mountain-UPDATED.css` (linie 782-1100)

### 🎯 Funkcja
Split screen (50/50):
- **Lewa strona:** Opis lokalizacji, statystyki, lista POI
- **Prawa strona:** Mapa Google + karta z przyciskiem nawigacji

### 🔧 Jak zmienić mapę Google

```html
<iframe
  class="google-map-iframe"
  src="[GOOGLE_MAPS_EMBED_URL]"
  ...
></iframe>
```

**Jak uzyskać URL do embed:**
1. Wejdź na Google Maps
2. Znajdź lokalizację
3. Kliknij "Udostępnij" → "Osadź mapę"
4. Skopiuj kod `<iframe>`
5. Zastąp atrybut `src`

### 📝 Jak zmienić statystyki

```html
<div class="stat-box">
  <div class="stat-icon">
    <svg>...</svg> <!-- Ikona -->
  </div>
  <span class="stat-number">[LICZBA]</span>
  <span class="stat-label">[OPIS]</span>
</div>
```

### 🎨 Responsive
- **Desktop:** 50% lewo / 50% prawo
- **Tablet:** Stosy pionowe
- **Mobile:** Pełna szerokość, pionowo

---

## 6. EFEKT KEN BURNS

### 📁 Plik
`css/ken-burns-effect.css`

### 🎯 Funkcja
Powolny zoom i przesunięcie hero image (efekt "żywy obraz").

### ⚙️ Parametry animacji

| Parametr | Wartość domyślna | Opis |
|----------|------------------|------|
| **Czas trwania** | `10s` | Czas pełnej animacji |
| **Zoom** | `scale(1.1)` | Powiększenie (1.1 = 110%) |
| **Easing** | `ease-in-out` | Funkcja wygładzania |

### 🔧 Jak zmienić prędkość

Edytuj linię 19 w `ken-burns-effect.css`:
```css
animation: kenBurnsZoom 10s ease-in-out infinite alternate;
                         ↑
                   Zmień wartość
```

**Sugerowane wartości:**
- `8s` - Szybszy
- `10s` - Aktualny (zmieniony z 20s)
- `15s` - Wolniejszy
- `20s` - Bardzo wolny

### 🎨 Warianty efektu

**1. Podstawowy (aktualny):**
```css
.hero-image {
  animation: kenBurnsZoom 10s ease-in-out infinite alternate;
}
```

**2. Z przesunięciem (advanced):**
```css
.hero-advanced {
  animation: kenBurnsAdvanced 25s ease-in-out infinite alternate;
}
```

**3. Ultra smooth:**
```css
.hero-smooth {
  animation: kenBurnsSmooth 30s ease-in-out infinite alternate;
}
```

### 📱 Mobile
Na mobile efekt jest automatycznie łagodniejszy (scale 1.05 zamiast 1.1).

---

## 7. KOLORY BOOKING ENGINE

### 📁 Plik
`css/booking-engine-colors.css`

### 🎯 Funkcja
Nadpisuje domyślne kolory systemu rezerwacji idoBooking, dopasowując je do palety projektu.

### 🎨 Paleta kolorów

```css
:root {
  /* Główne */
  --mountain-gold: #B8935E;          /* Złoty akcent */
  --mountain-navy: #1C3C5A;          /* Granatowy ciemny */
  --mountain-cream: #F5F1EA;         /* Kremowy tło */

  /* Warianty */
  --mountain-gold-dark: #9A7A4A;
  --mountain-navy-dark: #0F2438;
  --mountain-gold-light: #D4A574;
}
```

### 📝 Jak zmienić kolor główny

1. Otwórz `booking-engine-colors.css`
2. Znajdź `:root { ... }`
3. Zmień wartości hex (np. `#B8935E` → `#FF5733`)
4. Zapisz

**Zmiana jednej zmiennej** wpłynie na wszystkie elementy, które jej używają!

---

## 8. GALERIA (NOWA)

### 📁 Plik
`html/galeria-section.html` (do stworzenia)

### 🎯 Funkcja
Responsywna galeria zdjęć z:
- Masonry layout (Pinterest style)
- Lightbox (powiększenie po kliknięciu)
- Kategorie/filtry
- Lazy loading

### 🔧 Struktura (będzie stworzona)

```html
<section class="gallery-section">
  <div class="gallery-container">
    <div class="gallery-header">
      <h2>Galeria</h2>
      <div class="gallery-filters">
        <button class="filter-btn active" data-filter="all">Wszystkie</button>
        <button class="filter-btn" data-filter="apartamenty">Apartamenty</button>
        <button class="filter-btn" data-filter="okolica">Okolica</button>
      </div>
    </div>

    <div class="gallery-grid">
      <div class="gallery-item" data-category="apartamenty">
        <img src="[URL]" alt="[OPIS]" loading="lazy">
        <div class="gallery-overlay">
          <span class="gallery-title">[TYTUŁ]</span>
        </div>
      </div>
      <!-- Więcej elementów -->
    </div>
  </div>
</section>
```

**Szczegóły będą w kolejnej sekcji dokumentu.**

---

## 📦 OGÓLNE WSKAZÓWKI

### ✅ Dobre praktyki

1. **Zawsze testuj na różnych urządzeniach:**
   - Desktop (1920px)
   - Tablet (768px)
   - Mobile (375px)

2. **Optymalizuj zdjęcia:**
   - Format: WebP (fallback: JPG)
   - Rozmiar max: 800KB
   - Wymiary: 1200x800px dla hero, 800x600px dla kart

3. **Używaj lazy loading:**
   ```html
   <img src="[URL]" loading="lazy" alt="[OPIS]">
   ```

4. **Alt text dla SEO i dostępności:**
   - Opisowy, konkretny
   - Zawiera keyword (np. "apartament Szklarska Poręba")

5. **Linki zewnętrzne:**
   ```html
   <a href="[URL]" target="_blank" rel="noopener noreferrer">
   ```

### 🐛 Debugging

**Problem:** CSS nie działa
- Sprawdź czy !important nie jest nadużywane
- Użyj narzędzi deweloperskich (F12)
- Sprawdź kolejność wczytywania stylów

**Problem:** Zdjęcia nie ładują się
- Sprawdź URL (https://)
- Sprawdź CORS policy
- Użyj absolutnych ścieżek

**Problem:** Responsywność nie działa
- Sprawdź media queries
- Sprawdź `overflow-x: hidden` na body
- Sprawdź `width: 100vw` vs `width: 100%`

### 📞 Wsparcie

Jeśli napotkasz problemy:
1. Sprawdź tę dokumentację
2. Sprawdź console errors (F12)
3. Sprawdź dokumentację idoBooking CMS

---

## 📝 CHANGELOG

**v2.0 (2025-11-06)**
- ✅ Dodano całkowicie przezroczyste menu
- ✅ Przyspieszono Ken Burns (20s → 10s)
- ✅ Zaktualizowano duplikaty zdjęć
- ✅ Dodano instrukcje dla każdego komponentu
- 🔄 W trakcie: Sekcja galerii

**v1.0 (poprzednia wersja)**
- Podstawowe sekcje apartamentów, udogodnień, timeline, lokalizacji
- Ken Burns effect
- Booking engine colors

---

**Koniec dokumentu**
Ostatnia aktualizacja: 2025-11-06 | Wersja 2.0
