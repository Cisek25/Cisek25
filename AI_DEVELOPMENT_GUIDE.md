# 🎨 AI DEVELOPMENT GUIDE - Profesjonalne Strony Internetowe

## 📋 SPIS TREŚCI
1. [Filozofia Projektowania](#filozofia-projektowania)
2. [Struktura Projektów](#struktura-projektów)
3. [Architektura CSS](#architektura-css)
4. [System Kolorów](#system-kolorów)
5. [Typografia](#typografia)
6. [Komponenty UI](#komponenty-ui)
7. [Responsywność](#responsywność)
8. [Animacje i Przejścia](#animacje-i-przejścia)
9. [Accessibility](#accessibility)
10. [Git Workflow](#git-workflow)
11. [Checklist Jakości](#checklist-jakości)

---

## 🎯 FILOZOFIA PROJEKTOWANIA

### Zasady Nadrzędne
1. **ULTIMATE CSS** - Jeden plik CSS na projekt zawierający wszystkie podstrony
2. **Mobile-First** - Zawsze projektuj od najmniejszego ekranu w górę
3. **Accessibility First** - WCAG AA minimum
4. **Performance** - Optymalizacja obrazów, CSS, animacji
5. **Consistency** - Jednolity design system w całym projekcie

### Hierarchia Ważności
```
1. Funkcjonalność > Estetyka
2. Użyteczność > Innowacyjność
3. Prostota > Złożoność
4. Responsywność > Desktop-only
5. Accessibility > Wizualne efekty
```

---

## 📁 STRUKTURA PROJEKTÓW

### Standardowa Struktura
```
project-name/
├── css/
│   ├── ULTIMATE-PROJECT-CSS.css    ← GŁÓWNY PLIK (wszystkie podstrony)
│   ├── project-styles.css          ← Backup/komponenty
│   └── complete-site-styles-FULL.css ← Full site styles
├── html/
│   ├── complete-project.html       ← Główna strona
│   ├── offers.html                 ← Podstrona ofert
│   └── contact.html                ← Kontakt
├── images/
│   └── (zdjęcia projektu)
└── README.md
```

### Konwencje Nazewnictwa
- **Pliki CSS**: `ULTIMATE-{PROJECT}-CSS.css` (uppercase dla głównych plików)
- **HTML**: `complete-{project}.html` (lowercase z myślnikami)
- **Komponenty**: `kebab-case-naming.css`
- **Klasy CSS**: `.component-name` (BEM optional)
- **ID**: `#camelCaseOrSnake_case`

---

## 🎨 ARCHITEKTURA CSS

### Template ULTIMATE CSS
```css
/* ============================================
   ULTIMATE {PROJECT NAME} CSS
   Kompletny CSS dla całego projektu

   SEKCJE:
   1. Custom Properties (Variables)
   2. Reset & Base Styles
   3. Typography
   4. Layout & Containers
   5. Navigation & Menu
   6. Hero Section
   7. Content Sections
   8. Components (Cards, Buttons, Forms)
   9. Offers Page
   10. Contact Page
   11. Footer
   12. Animations
   13. Responsive (Mobile-First)
   14. Accessibility
   15. Print Styles
   ============================================ */
```

### 1. Custom Properties (ZAWSZE NA POCZĄTKU)
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;900&display=swap');

:root {
  /* Kolory Główne - NAZWIJ WEDŁUG PROJEKTU */
  --primary-color: #1C3C5A;
  --primary-dark: #0F2438;
  --primary-light: #2C5F7C;

  --secondary-color: #B8935E;
  --secondary-dark: #9A7A4A;
  --secondary-light: #D4A574;

  --accent-color: #2D5016;
  --accent-light: #4A7C2E;

  /* Neutralne */
  --cream: #F5F1EA;
  --cream-dark: #E8E3D8;
  --stone: #6B7280;
  --white: #FFFFFF;
  --charcoal: #333333;

  /* Cienie - 4 poziomy */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.10);
  --shadow-lg: 0 20px 50px rgba(0,0,0,0.15);
  --shadow-xl: 0 25px 60px rgba(0,0,0,0.20);

  /* Zaokrąglenia */
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;

  /* Fonty */
  --font-display: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Spacing - Responsive */
  --section-padding: clamp(4rem, 8vw, 7rem);
  --container-max: 1400px;
}
```

### 2. Reset & Base (ZAWSZE)
```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  font-family: var(--font-body);
  color: var(--charcoal);
  line-height: 1.7;
  background-color: var(--white);
  overflow-x: hidden;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

---

## 🎨 SYSTEM KOLORÓW

### Wybór Palety dla Projektu
1. **Luxury/Premium** (hotele, apartamenty):
   - Navy #1C3C5A + Gold #B8935E + Cream #F5F1EA

2. **Modern/Youth** (hostele, coworking):
   - Blue #3B82F6 + Purple #8B5CF6 + Amber #F59E0B

3. **Nature/Wellness** (spa, retreat):
   - Earth #7C6A5C + Sage #8A9A7F + Clay #C9A882

4. **Traditional/Rustic** (pensjonaty góralskie):
   - Brown #8B4513 + Forest Green #2F5233 + Cream #F5E6D3

### Zasady Stosowania
- **Primary**: Główne elementy (navbar, headings, buttons)
- **Secondary**: Akcenty (hover states, highlights, icons)
- **Accent**: Call-to-action, ważne elementy
- **Neutrals**: Tła, borders, tekst drugorzędny

---

## ✍️ TYPOGRAFIA

### Hierarchia Fontów
```css
/* Display Fonts - Nagłówki */
h1, h2, h3, .section-title {
  font-family: var(--font-display);
  font-weight: 700;
  line-height: 1.2;
  color: var(--primary-color);
}

/* Body Font - Treść */
body, p, li, span {
  font-family: var(--font-body);
  font-weight: 400;
  line-height: 1.7;
}

/* Rozmiary - Responsive z clamp() */
h1, .hero-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: 1.5rem;
}

h2, .section-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.25rem;
}

h3 {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  margin-bottom: 1rem;
}

p, .body-text {
  font-size: clamp(1rem, 2vw, 1.25rem);
  margin-bottom: 1rem;
}

/* Lead Text - Większy paragraf */
.lead, .intro-text {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  line-height: 1.8;
  font-weight: 400;
}
```

### Powiększanie Fontów (Wymóg Użytkownika)
```css
/* Menu - ZAWSZE 1.45rem lub większe */
.navbar-nav .nav-link {
  font-size: 1.45rem !important;
}

/* Checkboxy - ZAWSZE 1.2rem */
.checkbox label {
  font-size: 1.2rem !important;
}

/* Opisy apartamentów - SPORO większe (1.4rem) */
.accommodation-short-description {
  font-size: 1.4rem !important;
}
```

---

## 🧩 KOMPONENTY UI

### 1. PRZYCISKI - Szczegółowe Zasady

#### Przycisk "SZCZEGÓŁY" (Strona Offers)
**WYMÓG**: Po prawej stronie, 35% mniejszy padding
```css
.accommodation-buttons {
  text-align: right !important;
  margin-top: 1.5rem !important;
}

.accommodation-buttons a {
  display: inline-block !important;
  background: linear-gradient(135deg, var(--secondary-color), var(--secondary-dark)) !important;
  color: white !important;
  padding: 0.65rem 1.95rem !important;  /* 35% mniejszy niż standardowy */
  border-radius: 10px !important;
  font-weight: 600 !important;
  text-transform: uppercase !important;
  letter-spacing: 1.2px !important;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  box-shadow: 0 4px 12px rgba(184, 147, 94, 0.25) !important;
  font-size: 1rem !important;
}

.accommodation-buttons a:hover {
  transform: translateY(-4px) !important;
  box-shadow: 0 10px 25px rgba(184, 147, 94, 0.4) !important;
}
```

#### Przycisk "ZASTOSUJ FILTRY"
**WYMÓG**: Wyśrodkowany tekst (flexbox!), złoty kolor
```css
#filter_buttons button {
  background: var(--secondary-color) !important;
  color: white !important;
  padding: 1.1rem 3rem !important;
  border-radius: 10px !important;
  /* WAŻNE: inline-flex dla centrowania! */
  display: inline-flex !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
  vertical-align: middle !important;
  line-height: 1 !important;
}
```

#### Przyciski CTA (Hero, Contact)
```css
.btn-primary, .cta-button {
  padding: 1.25rem 2.5rem;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: white;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}
```

### 2. KARTY (Cards)

#### Karta Apartamentu/Oferty
```css
.accommodation-card, .offer-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0,0,0,0.05);
}

.accommodation-card:hover {
  transform: translateY(-15px);
  box-shadow: var(--shadow-xl);
  border-color: var(--secondary-light);
}

/* Obrazek w karcie */
.card-image {
  position: relative;
  height: 350px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.accommodation-card:hover .card-image img {
  transform: scale(1.1);
}

/* Treść karty */
.card-content {
  padding: 2.5rem;
}

.card-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.card-description {
  font-size: 1.125rem;
  color: var(--stone);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}
```

### 3. BIG LABEL - Główny Nagłówek Sekcji

**WYMÓG**: Ukryj licznik ofert (small tags)
```css
.big-label {
  font-family: var(--font-display);
  color: var(--primary-color);
  font-size: 2.5rem;
  font-weight: 700;
  margin: 2.5rem 0 2rem 0;
  position: relative;
  padding-bottom: 1.25rem;
  display: block;
}

/* Złota linia pod nagłówkiem */
.big-label::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, var(--secondary-color), var(--secondary-dark), transparent);
  border-radius: 2px;
}

/* UKRYJ licznik ofert */
.big-label small {
  display: none !important;
}
```

### 4. PAYMENT INFO - Sekcja Płatności

**WYMÓG**: Większe marginesy (padding-left: 2rem, margin-left: 1.5rem)
```css
.payment-info {
  background: rgba(245, 241, 234, 0.4);
  border-left: 4px solid var(--secondary-color);
  padding: 1.25rem 1.5rem;
  padding-left: 2rem;        /* WAŻNE: dodatkowy padding */
  margin: 1.5rem 0;
  margin-left: 1.5rem;       /* WAŻNE: dodatkowy margin */
  border-radius: 8px;
  transition: all 0.3s ease;
}

.payment-info:hover {
  background: rgba(245, 241, 234, 0.6);
  box-shadow: var(--shadow-sm);
}
```

### 5. CHECKBOXY - Filtry

**WYMÓG**: Większy rozmiar (1.2rem label, 22px input)
```css
.checkbox {
  padding: 0.65rem 1rem;
  margin: 0.35rem 0;
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.checkbox:hover {
  background: rgba(245, 241, 234, 0.6);
  transform: translateX(5px);
}

.checkbox label {
  cursor: pointer;
  font-size: 1.2rem !important;  /* WAŻNE: większy font */
  margin: 0;
  display: flex;
  align-items: center;
}

.checkbox input[type="checkbox"] {
  width: 22px;
  height: 22px;
  margin-right: 1rem;
  cursor: pointer;
  accent-color: var(--secondary-color);
}
```

### 6. NAVBAR-RESERVATION - Przycisk Dostępności

**WYMÓG**: Ukryj na homepage, pokaż na innych stronach
```css
/* Ukryj na stronie głównej */
.index-info .navbar-reservation,
body.home .navbar-reservation,
.home-page .navbar-reservation {
  display: none !important;
}

/* Pokaż na pozostałych podstronach */
body:not(.home) .navbar-reservation {
  display: block;
}
```

---

## 📱 RESPONSYWNOŚĆ - MOBILE FIRST

### Breakpointy (Standard)
```css
/* Mobile First - domyślne style dla mobile */

/* Tablet - 768px */
@media (min-width: 768px) {
  /* Style dla tabletów */
}

/* Desktop - 992px */
@media (min-width: 992px) {
  /* Style dla desktop */
}

/* Large Desktop - 1200px */
@media (min-width: 1200px) {
  /* Style dla dużych ekranów */
}
```

### Responsive Grid
```css
/* Mobile: 1 kolumna */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

/* Tablet: 2 kolumny */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 kolumny */
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
}
```

### Responsive Typography
```css
/* Używaj clamp() dla płynnej responsywności */
.title {
  font-size: clamp(1.5rem, 5vw, 3rem);
}

/* lub media queries */
.title {
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  .title {
    font-size: 2rem;
  }
}

@media (min-width: 992px) {
  .title {
    font-size: 3rem;
  }
}
```

### Full-Width Sections (Wymóg dla niektórych projektów)
```css
/* Dla Slowhop i podobnych - sekcje na całą szerokość */
.full-width-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

/* Container wewnątrz */
.full-width-section .container-fluid {
  padding: 0 2rem;
}

@media (min-width: 768px) {
  .full-width-section .container-fluid {
    padding: 0 4rem;
  }
}
```

---

## ✨ ANIMACJE I PRZEJŚCIA

### Podstawowe Animacje
```css
/* Fade In */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Slide In From Left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Użycie */
.animate-fade-in {
  animation: fadeIn 0.8s ease forwards;
}
```

### Hover Effects - Standard
```css
/* Karty */
.card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

/* Przyciski */
.button {
  transition: all 0.3s ease;
}

.button:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

/* Obrazki */
.image-container img {
  transition: transform 0.6s ease;
}

.image-container:hover img {
  transform: scale(1.1);
}

/* Linki */
.link {
  position: relative;
  transition: color 0.3s ease;
}

.link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--secondary-color);
  transition: width 0.3s ease;
}

.link:hover::after {
  width: 100%;
}
```

### Timing Functions (Cubic Bezier)
```css
/* Smooth - większość interakcji */
transition: all 0.3s ease;

/* Elastic - przyciski, karty */
transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

/* Sharp - szybkie animacje */
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

/* Spring - naturalne ruchy */
transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
```

---

## ♿ ACCESSIBILITY (WCAG AA)

### Musi Być w Każdym Projekcie
```css
/* 1. Focus States - ZAWSZE */
button:focus,
a:focus,
input:focus,
textarea:focus,
select:focus {
  outline: 3px solid var(--secondary-color);
  outline-offset: 2px;
}

/* 2. Skip to Content */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary-color);
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  z-index: 100;
}

.skip-to-content:focus {
  top: 0;
}

/* 3. Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* 4. High Contrast Mode */
@media (prefers-contrast: high) {
  .card,
  .button,
  .form-control {
    border: 2px solid currentColor;
  }
}

/* 5. Print Styles */
@media print {
  .navbar,
  .footer,
  button,
  .no-print {
    display: none;
  }

  .card,
  .section {
    page-break-inside: avoid;
  }
}
```

### Kontrast Kolorów
```
Minimum WCAG AA:
- Normalny tekst: 4.5:1
- Duży tekst (18px+ lub 14px+ bold): 3:1

Sprawdzaj na: https://webaim.org/resources/contrastchecker/
```

---

## 🔧 GIT WORKFLOW

### Branch Naming
```
claude/{task-description}-{session-id}

Przykłady:
- claude/fix-hostel-css-html-011CUtVqZoTmzymrVKSCy8Mw
- claude/create-pensjonat-project-011CUtVqZoTmzymrVKSCy8Mw
- claude/ultimate-css-merge-011CUtVqZoTmzymrVKSCy8Mw
```

### Commit Messages (Format)
```bash
# Format: [Typ] Krótki opis (50 znaków max)

# Typy:
# - Fix: Naprawa błędu
# - Add: Nowa funkcja/plik
# - Update: Aktualizacja istniejącego
# - Remove: Usunięcie
# - Refactor: Refaktoryzacja kodu

# Przykłady:
git commit -m "Fix offers page CSS issues"
git commit -m "Add PENSJONAT POD JODŁAMI project"
git commit -m "Update README with complete overview"
git commit -m "Create ULTIMATE CSS files"
```

### Push Workflow
```bash
# 1. Sprawdź status
git status

# 2. Dodaj pliki
git add .

# 3. Commit z opisem
git commit -m "$(cat <<'EOF'
Fix button centering and payment info spacing

- Change button display to inline-flex for proper centering
- Add padding-left and margin-left to payment-info
- Hide navbar-reservation on homepage
EOF
)"

# 4. Push do brancha
git push -u origin claude/{branch-name}-{session-id}
```

---

## ✅ CHECKLIST JAKOŚCI

### Przed Commitowaniem - Sprawdź:

#### CSS
- [ ] Custom properties zdefiniowane na początku
- [ ] Reset & base styles obecne
- [ ] Wszystkie sekcje okomentowane
- [ ] Responsive dla 3 breakpointów (768px, 992px, 1200px)
- [ ] Focus states dla wszystkich interaktywnych elementów
- [ ] Prefers-reduced-motion zdefiniowane
- [ ] Print styles dodane
- [ ] Brak !important (chyba że konieczne)
- [ ] Consistent naming (kebab-case)

#### Przyciski
- [ ] "SZCZEGÓŁY" - po prawej, 35% mniejszy padding
- [ ] "ZASTOSUJ FILTRY" - inline-flex, wyśrodkowany
- [ ] Hover states z transform i shadow
- [ ] Przejścia 0.3s-0.4s
- [ ] Border-radius 10px lub 50px

#### Typography
- [ ] Menu nav-link: 1.45rem minimum
- [ ] Checkboxy label: 1.2rem
- [ ] Opisy accommodation: 1.4rem
- [ ] Clamp() dla responsive sizes
- [ ] Line-height 1.7 dla body
- [ ] Font-weight 700 dla headings

#### Komponenty
- [ ] Big label z ::after gradient line
- [ ] Big label small tags ukryte
- [ ] Payment info z dodatkowym margin-left i padding-left
- [ ] Navbar-reservation ukryty na homepage
- [ ] Karty z hover transform i shadow
- [ ] Obrazki z zoom na hover

#### Responsywność
- [ ] Mobile: 1 kolumna
- [ ] Tablet (768px): 2 kolumny
- [ ] Desktop (992px): 3 kolumny
- [ ] Font sizes responsive (clamp lub media queries)
- [ ] Padding/margin skalowane
- [ ] Full-width sections (jeśli wymagane)

#### Accessibility
- [ ] Focus states: 3px outline
- [ ] Skip to content link
- [ ] Prefers-reduced-motion
- [ ] High contrast mode
- [ ] Print styles
- [ ] Alt texts na obrazkach (w HTML)
- [ ] ARIA labels gdzie potrzebne

#### Performance
- [ ] Obrazki: JPG/PNG < 500KB
- [ ] CSS: Jedna linia per property
- [ ] Animations: 60fps (transform i opacity)
- [ ] Brak zbędnych !important
- [ ] Web fonts: display=swap

#### Git
- [ ] Branch name z session-id
- [ ] Commit message opisowy
- [ ] Wszystkie pliki dodane
- [ ] Push do poprawnego brancha

---

## 📝 SZABLONY KODU

### Template: Sekcja z Grid
```css
/* ========================================
   SEKCJA: {NAZWA SEKCJI}
   ======================================== */

.{section-name}-section {
  padding: var(--section-padding) 0;
  background: linear-gradient(180deg, var(--cream) 0%, var(--white) 100%);
  position: relative;
}

.{section-name}-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 2rem;
}

.{section-name}-header {
  text-align: center;
  margin-bottom: 4rem;
}

.{section-name}-badge {
  display: inline-block;
  padding: 12px 30px;
  background: rgba(184, 147, 94, 0.1);
  color: var(--secondary-dark);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  border-radius: 30px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(184, 147, 94, 0.3);
}

.{section-name}-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.1;
}

.{section-name}-subtitle {
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  color: var(--stone);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
}

.{section-name}-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .{section-name}-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}

@media (min-width: 992px) {
  .{section-name}-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
}
```

### Template: Karta Produktu/Oferty
```css
.product-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
  border-color: var(--secondary-light);
}

.product-image {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.1);
}

.product-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--secondary-color);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 700;
  z-index: 2;
}

.product-content {
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.product-description {
  font-size: 1rem;
  color: var(--stone);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  border-top: 1px solid var(--cream);
}

.product-price {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--secondary-color);
}

.product-cta {
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: white;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.product-cta:hover {
  background: var(--primary-dark);
  transform: translateX(5px);
}
```

---

## 🎯 KONKRETNE PRZYPADKI UŻYCIA

### Case 1: Strona Apartamentów (Luxury)
```css
:root {
  --primary: #1C3C5A;    /* Navy */
  --secondary: #B8935E;  /* Gold */
  --accent: #F5F1EA;     /* Cream */
  --font-display: 'Roboto', serif;
}

/* Gradient buttons */
.btn-luxury {
  background: linear-gradient(135deg, var(--secondary), #9A7A4A);
  box-shadow: 0 4px 12px rgba(184, 147, 94, 0.25);
}

/* Elegant cards */
.apartment-card {
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}
```

### Case 2: Strona Hostelu (Modern/Youth)
```css
:root {
  --primary: #3B82F6;    /* Blue */
  --secondary: #8B5CF6;  /* Purple */
  --accent: #F59E0B;     /* Amber */
  --font-display: 'Poppins', sans-serif;
}

/* Vibrant gradients */
.btn-modern {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50px;
}

/* Playful animations */
.card-youth:hover {
  transform: translateY(-15px) rotate(2deg);
}
```

### Case 3: Wellness Retreat (Nature)
```css
:root {
  --primary: #7C6A5C;    /* Earth */
  --secondary: #8A9A7F;  /* Sage */
  --accent: #C9A882;     /* Clay */
  --font-display: 'Cormorant Garamond', serif;
}

/* Organic shapes */
.btn-nature {
  border-radius: 30px;
  background: linear-gradient(135deg, var(--secondary), var(--primary));
}

/* Soft shadows */
.wellness-card {
  box-shadow: 0 4px 16px rgba(124, 106, 92, 0.15);
}
```

### Case 4: Pensjonat Góralski (Traditional)
```css
:root {
  --primary: #8B4513;    /* Brown */
  --secondary: #2F5233;  /* Forest Green */
  --accent: #F5E6D3;     /* Cream */
  --font-display: 'Playfair Display', serif;
}

/* Traditional borders */
.card-traditional {
  border: 2px solid var(--secondary);
  border-radius: 16px;
}

/* Rustic textures */
.section-rustic {
  background: linear-gradient(180deg, #F5E6D3 0%, #FFFFFF 100%);
}
```

---

## 🚀 WORKFLOW TWORZENIA NOWEGO PROJEKTU

### Krok 1: Analiza Wymagań
```
1. Jaki typ projektu? (hotel, hostel, apartamenty, spa, etc.)
2. Grupa docelowa? (luxury, youth, rodziny, biznes)
3. Jakie kolory? (wybierz paletę z sekcji System Kolorów)
4. Jakie fonty? (serif dla elegancji, sans-serif dla modern)
5. Ile podstron? (homepage, offers, contact, single offer)
6. Specjalne wymagania? (full-width, no hero, etc.)
```

### Krok 2: Setup Struktury
```bash
# Utwórz strukturę
mkdir project-name
cd project-name
mkdir css html images

# Utwórz pliki
touch css/ULTIMATE-PROJECT-CSS.css
touch html/complete-project.html
touch README.md
```

### Krok 3: CSS Foundation
```css
/* Skopiuj template ULTIMATE CSS */
/* 1. Custom Properties (kolory, fonty, spacing) */
/* 2. Reset & Base */
/* 3. Typography */
/* 4. Layout */
```

### Krok 4: Sekcje Homepage
```
Kolejność sekcji (standard):
1. Hero (opcjonalnie - Slowhop nie używa!)
2. Intro/About
3. Accommodations Grid
4. Features/Amenities
5. Gallery (opcjonalnie)
6. Testimonials
7. Location/Contact
8. Footer
```

### Krok 5: Strona Offers
```css
/* Zawsze dołącz: */
- Big label z gradient line
- Filtry z checkboxami (1.2rem)
- Przycisk "Zastosuj filtry" (inline-flex, centered)
- Przyciski "Szczegóły" (right-aligned, 35% smaller)
- Payment info (extra margins)
- Navbar-reservation ukryty na homepage
```

### Krok 6: Responsywność
```
Testuj na:
1. Mobile: 375px, 414px
2. Tablet: 768px, 834px
3. Desktop: 1024px, 1440px, 1920px

Sprawdź:
- Grid layout (1/2/3 kolumny)
- Font sizes (readable)
- Button sizes (tappable 44x44px min)
- Images (nie rozciągnięte)
- Navigation (hamburger na mobile)
```

### Krok 7: Accessibility Check
```
Użyj narzędzi:
- WAVE (webaim.org/wave/)
- Lighthouse (Chrome DevTools)
- axe DevTools

Sprawdź:
- Contrast ratios (4.5:1 minimum)
- Focus indicators (visible)
- Keyboard navigation (Tab przez wszystko)
- Screen reader (read order sensowny)
```

### Krok 8: Git Commit & Push
```bash
git status
git add .
git commit -m "Add complete PROJECT-NAME with ULTIMATE CSS"
git push -u origin claude/project-name-{session-id}
```

---

## 📊 METRYKI SUKCESU

### CSS Quality Metrics
- **Linie kodu**: 600-2000 linii (w zależności od złożoności)
- **Sekcje**: 10-15 głównych sekcji
- **Custom properties**: 15-25 zmiennych
- **Breakpointy**: Minimum 3 (768px, 992px, 1200px)
- **Animacje**: 3-8 różnych animacji
- **Components**: 8-12 reusable komponentów

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

### Accessibility Targets
- **WCAG Level**: AA minimum
- **Lighthouse Accessibility Score**: 95+ / 100
- **Color Contrast**: All AAA where possible
- **Keyboard Navigation**: 100% navigable

---

## 🎓 ZAAWANSOWANE TECHNIKI

### 1. CSS Grid - Advanced Layouts
```css
/* Asymmetric Grid */
.advanced-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
}

.grid-item-large {
  grid-column: span 8;
}

.grid-item-small {
  grid-column: span 4;
}

/* Magazine Layout */
.magazine-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 200px;
  gap: 1rem;
}

.featured {
  grid-column: span 2;
  grid-row: span 2;
}
```

### 2. Advanced Gradients
```css
/* Mesh Gradient */
.mesh-gradient {
  background:
    radial-gradient(at 40% 20%, rgba(184, 147, 94, 0.3) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(28, 60, 90, 0.3) 0px, transparent 50%),
    radial-gradient(at 0% 50%, rgba(245, 241, 234, 0.3) 0px, transparent 50%);
}

/* Animated Gradient */
.animated-gradient {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

### 3. Advanced Hover Effects
```css
/* Sheen Effect */
.sheen-button {
  position: relative;
  overflow: hidden;
}

.sheen-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s ease;
}

.sheen-button:hover::before {
  left: 100%;
}

/* Glow Effect */
.glow-card {
  position: relative;
  transition: all 0.3s ease;
}

.glow-card::after {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  border-radius: inherit;
  opacity: 0;
  z-index: -1;
  filter: blur(20px);
  transition: opacity 0.3s ease;
}

.glow-card:hover::after {
  opacity: 0.7;
}
```

### 4. Scroll Animations
```css
/* Parallax Sections */
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Fade In on Scroll (requires JS) */
.fade-in-scroll {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 🛠️ NARZĘDZIA I RESOURCES

### Development Tools
- **Code Editor**: VS Code + Live Server
- **Browser DevTools**: Chrome/Firefox Inspector
- **CSS Validator**: https://jigsaw.w3.org/css-validator/
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Responsive Tester**: https://responsivedesignchecker.com/

### Design Resources
- **Colors**: coolors.co, color.adobe.com
- **Fonts**: Google Fonts, Adobe Fonts
- **Icons**: Font Awesome, Heroicons, Lucide
- **Images**: Unsplash, Pexels (1920x1080 min)
- **Gradients**: cssgradient.io, uigradients.com

### Learning Resources
- **CSS Tricks**: css-tricks.com
- **MDN Web Docs**: developer.mozilla.org
- **Can I Use**: caniuse.com (browser support)
- **Flexbox Guide**: css-tricks.com/snippets/css/a-guide-to-flexbox/
- **Grid Guide**: css-tricks.com/snippets/css/complete-guide-grid/

---

## 🎯 NAJCZĘSTSZE BŁĘDY I ROZWIĄZANIA

### Błąd 1: Tekst nie wyśrodkowany w przycisku
**Problem**: `text-align: center` nie działa
**Rozwiązanie**: Użyj flexbox
```css
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
```

### Błąd 2: Obrazek rozciągnięty
**Problem**: Obrazek ma złe proporcje
**Rozwiązanie**: Użyj object-fit
```css
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Błąd 3: Hover nie działa na mobile
**Problem**: `:hover` aktywuje się na dotknięciu
**Rozwiązanie**: Użyj media query
```css
@media (hover: hover) {
  .card:hover {
    transform: translateY(-10px);
  }
}
```

### Błąd 4: Sekcja nie full-width
**Problem**: Container ogranicza szerokość
**Rozwiązanie**: Vw trick
```css
.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
```

### Błąd 5: Z-index nie działa
**Problem**: Element bez position
**Rozwiązanie**: Dodaj position
```css
.element {
  position: relative;  /* lub absolute, fixed */
  z-index: 10;
}
```

---

## 📝 FINALNE WSKAZÓWKI

### DO's ✅
1. **ZAWSZE** zacznij od custom properties
2. **ZAWSZE** projektuj mobile-first
3. **ZAWSZE** dodaj focus states
4. **ZAWSZE** testuj accessibility
5. **ZAWSZE** komentuj sekcje CSS
6. **ZAWSZE** używaj transition dla hover
7. **ZAWSZE** sprawdź kontrast kolorów
8. **ZAWSZE** dodaj prefers-reduced-motion
9. **ZAWSZE** używaj semantic HTML
10. **ZAWSZE** optymalizuj obrazki

### DON'Ts ❌
1. **NIGDY** nie używaj inline styles
2. **NIGDY** nie hardcodeuj kolorów (użyj variables)
3. **NIGDY** nie używaj fixed heights (użyj min-height)
4. **NIGDY** nie używaj px dla font-size (użyj rem/em)
5. **NIGDY** nie zapominaj o hover states
6. **NIGDY** nie używaj !important bez powodu
7. **NIGDY** nie pomijaj alt text na obrazkach
8. **NIGDY** nie używaj auto-play dla video/audio
9. **NIGDY** nie używaj Flash/Java
10. **NIGDY** nie commituj bez testowania

---

## 🏆 TEMPLATE PROJEKTU - FINAL

### Minimalny ULTIMATE CSS (Gotowy do Użycia)
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;900&display=swap');

:root {
  --primary: #1C3C5A;
  --primary-dark: #0F2438;
  --secondary: #B8935E;
  --secondary-dark: #9A7A4A;
  --cream: #F5F1EA;
  --stone: #6B7280;
  --white: #FFFFFF;
  --shadow-md: 0 8px 24px rgba(0,0,0,0.1);
  --shadow-xl: 0 25px 60px rgba(0,0,0,0.2);
  --radius-lg: 24px;
  --font-display: 'Roboto', sans-serif;
  --font-body: 'Roboto', sans-serif;
  --section-padding: clamp(4rem, 8vw, 7rem);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  color: #333;
  line-height: 1.7;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
}

/* Buttons */
.btn-primary {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  border-radius: 50px;
  font-weight: 700;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

/* Cards */
.card {
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all 0.4s ease;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 992px) {
  .grid { grid-template-columns: repeat(3, 1fr); gap: 3rem; }
}

/* Accessibility */
button:focus, a:focus {
  outline: 3px solid var(--secondary);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎓 PODSUMOWANIE

To jest **kompletny przewodnik** do tworzenia profesjonalnych stron internetowych. Każdy projekt powinien:

1. ✅ Mieć ULTIMATE CSS (wszystkie podstrony w jednym pliku)
2. ✅ Używać custom properties dla kolorów i spacingu
3. ✅ Być fully responsive (mobile-first)
4. ✅ Mieć accessibility (WCAG AA)
5. ✅ Zawierać animacje i hover effects
6. ✅ Być zoptymalizowany pod performance
7. ✅ Mieć spójny design system
8. ✅ Być przetestowany na różnych urządzeniach

**Pamiętaj**: Jakość > Ilość. Lepiej zrobić mniej elementów, ale perfekcyjnie, niż dużo średnio.

---

**Wersja**: 1.0
**Data utworzenia**: 2025-01-13
**Autor**: Claude AI Development Team
**Status**: Production Ready ✅
