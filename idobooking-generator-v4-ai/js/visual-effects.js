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
        if (this.intensity > 1.2) {
            this.ctx.lineWidth = 2;
        }
        this.lightningTimer = 0;
        this.nextLightning = Math.random() * 400 + 200;
        this.isFlashing = false;
        this.flashOpacity = 0;
        this.lightningX = 0;
        this.lightningY = 0;
    },

    drawStorm() {
        this.drawRain();

        // Localized lightning - only flashes a small area, not the entire screen
        this.lightningTimer++;
        if (this.lightningTimer > this.nextLightning) {
            this.isFlashing = true;
            this.flashOpacity = 0.6 * (Math.min(this.intensity, 1.0));
            this.lightningTimer = 0;
            this.nextLightning = (Math.random() * 800 + 500) / this.intensity;
            // Random position for localized flash
            this.lightningX = Math.random() * this.canvas.width;
            this.lightningY = 0;
        }

        if (this.isFlashing) {
            // Draw localized lightning bolt area instead of full screen flash
            const lightningRadius = 200 + Math.random() * 100;
            const gradient = this.ctx.createRadialGradient(
                this.lightningX, this.lightningY, 0,
                this.lightningX, this.lightningY + 150, lightningRadius
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${this.flashOpacity})`);
            gradient.addColorStop(0.3, `rgba(200, 200, 255, ${this.flashOpacity * 0.5})`);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            // Draw lightning bolt line
            if (this.flashOpacity > 0.3) {
                this.ctx.beginPath();
                this.ctx.moveTo(this.lightningX, 0);
                let y = 0;
                while (y < this.canvas.height * 0.6) {
                    y += 20 + Math.random() * 30;
                    const offsetX = (Math.random() - 0.5) * 40;
                    this.ctx.lineTo(this.lightningX + offsetX, y);
                }
                this.ctx.strokeStyle = `rgba(255, 255, 255, ${this.flashOpacity})`;
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
            }

            this.flashOpacity -= 0.05;
            if (this.flashOpacity <= 0) {
                this.isFlashing = false;
            }
        }
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
    // SUNRAYS EFFECT ☀️ (Subtle edge glow instead of explicit sun)
    // ============================================
    initSunrays() {
        this.sunTime = 0;
        this.edgeGlows = [
            { side: 'top', offset: 0, intensity: 0.15 },
            { side: 'top-right', offset: 0, intensity: 0.2 },
            { side: 'right', offset: 0, intensity: 0.1 }
        ];
    },

    drawSunrays() {
        this.sunTime += 1;
        
        // Subtle pulsing brightness animation
        const pulse = (Math.sin(this.sunTime * 0.02) + 1) / 2;
        const baseOpacity = 0.08 + pulse * 0.04;
        
        // Top edge warm glow
        const topGradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height * 0.3);
        topGradient.addColorStop(0, `rgba(255, 240, 200, ${baseOpacity * this.intensity})`);
        topGradient.addColorStop(0.3, `rgba(255, 220, 150, ${baseOpacity * 0.5 * this.intensity})`);
        topGradient.addColorStop(1, 'rgba(255, 200, 100, 0)');
        this.ctx.fillStyle = topGradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height * 0.4);
        
        // Right edge warm glow  
        const rightGradient = this.ctx.createLinearGradient(this.canvas.width, 0, this.canvas.width * 0.7, 0);
        rightGradient.addColorStop(0, `rgba(255, 230, 180, ${baseOpacity * 0.8 * this.intensity})`);
        rightGradient.addColorStop(0.4, `rgba(255, 210, 140, ${baseOpacity * 0.3 * this.intensity})`);
        rightGradient.addColorStop(1, 'rgba(255, 200, 100, 0)');
        this.ctx.fillStyle = rightGradient;
        this.ctx.fillRect(this.canvas.width * 0.6, 0, this.canvas.width * 0.4, this.canvas.height * 0.5);
        
        // Subtle corner brightening (top-right corner)
        const cornerGradient = this.ctx.createRadialGradient(
            this.canvas.width, 0, 0,
            this.canvas.width, 0, this.canvas.width * 0.5
        );
        cornerGradient.addColorStop(0, `rgba(255, 245, 220, ${baseOpacity * 1.2 * this.intensity})`);
        cornerGradient.addColorStop(0.3, `rgba(255, 230, 180, ${baseOpacity * 0.5 * this.intensity})`);
        cornerGradient.addColorStop(1, 'rgba(255, 220, 150, 0)');
        this.ctx.fillStyle = cornerGradient;
        this.ctx.beginPath();
        this.ctx.arc(this.canvas.width, 0, this.canvas.width * 0.5, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Very subtle floating light particles
        const particleCount = Math.floor(5 * this.intensity);
        for (let i = 0; i < particleCount; i++) {
            const x = this.canvas.width * 0.7 + Math.sin(this.sunTime * 0.01 + i) * 100;
            const y = this.canvas.height * 0.1 + Math.cos(this.sunTime * 0.015 + i * 2) * 50 + i * 30;
            const size = 3 + Math.sin(this.sunTime * 0.03 + i) * 2;
            const opacity = 0.15 + Math.sin(this.sunTime * 0.02 + i) * 0.1;
            
            const particleGradient = this.ctx.createRadialGradient(x, y, 0, x, y, size * 3);
            particleGradient.addColorStop(0, `rgba(255, 250, 220, ${opacity * this.intensity})`);
            particleGradient.addColorStop(1, 'rgba(255, 240, 200, 0)');
            this.ctx.fillStyle = particleGradient;
            this.ctx.beginPath();
            this.ctx.arc(x, y, size * 3, 0, Math.PI * 2);
            this.ctx.fill();
        }
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
