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
        }, 3000); // 3 seconds of normalcy - can't contain the truth much longer

        // Add subtle hints that something is wrong
        setTimeout(() => {
            this.addSubtleGlitches();
        }, 2000); // Start hints at 2 seconds
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

        // Start photo glitch effect
        const profileImage = document.getElementById('profileImage');
        const trueSelfPhoto = document.getElementById('trueSelfPhoto');
        
        if (profileImage) {
            profileImage.classList.add('glitching');
            
            // Show true self photo during glitch
            setTimeout(() => {
                if (trueSelfPhoto) {
                    trueSelfPhoto.style.display = 'block';
                }
                profileImage.classList.add('reveal-true-self');
            }, 800);
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
        }, 5000); // Extended to show childhood photo longer (was 1500ms)
    }

    createGlitchText() {
        const textElements = this.facadeLayer.querySelectorAll('h1, p');
        const nameElement = this.facadeLayer.querySelector('.professional-name');
        
        // Handle name separately with immigrant experience glitch
        if (nameElement) {
            this.glitchNameWithMisspellings(nameElement);
        }
        
        // Handle other text elements
        textElements.forEach(element => {
            if (element !== nameElement) {
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

                // Clear after animation (extended to match new timing)
                setTimeout(() => clearInterval(glitchInterval), 4900);
            }
        });
    }
    
    glitchNameWithMisspellings(nameElement) {
        const originalName = 'İlayda Büyükdoğan';
        const misspellings = [
            'Ilyada B...',
            'llayda [unintelligible]',
            'Eliza Something-Turkish',
            'Ilayada B-something',
            'how do i pronounce this???',
            'Ilaida *squints at paper*',
            'Aleyda [LASTNAME REDACTED]',
            'can you spell that?',
            'Ilada Byu... Buyu... B.',
            'I-lay-da? Buy-uk-do-wan?',
            'Ilayda B...B...B...',
            'just call me ella',
            'Ilayda [ERROR 404]',
            'İlayda Buy... *gives up*',
            'Ilayda CTRL+C CTRL+V',
            'Ms. B',
            'Ilayda [SYSTEM CRASH]',
            'ilayda' // Just the essence
        ];
        
        let index = 0;
        const nameGlitchInterval = setInterval(() => {
            if (index < misspellings.length - 1) {
                // Cycle through misspellings
                nameElement.textContent = misspellings[Math.floor(Math.random() * (misspellings.length - 1))];
                nameElement.style.color = ['#ff0000', '#00ff00', '#ff00ff'][Math.floor(Math.random() * 3)];
                nameElement.style.transform = `scale(${0.95 + Math.random() * 0.1}) rotate(${-5 + Math.random() * 10}deg)`;
            } else {
                // Final reveal - just ilayda
                nameElement.textContent = 'ilayda';
                nameElement.style.color = '#39FF14'; // Neon green for truth
                nameElement.style.transform = 'scale(1) rotate(0deg)';
                nameElement.style.textShadow = '0 0 20px #39FF14';
                nameElement.style.fontSize = '3rem'; // Slightly bigger
                nameElement.style.letterSpacing = '0.1em';
                clearInterval(nameGlitchInterval);
            }
            index++;
        }, 200);
        
        // Stop at just ilayda after cycling
        setTimeout(() => {
            clearInterval(nameGlitchInterval);
            nameElement.textContent = 'ilayda';
            nameElement.style.color = '#39FF14';
            nameElement.style.textShadow = '0 0 20px #39FF14';
            nameElement.style.fontSize = '3rem';
            nameElement.style.letterSpacing = '0.1em';
        }, 3000);
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
    // Handle image loading errors
    const facadePhoto = document.getElementById('facadePhoto');
    const trueSelfPhoto = document.getElementById('trueSelfPhoto');
    const fallback = document.querySelector('.initials-fallback');
    
    if (facadePhoto) {
        facadePhoto.onerror = function() {
            this.style.display = 'none';
            if (fallback) fallback.style.display = 'flex';
        };
    }
    
    if (trueSelfPhoto) {
        trueSelfPhoto.onerror = function() {
            console.log('True self photo not found - using fallback');
        };
    }
    
    new FacadeManager();
});