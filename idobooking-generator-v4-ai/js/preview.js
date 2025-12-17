// ============================================
// PREVIEW.JS - Live preview w iframe
// ============================================

const Preview = {
    iframe: null,
    currentView: 'desktop',

    init() {
        this.iframe = document.getElementById('preview-iframe');
        this.setupViewControls();
        this.render();
    },

    setupViewControls() {
        document.querySelectorAll('.preview-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.preview-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                this.currentView = btn.dataset.view;
                this.updateViewport();
            });
        });
    },

    updateViewport() {
        const frame = document.getElementById('preview-frame');

        switch (this.currentView) {
            case 'mobile':
                frame.style.maxWidth = '375px';
                frame.style.margin = '0 auto';
                break;
            case 'tablet':
                frame.style.maxWidth = '768px';
                frame.style.margin = '0 auto';
                break;
            default:
                frame.style.maxWidth = '100%';
                frame.style.margin = '0';
        }
    },

    render() {
        if (!this.iframe) return;

        const settings = window.appState?.globalSettings || {};
        const objects = window.appState?.objects || [];
        const enabledSections = window.appState?.enabledSections || ['intro', 'rooms', 'amenities', 'cta'];

        // Generate HTML
        const head = TemplateEngine.generateHead(settings);
        const body = TemplateEngine.generateSections(settings, objects, enabledSections);
        const effectsSettings = window.appState?.effectsSettings || {};
        const sectionBackgrounds = window.appState?.sectionBackgrounds || {};
        const css = CSSEngine.generate(settings, effectsSettings, sectionBackgrounds);
        const scripts = this.generateScripts();

        // Generate atmospheric effects script
        const atmosphericEffect = effectsSettings.atmosphericEffect || 'none';
        const atmosphericScript = this.generateAtmosphericScript(atmosphericEffect);

        const html = `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${head}
    <style>${css}</style>
    <style>
    #atmospheric-canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    }
    </style>
</head>
<body>
    <canvas id="atmospheric-canvas"></canvas>
    ${body}
    ${scripts}
    ${atmosphericScript}
</body>
</html>`;

        // Write to iframe
        const doc = this.iframe.contentDocument || this.iframe.contentWindow.document;
        doc.open();
        doc.write(html);
        doc.close();
    },

    generateAtmosphericScript(effectType) {
        if (!effectType || effectType === 'none') {
            return '<script>document.getElementById("atmospheric-canvas").style.display="none";</script>';
        }

        return `<script>
(function() {
    var canvas = document.getElementById('atmospheric-canvas');
    var ctx = canvas.getContext('2d');
    var particles = [];
    var animId = null;
    var auroraTime = 0;
    var sunTime = 0;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    
    // Initialize particles based on effect type
    var effect = '${effectType}';
    
    if (effect === 'snow') {
        for (var i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 3 + 1,
                sy: Math.random() * 1.5 + 0.5,
                sx: Math.random() * 0.5 - 0.25,
                o: Math.random() * 0.5 + 0.3
            });
        }
    } else if (effect === 'rain') {
        for (var i = 0; i < 150; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                len: Math.random() * 20 + 10,
                sy: Math.random() * 10 + 15,
                o: Math.random() * 0.3 + 0.2
            });
        }
    } else if (effect === 'drizzle') {
        for (var i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1 + 0.5,
                sy: Math.random() * 2 + 1,
                o: Math.random() * 0.2 + 0.1
            });
        }
    } else if (effect === 'leaves') {
        var colors = ['#D2691E', '#FF8C00', '#B8860B', '#CD853F', '#8B4513'];
        for (var i = 0; i < 25; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                size: Math.random() * 15 + 10,
                sy: Math.random() * 1 + 0.5,
                sx: Math.random() * 2 - 1,
                rot: Math.random() * Math.PI * 2,
                rotS: (Math.random() - 0.5) * 0.05,
                osc: Math.random() * Math.PI * 2,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    } else if (effect === 'fireflies') {
        for (var i = 0; i < 30; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 3 + 2,
                sx: (Math.random() - 0.5) * 0.5,
                sy: (Math.random() - 0.5) * 0.5,
                phase: Math.random() * Math.PI * 2,
                gs: Math.random() * 0.03 + 0.02
            });
        }
    } else if (effect === 'wind') {
        for (var i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                len: Math.random() * 100 + 50,
                speed: (Math.random() * 15 + 10),
                o: Math.random() * 0.2 + 0.05,
                thickness: Math.random() > 0.9 ? 2 : 1
            });
            if (Math.random() > 0.5) particles[i].x = -particles[i].len;
        }
    } else if (effect === 'storm') {
        for (var i = 0; i < 300; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                len: Math.random() * 30 + 15,
                sy: Math.random() * 15 + 20,
                o: Math.random() * 0.3 + 0.2
            });
        }
    } else if (effect === 'particles') {
        for (var i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2 + 1,
                sx: (Math.random() - 0.5) * 0.3,
                sy: -Math.random() * 0.5 - 0.2,
                o: Math.random() * 0.5 + 0.2,
                hue: Math.random() * 60 + 200
            });
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (effect === 'snow') {
            particles.forEach(function(p) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255,255,255,' + p.o + ')';
                ctx.fill();
                p.y += p.sy;
                p.x += p.sx + Math.sin(p.y / 50) * 0.5;
                if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; }
                if (p.x > canvas.width) p.x = 0;
                if (p.x < 0) p.x = canvas.width;
            });
        } else if (effect === 'aurora') {
            auroraTime++;
            var h = canvas.height * 0.4;
            var waves = [
                {color: 'rgba(0,255,127,0.3)', speed: 0.002, amp: 50, off: 0},
                {color: 'rgba(138,43,226,0.25)', speed: 0.003, amp: 40, off: 100},
                {color: 'rgba(0,191,255,0.2)', speed: 0.0025, amp: 60, off: 200}
            ];
            waves.forEach(function(w) {
                ctx.beginPath();
                ctx.moveTo(0, h);
                for (var x = 0; x <= canvas.width; x += 5) {
                    var y = h + Math.sin((x + auroraTime * w.speed * 100) * 0.01) * w.amp +
                            Math.sin((x + auroraTime * w.speed * 50) * 0.02) * (w.amp / 2) + w.off;
                    ctx.lineTo(x, y);
                }
                ctx.lineTo(canvas.width, 0);
                ctx.lineTo(0, 0);
                ctx.closePath();
                var grad = ctx.createLinearGradient(0, 0, 0, h + 100);
                grad.addColorStop(0, 'rgba(0,0,0,0)');
                grad.addColorStop(0.5, w.color);
                grad.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = grad;
                ctx.fill();
            });
        } else if (effect === 'rain') {
            ctx.strokeStyle = 'rgba(174,194,224,0.5)';
            ctx.lineWidth = 1;
            particles.forEach(function(p) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x - 2, p.y + p.len);
                ctx.globalAlpha = p.o;
                ctx.stroke();
                p.y += p.sy;
                p.x -= 2;
                if (p.y > canvas.height) { p.y = -p.len; p.x = Math.random() * (canvas.width + 200); }
            });
            ctx.globalAlpha = 1;
        } else if (effect === 'drizzle') {
            var fogO = 0.15 + Math.sin(Date.now() / 2000) * 0.05;
            ctx.fillStyle = 'rgba(200,210,220,' + fogO + ')';
            ctx.fillRect(0, canvas.height * 0.6, canvas.width, canvas.height * 0.4);
            ctx.fillStyle = 'rgba(174,194,224,0.4)';
            particles.forEach(function(p) {
                ctx.beginPath();
                ctx.ellipse(p.x, p.y, p.r, p.r * 3, 0, 0, Math.PI * 2);
                ctx.globalAlpha = p.o;
                ctx.fill();
                p.y += p.sy;
                if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; }
            });
            ctx.globalAlpha = 1;
        } else if (effect === 'sunrays') {
            sunTime++;
            var cx = canvas.width * 0.85;
            var cy = canvas.height * 0.15;
            var grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 150);
            grad.addColorStop(0, 'rgba(255,223,100,0.4)');
            grad.addColorStop(0.5, 'rgba(255,180,50,0.2)');
            grad.addColorStop(1, 'rgba(255,180,50,0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(cx, cy, 150, 0, Math.PI * 2);
            ctx.fill();
            for (var i = 0; i < 12; i++) {
                var angle = (i / 12) * Math.PI * 2 + sunTime * 0.001;
                var len = 200 + Math.random() * 150;
                var x1 = cx + Math.cos(angle) * 50;
                var y1 = cy + Math.sin(angle) * 50;
                var x2 = cx + Math.cos(angle) * len;
                var y2 = cy + Math.sin(angle) * len;
                var rg = ctx.createLinearGradient(x1, y1, x2, y2);
                rg.addColorStop(0, 'rgba(255,223,100,0.15)');
                rg.addColorStop(1, 'rgba(255,223,100,0)');
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.lineWidth = 25;
                ctx.strokeStyle = rg;
                ctx.lineCap = 'round';
                ctx.stroke();
            }
        } else if (effect === 'leaves') {
            particles.forEach(function(p) {
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.beginPath();
                ctx.moveTo(0, -p.size / 2);
                ctx.bezierCurveTo(p.size/2, -p.size/4, p.size/2, p.size/4, 0, p.size/2);
                ctx.bezierCurveTo(-p.size/2, p.size/4, -p.size/2, -p.size/4, 0, -p.size/2);
                ctx.fillStyle = p.color;
                ctx.fill();
                ctx.restore();
                p.y += p.sy;
                p.x += p.sx + Math.sin(p.osc) * 0.5;
                p.rot += p.rotS;
                p.osc += 0.02;
                if (p.y > canvas.height + p.size) { p.y = -p.size; p.x = Math.random() * canvas.width; }
            });
        } else if (effect === 'fireflies') {
            particles.forEach(function(p) {
                var glow = (Math.sin(p.phase) + 1) / 2;
                var grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
                grad.addColorStop(0, 'rgba(255,255,100,' + (glow * 0.8) + ')');
                grad.addColorStop(0.5, 'rgba(200,255,100,' + (glow * 0.3) + ')');
                grad.addColorStop(1, 'rgba(200,255,100,0)');
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255,255,200,' + glow + ')';
                ctx.fill();
                p.x += p.sx;
                p.y += p.sy;
                p.phase += p.gs;
                if (Math.random() < 0.02) { p.sx = (Math.random() - 0.5) * 0.5; p.sy = (Math.random() - 0.5) * 0.5; }
                if (p.x < 0 || p.x > canvas.width) p.sx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.sy *= -1;
            });
        } else if (effect === 'wind') {
        particles.forEach(function(p) {
            var grad = ctx.createLinearGradient(p.x, p.y, p.x + p.len, p.y);
            grad.addColorStop(0, 'rgba(255,255,255,0)');
            grad.addColorStop(0.5, 'rgba(255,255,255,' + p.o + ')');
            grad.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = grad; // Use fill since strokeStyle with gradient can be tricky in some contexts, but usually OK.
            // Actually reusing visual-effects approach: stroke
            ctx.strokeStyle = grad;
            ctx.lineWidth = p.thickness;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x + p.len, p.y);
            ctx.stroke();
            
            p.x += p.speed;
            p.y += Math.sin(Date.now() / 500 + p.x / 100) * 0.5;
            if (p.x > canvas.width) {
                p.x = -p.len - Math.random() * 100;
                p.y = Math.random() * canvas.height;
            }
        });
    } else if (effect === 'storm') {
        // Lightning
        if (Math.random() < 0.02) {
            ctx.fillStyle = 'rgba(255, 255, 255, ' + (Math.random() * 0.3 + 0.1) + ')';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        // Rain
        ctx.strokeStyle = 'rgba(150,170,200,0.6)';
        ctx.lineWidth = 1;
        particles.forEach(function(p) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x - 5, p.y + p.len);
            ctx.globalAlpha = p.o;
            ctx.stroke();
            p.y += p.sy;
            p.x -= 5;
            if (p.y > canvas.height) { p.y = -p.len; p.x = Math.random() * (canvas.width + 200); }
        });
        ctx.globalAlpha = 1;
    } else if (effect === 'particles') {
            particles.forEach(function(p) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = 'hsla(' + p.hue + ',70%,70%,' + p.o + ')';
                ctx.fill();
                p.x += p.sx + Math.sin(p.y / 30) * 0.2;
                p.y += p.sy;
                if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
            });
        }
        
        animId = requestAnimationFrame(animate);
    }
    
    animate();
})();
<\/script>`;
    },


    generateScripts() {
        return `<script>
// Lightbox functions
function openLightbox(element) {
    var img = element.querySelector('img');
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
});

// Room Slider functions - INFINITE SCROLL
var currentSlide = 0;
var isTransitioning = false;

function slideRooms(direction) {
    if (isTransitioning) return; // Prevent multiple clicks during transition
    
    var track = document.querySelector('.rooms-slider-track');
    var cards = document.querySelectorAll('.rooms-slider .room-card');
    var dots = document.querySelectorAll('.slider-dot');
    
    if (!track || !cards.length) return;
    
    var totalRooms = parseInt(track.dataset.totalRooms) || cards.length;
    var cloneCount = parseInt(track.dataset.cloneCount) || 0;
    
    isTransitioning = true;
    currentSlide += direction;
    
    updateSliderPosition(track, cards, dots, totalRooms, cloneCount, true);
}

function goToSlide(index) {
    var track = document.querySelector('.rooms-slider-track');
    var cards = document.querySelectorAll('.rooms-slider .room-card');
    var dots = document.querySelectorAll('.slider-dot');
    
    if (!track || !cards.length) return;
    
    var totalRooms = parseInt(track.dataset.totalRooms) || cards.length;
    var cloneCount = parseInt(track.dataset.cloneCount) || 0;
    
    currentSlide = cloneCount + index; // Account for clones at start
    updateSliderPosition(track, cards, dots, totalRooms, cloneCount, true);
}

function updateSliderPosition(track, cards, dots, totalRooms, cloneCount, animate) {
    var cardWidth = cards[0].offsetWidth;
    var gap = 32;
    var offset = -(currentSlide * (cardWidth + gap));
    
    // Apply transition if animating
    if (animate) {
        track.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
        track.style.transition = 'none';
    }
    
    track.style.transform = 'translateX(' + offset + 'px)';
    
    // Handle infinite loop - reset position after animation
    if (animate) {
        setTimeout(function() {
            var needsReset = false;
            var newPosition = currentSlide;
            
            // If we're at or past the end clones, jump back to real start
            if (currentSlide >= cloneCount + totalRooms) {
                newPosition = cloneCount;
                needsReset = true;
            }
            // If we're at or before the start clones, jump to real end
            else if (currentSlide < cloneCount) {
                newPosition = cloneCount + totalRooms - 1;
                needsReset = true;
            }
            
            if (needsReset) {
                currentSlide = newPosition;
                updateSliderPosition(track, cards, dots, totalRooms, cloneCount, false);
            }
            
            isTransitioning = false;
        }, 400); // Match transition duration
    }
    
    // Update dots (only for real slides, not clones)
    var realIndex = ((currentSlide - cloneCount) % totalRooms + totalRooms) % totalRooms;
    dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === realIndex);
    });
}

// Initialize slider position on load
document.addEventListener('DOMContentLoaded', function() {
    var track = document.querySelector('.rooms-slider-track');
    if (track) {
        var cards = document.querySelectorAll('.rooms-slider .room-card');
        var dots = document.querySelectorAll('.slider-dot');
        var cloneCount = parseInt(track.dataset.cloneCount) || 0;
        var totalRooms = parseInt(track.dataset.totalRooms) || cards.length;
        
        // Start at first real slide (after clones)
        currentSlide = cloneCount;
        updateSliderPosition(track, cards, dots, totalRooms, cloneCount, false);
    }
});


</script>`;
    },

    // Debounced render for performance
    debouncedRender: (function () {
        let timeout;
        return function () {
            clearTimeout(timeout);
            timeout = setTimeout(() => Preview.render(), 300);
        };
    })()
};

// Expose to window
window.Preview = Preview;
