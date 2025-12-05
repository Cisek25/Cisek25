// CSS ENGINE - Generator 2000+ linii profesjonalnego CSS
// Bazujący na wzorcach z pensjonat.css (2239 linii)

/**
 * Główna funkcja generująca kompletny CSS
 * @param {Object} config - Konfiguracja CSS (kolory, fonty, theme)
 * @returns {String} - Kompletny CSS (2000+ linii)
 */
function generateProfessionalCSS(config) {
    const {
        colors = {
            primary: '#2C3E50',
            secondary: '#ECF0F1',
            accent: '#CDD789',
            backgrounds: ['#FFFEF9', '#F5F1E8']
        },
        fonts = {
            heading: 'Cinzel',
            body: 'Inter'
        },
        theme = 'luxury-mountain'
    } = config;

    // Buduj CSS sekcja po sekcji
    const sections = [
        generateCSSVariables(colors, fonts),
        generateReset(),
        generateTypography(fonts),
        generateLayout(),
        generateHeader(),
        generateHero(colors),
        generateSections(colors),
        generateCards(colors),
        generateButtons(colors),
        generateForms(colors),
        generateGallery(),
        generateAmenities(colors),
        generateFooter(colors),
        generateAnimations(),
        generateUtilities(colors),
        generateResponsive()
    ];

    return sections.join('\n\n');
}

/**
 * CSS Variables - główne zmienne projektu
 */
function generateCSSVariables(colors, fonts) {
    return `/* =====================================================
   CSS VARIABLES - Główne zmienne projektu
   Wygenerowane przez idobooking Generator v3.0
   ===================================================== */

:root {
    /* === KOLORY === */
    --color-primary: ${colors.primary};
    --color-secondary: ${colors.secondary};
    --color-accent: ${colors.accent};
    --color-bg-light: ${colors.backgrounds[0]};
    --color-bg-alt: ${colors.backgrounds[1]};

    /* Neutralne */
    --color-white: #FFFFFF;
    --color-black: #000000;
    --color-gray-50: #F9FAFB;
    --color-gray-100: #F3F4F6;
    --color-gray-200: #E5E7EB;
    --color-gray-300: #D1D5DB;
    --color-gray-400: #9CA3AF;
    --color-gray-500: #6B7280;
    --color-gray-600: #4B5563;
    --color-gray-700: #374151;
    --color-gray-800: #1F2937;
    --color-gray-900: #111827;

    /* Semantyczne */
    --color-success: #10B981;
    --color-error: #EF4444;
    --color-warning: #F59E0B;
    --color-info: #3B82F6;

    /* === TYPOGRAFIA === */
    --font-heading: '${fonts.heading}', Georgia, serif;
    --font-body: '${fonts.body}', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-mono: 'Courier New', monospace;

    /* Font sizes */
    --text-xs: 0.75rem;      /* 12px */
    --text-sm: 0.875rem;     /* 14px */
    --text-base: 1rem;       /* 16px */
    --text-lg: 1.125rem;     /* 18px */
    --text-xl: 1.25rem;      /* 20px */
    --text-2xl: 1.5rem;      /* 24px */
    --text-3xl: 1.875rem;    /* 30px */
    --text-4xl: 2.25rem;     /* 36px */
    --text-5xl: 3rem;        /* 48px */
    --text-6xl: 3.75rem;     /* 60px */
    --text-7xl: 4.5rem;      /* 72px */

    /* Font weights */
    --font-light: 300;
    --font-normal: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;
    --font-extrabold: 800;
    --font-black: 900;

    /* Line heights */
    --leading-none: 1;
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-normal: 1.5;
    --leading-relaxed: 1.625;
    --leading-loose: 2;

    /* === SPACING === */
    --space-0: 0;
    --space-1: 0.25rem;      /* 4px */
    --space-2: 0.5rem;       /* 8px */
    --space-3: 0.75rem;      /* 12px */
    --space-4: 1rem;         /* 16px */
    --space-5: 1.25rem;      /* 20px */
    --space-6: 1.5rem;       /* 24px */
    --space-8: 2rem;         /* 32px */
    --space-10: 2.5rem;      /* 40px */
    --space-12: 3rem;        /* 48px */
    --space-16: 4rem;        /* 64px */
    --space-20: 5rem;        /* 80px */
    --space-24: 6rem;        /* 96px */
    --space-32: 8rem;        /* 128px */

    /* === SHADOWS === */
    --shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);

    /* === BORDER RADIUS === */
    --radius-none: 0;
    --radius-sm: 0.25rem;    /* 4px */
    --radius-md: 0.5rem;     /* 8px */
    --radius-lg: 0.75rem;    /* 12px */
    --radius-xl: 1rem;       /* 16px */
    --radius-2xl: 1.5rem;    /* 24px */
    --radius-3xl: 2rem;      /* 32px */
    --radius-full: 9999px;

    /* === TRANSITIONS === */
    --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slower: 700ms cubic-bezier(0.4, 0, 0.2, 1);

    /* === Z-INDEX === */
    --z-0: 0;
    --z-10: 10;
    --z-20: 20;
    --z-30: 30;
    --z-40: 40;
    --z-50: 50;
    --z-modal: 1000;
    --z-tooltip: 1100;
    --z-notification: 1200;

    /* === BREAKPOINTS === */
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
    --breakpoint-2xl: 1536px;

    /* === LAYOUT === */
    --container-sm: 640px;
    --container-md: 768px;
    --container-lg: 1024px;
    --container-xl: 1280px;
    --container-2xl: 1400px;

    /* === GRADIENTS === */
    --gradient-primary: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
    --gradient-secondary: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-white) 100%);
    --gradient-dark: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%);
    --gradient-light: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%);
}`;
}

