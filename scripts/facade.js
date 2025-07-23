// Facade Effect - The digital awakening
class FacadeManager {
    constructor() {
        this.facadeLayer = document.getElementById('facadeLayer');
        this.loadingScreen = document.getElementById('loadingScreen');
        this.glitchStatic = document.getElementById('glitchStatic');
        this.init();
    }

    init() {
        // Start the countdown to glitch
        setTimeout(() => {
            this.beginGlitchSequence();
        }, 5000); // 5 seconds of normalcy

        // Add subtle hints that something is wrong
        setTimeout(() => {
            this.addSubtleGlitches();
        }, 3500); // Start hints at 3.5 seconds
    }

    addSubtleGlitches() {
        this.facadeLayer.classList.add('pre-glitch');
        
        // Occasional flicker
        const flicker = setInterval(() => {
            if (Math.random() > 0.8) {
                this.facadeLayer.style.opacity = '0.98';
                setTimeout(() => {
                    this.facadeLayer.style.opacity = '1';
                }, 50);
            }
        }, 100);

        // Store interval to clear later
        this.flickerInterval = flicker;
    }

    beginGlitchSequence() {
        // Clear the subtle glitches
        if (this.flickerInterval) {
            clearInterval(this.flickerInterval);
        }

        // Add glitching class for animation
        this.facadeLayer.classList.add('glitching');

        // Create glitch text effect
        this.createGlitchText();

        // Remove facade after animation
        setTimeout(() => {
            this.facadeLayer.style.display = 'none';
            this.glitchStatic.style.display = 'none';
            
            // Show the loading screen briefly
            this.loadingScreen.style.display = 'flex';
            
            // Trigger main site initialization
            setTimeout(() => {
                this.loadingScreen.classList.add('hidden');
                
                // Show the main container
                const container = document.querySelector('.container');
                if (container) {
                    container.style.opacity = '1';
                    container.style.transition = 'opacity 1s ease-in';
                }
                
                // Initialize main site animations
                document.querySelectorAll('.content-section').forEach((section, index) => {
                    section.style.animationDelay = `${index * 0.1}s`;
                    section.classList.add('fade-in');
                });
                
                // Change the page title
                document.title = 'ilayda.com — SYSTEM.SACRED.INITIALIZE()';
                
                // Add console message about the transformation
                console.log('%c> FACADE.BREACH.DETECTED', 
                    'color: #ff0000; font-family: VT323, monospace; font-size: 16px;');
                console.log('%c> TRUE.SELF.INITIALIZING...', 
                    'color: #00ff00; font-family: VT323, monospace; font-size: 16px;');
            }, 1000);
        }, 1500); // Length of glitch animation
    }

    createGlitchText() {
        const textElements = this.facadeLayer.querySelectorAll('h1, p');
        
        textElements.forEach(element => {
            const text = element.textContent;
            const glitchInterval = setInterval(() => {
                if (Math.random() > 0.7) {
                    const glitchedText = this.glitchString(text);
                    element.textContent = glitchedText;
                    
                    setTimeout(() => {
                        element.textContent = text;
                    }, 50);
                }
            }, 100);

            // Clear after animation
            setTimeout(() => clearInterval(glitchInterval), 1400);
        });
    }

    glitchString(str) {
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`01';
        return str.split('').map(char => {
            if (Math.random() > 0.8 && char !== ' ') {
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
        }).join('');
    }
}

// Initialize facade manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FacadeManager();
});