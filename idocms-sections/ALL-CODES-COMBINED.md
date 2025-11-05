# 📦 WSZYSTKIE KODY W JEDNYM MIEJSCU

> Łatwe kopiowanie wszystkich sekcji i stylów

---

## 📋 SPIS TREŚCI

1. [CSS - Kompletny (wklej PIERWSZY)](#css-kompletny)
2. [HTML - Sekcja 1: Apartamenty](#sekcja-1-apartamenty)
3. [HTML - Sekcja 2: Górskie Udogodnienia](#sekcja-2-górskie-udogodnienia)
4. [HTML - Sekcja 3: Timeline Atrakcji](#sekcja-3-timeline-atrakcji)
5. [HTML - Sekcja 4: Lokalizacja z Mapą](#sekcja-4-lokalizacja-z-mapą)
6. [Bonus: Kod do HEAD (opcjonalny)](#bonus-kod-do-head)

---

## 🎨 CSS KOMPLETNY

**INSTRUKCJA:**
1. Skopiuj CAŁY poniższy kod CSS
2. Panel idoBooking → Wygląd → Arkusz stylów CSS
3. Wklej NA SAMYM POCZĄTKU arkusza (przed istniejącym kodem)
4. Zapisz

```css
/* ========================================
   KOMPLETNY CSS - GÓRSKI LUKSUS SZKLARSKA PORĘBA
   Wersja: 1.0 Final
   ======================================== */

/* Czcionki */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Lato:wght@300;400;700;900&display=swap');

/* Zmienne globalne */
:root {
  --mountain-gold: #B8935E;
  --mountain-gold-dark: #9A7A4A;
  --mountain-gold-light: #D4A574;
  --mountain-navy: #1C3C5A;
  --mountain-navy-dark: #0F2438;
  --mountain-navy-light: #2C5F7C;
  --mountain-cream: #F5F1EA;
  --mountain-cream-dark: #E8E3D8;
  --mountain-forest: #2D5016;
  --mountain-forest-light: #4A7C2E;
  --mountain-stone: #6B7280;
  --mountain-white: #FFFFFF;
  --mountain-charcoal: #333333;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.10);
  --shadow-lg: 0 20px 50px rgba(0,0,0,0.15);
  --shadow-xl: 0 25px 60px rgba(0,0,0,0.20);
  --radius-sm: 12px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Lato', -apple-system, sans-serif;
  --section-padding: clamp(4rem, 8vw, 7rem);
  --container-max: 1400px;
}

/* Reset */
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
  color: var(--mountain-charcoal);
  line-height: 1.7;
  background-color: var(--mountain-white);
  overflow-x: hidden;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
}

/* Full Width Fix */
.apartments-premium-section,
.mountain-amenities-section,
.timeline-section,
.location-split-section,
.container-hotspot {
  width: 100vw !important;
  position: relative !important;
  left: 50% !important;
  right: 50% !important;
  margin-left: -50vw !important;
  margin-right: -50vw !important;
  overflow: hidden;
}

/* === APARTAMENTY === */
.apartments-premium-section {
  padding: var(--section-padding) 0;
  background: linear-gradient(180deg, var(--mountain-cream) 0%, var(--mountain-white) 100%);
}

.apartments-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 2rem;
}

.apartments-header {
  text-align: center;
  margin-bottom: 4rem;
  animation: fadeInUp 0.8s ease;
}

.apartments-super {
  display: inline-block;
  padding: 10px 24px;
  background: rgba(184, 147, 94, 0.1);
  color: var(--mountain-gold-dark);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  border-radius: 25px;
  margin-bottom: 1.25rem;
  border: 1px solid rgba(184, 147, 94, 0.3);
}

.apartments-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: var(--mountain-navy-dark);
  margin-bottom: 1.25rem;
  font-weight: 700;
  line-height: 1.1;
}

.apartments-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: var(--mountain-stone);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

.apartments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
}

.apartment-card {
  background: var(--mountain-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0,0,0,0.05);
}

.apartment-card:hover {
  transform: translateY(-12px);
  box-shadow: var(--shadow-xl);
  border-color: var(--mountain-gold-light);
}

.apartment-image {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.apartment-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.apartment-card:hover .apartment-image img {
  transform: scale(1.1);
}

.apartment-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(184, 147, 94, 0.95);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 700;
  backdrop-filter: blur(10px);
  z-index: 2;
}

.apartment-content {
  padding: 2rem;
}

.apartment-name {
  font-family: var(--font-display);
  font-size: 1.875rem;
  color: var(--mountain-navy);
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.apartment-description {
  font-size: 0.95rem;
  color: var(--mountain-stone);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.apartment-features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1.5rem 0;
  border-top: 1px solid var(--mountain-cream-dark);
  border-bottom: 1px solid var(--mountain-cream-dark);
}

.feature {
  text-align: center;
}

.feature-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  display: block;
}

.feature-value {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--mountain-navy);
  display: block;
}

.feature-label {
  font-size: 0.875rem;
  color: var(--mountain-stone);
  display: block;
  margin-top: 0.25rem;
}

.apartment-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
}

.apartment-price {
  display: flex;
  flex-direction: column;
}

.price-from {
  font-size: 0.875rem;
  color: var(--mountain-stone);
  margin-bottom: 0.25rem;
}

.price-amount {
  font-size: 2rem;
  font-weight: 700;
  color: var(--mountain-gold-dark);
  font-family: var(--font-display);
}

.price-period {
  font-size: 0.875rem;
  color: var(--mountain-stone);
}

.apartment-cta {
  padding: 14px 28px;
  background: var(--mountain-navy);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.apartment-cta:hover {
  background: var(--mountain-navy-dark);
  transform: translateX(4px);
}

.apartment-cta::after {
  content: '→';
}

/* === UDOGODNIENIA === */
.mountain-amenities-section {
  padding: var(--section-padding) 0;
  background: linear-gradient(135deg, #0F2438 0%, #1C3C5A 50%, #2C5F7C 100%);
  position: relative;
  color: white;
}

.mountain-amenities-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 50%, rgba(184, 147, 94, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(212, 165, 116, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.amenities-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.amenities-header {
  text-align: center;
  margin-bottom: 4rem;
}

.amenities-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.amenities-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: white;
  margin-bottom: 1.25rem;
  font-weight: 700;
}

.amenities-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: rgba(255, 255, 255, 0.85);
  max-width: 700px;
  margin: 0 auto;
}

.amenities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: 2rem;
}

.amenity-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.amenity-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--mountain-gold), var(--mountain-gold-light));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.amenity-card:hover::before {
  transform: scaleX(1);
}

.amenity-card:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(184, 147, 94, 0.5);
  transform: translateY(-8px);
}

.amenity-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, rgba(184, 147, 94, 0.2), rgba(212, 165, 116, 0.2));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  transition: all 0.4s ease;
}

.amenity-card:hover .amenity-icon {
  transform: scale(1.1) rotate(5deg);
}

.amenity-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  color: white;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.amenity-description {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* === TIMELINE === */
.timeline-section {
  padding: var(--section-padding) 0;
  background: linear-gradient(180deg, #FFFFFF 0%, #F8F9FA 100%);
}

.timeline-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.timeline-header {
  text-align: center;
  margin-bottom: 4rem;
}

.timeline-badge {
  display: inline-block;
  padding: 12px 28px;
  background: var(--mountain-navy);
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  border-radius: 25px;
  margin-bottom: 1.25rem;
}

.timeline-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: var(--mountain-navy-dark);
  margin-bottom: 1.25rem;
  font-weight: 700;
}

.timeline-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  color: var(--mountain-stone);
  max-width: 700px;
  margin: 0 auto;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, transparent, var(--mountain-gold-light), transparent);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  display: flex;
  margin-bottom: 4rem;
  align-items: center;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-item:nth-child(odd) {
  flex-direction: row;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
}

.timeline-content {
  flex: 1;
  background: white;
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  position: relative;
  transition: all 0.3s ease;
}

.timeline-item:nth-child(odd) .timeline-content {
  margin-right: 3.5rem;
  text-align: right;
}

.timeline-item:nth-child(even) .timeline-content {
  margin-left: 3.5rem;
  text-align: left;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: 18px solid transparent;
}

.timeline-item:nth-child(odd) .timeline-content::before {
  right: -36px;
  border-left-color: white;
}

.timeline-item:nth-child(even) .timeline-content::before {
  left: -36px;
  border-right-color: white;
}

.timeline-distance {
  display: inline-block;
  padding: 8px 18px;
  background: linear-gradient(135deg, var(--mountain-gold-light), var(--mountain-gold));
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 20px;
  margin-bottom: 1rem;
}

.timeline-content-title {
  font-family: var(--font-display);
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  color: var(--mountain-navy);
  margin-bottom: 1rem;
  font-weight: 700;
}

.timeline-content-description {
  font-size: 1.05rem;
  color: var(--mountain-stone);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.timeline-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.timeline-item:nth-child(odd) .timeline-features {
  justify-content: flex-end;
}

.timeline-feature-tag {
  padding: 6px 14px;
  background: var(--mountain-cream);
  border: 1px solid var(--mountain-cream-dark);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background: white;
  border: 5px solid var(--mountain-gold-light);
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 0 8px rgba(212, 165, 116, 0.2);
  transition: all 0.3s ease;
}

.timeline-item:hover .timeline-dot {
  background: var(--mountain-gold-light);
  transform: translate(-50%, -50%) scale(1.2);
}

.timeline-image {
  flex: 1;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  height: 350px;
  box-shadow: var(--shadow-md);
}

.timeline-item:nth-child(odd) .timeline-image {
  margin-left: 3.5rem;
}

.timeline-item:nth-child(even) .timeline-image {
  margin-right: 3.5rem;
}

.timeline-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.timeline-image:hover img {
  transform: scale(1.1);
}

/* === LOKALIZACJA === */
.location-split-section {
  padding: 0;
  background: var(--mountain-white);
}

.location-split-container {
  display: flex;
  min-height: 650px;
  align-items: stretch;
}

.location-content-side {
  flex: 1;
  padding: clamp(3rem, 8vw, 6rem) clamp(2rem, 5vw, 4rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%);
  position: relative;
}

.location-content-side::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, var(--mountain-gold-light), var(--mountain-gold));
}

.location-content {
  max-width: 600px;
}

.location-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: rgba(212, 165, 116, 0.1);
  border: 1px solid rgba(212, 165, 116, 0.3);
  border-radius: 25px;
  color: var(--mountain-gold-dark);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.location-badge svg {
  width: 16px;
  height: 16px;
}

.location-title {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  color: var(--mountain-navy);
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.location-description {
  font-size: clamp(1.05rem, 2vw, 1.2rem);
  color: var(--mountain-stone);
  line-height: 1.8;
  margin-bottom: 2rem;
}

.location-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--mountain-cream-dark);
}

.stat-box {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: var(--mountain-gold-light);
  line-height: 1;
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--mountain-stone);
  font-weight: 500;
}

.location-poi-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.poi-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: white;
  border-radius: var(--radius-sm);
  border: 1px solid var(--mountain-cream-dark);
  transition: all 0.3s ease;
}

.poi-item:hover {
  border-color: var(--mountain-gold-light);
  box-shadow: var(--shadow-sm);
  transform: translateX(6px);
}

.poi-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--mountain-navy-light), var(--mountain-navy));
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.poi-icon svg {
  width: 22px;
  height: 22px;
  color: white;
}

.poi-info {
  flex: 1;
}

.poi-name {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--mountain-navy-light);
  margin-bottom: 2px;
}

.poi-distance {
  font-size: 0.875rem;
  color: var(--mountain-stone);
}

.location-map-side {
  flex: 1;
  position: relative;
  min-height: 650px;
}

.location-map {
  position: absolute;
  inset: 0;
  border: none;
  filter: grayscale(15%) brightness(0.95);
  transition: filter 0.3s ease;
}

.location-map:hover {
  filter: grayscale(0%) brightness(1);
}

.map-info-card {
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: white;
  padding: 1.75rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xl);
  max-width: 320px;
  z-index: 10;
  border: 1px solid rgba(0,0,0,0.05);
}

.map-card-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--mountain-navy);
  margin-bottom: 0.75rem;
}

.map-card-address {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.95rem;
  color: var(--mountain-stone);
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.map-card-address svg {
  width: 18px;
  height: 18px;
  color: var(--mountain-gold-light);
  flex-shrink: 0;
  margin-top: 2px;
}

.map-card-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--mountain-navy-light);
  color: white;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.map-card-btn:hover {
  background: var(--mountain-navy-dark);
  transform: translateY(-2px);
}

.map-card-btn svg {
  width: 18px;
  height: 18px;
}

/* === INTEGRACJA WYRÓŻNIONYCH OFERT === */
.container-hotspot {
  background: var(--mountain-cream) !important;
  padding: var(--section-padding) 0 !important;
}

.cmshotspot .big-label.line-label {
  font-family: var(--font-display) !important;
  font-size: clamp(2.5rem, 5vw, 4rem) !important;
  color: var(--mountain-navy-dark) !important;
  text-align: center !important;
  margin-bottom: 3rem !important;
  font-weight: 700 !important;
}

.cmshotspot .big-label.line-label::after {
  content: '';
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--mountain-gold), var(--mountain-gold-light));
  margin: 1.5rem auto 0;
  border-radius: 2px;
}

.offerslist .offer {
  background: white !important;
  border-radius: var(--radius-lg) !important;
  overflow: hidden !important;
  box-shadow: var(--shadow-md) !important;
  transition: all 0.4s ease !important;
  border: 1px solid rgba(0,0,0,0.05) !important;
  height: 100% !important;
  display: flex !important;
  flex-direction: column !important;
}

.offerslist .offer:hover {
  transform: translateY(-12px) !important;
  box-shadow: var(--shadow-xl) !important;
  border-color: var(--mountain-gold-light) !important;
}

.offerslist .offer .object-icon {
  position: relative !important;
  display: block !important;
  overflow: hidden !important;
  height: 280px !important;
}

.offerslist .offer .object-icon img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  transition: transform 0.6s ease !important;
}

.offerslist .offer:hover .object-icon img {
  transform: scale(1.1) !important;
}

.offerslist .offer__hover {
  position: absolute !important;
  inset: 0 !important;
  background: linear-gradient(180deg, transparent 0%, rgba(15, 36, 56, 0.95) 100%) !important;
  display: flex !important;
  align-items: flex-end !important;
  padding: 2rem !important;
  opacity: 0 !important;
  transition: opacity 0.4s ease !important;
}

.offerslist .offer:hover .offer__hover {
  opacity: 1 !important;
}

.offerslist .offer__description {
  color: white !important;
  font-size: 0.95rem !important;
  line-height: 1.6 !important;
  margin: 0 !important;
}

.offerslist .offer h3 {
  padding: 1.5rem 1.5rem 0.75rem !important;
  margin: 0 !important;
  height: auto !important;
}

.offerslist .offer h3 a {
  font-family: var(--font-display) !important;
  font-size: 1.5rem !important;
  color: var(--mountain-navy) !important;
  text-decoration: none !important;
  font-weight: 700 !important;
  display: block !important;
  transition: color 0.3s ease !important;
}

.offerslist .offer h3 a:hover {
  color: var(--mountain-gold-dark) !important;
}

.offerslist .offer__box {
  padding: 0 1.5rem 1.5rem !important;
  height: auto !important;
  margin-top: auto !important;
}

.offerslist .offer__info {
  display: flex !important;
  align-items: center !important;
  gap: 1rem !important;
  margin-bottom: 1rem !important;
  padding-bottom: 1rem !important;
  border-bottom: 1px solid var(--mountain-cream-dark) !important;
}

.offerslist .accommodation-roomspace {
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  padding: 6px 12px !important;
  background: var(--mountain-cream) !important;
  border-radius: 20px !important;
  font-size: 0.875rem !important;
  font-weight: 600 !important;
  color: var(--mountain-charcoal) !important;
}

.offerslist .accommodation-roomspace i {
  color: var(--mountain-gold-dark) !important;
}

.offerslist .offer__price {
  display: flex !important;
  justify-content: flex-end !important;
}

.offerslist .offers-details {
  padding: 12px 28px !important;
  background: var(--mountain-navy) !important;
  color: white !important;
  text-decoration: none !important;
  border-radius: 25px !important;
  font-weight: 700 !important;
  font-size: 0.875rem !important;
  transition: all 0.3s ease !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
}

.offerslist .offers-details:hover {
  background: var(--mountain-navy-dark) !important;
  transform: translateX(4px) !important;
}

.offerslist .offers-details .btn {
  background: none !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
  color: inherit !important;
  font-size: inherit !important;
}

/* === RESPONSIVE === */
@media (max-width: 1024px) {
  :root {
    --section-padding: clamp(3rem, 6vw, 5rem);
  }

  .apartments-grid {
    grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
    gap: 2rem;
  }

  .amenities-grid {
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  }

  .timeline::before {
    left: 30px;
  }

  .timeline-item,
  .timeline-item:nth-child(odd),
  .timeline-item:nth-child(even) {
    flex-direction: column;
    padding-left: 60px;
  }

  .timeline-content,
  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    margin: 0 0 1.5rem 0;
    text-align: left;
  }

  .timeline-content::before {
    display: none;
  }

  .timeline-dot {
    left: 30px;
  }

  .timeline-image,
  .timeline-item:nth-child(odd) .timeline-image,
  .timeline-item:nth-child(even) .timeline-image {
    margin: 0;
    width: 100%;
    height: 280px;
  }

  .timeline-features,
  .timeline-item:nth-child(odd) .timeline-features {
    justify-content: flex-start;
  }

  .location-split-container {
    flex-direction: column;
  }

  .location-content-side {
    padding: 3rem 2rem;
  }

  .location-map-side {
    min-height: 500px;
  }

  .map-info-card {
    position: relative;
    bottom: auto;
    right: auto;
    margin: -60px 20px 20px;
    max-width: none;
  }
}

@media (max-width: 768px) {
  .apartments-container,
  .amenities-container,
  .timeline-container {
    padding: 0 1.5rem;
  }

  .apartments-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .apartment-features {
    grid-template-columns: repeat(2, 1fr);
  }

  .apartment-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .apartment-cta {
    width: 100%;
    justify-content: center;
  }

  .amenities-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .location-stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .location-map-side {
    min-height: 400px;
  }

  .map-info-card {
    margin: -40px 15px 15px;
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .apartments-super,
  .amenities-badge,
  .timeline-badge,
  .location-badge {
    font-size: 0.75rem;
    padding: 8px 16px;
    letter-spacing: 2px;
  }

  .apartment-features {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    padding-left: 40px;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-dot {
    left: 20px;
    width: 20px;
    height: 20px;
    border-width: 4px;
  }

  .timeline-image {
    height: 220px !important;
  }
}

/* === ANIMACJE === */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.location-content {
  opacity: 0;
  transform: translateX(-30px);
  animation: slideInLeft 0.8s ease forwards;
}

.poi-item {
  opacity: 0;
  transform: translateX(-20px);
  animation: slideInLeft 0.5s ease forwards;
}

.poi-item:nth-child(1) { animation-delay: 0.1s; }
.poi-item:nth-child(2) { animation-delay: 0.2s; }
.poi-item:nth-child(3) { animation-delay: 0.3s; }
.poi-item:nth-child(4) { animation-delay: 0.4s; }

/* === ACCESSIBILITY === */
a:focus,
button:focus,
.apartment-cta:focus,
.map-card-btn:focus,
.offers-details:focus {
  outline: 3px solid var(--mountain-gold);
  outline-offset: 2px;
}

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

@media (prefers-contrast: high) {
  .apartment-card,
  .amenity-card,
  .timeline-content,
  .poi-item {
    border: 2px solid currentColor;
  }
}
```

**ZAPISZ!**

---

## 📄 SEKCJA 1: APARTAMENTY

**INSTRUKCJA:**
1. Panel idoBooking → Treść → Sekcje CMS → + Nowa sekcja
2. Nazwa: "Apartamenty Premium", Poziom: Body
3. Skopiuj kod poniżej i wklej
4. Zapisz

[Zobacz plik: html/1-apartamenty-section.html]

---

## 📄 SEKCJA 2: GÓRSKIE UDOGODNIENIA

**INSTRUKCJA:**
1. Panel idoBooking → Treść → Sekcje CMS → + Nowa sekcja
2. Nazwa: "Górskie Udogodnienia", Poziom: Body
3. Skopiuj kod poniżej i wklej
4. Zapisz

[Zobacz plik: html/2-gorskie-udogodnienia-section.html]

---

## 📄 SEKCJA 3: TIMELINE ATRAKCJI

**INSTRUKCJA:**
1. Panel idoBooking → Treść → Sekcje CMS → + Nowa sekcja
2. Nazwa: "Odkryj Karkonosze", Poziom: Body
3. Skopiuj kod poniżej i wklej
4. Zapisz

[Zobacz plik: html/3-timeline-atrakcje-section.html]

---

## 📄 SEKCJA 4: LOKALIZACJA Z MAPĄ

**INSTRUKCJA:**
1. Panel idoBooking → Treść → Sekcje CMS → + Nowa sekcja
2. Nazwa: "Lokalizacja", Poziom: Body
3. Skopiuj kod poniżej i wklej
4. Zapisz

[Zobacz plik: html/4-lokalizacja-mapa-section.html]

---

## 🎁 BONUS: KOD DO HEAD (opcjonalny)

Jeśli sekcje NIE SĄ full width lub czcionki się nie ładują, dodaj do HEAD:

```html
<!-- Preload czcionek -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">

<!-- Force Full Width (jeśli potrzebne) -->
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

<!-- Viewport (WAŻNE dla mobile) -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## ✅ QUICK CHECKLIST

- [ ] CSS wklejony NA POCZĄTKU arkusza stylów
- [ ] CSS zapisany
- [ ] Sekcja 1 (Apartamenty) wklejona i zapisana
- [ ] Sekcja 2 (Udogodnienia) wklejona i zapisana
- [ ] Sekcja 3 (Timeline) wklejona i zapisana
- [ ] Sekcja 4 (Lokalizacja) wklejona i zapisana
- [ ] Cache wyczyszczony (Ctrl+Shift+Delete)
- [ ] Przetestowane na desktop
- [ ] Przetestowane na mobile
- [ ] Wszystko działa!

---

## 🎉 GOTOWE!

Twoja strona jest teraz kompletna!

**Szczegółowa dokumentacja:** `docs/INSTRUKCJA-INSTALACJI.md`

---

*Ostatnia aktualizacja: 2025-11-05*
*Wersja: 1.0*
