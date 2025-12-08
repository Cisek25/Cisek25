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
        const css = CSSEngine.generate(settings);
        const scripts = this.generateScripts();

        const html = `<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${head}
    <style>${css}</style>
</head>
<body>
    ${body}
    ${scripts}
</body>
</html>`;

        // Write to iframe
        const doc = this.iframe.contentDocument || this.iframe.contentWindow.document;
        doc.open();
        doc.write(html);
        doc.close();
    },

    generateScripts() {
        return `<script>
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
