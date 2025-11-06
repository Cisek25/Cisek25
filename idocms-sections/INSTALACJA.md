# INSTALACJA - APARTAMENTY SZKLARSKA PORĘBA

## KROK 1: DODAJ CSS

**Gdzie:** Panel CMS idoBooking → Sekcje CMS → "Sekcja HEAD"

**Co wkleić:**

```html
<style>
<!-- WKLEJ TUTAJ CAŁY KOD Z PLIKU: css/complete-luxury-mountain-UPDATED.css -->
</style>
```

---

## KROK 2: DODAJ KEN BURNS EFFECT (zoom na główne zdjęcie)

**Gdzie:** Panel CMS → Sekcje CMS → "Koniec sekcji body"

**Co wkleić:**

```html
<style>
<!-- WKLEJ TUTAJ CAŁY KOD Z PLIKU: css/ken-burns-effect.css -->
</style>
```

---

## KROK 3: DODAJ SEKCJE HTML

**Gdzie:** Panel CMS → Sekcje CMS → "BODY"

**Które pliki:**

1. `html/1-apartamenty-section.html` - Apartamenty
2. `html/2-udogodnienia-section.html` - Udogodnienia (8 ikon)
3. `html/3-timeline-section.html` - Atrakcje timeline
4. `html/4-lokalizacja-section.html` - Lokalizacja z mapą

**Jak wkleić:**
- Otwórz każdy plik
- Skopiuj CAŁY kod HTML
- Wklej do BODY w panelu CMS
- Zapisz

**LUB wklej wszystko na raz:**
- Otwórz `html/COMPLETE-ALL-SECTIONS.html`
- Skopiuj cały kod
- Wklej do BODY
- Zapisz

---

## KROK 4: BOOKING ENGINE - KOLORYSTYKA (OPCJONALNIE)

**Gdzie:** Panel CMS → Wygląd/Style → Custom CSS

**Co wkleić:**

```css
<!-- WKLEJ TUTAJ CAŁY KOD Z PLIKU: css/booking-engine-colors.css -->
```

**CO TO DAJE:**
- Dopasowuje kolory systemu rezerwacji do strony
- Przyciski gold + navy
- Lepszy UX formularzy

---

## JAK ZMIENIĆ TREŚCI?

### APARTAMENTY

**Znajdź w HTML:**
```html
<h3 class="apartment-name">Apartament Górski Widok</h3>
<p class="apartment-description">
  Tu wpisz swój opis...
</p>
```

**Zmień:**
- Nazwę apartamentu
- Opis
- Zdjęcia (src="...

")
- Ceny

### UDOGODNIENIA

**Znajdź w HTML:**
```html
<h3 class="amenity-title">Blisko Szlaków</h3>
<p class="amenity-description">
  Tu wpisz swój opis...
</p>
```

**Zmień:**
- Tytuł udogodnienia
- Opis
- Można dodać więcej kart

### ATRAKCJE (timeline)

**Znajdź w HTML:**
```html
<span class="timeline-distance">6 km • 15 min autem</span>
<h3 class="timeline-content-title">Wodospad Kamieńczyka</h3>
<p class="timeline-content-description">
  Tu wpisz swój opis...
</p>
```

**Zmień:**
- Odległości
- Nazwy atrakcji
- Opisy
- Zdjęcia

### LOKALIZACJA/MAPA

**Znajdź w HTML:**
```html
<iframe src="https://www.google.com/maps/embed?pb=..." ...></iframe>
```

**Jak zmienić mapę:**
1. Idź na Google Maps
2. Wpisz swój adres
3. Kliknij "Udostępnij" → "Umieść mapę"
4. Skopiuj kod iframe
5. Zamień w HTML

---

## JAK ZMIENIĆ KOLORY?

### W CSS znajdź:

```css
:root {
  --mountain-gold: #B8935E;     /* Zmień kolor złoty */
  --mountain-navy: #1C3C5A;     /* Zmień kolor granatowy */
  --mountain-cream: #F5F1EA;    /* Zmień kolor kremowy */
}
```

**Podmieniaj kody kolorów na swoje.**

---

## STRUKTURA PLIKÓW

```
idocms-sections/
├── html/
│   ├── COMPLETE-ALL-SECTIONS.html         ← WSZYSTKIE SEKCJE
│   ├── 1-apartamenty-section.html         ← Apartamenty
│   ├── 2-udogodnienia-section.html        ← Udogodnienia (8)
│   ├── 3-timeline-section.html            ← Atrakcje
│   └── 4-lokalizacja-section.html         ← Lokalizacja
│
├── css/
│   ├── complete-luxury-mountain-UPDATED.css    ← CSS GŁÓWNY
│   ├── ken-burns-effect.css                    ← Zoom na zdjęcie
│   └── booking-engine-colors.css               ← Kolory rezerwacji
│
└── INSTALACJA.md                          ← TA INSTRUKCJA
```

---

## POMOC

**Problem:** Sekcje nie są pełnej szerokości
**Rozwiązanie:** Sprawdź czy CSS został dodany do HEAD

**Problem:** Kolory się nie zmieniają
**Rozwiązanie:** Wyczyść cache przeglądarki (Ctrl+Shift+R)

**Problem:** Mapa się nie wyświetla
**Rozwiązanie:** Sprawdź kod iframe z Google Maps

**Problem:** Ken Burns (zoom) nie działa
**Rozwiązanie:** Sprawdź czy kod jest w "Koniec sekcji body"

---

## WSPARCIE

W razie problemów:
1. Sprawdź czy wszystkie pliki CSS zostały wklejone
2. Wyczyść cache przeglądarki
3. Sprawdź konsolę przeglądarki (F12)
