// ============================================
// PENSJONAT POD JODŁAMI - GLOBALNY SKRYPT
// ============================================

(function() {
    'use strict';

    console.log('🏔️ Pensjonat Pod Jodłami - skrypt załadowany');

    // Smooth scroll dla linków
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animacja pojawiania się elementów przy scrollu
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .about-wrapper, .experience-card, .package-card').forEach(el => {
        observer.observe(el);
    });

})();