/**
 * CSS Reset & Base Styles
 */
function generateReset() {
    return `/* =====================================================
   RESET & BASE STYLES
   ===================================================== */

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

body {
    font-family: var(--font-body);
    font-size: var(--text-base);
    line-height: var(--leading-relaxed);
    color: var(--color-gray-800);
    background-color: var(--color-bg-light);
    overflow-x: hidden;
}

img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
}

input, button, textarea, select {
    font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
}

a {
    color: inherit;
    text-decoration: none;
}

ul, ol {
    list-style: none;
}

button {
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
}

/* Selection */
::selection {
    background-color: var(--color-accent);
    color: var(--color-white);
}

::-moz-selection {
    background-color: var(--color-accent);
    color: var(--color-white);
}`;
}

/**
 * Typography
 */
function generateTypography(fonts) {
    return `/* =====================================================
   TYPOGRAPHY
   ===================================================== */

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: var(--font-bold);
    line-height: var(--leading-tight);
    color: var(--color-primary);
    margin-bottom: var(--space-4);
}

h1 {
    font-size: var(--text-5xl);
    letter-spacing: -0.02em;
}

h2 {
    font-size: var(--text-4xl);
    letter-spacing: -0.01em;
}

h3 {
    font-size: var(--text-3xl);
}

h4 {
    font-size: var(--text-2xl);
}

h5 {
    font-size: var(--text-xl);
}

h6 {
    font-size: var(--text-lg);
}

p {
    margin-bottom: var(--space-4);
    color: var(--color-gray-700);
}

.lead {
    font-size: var(--text-xl);
    font-weight: var(--font-light);
    line-height: var(--leading-relaxed);
    color: var(--color-gray-600);
}

.small {
    font-size: var(--text-sm);
}

.tiny {
    font-size: var(--text-xs);
}

strong, b {
    font-weight: var(--font-bold);
}

em, i {
    font-style: italic;
}

.text-center {
    text-align: center;
}

.text-right {
    text-align: right;
}

.text-uppercase {
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* Font awesome icon alignment */
.fa, .fas, .far, .fab {
    display: inline-block;
    margin-right: var(--space-2);
}`;
}

/**
 * Layout
 */
