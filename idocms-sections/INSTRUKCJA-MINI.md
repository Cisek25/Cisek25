# INSTRUKCJA MINI - Szybka Instalacja

## KROK 1: Dodaj CSS

Skopiuj i wklej do: **Arkusz stylów CSS**

```
Lokalizacja: Wygląd -> Arkusz stylów CSS
Gdzie wkleić: NA POCZĄTKU (przed wszystkim)
```

**Pliki do wklejenia:**
1. `css/complete-luxury-mountain.css` - CAŁY kod

---

## KROK 2: Dodaj sekcje HTML

Dla każdej sekcji:

```
Panel CMS -> Sekcje CMS -> + Nowa sekcja
Poziom: Body
```

### Kolejność wklejania:

**1. Apartamenty**
- Plik: `html/1-apartamenty-section.html`
- Wklej CAŁY kod do BODY

**2. Udogodnienia**
- Plik: `html/2-gorskie-udogodnienia-section.html`
- Wklej CAŁY kod do BODY

**3. Atrakcje**
- Plik: `html/3-timeline-atrakcje-section.html`
- Wklej CAŁY kod do BODY

**4. Lokalizacja**
- Plik: `html/4-lokalizacja-mapa-section.html`
- Wklej CAŁY kod do BODY

---

## KROK 3: Dodaj efekt zoom na główne zdjęcie (opcjonalnie)

```
Lokalizacja: Koniec sekcji body
Otwórz plik: css/ken-burns-effect.css
Skopiuj CAŁY kod
Wklej do: Koniec sekcji body
```

**CO TO DAJE:**
- Powolny zoom na głównym zdjęciu (Ken Burns effect)
- Działa automatycznie z .parallax-slider
- 3 warianty szybkości
- Wyłącza się na urządzeniach mobile (lżejszy)

---

## KROK 4: Stylizuj wyszukiwarkę (opcjonalnie)

```
Lokalizacja: Koniec sekcji body
Otwórz plik: css/search-widget-modern.css
Skopiuj CAŁY kod (razem z tagiem <style>)
Wklej do: Koniec sekcji body
```

**CO TO DAJE:**
- Nowoczesny wygląd wyszukiwarki rezerwacji
- Glassmorphism i cienie
- Lepszy UX na mobile
- Integracja z kolorami mountain luxury

---

## FAQ - Najczęstsze problemy

**Q: Sekcje nie są na pełną szerokość**
A: Dodaj do "Koniec sekcji body":
```css
<style>
.apartments-premium-section,
.mountain-amenities-section,
.timeline-section,
.location-split-section {
  width: 100vw !important;
  margin-left: -50vw !important;
  margin-right: -50vw !important;
  left: 50% !important;
  position: relative !important;
}
</style>
```

**Q: Czcionki się nie ładują**
A: Dodaj do HEAD podstrony:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet">
```

**Q: Jak zrobić podstronę FAQ?**
A:
```
1. Stwórz nową podstronę /faq
2. Do BODY podstrony wklej: pages/faq-page-full.html
3. Zapisz
```

---

## Personalizacja

**Zmień zdjęcia apartamentów:**
W plikach HTML znajdź:
```html
<img src="https://client55004.idosell.com/images/objects/pictures/large/1/0/27.jpg"
```
Podmień URL na swój.

**Zmień ceny:**
Znajdź:
```html
<span class="price-amount">450 zł</span>
```
Wpisz swoją cenę.

**Zmień kolory:**
W CSS znajdź (na początku):
```css
:root {
  --mountain-gold: #B8935E;
  --mountain-navy: #1C3C5A;
}
```
Podmień na swoje kolory.

---

## Gotowe!

Po wykonaniu kroków 1-2 masz działającą stronę.
Kroki 3-4 są opcjonalne (ulepszenia).

**Czas instalacji: 15-20 minut**
