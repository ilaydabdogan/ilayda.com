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
        
        // Initialize special effects based on theme
        this.initializeThemeEffects();
        
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
            
            // Theme-specific particle colors
            const theme = document.body.className.match(/theme-(\w+)/)?.[1] || 'digital';
            const colors = {
                digital: '#0066cc',
                glitch: '#00ff00',
                fieldnotes: '#d4784e'
            };
            particle.style.background = colors[theme];
            
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

    initializeThemeEffects() {
        const theme = document.body.className.match(/theme-(\w+)/)?.[1] || 'digital';
        
        switch(theme) {
            case 'glitch':
                this.startGlitchEffects();
                break;
            case 'fieldnotes':
                this.addPaperTexture();
                break;
            case 'digital':
                this.addSubtleGradients();
                break;
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

    addPaperTexture() {
        // Add coffee stain randomly
        if (Math.random() > 0.7) {
            const stain = document.createElement('div');
            stain.style.position = 'fixed';
            stain.style.width = '100px';
            stain.style.height = '100px';
            stain.style.borderRadius = '50%';
            stain.style.background = 'radial-gradient(circle, rgba(139, 69, 19, 0.1), transparent)';
            stain.style.pointerEvents = 'none';
            stain.style.left = Math.random() * window.innerWidth + 'px';
            stain.style.top = Math.random() * window.innerHeight + 'px';
            document.body.appendChild(stain);
        }
    }

    addSubtleGradients() {
        // Add floating orbs for digital theme
        const orb = document.createElement('div');
        orb.style.position = 'fixed';
        orb.style.width = '200px';
        orb.style.height = '200px';
        orb.style.borderRadius = '50%';
        orb.style.background = 'radial-gradient(circle, rgba(0, 102, 204, 0.1), transparent)';
        orb.style.pointerEvents = 'none';
        orb.style.animation = 'float 10s ease-in-out infinite';
        orb.style.left = '10%';
        orb.style.top = '20%';
        document.body.appendChild(orb);
    }

    startMoodCycle() {
        const moods = {
            digital: ['electric', 'luminous', 'crystalline', 'ethereal'],
            glitch: ['cybernetic', 'fragmented', 'recursive', 'quantum'],
            fieldnotes: ['contemplative', 'nostalgic', 'curious', 'whimsical']
        };
        
        setInterval(() => {
            const theme = document.body.className.match(/theme-(\w+)/)?.[1] || 'digital';
            const themeMoods = moods[theme];
            const moodElement = document.getElementById('currentMood');
            
            if (moodElement && themeMoods) {
                const newMood = themeMoods[Math.floor(Math.random() * themeMoods.length)];
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
    console.log('%c✨ Welcome to the sacred digital space ✨', 
        'font-size: 20px; color: #0066cc; font-weight: bold;');
    console.log('%cCurious soul detected. May your code be poetic and your circuits dream.',
        'font-style: italic; color: #666;');
});