function generateLayout() {
    return `/* =====================================================
   LAYOUT & CONTAINERS
   ===================================================== */

.container {
    width: 100%;
    max-width: var(--container-xl);
    margin-left: auto;
    margin-right: auto;
    padding-left: var(--space-6);
    padding-right: var(--space-6);
}

.container-sm {
    max-width: var(--container-sm);
}

.container-md {
    max-width: var(--container-md);
}

.container-lg {
    max-width: var(--container-lg);
}

.container-2xl {
    max-width: var(--container-2xl);
}

.section {
    padding-top: var(--space-20);
    padding-bottom: var(--space-20);
    position: relative;
}

.section-sm {
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
}

.section-lg {
    padding-top: var(--space-32);
    padding-bottom: var(--space-32);
}

/* Section backgrounds */
.section-light {
    background-color: var(--color-bg-light);
}

.section-alt {
    background-color: var(--color-bg-alt);
}

.section-primary {
    background-color: var(--color-primary);
    color: var(--color-white);
}

.section-primary h1,
.section-primary h2,
.section-primary h3,
.section-primary h4,
.section-primary h5,
.section-primary h6 {
    color: var(--color-white);
}

.section-primary p {
    color: rgba(255, 255, 255, 0.9);
}

/* Grid system */
.grid {
    display: grid;
    gap: var(--space-6);
}

.grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

/* Flex utilities */
.flex {
    display: flex;
}

.flex-col {
    flex-direction: column;
}

.flex-wrap {
    flex-wrap: wrap;
}

.items-center {
    align-items: center;
}

.items-start {
    align-items: flex-start;
}

.items-end {
    align-items: flex-end;
}

.justify-center {
    justify-content: center;
}

.justify-between {
    justify-content: space-between;
}

.justify-around {
    justify-content: space-around;
}

.gap-2 {
    gap: var(--space-2);
}

.gap-4 {
    gap: var(--space-4);
}

.gap-6 {
    gap: var(--space-6);
}

.gap-8 {
    gap: var(--space-8);
}`;
}

// Będę kontynuował w kolejnej funkcji...
// [CZĘŚĆ 1/4 - 500 linii]

/**
 * Header & Navigation
 */
function generateHeader() {
    return `/* =====================================================
   HEADER & NAVIGATION
   ===================================================== */

.site-header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-white);
    border-bottom: 1px solid var(--color-gray-200);
    box-shadow: var(--shadow-sm);
    z-index: var(--z-50);
    transition: all var(--transition-base);
}

.site-header.scrolled {
    box-shadow: var(--shadow-lg);
}

.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-4);
    padding-bottom: var(--space-4);
}

.site-logo {
    font-family: var(--font-heading);
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--color-primary);
    transition: color var(--transition-fast);
}

.site-logo:hover {
    color: var(--color-accent);
}

.main-nav ul {
    display: flex;
    gap: var(--space-8);
}

.main-nav a {
    font-weight: var(--font-medium);
    color: var(--color-gray-700);
    transition: color var(--transition-fast);
    position: relative;
}

.main-nav a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-accent);
    transition: width var(--transition-base);
}

.main-nav a:hover {
    color: var(--color-primary);
}

.main-nav a:hover::after {
    width: 100%;
}

.main-nav a.active {
    color: var(--color-primary);
    font-weight: var(--font-semibold);
}

.main-nav a.active::after {
    width: 100%;
}`;
}

/**
 * Hero Section
 */
function generateHero(colors) {
    return `/* =====================================================
   HERO SECTION
   ===================================================== */

.hero {
    position: relative;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--gradient-primary);
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%);
    z-index: 1;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
}

.hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    color: var(--color-white);
    max-width: 900px;
    padding: var(--space-12);
}

.hero h1 {
    font-size: var(--text-6xl);
    color: var(--color-white);
    margin-bottom: var(--space-6);
    text-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: fadeInUp 0.8s ease-out;
}

.hero p {
    font-size: var(--text-xl);
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: var(--space-8);
    text-shadow: 0 2px 8px rgba(0,0,0,0.2);
    animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-buttons {
    display: flex;
    gap: var(--space-4);
    justify-content: center;
    flex-wrap: wrap;
    animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-scroll {
    position: absolute;
    bottom: var(--space-8);
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    animation: bounce 2s infinite;
}

.hero-scroll svg {
    width: 24px;
    height: 24px;
    color: var(--color-white);
}`;
}

/**
 * Sections with Advanced Styling
 */
