# 🏔️ idoBooking CMS - Uniwersalne Sekcje Redesign

> Nowoczesny, luksusowy system sekcji dla apartamentów górskich w Szklarskiej Porębie

[![Mobile First](https://img.shields.io/badge/Mobile-First-blue)](.)
[![WCAG AA](https://img.shields.io/badge/WCAG-AA-green)](.)
[![Responsive](https://img.shields.io/badge/Responsive-100%25-brightgreen)](.)

---

## 📖 O Projekcie

Kompletny system uniwersalnych sekcji dla starego CMS idoBooking, stworzony specjalnie dla apartamentów górskich. System zawiera gotowe, stylizowane sekcje HTML + CSS, które można łatwo zaimplementować i personalizować.

### ✨ Cechy

- 🎨 **Luksusowa kolorystyka górska** - Granat, złoto, krem
- 📱 **Mobile First** - Perfekcyjna responsywność
- ♿ **WCAG AA** - Pełna dostępność
- 🚀 **Full Width** - Sekcje na całą szerokość
- 🔗 **Integracja** - Kompatybilność z systemem wyróżnionych ofert
- ⚡ **Performance** - Lazy loading, optymalizacja
- 🎯 **SEO Friendly** - Semantyczny HTML5

---

## 📦 Zawartość

### CSS
- `css/complete-luxury-mountain.css` - Kompletny arkusz stylów (12.59 KB)

### Sekcje HTML
1. `html/1-apartamenty-section.html` - Apartamenty Premium (4 obiekty)
2. `html/2-gorskie-udogodnienia-section.html` - Górskie Udogodnienia (12 pozycji)
3. `html/3-timeline-atrakcje-section.html` - Timeline Atrakcji (6 atrakcji)
4. `html/4-lokalizacja-mapa-section.html` - Lokalizacja z Mapą Google

### Dokumentacja
- `docs/INSTRUKCJA-INSTALACJI.md` - Kompletna instrukcja (200+ linii)
- `README.md` - Ten plik

---

## 🚀 Szybki Start

### 1. Instalacja CSS (2 min)

```bash
1. Panel idoBooking → Wygląd → Arkusz stylów CSS
2. Skopiuj zawartość: css/complete-luxury-mountain.css
3. Wklej NA POCZĄTKU arkusza
4. Zapisz
```

### 2. Instalacja Sekcji (5 min każda)

```bash
1. Panel idoBooking → Treść → Sekcje CMS → + Nowa sekcja
2. Nazwa: [Nazwa sekcji], Poziom: Body, Widoczność: Strona główna
3. Skopiuj kod HTML sekcji
4. Wklej w edytor
5. Zapisz
6. Powtórz dla każdej sekcji
```

### 3. Personalizacja (30 min)

Otwórz każdy plik HTML i zmień:
- Nazwy apartamentów / atrakcji
- Zdjęcia (URL-e)
- Ceny
- Opisy
- Dystanse
- Link rezerwacji

**Szczegółowa instrukcja:** `docs/INSTRUKCJA-INSTALACJI.md`

---

## 🎨 Sekcje

### 1️⃣ Apartamenty Premium

```
✅ 4 obiekty zakodowane na sztywno
✅ Hover effects
✅ Badges (TOP, NOWE, LUX)
✅ Feature icons
✅ CTA rezerwacji
```

**Features:**
- Zdjęcie apartamentu
- Nazwa i opis
- Ikony: osoby, sypialnie, łazienki
- Cena od / noc
- Przycisk rezerwacji

### 2️⃣ Górskie Udogodnienia

```
✅ 12 udogodnień
✅ Glassmorphism cards
✅ Eleganckie ikony (emoji lub SVG)
✅ Ciemne tło (granatowy gradient)
✅ Hover animations
```

**Udogodnienia:**
- Kominek
- Parking strzeżony
- Szybkie Wi-Fi
- Narciarnia
- Widoki na góry
- Pełna kuchnia
- Sauna & Relaks
- Gry & Rozrywka
- Premium pościel
- Ogród & Grill
- Family Friendly
- Pet Friendly

### 3️⃣ Timeline Atrakcji

```
✅ 6 atrakcji z prawdziwymi dystansami
✅ Layout naprzemiennie (lewa/prawa)
✅ Zoom effect na zdjęciach
✅ Tagi kategorii
✅ Responsywny (mobile: pionowo)
```

**Atrakcje:**
- Wodospad Kamieńczyka (6 km)
- Centrum Miasta (2 km)
- Złoty Widok (3 km)
- Kolej Gondolowa (5 km)
- Szlak na Szrenicę (4 km)
- Wodospad Szklarki (3.5 km)

### 4️⃣ Lokalizacja z Mapą

```
✅ Split layout (content | map)
✅ Prawdziwa mapa Google (Górna 22c)
✅ Statystyki lokalizacji
✅ POI list (punkty zainteresowania)
✅ Map info card overlay
✅ Link do nawigacji
```

**Features:**
- Badge lokalizacji
- Opis lokalizacji
- 4 statystyki (dystanse/czasy)
- 4 punkty POI
- Google Maps iframe
- Karta info z adresem
- Przycisk "Nawiguj"

---

## 🎨 Kolorystyka

### Paleta Główna

```css
--mountain-gold: #B8935E       /* Złoty akcent */
--mountain-navy: #1C3C5A       /* Granatowy główny */
--mountain-cream: #F5F1EA      /* Krem tło */
--mountain-forest: #2D5016     /* Zielony las */
--mountain-stone: #6B7280      /* Szary kamień */
```

### Jak zmienić kolory?

Edytuj w CSS (początek pliku):

```css
:root {
  --mountain-gold: #TWÓJ_KOLOR;
  --mountain-navy: #TWÓJ_KOLOR;
  --mountain-cream: #TWÓJ_KOLOR;
}
```

**Generator:** https://coolors.co/

---

## 🔤 Czcionki

- **Display:** Playfair Display (nagłówki, liczby)
- **Body:** Lato (tekst, UI)

### Jak zmienić?

```css
@import url('https://fonts.googleapis.com/css2?family=TWOJA_CZCIONKA');

:root {
  --font-display: 'TWOJA_CZCIONKA', serif;
  --font-body: 'TWOJA_CZCIONKA', sans-serif;
}
```

**Źródło:** https://fonts.google.com/

---

## 📱 Responsywność

### Breakpoints:

```css
/* Desktop: default */
/* Tablet: 1024px */
/* Mobile: 768px */
/* Small Mobile: 480px */
```

### Testowanie:

```
✅ Desktop (1920x1080)
✅ Laptop (1366x768)
✅ Tablet (768x1024)
✅ Mobile (375x667)
✅ Small Mobile (320x568)
```

---

## ♿ Dostępność (WCAG AA)

```
✅ Semantyczny HTML5
✅ ARIA labels
✅ Alt text dla obrazków
✅ Keyboard navigation
✅ Focus states
✅ Contrast ratio > 4.5:1
✅ Skip to content
✅ Reduced motion support
```

---

## 🔗 Integracja z idoBooking

### System Wyróżnionych Ofert

CSS automatycznie stylizuje sekcję `.container-hotspot` generowaną przez idoBooking.

**Jak włączyć?**
1. Panel idoBooking → Oferty
2. Zaznacz: **Wyróżniona oferta**
3. Zapisz

Oferta automatycznie pojawi się w stylizowanej sekcji!

---

## 🛠️ Wymagania

### System:
- idoBooking CMS (Smarty)
- Dostęp do CSS
- Możliwość dodawania sekcji CMS

### Opcjonalne:
- Google Maps API (dla custom styling mapy)
- Font Awesome / Heroicons (dla ikon SVG)

---

## 📊 Statystyki

```
CSS:        12.59 KB (minified: ~8 KB)
HTML:       4 pliki, ~15 KB total
Fonty:      Playfair Display + Lato (Google Fonts)
Images:     Lazy loading, WebP recommended
Load Time:  < 2s (desktop), < 3s (mobile)
```

---

## 🐛 Troubleshooting

### Sekcje nie full width?

```css
/* Dodaj do HEAD: */
<style>
.apartments-premium-section,
.mountain-amenities-section,
.timeline-section,
.location-split-section {
  width: 100vw !important;
  margin-left: -50vw !important;
  margin-right: -50vw !important;
  left: 50% !important;
  right: 50% !important;
  position: relative !important;
}
</style>
```

### Czcionki się nie ładują?

```html
<!-- Dodaj do HEAD: -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
```

**Więcej:** `docs/INSTRUKCJA-INSTALACJI.md` → Troubleshooting

---

## 📚 Dokumentacja

### Pełna instrukcja:
→ **`docs/INSTRUKCJA-INSTALACJI.md`** (200+ linii, step-by-step)

### Zawiera:
- ✅ Instalacja krok po kroku
- ✅ Personalizacja każdej sekcji
- ✅ Zmiana kolorów i czcionek
- ✅ Integracja z systemem
- ✅ Troubleshooting
- ✅ FAQ (15+ pytań)
- ✅ Checklist instalacji

---

## 🎯 Use Cases

### Idealny dla:
- 🏔️ Apartamenty górskie
- 🏖️ Apartamenty nadmorskie
- 🏡 Domki letniskowe
- 🏨 Małe hotele
- 🏠 Obiekty noclegowe

### Łatwo dostosować:
- Zmień lokalizację
- Zmień atrakcje
- Zmień kolory
- Zmień zdjęcia
- **Gotowe!**

---

## 📝 Changelog

### v1.0 (2025-11-05)
- ✅ Pierwsza wersja
- ✅ 4 sekcje HTML
- ✅ Kompletny CSS
- ✅ Full width fix
- ✅ Integracja z wyróżnionymi ofertami
- ✅ Mobile first
- ✅ WCAG AA
- ✅ Dokumentacja

---

## 📄 Licencja

Ten projekt został stworzony na zamówienie dla apartamentów w Szklarskiej Porębie.

Możesz:
- ✅ Używać dla własnych projektów
- ✅ Modyfikować
- ✅ Dostosowywać do innych lokalizacji
- ✅ Zmieniać kolory i style

Nie możesz:
- ❌ Sprzedawać jako swój produkt
- ❌ Usuwać informacji o autorze z komentarzy w kodzie

---

## 🙏 Autor

Stworzony z ❤️ dla apartamentów w Szklarskiej Porębie

**Data:** 2025-11-05
**Wersja:** 1.0

---

## 📞 Wsparcie

### Potrzebujesz pomocy?

1. Przeczytaj: `docs/INSTRUKCJA-INSTALACJI.md`
2. Sprawdź: Troubleshooting
3. Sprawdź: FAQ

### Znalazłeś bug?

Zgłoś z:
- Screenshot problemu
- URL strony
- Przeglądarka + wersja
- Kroki do reprodukcji

---

## ✅ Quick Checklist

- [ ] CSS wklejony
- [ ] 4 sekcje HTML wklejone
- [ ] Apartamenty spersonalizowane
- [ ] Zdjęcia zmienione
- [ ] Ceny zaktualizowane
- [ ] Mapa Google działa
- [ ] Link rezerwacji zaktualizowany
- [ ] Przetestowane na mobile
- [ ] Przetestowane na desktop
- [ ] Wszystko działa!

---

## 🎉 Ready to Go!

Wszystko gotowe do wdrożenia! Powodzenia! 🚀

**Happy coding!** 💻🏔️

---

*Ostatnia aktualizacja: 2025-11-05*
