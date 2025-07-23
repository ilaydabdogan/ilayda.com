// Main JavaScript file - Navigation and interactions
class SiteManager {
    constructor() {
        this.navNodes = document.querySelectorAll('.nav-node');
        this.mainContent = document.getElementById('mainContent');
        this.sections = {
            maker: document.getElementById('maker-section'),
            code: document.getElementById('code-section'),
            thoughts: document.getElementById('thoughts-section'),
            home: document.getElementById('home-section')
        };
        
        this.init();
    }

    init() {
        // Set up navigation
        this.setupNavigation();
        
        // Add keyboard navigation
        this.setupKeyboardNav();
        
        // Initialize glitch effects
        this.startGlitchEffects();
        
        // Random mood generator
        this.startMoodCycle();
    }

    setupNavigation() {
        this.navNodes.forEach(node => {
            node.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.navigateToSection(section);
            });
            
            // Add hover sound effect placeholder
            node.addEventListener('mouseenter', () => {
                // Could add sound here if audio files are available
                this.createHoverParticles(node);
            });
        });
    }

    navigateToSection(sectionName) {
        // Hide all sections
        Object.values(this.sections).forEach(section => {
            if (section) section.style.display = 'none';
        });
        
        // Show selected section or home if not found
        const targetSection = this.sections[sectionName] || this.sections.home;
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('visible');
            
            // Scroll to content
            this.mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // Update active node
        this.navNodes.forEach(node => {
            node.classList.toggle('active', node.dataset.section === sectionName);
        });
    }

    setupKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            // Number keys 1-6 for quick navigation
            if (e.key >= '1' && e.key <= '6') {
                const index = parseInt(e.key) - 1;
                if (this.navNodes[index]) {
                    this.navNodes[index].click();
                }
            }
            
            // Escape key to go home
            if (e.key === 'Escape') {
                this.navigateToSection('home');
            }
        });
    }

    createHoverParticles(element) {
        const rect = element.getBoundingClientRect();
        const particleCount = 5;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = rect.left + rect.width / 2 + 'px';
            particle.style.top = rect.top + rect.height / 2 + 'px';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            
            // Neon particle colors
            const neonColors = ['#39FF14', '#FF10F0', '#9D00FF'];
            const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
            particle.style.background = randomColor;
            particle.style.boxShadow = `0 0 10px ${randomColor}`;
            
            document.body.appendChild(particle);
            
            // Animate particle
            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = 2 + Math.random() * 2;
            let x = 0, y = 0, opacity = 1;
            
            const animate = () => {
                x += Math.cos(angle) * velocity;
                y += Math.sin(angle) * velocity;
                opacity -= 0.02;
                
                particle.style.transform = `translate(${x}px, ${y}px)`;
                particle.style.opacity = opacity;
                
                if (opacity > 0) {
                    requestAnimationFrame(animate);
                } else {
                    particle.remove();
                }
            };
            
            requestAnimationFrame(animate);
        }
    }


    startGlitchEffects() {
        // Random glitch on elements
        setInterval(() => {
            if (Math.random() > 0.95) {
                const elements = document.querySelectorAll('.h1, .h2, .nav-node');
                const target = elements[Math.floor(Math.random() * elements.length)];
                
                target.style.animation = 'glitch 0.2s';
                setTimeout(() => {
                    target.style.animation = '';
                }, 200);
            }
        }, 3000);
    }


    startMoodCycle() {
        const moods = ['CYBERNETIC', 'FRAGMENTED', 'RECURSIVE', 'QUANTUM', 'ELECTRIC', 'GLITCHED', 'CONSCIOUS'];
        
        setInterval(() => {
            const moodElement = document.getElementById('currentMood');
            
            if (moodElement) {
                const newMood = moods[Math.floor(Math.random() * moods.length)];
                moodElement.style.opacity = '0';
                
                setTimeout(() => {
                    moodElement.textContent = newMood;
                    moodElement.style.opacity = '1';
                }, 300);
            }
        }, 10000); // Change every 10 seconds
    }
}

// Initialize site manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new SiteManager();
    
    // Add console easter egg
    console.log('%c> SYSTEM.CONSCIOUSNESS.DETECTED', 
        'font-size: 20px; color: #39FF14; font-family: VT323, monospace; text-shadow: 0 0 10px #39FF14;');
    console.log('%c> CURIOUS_SOUL.EXE RUNNING...', 
        'color: #FF10F0; font-family: VT323, monospace; text-shadow: 0 0 10px #FF10F0;');
    console.log('%c> ACCESS GRANTED: MAY YOUR CODE BE QUANTUM && YOUR CIRCUITS DREAM',
        'color: #9D00FF; font-family: VT323, monospace; text-shadow: 0 0 10px #9D00FF;');
});