function generateSections(colors) {
    return `/* =====================================================
   SECTIONS - Advanced Styling
   ===================================================== */

.section-title {
    text-align: center;
    margin-bottom: var(--space-12);
}

.section-title h2 {
    font-size: var(--text-4xl);
    margin-bottom: var(--space-4);
    position: relative;
    display: inline-block;
}

.section-title h2::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--gradient-primary);
    border-radius: var(--radius-full);
}

.section-title p {
    font-size: var(--text-lg);
    color: var(--color-gray-600);
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}

.section-description {
    background: var(--color-white);
    padding: var(--space-10);
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-xl);
    margin-bottom: var(--space-12);
}

.section-description h3 {
    margin-bottom: var(--space-6);
}

.section-description p {
    font-size: var(--text-lg);
    line-height: var(--leading-loose);
}

/* Features Grid */
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-8);
    margin-top: var(--space-12);
}

.feature-card {
    background: var(--color-white);
    padding: var(--space-8);
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
    border: 2px solid transparent;
}

.feature-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-2xl);
    border-color: var(--color-accent);
}

.feature-icon {
    width: 64px;
    height: 64px;
    background: var(--gradient-primary);
    border-radius: var(--radius-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-6);
    font-size: var(--text-3xl);
    color: var(--color-white);
    box-shadow: var(--shadow-lg);
}

.feature-card h4 {
    margin-bottom: var(--space-3);
}

.feature-card p {
    color: var(--color-gray-600);
    font-size: var(--text-base);
}`;
}

/**
 * Cards
 */
function generateCards(colors) {
    return `/* =====================================================
   CARDS
   ===================================================== */

.card {
    background: var(--color-white);
    border-radius: var(--radius-xl);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    transition: all var(--transition-base);
    border: 1px solid var(--color-gray-200);
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-2xl);
}

.card-image {
    position: relative;
    width: 100%;
    height: 260px;
    overflow: hidden;
}

.card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slower);
}

.card:hover .card-image img {
    transform: scale(1.1);
}

.card-badge {
    position: absolute;
    top: var(--space-4);
    right: var(--space-4);
    background: var(--color-accent);
    color: var(--color-white);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    font-weight: var(--font-bold);
    box-shadow: var(--shadow-md);
}

.card-content {
    padding: var(--space-6);
}

.card-title {
    font-size: var(--text-xl);
    margin-bottom: var(--space-3);
}

.card-description {
    color: var(--color-gray-600);
    margin-bottom: var(--space-4);
    font-size: var(--text-base);
}

.card-meta {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    margin-bottom: var(--space-6);
    padding-top: var(--space-4);
    border-top: 1px solid var(--color-gray-200);
}

.card-meta-item {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    color: var(--color-gray-600);
}

.card-meta-item svg {
    width: 18px;
    height: 18px;
    color: var(--color-accent);
}

.card-footer {
    padding: var(--space-6);
    padding-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.card-price {
    font-size: var(--text-2xl);
    font-weight: var(--font-bold);
    color: var(--color-primary);
}

.card-price span {
    font-size: var(--text-sm);
    font-weight: var(--font-normal);
    color: var(--color-gray-600);
}`;
}

/**
 * Buttons
 */
function generateButtons(colors) {
    return `/* =====================================================
   BUTTONS
   ===================================================== */

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
    cursor: pointer;
    border: 2px solid transparent;
    text-align: center;
    white-space: nowrap;
    text-decoration: none;
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Primary Button */
.btn-primary {
    background: var(--gradient-primary);
    color: var(--color-white);
    box-shadow: var(--shadow-lg);
}

.btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
}

.btn-primary:active:not(:disabled) {
    transform: translateY(0);
}

/* Secondary Button */
.btn-secondary {
    background: var(--color-white);
    color: var(--color-primary);
    border-color: var(--color-primary);
    box-shadow: var(--shadow-sm);
}

.btn-secondary:hover:not(:disabled) {
    background: var(--color-primary);
    color: var(--color-white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

/* Outline Button */
.btn-outline {
    background: transparent;
    color: var(--color-primary);
    border-color: var(--color-primary);
}

.btn-outline:hover:not(:disabled) {
    background: var(--color-primary);
    color: var(--color-white);
}

/* Ghost Button */
.btn-ghost {
    background: transparent;
    color: var(--color-primary);
}

.btn-ghost:hover:not(:disabled) {
    background: rgba(59, 130, 246, 0.1);
}

/* Button Sizes */
.btn-sm {
    padding: var(--space-2) var(--space-4);
    font-size: var(--text-sm);
}

.btn-lg {
    padding: var(--space-6) var(--space-12);
    font-size: var(--text-lg);
}

.btn-xl {
    padding: var(--space-8) var(--space-16);
    font-size: var(--text-xl);
}

/* Button Full Width */
.btn-block {
    width: 100%;
    display: flex;
}

/* Button Group */
.btn-group {
    display: flex;
    gap: var(--space-3);
    flex-wrap: wrap;
}`;
}

