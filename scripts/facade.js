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
            'İlayda Büyükdoğan',
            'Ilyada Buyukdogan',
            'Ilayda Buyukdogan',
            'Elayda Buyukdogan',
            'Ilayada Buyukdogan',
            'Ilaida Buyukdogan',
            'Aleyda Buyukdogan',
            'Ilada Buyukdogan',
            'Eliza Buyukdogan',
            'Ilayda B.',
            'Ilayda',
            'ilayda' // Final reveal
        ];
        
        let index = 0;
        let currentText = misspellings[0];
        
        const nameGlitchInterval = setInterval(() => {
            if (index < misspellings.length) {
                // Base text for this cycle
                currentText = misspellings[index];
                
                // Add glitch characters randomly
                if (Math.random() > 0.3 && index < misspellings.length - 1) {
                    const glitchedVersion = this.partialGlitch(currentText);
                    nameElement.textContent = glitchedVersion;
                    
                    // Quick flash back to intended misspelling
                    setTimeout(() => {
                        nameElement.textContent = currentText;
                    }, 100);
                } else {
                    nameElement.textContent = currentText;
                }
                
                // Subtle color shift as it gets closer to truth
                if (index < misspellings.length - 3) {
                    // Random colors for confusion
                    nameElement.style.color = ['#ff0000', '#00ff00', '#ff00ff'][index % 3];
                    nameElement.style.transform = `rotate(${-2 + Math.random() * 4}deg)`;
                } else if (index === misspellings.length - 1) {
                    // Final reveal - just ilayda
                    nameElement.style.color = '#39FF14';
                    nameElement.style.transform = 'scale(1) rotate(0deg)';
                    nameElement.style.textShadow = '0 0 20px #39FF14';
                    nameElement.style.fontSize = '3rem';
                    nameElement.style.letterSpacing = '0.1em';
                } else {
                    // Getting closer to truth
                    nameElement.style.color = '#20FF00';
                    nameElement.style.transform = 'scale(1) rotate(0deg)';
                }
                
                index++;
            } else {
                clearInterval(nameGlitchInterval);
            }
        }, 400); // Slower pace - 400ms between changes
    }
    
    partialGlitch(text) {
        const glitchChars = '?!@#$%^&*_+={}[]|<>/~';
        return text.split('').map(char => {
            // Only glitch some characters, keep structure recognizable
            if (Math.random() > 0.7 && char !== ' ') {
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
        }).join('');
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