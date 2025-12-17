// ============================================
// VISUAL-EFFECTS.JS - Atmospheric visual effects
// ============================================

const VisualEffects = {
    activeEffect: null,
    canvas: null,
    ctx: null,
    animationId: null,
    particles: [],
    intensity: 1.0, // Default intensity

    // Initialize canvas for effects
    init(container) {
        if (this.canvas) {
            this.destroy();
        }

        this.canvas = document.createElement('canvas');
        this.canvas.id = 'visual-effects-canvas';
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        `;

        container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        this.resize();

        window.addEventListener('resize', () => this.resize());
    },

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },

    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
        if (this.canvas && this.canvas.parentNode) {
            this.canvas.parentNode.removeChild(this.canvas);
        }
        this.canvas = null;
        this.ctx = null;
        this.particles = [];
        this.activeEffect = null;
        // Don't reset intensity here to persist user choice
    },

    // Set intensity (0.0 - 2.0)
    setIntensity(value) {
        this.intensity = parseFloat(value);
        // Restart current effect to apply new intensity
        if (this.activeEffect && this.canvas) {
            const current = this.activeEffect;
            const container = this.canvas.parentNode;
            this.start(current, container);
        }
    },

    // Start an effect
    start(effectType, container) {
        this.destroy();

        if (!effectType || effectType === 'none') return;

        this.init(container);
        this.activeEffect = effectType;

        switch (effectType) {
            case 'snow':
                this.initSnow();
                break;
            case 'aurora':
                this.initAurora();
                break;
            case 'rain':
                this.initRain();
                break;
            case 'storm':
                this.initStorm();
                break;
            case 'drizzle':
                this.initDrizzle();
                break;
            case 'sunrays':
                this.initSunrays();
                break;
            case 'leaves':
                this.initLeaves();
                break;
            case 'fireflies':
                this.initFireflies();
                break;
            case 'particles':
                this.initParticles();
                break;
            case 'wind':
                this.initWind();
                break;
        }

        this.animate();
    },

    animate() {
        if (!this.ctx || !this.activeEffect) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        switch (this.activeEffect) {
            case 'snow':
                this.drawSnow();
                break;
            case 'aurora':
                this.drawAurora();
                break;
            case 'rain':
                this.drawRain();
                break;
            case 'storm':
                this.drawStorm();
                break;
            case 'drizzle':
                this.drawDrizzle();
                break;
            case 'sunrays':
                this.drawSunrays();
                break;
            case 'leaves':
                this.drawLeaves();
                break;
            case 'fireflies':
                this.drawFireflies();
                break;
            case 'particles':
                this.drawParticles();
                break;
            case 'wind':
                this.drawWind();
                break;
        }

        this.animationId = requestAnimationFrame(() => this.animate());
    },

    // ============================================
    // SNOW EFFECT ❄️
    // ============================================
    initSnow() {
        this.particles = [];
        const baseCount = Math.floor(this.canvas.width / 8);
        const count = Math.floor(baseCount * this.intensity);

        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 3 + 1,
                speedY: (Math.random() * 1.5 + 0.5) * (0.8 + this.intensity * 0.2), // Faster with higher intensity
                speedX: Math.random() * 0.5 - 0.25,
                opacity: Math.random() * 0.5 + 0.3
            });
        }
    },

    drawSnow() {
        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
            this.ctx.fill();

            // Update position
            p.y += p.speedY;
            p.x += p.speedX + Math.sin(p.y / 50) * 0.5;

            // Reset if off screen
            if (p.y > this.canvas.height) {
                p.y = -10;
                p.x = Math.random() * this.canvas.width;
            }
            if (p.x > this.canvas.width) p.x = 0;
            if (p.x < 0) p.x = this.canvas.width;
        });
    },

    // ============================================
    // AURORA BOREALIS EFFECT 🌌 (Reduced intensity - 50% less)
    // ============================================
    initAurora() {
        this.auroraTime = 0;
        // Much lower opacity for subtle effect
        this.auroraWaves = [
            { color: 'rgba(0, 255, 127, 0.12)', speed: 0.0015, amplitude: 30, offset: 0 },
            { color: 'rgba(138, 43, 226, 0.10)', speed: 0.002, amplitude: 25, offset: 60 },
            { color: 'rgba(0, 191, 255, 0.08)', speed: 0.0018, amplitude: 35, offset: 120 }
        ];
    },

    drawAurora() {
        this.auroraTime += 0.5 * this.intensity; // Slower animation
        const height = this.canvas.height * 0.25; // Smaller coverage area

        this.auroraWaves.forEach(wave => {
            this.ctx.beginPath();
            this.ctx.moveTo(0, height);

            for (let x = 0; x <= this.canvas.width; x += 8) { // Smoother curves
                const y = height +
                    Math.sin((x + this.auroraTime * wave.speed * 80) * 0.008) * wave.amplitude +
                    Math.sin((x + this.auroraTime * wave.speed * 40) * 0.015) * (wave.amplitude / 3) +
                    wave.offset;
                this.ctx.lineTo(x, y);
            }

            this.ctx.lineTo(this.canvas.width, 0);
            this.ctx.lineTo(0, 0);
            this.ctx.closePath();

            const gradient = this.ctx.createLinearGradient(0, 0, 0, height + 60);
            gradient.addColorStop(0, 'rgba(0,0,0,0)');
            gradient.addColorStop(0.4, wave.color);
            gradient.addColorStop(1, 'rgba(0,0,0,0)');

            this.ctx.fillStyle = gradient;
            this.ctx.fill();
        });
    },

    // ============================================
    // RAIN EFFECT 🌧️
    // ============================================
    initRain() {
        this.particles = [];
        const baseCount = Math.floor(this.canvas.width / 4);
        const count = Math.floor(baseCount * this.intensity);

        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                length: Math.random() * 20 + 10,
                speedY: (Math.random() * 10 + 15) * (0.8 + this.intensity * 0.2),
                speedX: -2,
                opacity: Math.random() * 0.3 + 0.1
            });
        }
    },

    drawRain() {
        this.ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
        this.ctx.lineWidth = 1;

        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p.x + p.speedX, p.y + p.length);
            this.ctx.globalAlpha = p.opacity;
            this.ctx.stroke();

            p.y += p.speedY;
            p.x += p.speedX;

            if (p.y > this.canvas.height) {
                p.y = -p.length;
                p.x = Math.random() * (this.canvas.width + 200);
            }
        });
        this.ctx.globalAlpha = 1;
    },

    // ============================================
    // STORM EFFECT ⛈️ (Localized lightning, no full-screen flash)
    // ============================================
    initStorm() {
        this.initRain();
        this.lightningTimer = 0;
        this.nextLightning = Math.random() * 300 + 100;
    },

    drawStorm() {
        this.drawRain();

        this.lightningTimer++;
        if (this.lightningTimer > this.nextLightning) {
            this.triggerLightning();
            this.lightningTimer = 0;
            this.nextLightning = (Math.random() * 400 + 200) / this.intensity;
        }
    },

    triggerLightning() {
        // Draw lightning bolt without full screen flash
        const startX = Math.random() * this.canvas.width;
        const startY = 0;

        this.ctx.beginPath();
        this.ctx.moveTo(startX, startY);

        let x = startX;
        let y = startY;

        while (y < this.canvas.height) {
            x += (Math.random() - 0.5) * 50;
            y += Math.random() * 20 + 10;
            this.ctx.lineTo(x, y);
        }

        this.ctx.strokeStyle = `rgba(255, 255, 255, ${0.4 + Math.random() * 0.4})`;
        this.ctx.lineWidth = 2 + Math.random() * 3;
        this.ctx.shadowBlur = 20;
        this.ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        this.ctx.stroke();

        // Reset shadow
        this.ctx.shadowBlur = 0;

        // Subtle sky flash (very low opacity)
        this.ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.random() * 0.1})`;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },

    // ============================================
    // DRIZZLE / MIST EFFECT 🌫️ (More visible particles)
    // ============================================
    initDrizzle() {
        this.particles = [];
        // More particles for better visibility
        const baseCount = Math.floor(this.canvas.width / 4);
        const count = Math.floor(baseCount * this.intensity);

        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 2 + 1, // Larger particles
                speedY: Math.random() * 2.5 + 1.5,
                speedX: Math.random() * 0.8 - 0.4,
                opacity: Math.random() * 0.4 + 0.3 // Higher opacity for visibility
            });
        }

        this.fogOpacity = 0;
    },

    drawDrizzle() {
        // Draw subtle fog layer
        this.fogOpacity = (0.1 + Math.sin(Date.now() / 3000) * 0.03) * this.intensity;
        const fogGradient = this.ctx.createLinearGradient(0, this.canvas.height * 0.5, 0, this.canvas.height);
        fogGradient.addColorStop(0, 'rgba(180, 190, 200, 0)');
        fogGradient.addColorStop(0.5, `rgba(180, 190, 200, ${Math.min(this.fogOpacity, 0.25)})`);
        fogGradient.addColorStop(1, `rgba(160, 170, 180, ${Math.min(this.fogOpacity * 1.5, 0.35)})`);
        this.ctx.fillStyle = fogGradient;
        this.ctx.fillRect(0, this.canvas.height * 0.4, this.canvas.width, this.canvas.height * 0.6);

        // Draw more visible drizzle drops
        this.particles.forEach(p => {
            // Draw elongated drops with glow
            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
            gradient.addColorStop(0, `rgba(200, 215, 235, ${p.opacity})`);
            gradient.addColorStop(1, 'rgba(200, 215, 235, 0)');

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.ellipse(p.x, p.y, p.radius, p.radius * 4, 0, 0, Math.PI * 2);
            this.ctx.fill();

            // Core drop (brighter)
            this.ctx.fillStyle = `rgba(220, 230, 245, ${p.opacity * 0.8})`;
            this.ctx.beginPath();
            this.ctx.ellipse(p.x, p.y, p.radius * 0.5, p.radius * 2, 0, 0, Math.PI * 2);
            this.ctx.fill();

            p.y += p.speedY;
            p.x += p.speedX;

            if (p.y > this.canvas.height) {
                p.y = -10;
                p.x = Math.random() * this.canvas.width;
            }
        });
    },

    // ============================================
    // SUNRAYS EFFECT ☀️ (God Rays - Subtle, Angled, No Orb)
    // ============================================
    initSunrays() {
        this.rays = [];
        const rayCount = 5;
        // Create wide, subtle beams
        for (let i = 0; i < rayCount; i++) {
            this.rays.push({
                x: this.canvas.width * 0.8 + (Math.random() * 200 - 100), // Top right area
                y: -100,
                angle: Math.PI / 3 + (Math.random() * 0.2 - 0.1), // Angled down-left
                width: Math.random() * 150 + 100,
                length: this.canvas.height * 1.5,
                alpha: Math.random() * 0.15 + 0.05,
                speed: Math.random() * 0.002 + 0.001
            });
        }
        this.sunTime = 0;
    },

    drawSunrays() {
        this.sunTime += 0.01;

        // 1. Warm overlay gradient (top-right corner)
        const overlayGrad = this.ctx.createLinearGradient(
            this.canvas.width, 0,
            this.canvas.width * 0.5, this.canvas.height * 0.5
        );
        overlayGrad.addColorStop(0, `rgba(255, 240, 200, ${0.15 * this.intensity})`);
        overlayGrad.addColorStop(1, 'rgba(255, 240, 200, 0)');

        this.ctx.fillStyle = overlayGrad;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // 2. Draw Rays
        this.ctx.save();
        this.rays.forEach((ray, i) => {
            // Pulse opacity slightly
            const currentAlpha = ray.alpha + Math.sin(this.sunTime + i) * 0.02;

            // Create ray gradient
            const rayGrad = this.ctx.createLinearGradient(
                0, 0,
                Math.cos(ray.angle) * ray.width, Math.sin(ray.angle) * ray.length
            );
            rayGrad.addColorStop(0, `rgba(255, 250, 220, ${Math.max(0, currentAlpha * this.intensity)})`);
            rayGrad.addColorStop(0.4, `rgba(255, 250, 220, ${Math.max(0, currentAlpha * 0.5 * this.intensity)})`);
            rayGrad.addColorStop(1, 'rgba(255, 250, 220, 0)');

            this.ctx.translate(ray.x, ray.y);
            this.ctx.rotate(ray.angle);

            this.ctx.fillStyle = rayGrad;
            this.ctx.fillRect(-ray.width / 2, 0, ray.width, ray.length);

            // Reset transform for next ray
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);

            // Move ray slightly
            ray.x += Math.cos(this.sunTime * ray.speed) * 0.5;
        });
        this.ctx.restore();
    },

    // ============================================
    // WIND EFFECT 🌬️
    // ============================================
    initWind() {
        this.particles = [];
        const baseCount = 50;
        const count = Math.floor(baseCount * this.intensity);

        for (let i = 0; i < count; i++) {
            this.prepareWindParticle({});
        }
    },

    prepareWindParticle(p) {
        p.x = Math.random() * this.canvas.width;
        p.y = Math.random() * this.canvas.height;
        p.length = Math.random() * 100 + 50;
        p.speed = (Math.random() * 15 + 10) * (0.8 + this.intensity * 0.2);
        p.opacity = Math.random() * 0.2 + 0.05;
        p.thickness = Math.random() > 0.9 ? 2 : 1; // Occasional thicker lines

        // Start randomly offscreen left sometimes
        if (Math.random() > 0.5) p.x = -p.length;

        return p;
    },

    drawWind() {
        this.particles.forEach(p => {
            if (!p.x) this.prepareWindParticle(p);

            const gradient = this.ctx.createLinearGradient(p.x, p.y, p.x + p.length, p.y);
            gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
            gradient.addColorStop(0.5, `rgba(255, 255, 255, ${p.opacity})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

            this.ctx.fillStyle = gradient; // Using fillRect for lines usually better for performance than stroke with gradient sometimes, but stroke is fine.
            // Let's use stroke for lines
            this.ctx.beginPath();
            this.ctx.moveTo(p.x, p.y);
            this.ctx.lineTo(p.x + p.length, p.y);
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = p.thickness;
            this.ctx.stroke();

            // Update
            p.x += p.speed;

            // Simulation of wind gusts - slight Y movement
            p.y += Math.sin(Date.now() / 500 + p.x / 100) * 0.5;

            // Reset
            if (p.x > this.canvas.width) {
                p.x = -p.length - Math.random() * 100;
                p.y = Math.random() * this.canvas.height;
            }
        });
    },

    // ============================================
    // FALLING LEAVES EFFECT 🍂
    // ============================================
    initLeaves() {
        this.particles = [];
        const baseCount = 30;
        const count = Math.floor(baseCount * this.intensity);

        const colors = ['#D2691E', '#FF8C00', '#B8860B', '#CD853F', '#8B4513'];

        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height - this.canvas.height,
                size: Math.random() * 15 + 10,
                speedY: (Math.random() * 1 + 0.5) * this.intensity,
                speedX: Math.random() * 2 - 1,
                rotation: Math.random() * Math.PI * 2,
                rotationSpeed: (Math.random() - 0.5) * 0.05,
                oscillation: Math.random() * Math.PI * 2,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    },

    drawLeaves() {
        this.particles.forEach(p => {
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.rotation);

            // Draw leaf shape
            this.ctx.beginPath();
            this.ctx.moveTo(0, -p.size / 2);
            this.ctx.bezierCurveTo(
                p.size / 2, -p.size / 4,
                p.size / 2, p.size / 4,
                0, p.size / 2
            );
            this.ctx.bezierCurveTo(
                -p.size / 2, p.size / 4,
                -p.size / 2, -p.size / 4,
                0, -p.size / 2
            );

            this.ctx.fillStyle = p.color;
            this.ctx.fill();

            // Leaf vein
            this.ctx.beginPath();
            this.ctx.moveTo(0, -p.size / 2);
            this.ctx.lineTo(0, p.size / 2);
            this.ctx.strokeStyle = 'rgba(0,0,0,0.2)';
            this.ctx.lineWidth = 1;
            this.ctx.stroke();

            this.ctx.restore();

            // Update
            p.y += p.speedY;
            p.x += p.speedX + Math.sin(p.oscillation) * 0.5;
            p.rotation += p.rotationSpeed;
            p.oscillation += 0.02;

            if (p.y > this.canvas.height + p.size) {
                p.y = -p.size;
                p.x = Math.random() * this.canvas.width;
            }
        });
    },

    // ============================================
    // FIREFLIES EFFECT 🌟
    // ============================================
    initFireflies() {
        this.particles = [];
        const baseCount = 40;
        const count = Math.floor(baseCount * this.intensity);

        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 3 + 2,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                phase: Math.random() * Math.PI * 2,
                glowSpeed: Math.random() * 0.03 + 0.02
            });
        }
    },

    drawFireflies() {
        this.particles.forEach(p => {
            const glow = (Math.sin(p.phase) + 1) / 2;

            // Outer glow
            const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
            gradient.addColorStop(0, `rgba(255, 255, 100, ${glow * 0.8})`);
            gradient.addColorStop(0.5, `rgba(200, 255, 100, ${glow * 0.3})`);
            gradient.addColorStop(1, 'rgba(200, 255, 100, 0)');

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();

            // Core
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 200, ${glow})`;
            this.ctx.fill();

            // Update
            p.x += p.speedX;
            p.y += p.speedY;
            p.phase += p.glowSpeed;

            // Gentle direction changes
            if (Math.random() < 0.02) {
                p.speedX = (Math.random() - 0.5) * 0.5;
                p.speedY = (Math.random() - 0.5) * 0.5;
            }

            // Boundary check
            if (p.x < 0 || p.x > this.canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.speedY *= -1;
        });
    },

    // ============================================
    // FLOATING PARTICLES EFFECT ✨
    // ============================================
    initParticles() {
        this.particles = [];
        const baseCount = 60;
        const count = Math.floor(baseCount * this.intensity);

        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 2 + 1,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: -Math.random() * 0.5 - 0.2,
                opacity: Math.random() * 0.5 + 0.2,
                color: `hsl(${Math.random() * 60 + 200}, 70%, 70%)`
            });
        }
    },

    drawParticles() {
        this.particles.forEach(p => {
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.globalAlpha = p.opacity;
            this.ctx.fill();

            p.x += p.speedX + Math.sin(p.y / 30) * 0.2;
            p.y += p.speedY;

            if (p.y < -10) {
                p.y = this.canvas.height + 10;
                p.x = Math.random() * this.canvas.width;
            }
        });
        this.ctx.globalAlpha = 1;
    },

    // ============================================
    // GENERATE CSS FOR EFFECTS
    // ============================================
    generateCSS(effectType) {
        if (!effectType || effectType === 'none') return '';

        const overlayCSS = `
/* Atmospheric Effect Overlay */
.atmospheric-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
}
`;

        switch (effectType) {
            case 'snow':
                return overlayCSS + `
/* Snow Effect - CSS Fallback */
@keyframes snowfall {
    0% { transform: translateY(-100vh) rotate(0deg); }
    100% { transform: translateY(100vh) rotate(360deg); }
}
`;
            case 'aurora':
                return overlayCSS + `
/* Aurora Borealis Effect */
.aurora-container {
    background: linear-gradient(180deg, 
        rgba(0,0,20,0.8) 0%,
        rgba(0,50,100,0.3) 30%,
        rgba(0,100,50,0.2) 50%,
        rgba(100,0,150,0.2) 70%,
        transparent 100%
    );
    animation: aurora-pulse 8s ease-in-out infinite;
}

@keyframes aurora-pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
}
`;
            case 'storm':
                return overlayCSS + `
/* Storm Flash Effect */
@keyframes lightning {
    0%, 95% { opacity: 0; }
    96% { opacity: 0.8; }
    97% { opacity: 0; }
    98% { opacity: 0.5; }
    100% { opacity: 0; }
}
`;
            default:
                return overlayCSS;
        }
    }
};

// Expose to window
window.VisualEffects = VisualEffects;