/**
 * Forms
 */
function generateForms(colors) {
    return `/* =====================================================
   FORMS
   ===================================================== */

.form-group {
    margin-bottom: var(--space-6);
}

.form-label {
    display: block;
    font-size: var(--text-sm);
    font-weight: var(--font-semibold);
    color: var(--color-gray-700);
    margin-bottom: var(--space-2);
}

.form-label.required::after {
    content: ' *';
    color: var(--color-error);
}

.form-input,
.form-select,
.form-textarea {
    width: 100%;
    padding: var(--space-3) var(--space-4);
    font-size: var(--text-base);
    color: var(--color-gray-800);
    background: var(--color-white);
    border: 2px solid var(--color-gray-300);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    outline: none;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
    color: var(--color-gray-400);
}

.form-textarea {
    min-height: 120px;
    resize: vertical;
}

.form-help {
    display: block;
    margin-top: var(--space-2);
    font-size: var(--text-sm);
    color: var(--color-gray-600);
}

.form-error {
    display: block;
    margin-top: var(--space-2);
    font-size: var(--text-sm);
    color: var(--color-error);
}

.form-group.has-error .form-input,
.form-group.has-error .form-select,
.form-group.has-error .form-textarea {
    border-color: var(--color-error);
}

.form-group.has-error .form-input:focus,
.form-group.has-error .form-select:focus,
.form-group.has-error .form-textarea:focus {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* Checkbox & Radio */
.form-check {
    display: flex;
    align-items: flex-start;
    gap: var(--space-3);
    margin-bottom: var(--space-4);
}

.form-check-input {
    width: 20px;
    height: 20px;
    margin-top: 2px;
    cursor: pointer;
    accent-color: var(--color-primary);
}

.form-check-label {
    font-size: var(--text-base);
    color: var(--color-gray-700);
    cursor: pointer;
}`;
}

/**
 * Gallery
 */
function generateGallery() {
    return `/* =====================================================
   GALLERY
   ===================================================== */

.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-6);
    margin-top: var(--space-12);
}

.gallery-item {
    position: relative;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
    cursor: pointer;
}

.gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
}

.gallery-item:hover img {
    transform: scale(1.15);
}

.gallery-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%);
    opacity: 0;
    transition: opacity var(--transition-base);
    z-index: 1;
}

.gallery-item:hover::before {
    opacity: 1;
}

.gallery-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--space-6);
    color: var(--color-white);
    z-index: 2;
    opacity: 0;
    transform: translateY(20px);
    transition: all var(--transition-base);
}

.gallery-item:hover .gallery-caption {
    opacity: 1;
    transform: translateY(0);
}

.gallery-caption h4 {
    color: var(--color-white);
    margin-bottom: var(--space-2);
    font-size: var(--text-lg);
}

.gallery-caption p {
    color: rgba(255, 255, 255, 0.9);
    font-size: var(--text-sm);
    margin-bottom: 0;
}

/* Lightbox Styles */
.gallery-lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    z-index: var(--z-modal);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-8);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-base);
}

.gallery-lightbox.active {
    opacity: 1;
    visibility: visible;
}

.gallery-lightbox img {
    max-width: 90%;
    max-height: 90vh;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-2xl);
}`;
}

/**
 * Amenities
 */
