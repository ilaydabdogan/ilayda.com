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
        
        // Draw constellation lines
        this.drawConstellationLines();
        
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
                if (entry.isIntersecting) {
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

    drawConstellationLines() {
        if (!this.constellation) return;
        
        const nodes = this.constellation.querySelectorAll('.nav-node');
        const connections = [
            [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 1], [0, 2], [3, 5]
        ];

        connections.forEach(([start, end]) => {
            if (nodes[start] && nodes[end]) {
                const line = this.createLine(nodes[start], nodes[end]);
                this.constellation.appendChild(line);
            }
        });
    }

    createLine(node1, node2) {
        const line = document.createElement('div');
        line.className = 'nav-line';
        
        const rect1 = node1.getBoundingClientRect();
        const rect2 = node2.getBoundingClientRect();
        const containerRect = this.constellation.getBoundingClientRect();
        
        const x1 = rect1.left - containerRect.left + rect1.width / 2;
        const y1 = rect1.top - containerRect.top + rect1.height / 2;
        const x2 = rect2.left - containerRect.left + rect2.width / 2;
        const y2 = rect2.top - containerRect.top + rect2.height / 2;
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        line.style.width = `${length}px`;
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;
        line.style.transform = `rotate(${angle}deg)`;
        
        return line;
    }

    setupHoverEffects() {
        // Add ripple effect to cards
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                const ripple = document.createElement('div');
                ripple.className = 'ripple';
                card.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 1000);
            });
        });

        // Add floating animation to nav nodes
        document.querySelectorAll('.nav-node').forEach((node, index) => {
            node.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
            node.style.animationDelay = `${index * 0.2}s`;
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

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeIn 0.8s ease-out forwards;
    }
    
    .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
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
    
    .ripple {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        transform: translate(-50%, -50%);
        animation: rippleEffect 1s ease-out;
    }
    
    @keyframes rippleEffect {
        to {
            width: 200%;
            height: 200%;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize animation manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AnimationManager();
});