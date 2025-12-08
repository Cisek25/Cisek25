// ============================================
// AI-ENGINE.JS - Smart matching i content generation
// ============================================

const AIEngine = {

    // ============================================
    // FIND BEST TEMPLATE
    // ============================================
    findBestTemplate(scores) {
        const templateScores = {};

        // Calculate match score for each template
        Object.keys(TEMPLATES).forEach(templateId => {
            const template = TEMPLATES[templateId];
            let matchScore = 0;

            // Match by category
            if (scores.luxury > 3 && template.category === 'luxury') matchScore += 10;
            if (scores.family > 3 && template.category === 'family') matchScore += 10;
            if (scores.budget > 3 && template.category === 'budget') matchScore += 10;
            if (scores.business > 3 && template.category === 'business') matchScore += 10;
            if (scores.romantic > 3 && template.category === 'romantic') matchScore += 10;
            if (scores.eco > 3 && template.category === 'eco') matchScore += 10;
            if (scores.apartments > 3 && template.category === 'apartments') matchScore += 10;

            // Additional scoring based on keywords match
            const wizardAnswers = window.appState?.wizardData?.answers || {};
            template.keywords.forEach(keyword => {
                if (Object.values(wizardAnswers).flat().includes(keyword)) {
                    matchScore += 2;
                }
            });

            // Base score from wizard scoring
            Object.keys(scores).forEach(category => {
                if (template.category === category) {
                    matchScore += scores[category] * 2;
                }
            });

            templateScores[templateId] = matchScore;
        });

        // Find best match
        const sortedTemplates = Object.entries(templateScores)
            .sort((a, b) => b[1] - a[1]);

        const bestTemplateId = sortedTemplates[0][0];
        const confidence = Math.min(sortedTemplates[0][1] / 30, 1); // 0-1 confidence

        return {
            templateId: bestTemplateId,
            template: TEMPLATES[bestTemplateId],
            confidence: confidence,
            alternates: sortedTemplates.slice(1, 4).map(([id]) => TEMPLATES[id])
        };
    },

    // ============================================
    // GENERATE CONTENT
    // ============================================
    generatePropertyName(wizardData) {
        const typeLabels = {
            'hotel-3': 'Hotel',
            'hotel-4': 'Hotel',
            'hotel-5': 'Hotel',
            'pension': 'Pensjonat',
            'hostel': 'Hostel',
            'apartments': 'Apartamenty',
            'resort': 'Resort',
            'bnb': 'B&B',
            'glamping': 'Glamping'
        };

        const locationLabels = {
            'mountains': 'Górski',
            'sea': 'Nadmorski',
            'city': 'Miejski',
            'countryside': 'Wiejski',
            'forest': 'Leśny',
            'lake': 'Nad Jeziorem',
            'spa-town': 'Uzdrowiskowy'
        };

        const type = wizardData.answers['property-type'] || 'hotel-4';
        const location = wizardData.answers['location'] || 'city';

        const typeLabel = typeLabels[type] || 'Hotel';
        const locationLabel = locationLabels[location] || '';

        // Generate creative name
        const names = [
            `${typeLabel} ${locationLabel}`,
            `${typeLabel} Elegance`,
            `${typeLabel} Premium`,
            `${locationLabel} ${typeLabel}`,
        ];

        return names[0];
    },

    generateIntroText(template, propertyName) {
        const intros = {
            luxury: `Witamy w ${propertyName} - ekskluzywnym miejscu, gdzie luksus spotyka się z wyjątkową obsługą. Oferujemy najwyższy standard wypoczynku dla najbardziej wymagających gości.`,
            family: `Witamy w ${propertyName} - ciepłym i przyjaznym miejscu idealnym dla całej rodziny. Oferujemy komfortowy wypoczynek w atmosferze domowej gościnności.`,
            budget: `Witamy w ${propertyName} - nowoczesnym miejscu dla podróżników szukających wygodnego noclegu w świetnej cenie. Poznaj ludzi z całego świata!`,
            business: `Witamy w ${propertyName} - profesjonalnym obiekcie dla podróżujących służbowo. Oferujemy wszystko czego potrzebujesz do efektywnej pracy i odpoczynku.`,
            romantic: `Witamy w ${propertyName} - romantycznym zakątku stworzonym dla par. Przeżyjcie wyjątkowe chwile w niezapomnianej atmosferze.`,
            eco: `Witamy w ${propertyName} - ekologicznym miejscu w zgodzie z naturą. Odpoczywaj świadomie, ciesząc się pięknem przyrody.`,
            apartments: `Witamy w ${propertyName} - nowoczesnych apartamentach z pełnym wyposażeniem. Poczuj się jak w domu, gdziekolwiek jesteś.`,
            historic: `Witamy w ${propertyName} - miejscu z duszą i historią. Przenieś się w czasie, ciesząc się współczesnym komfortem.`
        };

        return intros[template.category] || intros.family;
    },

    generateRoomDescription(roomType, amenities) {
        const typeDescriptions = {
            'standard': 'Przytulny pokój z wszystkim, czego potrzebujesz do komfortowego wypoczynku.',
            'superior': 'Przestronny pokój z dodatkowymi udogodnieniami i pięknym widokiem.',
            'deluxe': 'Elegancki pokój premium z luksusowym wykończeniem i dodatkami.',
            'suite': 'Ekskluzywny apartament z oddzielnym salonem i najwyższym standardem.',
            'apartment': 'W pełni wyposażony apartament z aneksem kuchennym.',
            'dorm': 'Przyjazny dla budżetu pokój wieloosobowy z wygodnymi łóżkami.',
            'family': 'Przestronny pokój idealny dla rodzin z dziećmi.'
        };

        return typeDescriptions[roomType] || typeDescriptions.standard;
    },

    // ============================================
    // COLOR UTILITIES
    // ============================================
    generateComplementaryColors(primaryColor) {
        // Convert hex to HSL
        const hsl = this.hexToHsl(primaryColor);

        // Generate complementary colors
        const secondary = this.hslToHex({
            h: (hsl.h + 40) % 360,
            s: Math.max(hsl.s - 10, 20),
            l: Math.min(hsl.l + 15, 80)
        });

        const accent = this.hslToHex({
            h: (hsl.h + 180) % 360,
            s: hsl.s,
            l: hsl.l
        });

        return { primary: primaryColor, secondary, accent };
    },

    hexToHsl(hex) {
        let r = parseInt(hex.slice(1, 3), 16) / 255;
        let g = parseInt(hex.slice(3, 5), 16) / 255;
        let b = parseInt(hex.slice(5, 7), 16) / 255;

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                case g: h = ((b - r) / d + 2) / 6; break;
                case b: h = ((r - g) / d + 4) / 6; break;
            }
        }

        return { h: h * 360, s: s * 100, l: l * 100 };
    },

    hslToHex({ h, s, l }) {
        s /= 100;
        l /= 100;
        const a = s * Math.min(l, 1 - l);
        const f = n => {
            const k = (n + h / 30) % 12;
            const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
            return Math.round(255 * color).toString(16).padStart(2, '0');
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    },

    // Check color contrast (WCAG)
    checkContrast(color1, color2) {
        const getLuminance = (hex) => {
            const rgb = [
                parseInt(hex.slice(1, 3), 16),
                parseInt(hex.slice(3, 5), 16),
                parseInt(hex.slice(5, 7), 16)
            ].map(c => {
                c /= 255;
                return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
            });
            return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
        };

        const l1 = getLuminance(color1);
        const l2 = getLuminance(color2);
        const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);

        return {
            ratio: ratio.toFixed(2),
            passes: ratio >= 4.5 ? 'AAA' : ratio >= 3 ? 'AA' : 'FAIL'
        };
    }
};

// Expose to window
window.AIEngine = AIEngine;