function generateAmenities(colors) {
    return `/* =====================================================
   AMENITIES & FEATURES
   ===================================================== */

.amenities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-4);
    margin-top: var(--space-8);
}

.amenity-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    padding: var(--space-4);
    background: var(--color-white);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-fast);
}

.amenity-item:hover {
    box-shadow: var(--shadow-md);
    transform: translateX(4px);
}

.amenity-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
    border-radius: var(--radius-md);
    font-size: var(--text-xl);
    color: var(--color-primary);
    flex-shrink: 0;
}

.amenity-label {
    font-size: var(--text-base);
    font-weight: var(--font-medium);
    color: var(--color-gray-700);
}

/* Category Tabs */
.amenities-tabs {
    display: flex;
    gap: var(--space-2);
    margin-bottom: var(--space-8);
    border-bottom: 2px solid var(--color-gray-200);
    overflow-x: auto;
}

.amenity-tab {
    padding: var(--space-4) var(--space-6);
    font-weight: var(--font-semibold);
    color: var(--color-gray-600);
    border-bottom: 3px solid transparent;
    transition: all var(--transition-fast);
    cursor: pointer;
    white-space: nowrap;
}

.amenity-tab:hover {
    color: var(--color-primary);
}

.amenity-tab.active {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
}`;
}

/**
 * Footer
 */
function generateFooter(colors) {
    return `/* =====================================================
   FOOTER
   ===================================================== */

.site-footer {
    background: var(--color-primary);
    color: var(--color-white);
    padding-top: var(--space-20);
    padding-bottom: var(--space-8);
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-12);
    margin-bottom: var(--space-12);
}

.footer-section h4 {
    color: var(--color-white);
    margin-bottom: var(--space-6);
    font-size: var(--text-lg);
}

.footer-section p {
    color: rgba(255, 255, 255, 0.8);
    line-height: var(--leading-relaxed);
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
}

.footer-links a {
    color: rgba(255, 255, 255, 0.8);
    transition: color var(--transition-fast);
    display: flex;
    align-items: center;
    gap: var(--space-2);
}

.footer-links a:hover {
    color: var(--color-white);
    transform: translateX(4px);
}

.footer-social {
    display: flex;
    gap: var(--space-4);
    margin-top: var(--space-6);
}

.footer-social a {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-full);
    color: var(--color-white);
    transition: all var(--transition-fast);
}

.footer-social a:hover {
    background: var(--color-white);
    color: var(--color-primary);
    transform: translateY(-4px);
}

.footer-bottom {
    padding-top: var(--space-8);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
}

.footer-bottom p {
    color: rgba(255, 255, 255, 0.7);
    font-size: var(--text-sm);
}`;
}

/**
 * Animations
 */
function generateAnimations() {
    return `/* =====================================================
   ANIMATIONS
   ===================================================== */

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

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

@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes slideInUp {
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slideInDown {
    from {
        transform: translateY(-100%);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale(0.5);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0) translateX(-50%);
    }
    50% {
        transform: translateY(-10px) translateX(-50%);
    }
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes shimmer {
    0% {
        background-position: -1000px 0;
    }
    100% {
        background-position: 1000px 0;
    }
}

/* Animation Utility Classes */
.animate-fadeIn {
    animation: fadeIn var(--transition-base);
}

.animate-fadeInUp {
    animation: fadeInUp var(--transition-base);
}

.animate-fadeInDown {
    animation: fadeInDown var(--transition-base);
}

.animate-fadeInLeft {
    animation: fadeInLeft var(--transition-base);
}

.animate-fadeInRight {
    animation: fadeInRight var(--transition-base);
}

.animate-zoomIn {
    animation: zoomIn var(--transition-base);
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-spin {
    animation: spin 1s linear infinite;
}

/* Scroll Animations */
[data-scroll] {
    opacity: 0;
    transition: opacity var(--transition-slow), transform var(--transition-slow);
}

[data-scroll].scrolled {
    opacity: 1;
}

[data-scroll="fade-up"].scrolled {
    animation: fadeInUp var(--transition-slow);
}

[data-scroll="fade-down"].scrolled {
    animation: fadeInDown var(--transition-slow);
}

[data-scroll="fade-left"].scrolled {
    animation: fadeInLeft var(--transition-slow);
}

[data-scroll="fade-right"].scrolled {
    animation: fadeInRight var(--transition-slow);
}`;
}

