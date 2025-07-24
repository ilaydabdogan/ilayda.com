// Scroll animations and microinteractions
class AnimationManager {
    constructor() {
        this.sections = document.querySelectorAll('.content-section');
        this.loadingScreen = document.getElementById('loadingScreen');
        this.constellation = document.getElementById('constellation');
        this.init();
    }

    init() {
        // Set up intersection observer for scroll animations
        this.setupScrollAnimations();
        
        // Add hover effects
        this.setupHoverEffects();
        
        // Don't auto-hide loading screen if facade is present
        if (!document.getElementById('facadeLayer')) {
            setTimeout(() => {
                this.hideLoadingScreen();
            }, 2000);
        }
    }

    setupScrollAnimations() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Skip if already visible or marked as no-animate
                if (entry.isIntersecting && 
                    !entry.target.classList.contains('visible') && 
                    !entry.target.classList.contains('no-animate')) {
                    entry.target.classList.add('visible');
                    
                    // Add stagger effect to child elements
                    const children = entry.target.querySelectorAll('.card, .manifesto-item');
                    children.forEach((child, index) => {
                        child.style.animationDelay = `${index * 0.1}s`;
                        child.classList.add('fade-in-up');
                    });
                }
            });
        }, options);

        this.sections.forEach(section => {
            observer.observe(section);
        });
    }


    setupHoverEffects() {
        // Add ripple effect to cards
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const ripple = document.createElement('div');
                ripple.className = 'ripple';
                card.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 1000);
            });
        });

        // Add floating animation to nav nodes (only if not already applied)
        document.querySelectorAll('.nav-node').forEach((node, index) => {
            if (!node.style.animation) {
                node.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
                node.style.animationDelay = `${index * 0.2}s`;
            }
        });
    }

    hideLoadingScreen() {
        if (this.loadingScreen) {
            this.loadingScreen.classList.add('hidden');
            
            // Animate content in
            this.sections.forEach((section, index) => {
                section.style.animationDelay = `${index * 0.1}s`;
                section.classList.add('fade-in');
            });
        }
    }
}


// Initialize animation manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AnimationManager();
});