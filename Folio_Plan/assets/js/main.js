document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Page Load Animation (Slide out the overlay)
    const overlay = document.getElementById('page-transition-overlay');
    
    if (overlay) {
        // If it was meant to slide out (e.g., coming from another page)
        // Wait a tiny bit to ensure CSS is applied, then animate out to left
        requestAnimationFrame(() => {
            overlay.classList.add('slide-out');
            
            // Cleanup the class after animation completes so it can be reset for out-bound links
            setTimeout(() => {
                overlay.style.transition = 'none'; // Temporarily disable transition
                overlay.classList.remove('slide-in', 'slide-out');
                // Reset position to right side
                overlay.style.transform = 'translateX(100%)';
                // Force reflow
                void overlay.offsetWidth;
                overlay.style.transition = ''; // Restore CSS transition
            }, 600); // matches the 0.6s transition duration
        });
    }

    // 2. Intercept link clicks for outbound page transition
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetRef = link.getAttribute('href');
            
            // Ignore anchors on the same page, empty links, or explicit external links
            if (!targetRef || targetRef.startsWith('#') || targetRef.startsWith('http') || link.getAttribute('target') === '_blank') {
                return;
            }

            e.preventDefault();
            
            if (overlay) {
                // Slide in from right
                overlay.classList.add('slide-in');
                
                // Navigate after the transition completes
                setTimeout(() => {
                    window.location.href = targetRef;
                }, 600); 
            } else {
                window.location.href = targetRef;
            }
        });
    });
});