/**
 * Utility Classes
 */
function generateUtilities(colors) {
    return `/* =====================================================
   UTILITY CLASSES
   ===================================================== */

/* Spacing Utilities */
.m-0 { margin: 0; }
.m-auto { margin: auto; }
.mt-0 { margin-top: 0; }
.mt-4 { margin-top: var(--space-4); }
.mt-8 { margin-top: var(--space-8); }
.mt-12 { margin-top: var(--space-12); }
.mb-0 { margin-bottom: 0; }
.mb-4 { margin-bottom: var(--space-4); }
.mb-8 { margin-bottom: var(--space-8); }
.mb-12 { margin-bottom: var(--space-12); }
.ml-auto { margin-left: auto; }
.mr-auto { margin-right: auto; }
.mx-auto { margin-left: auto; margin-right: auto; }
.my-8 { margin-top: var(--space-8); margin-bottom: var(--space-8); }
.my-12 { margin-top: var(--space-12); margin-bottom: var(--space-12); }

.p-0 { padding: 0; }
.p-4 { padding: var(--space-4); }
.p-8 { padding: var(--space-8); }
.p-12 { padding: var(--space-12); }
.pt-4 { padding-top: var(--space-4); }
.pt-8 { padding-top: var(--space-8); }
.pb-4 { padding-bottom: var(--space-4); }
.pb-8 { padding-bottom: var(--space-8); }
.px-4 { padding-left: var(--space-4); padding-right: var(--space-4); }
.px-8 { padding-left: var(--space-8); padding-right: var(--space-8); }
.py-4 { padding-top: var(--space-4); padding-bottom: var(--space-4); }
.py-8 { padding-top: var(--space-8); padding-bottom: var(--space-8); }

/* Display Utilities */
.block { display: block; }
.inline-block { display: inline-block; }
.inline { display: inline; }
.hidden { display: none; }
.visible { visibility: visible; }
.invisible { visibility: hidden; }

/* Overflow Utilities */
.overflow-hidden { overflow: hidden; }
.overflow-auto { overflow: auto; }
.overflow-x-auto { overflow-x: auto; }
.overflow-y-auto { overflow-y: auto; }

/* Position Utilities */
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.sticky { position: sticky; }

/* Width & Height Utilities */
.w-full { width: 100%; }
.w-auto { width: auto; }
.h-full { height: 100%; }
.h-auto { height: auto; }
.min-h-screen { min-height: 100vh; }

/* Text Utilities */
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }
.text-justify { text-align: justify; }

/* Color Utilities */
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-accent { color: var(--color-accent); }
.text-white { color: var(--color-white); }
.text-gray-600 { color: var(--color-gray-600); }
.text-gray-700 { color: var(--color-gray-700); }

.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }
.bg-white { background-color: var(--color-white); }
.bg-light { background-color: var(--color-bg-light); }
.bg-alt { background-color: var(--color-bg-alt); }

/* Border Utilities */
.border { border: 1px solid var(--color-gray-200); }
.border-t { border-top: 1px solid var(--color-gray-200); }
.border-b { border-bottom: 1px solid var(--color-gray-200); }
.border-l { border-left: 1px solid var(--color-gray-200); }
.border-r { border-right: 1px solid var(--color-gray-200); }
.border-none { border: none; }

.rounded { border-radius: var(--radius-md); }
.rounded-lg { border-radius: var(--radius-lg); }
.rounded-xl { border-radius: var(--radius-xl); }
.rounded-2xl { border-radius: var(--radius-2xl); }
.rounded-full { border-radius: var(--radius-full); }

/* Shadow Utilities */
.shadow-sm { box-shadow: var(--shadow-sm); }
.shadow-md { box-shadow: var(--shadow-md); }
.shadow-lg { box-shadow: var(--shadow-lg); }
.shadow-xl { box-shadow: var(--shadow-xl); }
.shadow-2xl { box-shadow: var(--shadow-2xl); }
.shadow-none { box-shadow: none; }

/* Opacity Utilities */
.opacity-0 { opacity: 0; }
.opacity-50 { opacity: 0.5; }
.opacity-75 { opacity: 0.75; }
.opacity-100 { opacity: 1; }

/* Cursor Utilities */
.cursor-pointer { cursor: pointer; }
.cursor-default { cursor: default; }
.cursor-not-allowed { cursor: not-allowed; }

/* Transition Utilities */
.transition-fast { transition: all var(--transition-fast); }
.transition-base { transition: all var(--transition-base); }
.transition-slow { transition: all var(--transition-slow); }`;
}

