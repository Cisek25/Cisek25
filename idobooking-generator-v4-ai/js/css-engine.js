const CSSEngine = {

    // Gradient presets definitions - Expanded to 45+ gradients
    gradientPresets: {
        none: null,

        // ===== WARM GRADIENTS =====
        sunset: 'linear-gradient(135deg, #FF6B6B 0%, #FFA502 50%, #FFD93D 100%)',
        coral: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 50%, #A8EDEA 100%)',
        'rose-gold': 'linear-gradient(135deg, #b76e79 0%, #e8b5ce 50%, #f1c40f 100%)',
        volcano: 'linear-gradient(135deg, #cc2b5e 0%, #753a88 50%, #ff416c 100%)',
        sahara: 'linear-gradient(135deg, #c99a65 0%, #e6c79f 50%, #8b5a2b 100%)',
        terracotta: 'linear-gradient(135deg, #bc6c25 0%, #dda15e 50%, #283618 100%)',
        coffee: 'linear-gradient(135deg, #2c1810 0%, #6f4e37 50%, #c9a66b 100%)',
        copper: 'linear-gradient(135deg, #b87333 0%, #cd7f32 50%, #e8a87c 100%)',
        peach: 'linear-gradient(135deg, #ffb199 0%, #ff0844 50%, #ffb199 100%)',
        amber: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 50%, #ff6e7f 100%)',

        // ===== COOL GRADIENTS =====
        ocean: 'linear-gradient(135deg, #0277BD 0%, #4FC3F7 50%, #00BCD4 100%)',
        arctic: 'linear-gradient(135deg, #74ebd5 0%, #ACB6E5 50%, #ffffff 100%)',
        midnight: 'linear-gradient(135deg, #0F2027 0%, #203A43 50%, #2C5364 100%)',
        twilight: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        marine: 'linear-gradient(135deg, #1e3a5f 0%, #3d5a80 50%, #98c1d9 100%)',
        peacock: 'linear-gradient(135deg, #0a4d4a 0%, #137a7f 50%, #00b4d8 100%)',
        steel: 'linear-gradient(135deg, #485563 0%, #29323c 50%, #667085 100%)',
        ice: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #ffffff 100%)',
        azure: 'linear-gradient(135deg, #36D1DC 0%, #5B86E5 50%, #667eea 100%)',
        neptune: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7597de 100%)',

        // ===== NATURAL GRADIENTS =====
        forest: 'linear-gradient(135deg, #134E5E 0%, #71B280 50%, #38EF7D 100%)',
        tropical: 'linear-gradient(135deg, #11998e 0%, #38ef7d 50%, #f5af19 100%)',
        emerald: 'linear-gradient(135deg, #1d976c 0%, #93f9b9 50%, #2c3e50 100%)',
        spring: 'linear-gradient(135deg, #f8cdda 0%, #1d976c 50%, #f9d423 100%)',
        moss: 'linear-gradient(135deg, #606c38 0%, #283618 50%, #fefae0 100%)',
        meadow: 'linear-gradient(135deg, #74c69d 0%, #52b788 50%, #40916c 100%)',
        sage: 'linear-gradient(135deg, #b7b7a4 0%, #a5a58d 50%, #6b705c 100%)',
        bamboo: 'linear-gradient(135deg, #718355 0%, #87986a 50%, #c8d2b8 100%)',
        earth: 'linear-gradient(135deg, #8b4513 0%, #a0522d 50%, #cd853f 100%)',
        desert: 'linear-gradient(135deg, #d4a373 0%, #e6bc8f 50%, #f4e4c1 100%)',

        // ===== DRAMATIC GRADIENTS =====
        aurora: 'linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #F093FB 100%)',
        royal: 'linear-gradient(135deg, #141E30 0%, #243B55 50%, #D4AF37 100%)',
        lavender: 'linear-gradient(135deg, #834d9b 0%, #d04ed6 50%, #e8b5ce 100%)',
        champagne: 'linear-gradient(135deg, #f7e7ce 0%, #d4af37 50%, #8b7355 100%)',
        cyberpunk: 'linear-gradient(135deg, #00d4ff 0%, #ff00ff 50%, #7b00ff 100%)',
        wine: 'linear-gradient(135deg, #722f37 0%, #a93545 50%, #f4d0d5 100%)',
        neon: 'linear-gradient(135deg, #00ff87 0%, #60efff 50%, #ff00ff 100%)',
        candy: 'linear-gradient(135deg, #ff6fd8 0%, #3813c2 50%, #92fe9d 100%)',
        galaxy: 'linear-gradient(135deg, #2c3e50 0%, #3498db 50%, #9b59b6 100%)',
        noir: 'linear-gradient(135deg, #000000 0%, #434343 50%, #000000 100%)',
        velvet: 'linear-gradient(135deg, #5f0a87 0%, #a4508b 50%, #ff6f91 100%)',
        plum: 'linear-gradient(135deg, #5a189a 0%, #9d4edd 50%, #e0aaff 100%)'
    },

    generate(settings, effectsSettings = {}, sectionBackgrounds = {}) {
        const colors = settings.colors || {
            primary: '#1A365D',
            secondary: '#C9A227',
            accent: '#00B894'
        };

        const fonts = settings.fonts || {
            heading: 'Playfair Display',
            body: 'Inter'
        };

        // Get gradient preset
        const gradientPreset = effectsSettings.gradientPreset || 'none';
        const useGradients = effectsSettings.useGradients !== false && gradientPreset !== 'none';
        const gradientValue = this.gradientPresets[gradientPreset] || this.gradientPresets['sunset'];

        // Generate per-section backgrounds
        const sectionBgCSS = this.generateSectionBackgrounds(sectionBackgrounds, gradientValue);

        // Generate gradient CSS overrides (deprecated in favor of per-section backgrounds)
        const gradientOverrides = useGradients ? `
/* ============================================
   GRADIENT OVERRIDES - ${gradientPreset}
   ============================================ */
.section-amenities,
.section-cta {
    background: ${gradientValue} !important;
}

.hero-section,
.gradient-hero {
    background: ${gradientValue} !important;
}

.btn-primary,
.room-cta,
.room-badge {
    background: ${gradientValue} !important;
    color: #fff !important;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
}

.amenity-icon {
    background: rgba(255,255,255,0.2) !important;
    color: #fff !important;
}

.section-header-light .section-title,
.section-amenities .section-title,
.section-cta .section-title {
    color: #fff !important;
}
` : '';

        return `/* ============================================
   ${settings.propertyName || 'Nazwa Obiektu'} - STYLES
   
   Wklej w panelu CMS → Custom CSS
   Wygenerowano przez IdoBooking AI Generator v4.0
   ============================================ */

/* ============================================
   CSS VARIABLES
   ============================================ */
:root {
    /* Kolory główne */
    --color-primary: ${colors.primary};
    --color-primary-light: ${this.lighten(colors.primary, 15)};
    --color-primary-dark: ${this.darken(colors.primary, 15)};
    
    --color-secondary: ${colors.secondary};
    --color-secondary-light: ${this.lighten(colors.secondary, 15)};
    
    --color-accent: ${colors.accent};
    
    /* Neutralne */
    --color-dark: #1A202C;
    --color-dark-light: #4A5568;
    --color-gray: #718096;
    --color-gray-light: #CBD5E0;
    --color-light: #F7FAFC;
    --color-white: #FFFFFF;
    --color-border: #E2E8F0;
    
    /* Gradienty */
    --gradient-primary: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
    --gradient-secondary: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-light) 100%);
    ${useGradients ? `--gradient-custom: ${gradientValue};` : ''}
    
    /* Typografia */
    --font-heading: '${fonts.heading}', Georgia, serif;
    --font-body: '${fonts.body}', -apple-system, BlinkMacSystemFont, sans-serif;
    
    --text-xs: 1rem;
    --text-sm: 1.125rem;
    --text-base: 1.25rem;
    --text-lg: 1.4rem;
    --text-xl: 1.75rem;
    --text-2xl: 2.25rem;
    --text-3xl: 2.75rem;
    --text-4xl: 3.5rem;
    --text-5xl: 4.5rem;
    
    /* Spacing */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    
    /* Border radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 9999px;
    
    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
    --shadow-xl: 0 16px 40px rgba(0, 0, 0, 0.15);
    
    --transition-fast: 150ms ease;
    --transition-base: 300ms ease;
}

${gradientOverrides}

${sectionBgCSS}

/* ============================================
   RESET & BASE
   ============================================ */
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
    font-size: var(--text-base);
    line-height: 1.6;
    color: var(--color-dark);
    background: var(--color-white);
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
}

/* ============================================
   LAYOUT
   ============================================ */
.container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 var(--space-6);
}

/* Full-width sections */
.section-intro,
.section-rooms,
.section-amenities,
.section-gallery,
.section-location,
.section-testimonials,
.section-faq,
.section-cta {
    width: 100vw;
    max-width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
}

/* ============================================
   SECTION HEADERS
   ============================================ */
.section-header {
    text-align: center;
    margin-bottom: var(--space-12);
}

.section-label {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-secondary);
    margin-bottom: var(--space-3);
}

.section-label i {
    font-size: var(--text-base);
}

.section-label-light {
    color: var(--color-secondary-light);
}

.section-title {
    font-size: var(--text-4xl);
    font-weight: 600;
    margin-bottom: var(--space-4);
    color: var(--color-dark);
    font-family: var(--font-heading);
    line-height: 1.2;
}

.section-header-light .section-title {
    color: var(--color-white);
}

.section-desc {
    font-size: var(--text-lg);
    color: var(--color-gray);
    max-width: 650px;
    margin: 0 auto;
}

/* ============================================
   BUTTONS
   ============================================ */
.btn-primary,
.btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-base);
    font-weight: 600;
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
    cursor: pointer;
    text-decoration: none;
    border: none;
    font-family: var(--font-body);
}

.btn-primary {
    background: var(--gradient-secondary);
    color: var(--color-dark);
    box-shadow: var(--shadow-md);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-secondary {
    background: transparent;
    color: var(--color-white);
    border: 2px solid var(--color-white);
}

.btn-secondary:hover {
    background: var(--color-white);
    color: var(--color-primary);
}

.btn-large {
    padding: var(--space-5) var(--space-10);
    font-size: var(--text-lg);
}

/* ============================================
   SECTION: INTRO
   ============================================ */
.section-intro {
    padding: var(--space-20) 0;
    background: var(--color-light);
}

.intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-12);
    align-items: center;
}

@media (max-width: 1024px) {
    .intro-grid {
        grid-template-columns: 1fr;
        gap: var(--space-8);
    }
}

.intro-content .section-label,
.intro-content .section-title {
    text-align: left;
}

.intro-lead {
    font-size: var(--text-xl);
    color: var(--color-dark-light);
    margin-bottom: var(--space-6);
    line-height: 1.7;
}

.intro-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
}

.stat-item {
    text-align: center;
    padding: var(--space-5);
    background: var(--color-white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
}

.stat-item:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.stat-number {
    display: block;
    font-size: var(--text-3xl);
    font-weight: 700;
    color: var(--color-primary);
    font-family: var(--font-heading);
}

.stat-label {
    font-size: var(--text-sm);
    color: var(--color-gray);
}

.intro-image {
    position: relative;
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
}

.intro-image img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}

/* ============================================
   SECTION: ROOMS
   ============================================ */
.section-rooms {
    padding: var(--space-20) 0;
    background: var(--color-white);
}

.rooms-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: var(--space-6);
}

.room-card {
    background: var(--color-white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
    border: 1px solid var(--color-border);
}

.room-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-xl);
    border-color: var(--color-secondary);
}

.room-image {
    position: relative;
    height: 240px;
    overflow: hidden;
}

.room-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
}

.room-card:hover .room-image img {
    transform: scale(1.05);
}

.room-badge {
    position: absolute;
    top: var(--space-4);
    left: var(--space-4);
    background: var(--gradient-secondary);
    color: var(--color-dark);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-sm);
    font-size: var(--text-xs);
    font-weight: 600;
    text-transform: uppercase;
}

.room-content {
    padding: var(--space-6);
}

.room-content h3 {
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--color-dark);
    margin-bottom: var(--space-3);
    font-family: var(--font-heading);
}

.room-content p {
    font-size: var(--text-sm);
    color: var(--color-gray);
    margin-bottom: var(--space-4);
    line-height: 1.6;
}

.room-features {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-2);
    margin-bottom: var(--space-5);
}

.room-features li {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    color: var(--color-dark-light);
}

.room-features i {
    color: var(--color-secondary);
    width: 16px;
}

.room-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-4);
    border-top: 1px solid var(--color-border);
}

.room-price {
    font-size: var(--text-sm);
    color: var(--color-gray);
}

.room-price strong {
    font-size: var(--text-xl);
    color: var(--color-primary);
    font-weight: 700;
}

.room-cta {
    display: inline-flex;
    padding: var(--space-3) var(--space-5);
    background: var(--gradient-secondary);
    color: var(--color-dark);
    font-size: var(--text-sm);
    font-weight: 600;
    border-radius: var(--radius-md);
    transition: all var(--transition-base);
}

.room-cta:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-md);
}

/* ============================================
   ROOMS SLIDER MODE
   ============================================ */
.rooms-slider-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space-4);
}

.rooms-slider {
    overflow: hidden;
    flex: 1;
}

.rooms-slider-track {
    display: flex;
    gap: var(--space-6);
    transition: transform 0.5s ease;
}

.rooms-slider .room-card {
    min-width: 350px;
    max-width: 350px;
    flex-shrink: 0;
}

.slider-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--color-white);
    border: 1px solid var(--color-border);
    color: var(--color-primary);
    font-size: 1.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-base);
    box-shadow: var(--shadow-md);
    flex-shrink: 0;
}

.slider-btn:hover {
    background: var(--color-primary);
    color: var(--color-white);
    transform: scale(1.1);
}

.slider-dots {
    display: flex;
    justify-content: center;
    gap: var(--space-2);
    margin-top: var(--space-6);
}

.slider-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--color-gray-light);
    cursor: pointer;
    transition: all var(--transition-base);
}

.slider-dot:hover,
.slider-dot.active {
    background: var(--color-secondary);
    transform: scale(1.2);
}

/* ============================================
   ROOMS CATEGORIES
   ============================================ */
.rooms-category {
    margin-bottom: var(--space-12);
}

.rooms-category:last-child {
    margin-bottom: 0;
}

.category-title {
    font-family: var(--font-heading);
    font-size: var(--text-2xl);
    color: var(--color-primary);
    margin-bottom: var(--space-6);
    padding-bottom: var(--space-3);
    border-bottom: 2px solid var(--color-secondary);
    display: flex;
    align-items: center;
    gap: var(--space-3);
}

.category-title i {
    color: var(--color-secondary);
}

/* ============================================
   ROOMS MASONRY MODE
   ============================================ */
.rooms-masonry {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-6);
    grid-auto-rows: minmax(200px, auto);
}

.rooms-masonry .room-card:nth-child(3n+1) {
    grid-row: span 2;
}

.rooms-masonry .room-card:nth-child(3n+1) .room-image {
    height: 320px;
}

@media (max-width: 1024px) {
    .rooms-masonry {
        grid-template-columns: repeat(2, 1fr);
    }
    .rooms-masonry .room-card:nth-child(3n+1) {
        grid-row: span 1;
    }
    .rooms-slider .room-card {
        min-width: 300px;
        max-width: 300px;
    }
}

@media (max-width: 640px) {
    .rooms-masonry {
        grid-template-columns: 1fr;
    }
    .rooms-slider-wrapper {
        flex-direction: column;
    }
    .slider-btn {
        display: none;
    }
    .rooms-slider-track {
        overflow-x: auto;
        scroll-snap-type: x mandatory;
    }
    .rooms-slider .room-card {
        scroll-snap-align: start;
        min-width: 85vw;
        max-width: 85vw;
    }
}

/* ============================================
   SECTION: AMENITIES
   ============================================ */
.section-amenities {
    padding: var(--space-20) 0;
    background: var(--gradient-primary);
}

.amenities-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-5);
}

@media (max-width: 1024px) {
    .amenities-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .amenities-grid {
        grid-template-columns: 1fr;
    }
}

.amenity-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    text-align: center;
    transition: all var(--transition-base);
}

.amenity-card:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
    border-color: var(--color-secondary);
}

.amenity-icon {
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gradient-secondary);
    border-radius: var(--radius-lg);
    margin: 0 auto var(--space-4);
    font-size: var(--text-2xl);
    color: var(--color-dark);
}

.amenity-card h3 {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--color-white);
    font-family: var(--font-heading);
}

/* ============================================
   SECTION: GALLERY
   ============================================ */
.section-gallery {
    padding: var(--space-20) 0;
    background: var(--color-white);
}

.gallery-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--space-4);
    padding: 0 var(--space-6);
}

.gallery-item {
    flex: 0 1 calc(25% - var(--space-4));
    min-width: 280px;
    max-width: 400px;
}

@media (max-width: 1024px) {
    .gallery-item {
        flex: 0 1 calc(50% - var(--space-4));
    }
}

@media (max-width: 600px) {
    .gallery-item {
        flex: 0 1 100%;
    }
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-lg);
    cursor: pointer;
    aspect-ratio: 4/3;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-base);
}

.gallery-item:hover img {
    transform: scale(1.08);
}

.gallery-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity var(--transition-base);
}

.gallery-item:hover .gallery-overlay {
    opacity: 1;
}

.gallery-overlay i {
    font-size: var(--text-2xl);
    color: var(--color-secondary);
}

/* Lightbox */
.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
    cursor: pointer;
}

.lightbox.active {
    opacity: 1;
    visibility: visible;
}

.lightbox-close {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 40px;
    color: var(--color-white);
    cursor: pointer;
}

.lightbox-close:hover {
    color: var(--color-secondary);
}

#lightbox-img {
    max-width: 90%;
    max-height: 90%;
    border-radius: var(--radius-lg);
}

/* ============================================
   SECTION: LOCATION
   ============================================ */
.section-location {
    padding: var(--space-20) 0;
    background: var(--color-light);
}

.location-grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--space-8);
    align-items: start;
}

@media (max-width: 1024px) {
    .location-grid {
        grid-template-columns: 1fr;
    }
}

.location-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
}

.location-address {
    display: flex;
    align-items: flex-start;
    gap: var(--space-4);
    padding: var(--space-5);
    background: var(--color-white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    border-left: 4px solid var(--color-secondary);
}

.location-address i {
    font-size: var(--text-2xl);
    color: var(--color-secondary);
}

.location-address h4 {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--space-2);
}

.location-address p {
    font-size: var(--text-sm);
    color: var(--color-gray);
}

.location-highlights {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
}

.location-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-3) var(--space-4);
    background: var(--color-white);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
}

.location-item:hover {
    transform: translateX(6px);
    box-shadow: var(--shadow-md);
}

.location-item i {
    color: var(--color-primary);
    width: 24px;
}

.location-item span {
    font-size: var(--text-sm);
    color: var(--color-dark);
}

.location-map {
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

.location-map iframe {
    display: block;
    width: 100%;
    min-height: 400px;
}

/* ============================================
   SECTION: TESTIMONIALS
   ============================================ */
.section-testimonials {
    padding: var(--space-20) 0;
    background: var(--color-light);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-6);
}

@media (max-width: 1024px) {
    .testimonials-grid {
        grid-template-columns: 1fr;
        max-width: 600px;
        margin: 0 auto;
    }
}

.testimonial-card {
    background: var(--color-white);
    border-radius: var(--radius-xl);
    padding: var(--space-6);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
    border: 1px solid var(--color-border);
}

.testimonial-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--color-secondary);
}

.testimonial-rating {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    margin-bottom: var(--space-4);
}

.rating-score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: var(--gradient-secondary);
    color: var(--color-dark);
    border-radius: var(--radius-md);
    font-size: var(--text-lg);
    font-weight: 700;
}

.rating-label {
    font-size: var(--text-base);
    font-weight: 600;
    color: var(--color-secondary);
}

.testimonial-text {
    font-size: var(--text-base);
    color: var(--color-gray);
    line-height: 1.7;
    margin-bottom: var(--space-4);
    font-style: italic;
}

.testimonial-author {
    padding-top: var(--space-4);
    border-top: 1px solid var(--color-border);
}

.testimonial-author h5 {
    font-size: var(--text-base);
    font-weight: 600;
    color: var(--color-dark);
}

.testimonial-author span {
    font-size: var(--text-sm);
    color: var(--color-gray);
}

/* ============================================
   SECTION: FAQ
   ============================================ */
.section-faq {
    padding: var(--space-20) 0;
    background: var(--color-white);
}

.faq-list {
    max-width: 900px;
    margin: 0 auto;
}

.faq-item {
    background: var(--color-light);
    border-radius: var(--radius-lg);
    margin-bottom: var(--space-4);
    overflow: hidden;
    border: 1px solid var(--color-border);
}

.faq-item summary {
    padding: var(--space-5) var(--space-6);
    font-size: var(--text-xl);
    font-weight: 600;
    color: var(--color-dark);
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.faq-item summary::-webkit-details-marker {
    display: none;
}

.faq-item summary::after {
    content: '+';
    font-size: var(--text-2xl);
    color: var(--color-secondary);
    transition: transform var(--transition-fast);
}

.faq-item[open] summary::after {
    transform: rotate(45deg);
}

.faq-item p {
    padding: 0 var(--space-6) var(--space-6);
    font-size: var(--text-lg);
    color: var(--color-gray);
    line-height: 1.8;
}

/* ============================================
   SECTION: NEWSLETTER
   ============================================ */
.section-newsletter {
    padding: var(--space-16) 0;
    background: var(--gradient-secondary);
}

.newsletter-content {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-8);
    flex-wrap: wrap;
}

.newsletter-text h3 {
    font-size: var(--text-2xl);
    font-weight: 600;
    color: var(--color-dark);
    margin-bottom: var(--space-2);
    font-family: var(--font-heading);
}

.newsletter-text p {
    font-size: var(--text-lg);
    color: var(--color-dark-light);
}

.newsletter-form {
    display: flex;
    gap: var(--space-3);
    flex: 1;
    max-width: 450px;
}

.newsletter-form input {
    flex: 1;
    padding: var(--space-4) var(--space-5);
    border: 2px solid var(--color-dark);
    border-radius: var(--radius-md);
    font-size: var(--text-base);
    background: var(--color-white);
}

.newsletter-form input:focus {
    outline: none;
    border-color: var(--color-primary);
}

@media (max-width: 768px) {
    .newsletter-content {
        flex-direction: column;
        text-align: center;
    }
    .newsletter-form {
        width: 100%;
        max-width: 100%;
        flex-direction: column;
    }
}

/* ============================================
   SECTION: PARTNERS
   ============================================ */
.section-partners {
    padding: var(--space-16) 0;
    background: var(--color-light);
}

.partners-grid {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-8);
    flex-wrap: wrap;
}

.partner-logo {
    background: var(--color-white);
    padding: var(--space-4) var(--space-6);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
}

.partner-logo:hover {
    transform: scale(1.05);
    box-shadow: var(--shadow-md);
}

.partner-logo img {
    max-height: 60px;
    width: auto;
    filter: grayscale(50%);
    opacity: 0.8;
    transition: all var(--transition-base);
}

.partner-logo:hover img {
    filter: grayscale(0%);
    opacity: 1;
}

/* ============================================
   SECTION: CTA
   ============================================ */
.section-cta {
    padding: var(--space-20) 0;
    background: var(--gradient-primary);
    text-align: center;
}

.cta-content {
    max-width: 900px;
    margin: 0 auto;
}

.cta-title {
    font-size: var(--text-4xl);
    color: var(--color-white);
    margin-bottom: var(--space-4);
    font-weight: 600;
    font-family: var(--font-heading);
}

.cta-desc {
    font-size: var(--text-xl);
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: var(--space-8);
}

.cta-buttons {
    display: flex;
    gap: var(--space-4);
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: var(--space-8);
}

.cta-perks {
    display: flex;
    gap: var(--space-6);
    justify-content: center;
    flex-wrap: wrap;
}

.cta-perks span {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-lg);
    color: rgba(255, 255, 255, 0.9);
}

.cta-perks i {
    color: var(--color-secondary);
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 768px) {
    .container {
        padding: 0 var(--space-4);
    }
    
    .section-title {
        font-size: var(--text-3xl);
    }
    
    .intro-stats {
        grid-template-columns: 1fr;
    }
    
    .btn-large {
        width: 100%;
    }
    
    .cta-buttons {
        flex-direction: column;
    }
    
    .cta-perks {
        flex-direction: column;
        align-items: center;
    }
}

/* ============================================
   ANIMATIONS
   ============================================ */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* ============================================
   SECTION: ATTRACTIONS
   ============================================ */
.section-attractions {
    padding: var(--space-20) 0;
    background: var(--color-light);
}

.attractions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-6);
    padding: 0 var(--space-6);
}

.attraction-card {
    background: var(--color-white);
    padding: var(--space-8);
    border-radius: var(--radius-lg);
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: transform 0.3s ease;
}

.attraction-card:hover {
    transform: translateY(-8px);
}

.attraction-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto var(--space-4);
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.attraction-icon i {
    font-size: var(--text-3xl);
    color: white;
}

.attraction-card h3 {
    font-family: var(--font-heading);
    font-size: var(--text-xl);
    margin-bottom: var(--space-3);
    color: var(--color-dark);
}

.attraction-card p {
    color: var(--color-gray);
    line-height: 1.6;
    margin-bottom: var(--space-4);
}

.attraction-distance {
    display: inline-block;
    padding: var(--space-2) var(--space-4);
    background: var(--color-light);
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    color: var(--color-primary);
    font-weight: 600;
}

.attraction-distance i {
    margin-right: var(--space-2);
}

/* ============================================
   SECTION: DINING
   ============================================ */
.section-dining {
    padding: var(--space-20) 0;
    background: var(--color-white);
}

.dining-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: var(--space-6);
    padding: 0 var(--space-6);
}

.dining-card {
    background: var(--color-light);
    padding: var(--space-8);
    border-radius: var(--radius-lg);
    text-align: center;
    border: 2px solid transparent;
    transition: all 0.3s ease;
}

.dining-card:hover {
    border-color: var(--color-primary);
}

.dining-card-featured {
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: white;
}

.dining-card-featured h3,
.dining-card-featured p {
    color: white;
}

.dining-icon {
    font-size: var(--text-4xl);
    color: var(--color-primary);
    margin-bottom: var(--space-4);
}

.dining-card-featured .dining-icon {
    color: white;
}

.dining-card h3 {
    font-family: var(--font-heading);
    font-size: var(--text-xl);
    margin-bottom: var(--space-3);
}

.dining-card p {
    color: var(--color-gray);
    line-height: 1.6;
    margin-bottom: var(--space-4);
}

.dining-price {
    display: inline-block;
    padding: var(--space-2) var(--space-4);
    background: var(--color-secondary);
    color: white;
    border-radius: var(--radius-md);
    font-weight: 700;
    font-size: var(--text-lg);
}

/* ============================================
   SECTION: PRICING
   ============================================ */
.section-pricing {
    padding: var(--space-20) 0;
    background: linear-gradient(180deg, var(--color-light) 0%, var(--color-white) 100%);
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-6);
    padding: 0 var(--space-6);
    align-items: stretch;
}

.pricing-card {
    background: var(--color-white);
    padding: var(--space-8);
    border-radius: var(--radius-xl);
    text-align: center;
    box-shadow: 0 4px 30px rgba(0,0,0,0.08);
    position: relative;
    transition: transform 0.3s ease;
}

.pricing-card:hover {
    transform: translateY(-10px);
}

.pricing-card-featured {
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    color: white;
    transform: scale(1.05);
}

.pricing-card-featured:hover {
    transform: scale(1.05) translateY(-10px);
}

.pricing-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--color-accent);
    color: white;
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    font-weight: 700;
    text-transform: uppercase;
}

.pricing-card h3 {
    font-family: var(--font-heading);
    font-size: var(--text-2xl);
    margin-bottom: var(--space-4);
}

.pricing-price {
    font-size: var(--text-lg);
    margin-bottom: var(--space-6);
}

.pricing-price strong {
    font-size: var(--text-4xl);
    font-weight: 800;
}

.pricing-features {
    list-style: none;
    text-align: left;
    margin-bottom: var(--space-6);
}

.pricing-features li {
    padding: var(--space-2) 0;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    font-size: var(--text-base);
}

.pricing-features i {
    color: var(--color-accent);
    margin-right: var(--space-2);
}

.pricing-card-featured .pricing-features li {
    border-color: rgba(255,255,255,0.2);
}

.pricing-card-featured .pricing-features i {
    color: white;
}

/* ============================================
   SECTION: SPA
   ============================================ */
.section-spa {
    padding: var(--space-20) 0;
    background: var(--color-white);
}

.spa-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-10);
    padding: 0 var(--space-6);
}

@media (max-width: 900px) {
    .spa-grid {
        grid-template-columns: 1fr;
    }
}

.spa-info {
    padding: var(--space-8);
    background: var(--color-light);
    border-radius: var(--radius-xl);
}

.spa-lead {
    font-size: var(--text-xl);
    line-height: 1.7;
    color: var(--color-dark);
    margin-bottom: var(--space-6);
}

.spa-features {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3);
    margin-bottom: var(--space-6);
}

.spa-features li {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    font-size: var(--text-lg);
}

.spa-features i {
    color: var(--color-primary);
    font-size: var(--text-xl);
    width: 30px;
}

.spa-info h4 {
    font-family: var(--font-heading);
    margin-bottom: var(--space-2);
}

.spa-treatments {
    padding: var(--space-8);
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    border-radius: var(--radius-xl);
    color: white;
}

.spa-treatments h4 {
    font-family: var(--font-heading);
    font-size: var(--text-xl);
    margin-bottom: var(--space-6);
}

.treatment-item {
    display: flex;
    justify-content: space-between;
    padding: var(--space-4);
    background: rgba(255,255,255,0.1);
    border-radius: var(--radius-md);
    margin-bottom: var(--space-3);
}

.treatment-item strong {
    font-weight: 700;
}

/* ============================================
   SECTION: EVENTS
   ============================================ */
.section-events {
    padding: var(--space-20) 0;
    background: var(--color-light);
}

.events-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-6);
    padding: 0 var(--space-6);
    margin-bottom: var(--space-10);
}

.event-card {
    background: var(--color-white);
    padding: var(--space-8);
    border-radius: var(--radius-lg);
    text-align: center;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    transition: transform 0.3s ease;
}

.event-card:hover {
    transform: translateY(-5px);
}

.event-card > i {
    font-size: var(--text-4xl);
    color: var(--color-primary);
    margin-bottom: var(--space-4);
}

.event-card h3 {
    font-family: var(--font-heading);
    font-size: var(--text-xl);
    margin-bottom: var(--space-3);
}

.event-card p {
    color: var(--color-gray);
    line-height: 1.6;
}

.events-cta {
    text-align: center;
    padding: var(--space-8);
    background: var(--color-white);
    border-radius: var(--radius-lg);
    margin: 0 var(--space-6);
}

.events-cta p {
    font-size: var(--text-xl);
    margin-bottom: var(--space-4);
}

/* ============================================
   SECTION: TRANSPORT
   ============================================ */
.section-transport {
    padding: var(--space-20) 0;
    background: var(--color-white);
}

.transport-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-6);
    padding: 0 var(--space-6);
    margin-bottom: var(--space-10);
}

.transport-card {
    background: var(--color-light);
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    text-align: center;
}

.transport-card > i {
    font-size: var(--text-3xl);
    color: var(--color-primary);
    margin-bottom: var(--space-4);
}

.transport-card h3 {
    font-family: var(--font-heading);
    font-size: var(--text-lg);
    margin-bottom: var(--space-3);
}

.transport-card p {
    color: var(--color-gray);
    line-height: 1.5;
    font-size: var(--text-base);
}

.transport-extras {
    background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
    padding: var(--space-8);
    border-radius: var(--radius-lg);
    color: white;
    margin: 0 var(--space-6);
}

.transport-extras h4 {
    font-family: var(--font-heading);
    font-size: var(--text-xl);
    margin-bottom: var(--space-4);
}

.transport-extras ul {
    list-style: none;
}

.transport-extras li {
    padding: var(--space-2) 0;
    font-size: var(--text-lg);
}

.transport-extras li::before {
    content: "✓ ";
    color: var(--color-accent);
}

/* ============================================
   SECTION: RULES
   ============================================ */
.section-rules {
    padding: var(--space-20) 0;
    background: var(--color-light);
}

.rules-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-6);
    padding: 0 var(--space-6);
}

.rule-item {
    background: var(--color-white);
    padding: var(--space-6);
    border-radius: var(--radius-lg);
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.rule-item > i {
    font-size: var(--text-3xl);
    color: var(--color-primary);
    margin-bottom: var(--space-4);
}

.rule-item h4 {
    font-family: var(--font-heading);
    font-size: var(--text-lg);
    margin-bottom: var(--space-2);
    color: var(--color-dark);
}

.rule-item p {
    color: var(--color-gray);
    line-height: 1.5;
    font-size: var(--text-base);
}

/* ============================================
   PRINT STYLES
   ============================================ */
@media print {
    .section-cta,
    .lightbox {
        display: none;
    }
}
`;
    },

    // Color utilities
    lighten(hex, percent) {
        const num = parseInt(hex.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min(255, (num >> 16) + amt);
        const G = Math.min(255, ((num >> 8) & 0x00FF) + amt);
        const B = Math.min(255, (num & 0x0000FF) + amt);
        return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    },

    darken(hex, percent) {
        const num = parseInt(hex.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.max(0, (num >> 16) - amt);
        const G = Math.max(0, ((num >> 8) & 0x00FF) - amt);
        const B = Math.max(0, (num & 0x0000FF) - amt);
        return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    },

    // Generate per-section background CSS
    generateSectionBackgrounds(sectionBackgrounds, gradientValue) {
        let css = `
/* ============================================
   CUSTOM SECTION BACKGROUNDS
   ============================================ */
`;

        Object.entries(sectionBackgrounds).forEach(([sectionId, bgType]) => {
            if (!bgType || bgType === 'white') return; // Default white, no extra CSS needed

            const sectionClass = `.section-${sectionId}`;

            switch (bgType) {
                case 'light':
                    css += `
${sectionClass} {
    background: var(--color-light) !important;
}
`;
                    break;

                case 'gradient':
                    css += `
${sectionClass} {
    background: ${gradientValue} !important;
}

${sectionClass} .section-title,
${sectionClass} .section-label,
${sectionClass} .section-desc {
    color: #fff !important;
}

${sectionClass} .amenity-card {
    background: rgba(255, 255, 255, 0.15) !important;
    border-color: rgba(255, 255, 255, 0.25) !important;
}

${sectionClass} .amenity-card h3 {
    color: #fff !important;
}
`;
                    break;

                case 'dark':
                    css += `
${sectionClass} {
    background: var(--color-dark) !important;
}

${sectionClass} .section-title,
${sectionClass} .section-label,
${sectionClass} .section-desc,
${sectionClass} h1, ${sectionClass} h2, ${sectionClass} h3,
${sectionClass} h4, ${sectionClass} h5, ${sectionClass} h6,
${sectionClass} p, ${sectionClass} li {
    color: #fff !important;
}

${sectionClass} .section-label {
    color: var(--color-secondary-light) !important;
}
`;
                    break;

                case 'pattern':
                    css += `
${sectionClass} {
    background: 
        repeating-linear-gradient(
            45deg,
            var(--color-light),
            var(--color-light) 10px,
            var(--color-white) 10px,
            var(--color-white) 20px
        ) !important;
}
`;
                    break;
            }
        });

        return css;
    }
};

// Expose to window
window.CSSEngine = CSSEngine;
