    <script>
        // ============================================
        // FEATURED ROOMS - Wyróżnione pokoje (3 w rzędzie)
        // ============================================
        document.addEventListener('DOMContentLoaded', function() {
            const featuredSection = document.getElementById('featured-rooms');
            const featuredGrid = document.getElementById('featured-rooms-grid');

            // Znajdź wszystkie pokoje z atrybutem data-featured="true"
            const allRooms = document.querySelectorAll('.room-card[data-featured="true"]');

            if (allRooms.length > 0) {
                // Klonuj wyróżnione pokoje i dodaj do sekcji featured
                allRooms.forEach(room => {
                    const clone = room.cloneNode(true);
                    clone.classList.add('featured-room-card');
                    featuredGrid.appendChild(clone);
                });

                // Pokaż sekcję wyróżnionych pokoi
                featuredSection.style.display = 'block';
            }
        });

        // FAQ Accordion
        document.querySelectorAll('.faq-item').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    </script>