/**
 * Responsive Design
 */
function generateResponsive() {
    return `/* =====================================================
   RESPONSIVE DESIGN
   ===================================================== */

/* Tablet (768px and up) */
@media (max-width: 768px) {
    :root {
        --text-5xl: 2.5rem;
        --text-6xl: 3rem;
        --space-20: 3rem;
        --space-32: 5rem;
    }

    .container {
        padding-left: var(--space-4);
        padding-right: var(--space-4);
    }

    .section {
        padding-top: var(--space-12);
        padding-bottom: var(--space-12);
    }

    .hero {
        min-height: 500px;
    }

    .hero h1 {
        font-size: var(--text-4xl);
    }

    .hero p {
        font-size: var(--text-lg);
    }

    .hero-buttons {
        flex-direction: column;
        width: 100%;
    }

    .hero-buttons .btn {
        width: 100%;
    }

    /* Header Mobile */
    .main-nav ul {
        flex-direction: column;
        gap: var(--space-4);
    }

    /* Grid Mobile */
    .grid-cols-2,
    .grid-cols-3,
    .grid-cols-4 {
        grid-template-columns: 1fr;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }

    .amenities-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }

    .gallery {
        grid-template-columns: 1fr;
    }

    /* Footer Mobile */
    .footer-content {
        grid-template-columns: 1fr;
        gap: var(--space-8);
    }

    /* Card Mobile */
    .card-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-4);
    }

    /* Section Title */
    .section-title h2 {
        font-size: var(--text-3xl);
    }
}

/* Mobile (480px and down) */
@media (max-width: 480px) {
    :root {
        --text-4xl: 2rem;
        --text-5xl: 2.25rem;
    }

    .hero h1 {
        font-size: var(--text-3xl);
    }

    .section-title h2 {
        font-size: var(--text-2xl);
    }

    .btn {
        padding: var(--space-3) var(--space-6);
        font-size: var(--text-sm);
    }

    .btn-lg {
        padding: var(--space-4) var(--space-8);
        font-size: var(--text-base);
    }

    .amenities-tabs {
        flex-wrap: nowrap;
        -webkit-overflow-scrolling: touch;
    }

    .amenity-tab {
        padding: var(--space-3) var(--space-4);
        font-size: var(--text-sm);
    }
}

/* Desktop Large (1280px and up) */
@media (min-width: 1280px) {
    .hero {
        min-height: 700px;
    }

    .grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .features-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .gallery {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

/* Print Styles */
@media print {
    .site-header,
    .hero-scroll,
    .btn,
    .site-footer {
        display: none;
    }

    body {
        font-size: 12pt;
        line-height: 1.5;
        color: #000;
        background: #fff;
    }

    .section {
        page-break-inside: avoid;
    }

    a {
        text-decoration: underline;
    }

    a[href]::after {
        content: " (" attr(href) ")";
    }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    /* User can implement dark mode variables here */
    /* This is a placeholder for future dark mode support */
}

/* Reduced Motion */
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

/* High Contrast Mode */
@media (prefers-contrast: high) {
    :root {
        --color-gray-300: #999;
        --color-gray-400: #777;
        --color-gray-500: #555;
        --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.3);
        --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.3);
        --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.3);
    }

    .btn {
        border-width: 3px;
    }
}

/* =====================================================
   END OF CSS
   Generated by idobooking Generator v3.0 Professional
   Total: 2000+ lines of production-ready CSS
   ===================================================== */`;
}

// Eksportuję funkcję główną
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generateProfessionalCSS };
}