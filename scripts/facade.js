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
        }, 7000); // 7 seconds of corporate facade

        // Add subtle hints that something is wrong
        setTimeout(() => {
            this.addSubtleGlitches();
        }, 3000); // Start hints at 3 seconds
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
        
        // At 5 seconds (2 seconds after subtle glitches start), add bolder glitches
        setTimeout(() => {
            this.addBolderGlitches();
        }, 2000);
    }
    
    addBolderGlitches() {
        const nameElement = this.facadeLayer.querySelector('.professional-name');
        const titleElement = this.facadeLayer.querySelector('.professional-title');
        const bioTexts = this.facadeLayer.querySelectorAll('.professional-bio p');
        
        // Store original texts
        const originalName = nameElement.textContent;
        const originalTitle = titleElement.textContent;
        const originalBios = Array.from(bioTexts).map(p => p.textContent);
        
        // Glitch the name with character replacements
        this.nameGlitchInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                const glitched = this.glitchTextWithCharacters(originalName);
                nameElement.textContent = glitched;
                
                setTimeout(() => {
                    nameElement.textContent = originalName;
                }, 150);
            }
        }, 300);
        
        // Glitch the title more frequently
        this.titleGlitchInterval = setInterval(() => {
            if (Math.random() > 0.5) {
                titleElement.textContent = 'Founder & CEO? | Thiel? Fellow';
                
                setTimeout(() => {
                    titleElement.textContent = originalTitle;
                }, 200);
            }
        }, 400);
        
        // Add question marks to bio text
        bioTexts.forEach((p, index) => {
            setInterval(() => {
                if (Math.random() > 0.9) {
                    const words = originalBios[index].split(' ');
                    const wordIndex = Math.floor(Math.random() * words.length);
                    words[wordIndex] = words[wordIndex] + '?';
                    p.textContent = words.join(' ');
                    
                    setTimeout(() => {
                        p.textContent = originalBios[index];
                    }, 300);
                }
            }, 600);
        });
    }
    
    glitchTextWithCharacters(text) {
        const glitchChars = '!?@#$%^&*İıÇçĞğÖöÜüŞş';
        return text.split('').map((char, index) => {
            // Only glitch 1-2 characters
            if (Math.random() > 0.8 && index > 0 && index < text.length - 1) {
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
        }).join('');
    }

    beginGlitchSequence() {
        // Store current scroll position before locking
        const scrollY = window.scrollY || window.pageYOffset;
        
        // Force scroll to top multiple times to ensure it works on all devices
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0; // For Safari
        
        // Mobile-compatible scroll lock
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        document.body.style.top = `-${scrollY}px`; // Compensate for scroll position
        document.body.style.touchAction = 'none'; // Prevent touch scrolling
        
        // Also lock html element for extra security
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.position = 'fixed';
        document.documentElement.style.width = '100%';
        
        // Prevent touchmove events on mobile
        this.preventScroll = (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        };
        
        document.addEventListener('touchmove', this.preventScroll, { passive: false });
        document.addEventListener('wheel', this.preventScroll, { passive: false });
        
        // Force viewport to top on mobile
        if ('ontouchstart' in window) {
            document.querySelector('meta[name="viewport"]').setAttribute('content', 
                'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
        
        // Clear the subtle glitches
        if (this.flickerInterval) {
            clearInterval(this.flickerInterval);
        }
        if (this.nameGlitchInterval) {
            clearInterval(this.nameGlitchInterval);
        }
        if (this.titleGlitchInterval) {
            clearInterval(this.titleGlitchInterval);
        }

        // Continuously force scroll to top for the first second (mobile fallback)
        this.scrollInterval = setInterval(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 50);
        
        // Stop the scroll forcing after 1 second
        setTimeout(() => {
            if (this.scrollInterval) {
                clearInterval(this.scrollInterval);
            }
        }, 1000);
        
        // Small delay to ensure scroll completes on all devices
        setTimeout(() => {
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
                
                // Re-enable scrolling after glitch sequence
                document.body.style.overflow = '';
                document.body.style.position = '';
                document.body.style.width = '';
                document.body.style.top = '';
                document.body.style.touchAction = '';
                document.documentElement.style.overflow = '';
                document.documentElement.style.position = '';
                document.documentElement.style.width = '';
                
                // Remove scroll prevention listeners
                if (this.preventScroll) {
                    document.removeEventListener('touchmove', this.preventScroll);
                    document.removeEventListener('wheel', this.preventScroll);
                }
                
                // Restore viewport on mobile
                if ('ontouchstart' in window) {
                    document.querySelector('meta[name="viewport"]').setAttribute('content', 
                        'width=device-width, initial-scale=1.0');
                }
                
                // Initialize main site animations (only for initially visible sections)
                document.querySelectorAll('.content-section').forEach((section, index) => {
                    // Only animate sections that are visible (header, footer, etc)
                    if (window.getComputedStyle(section).display !== 'none') {
                        section.style.animationDelay = `${index * 0.1}s`;
                        section.classList.add('fade-in');
                    }
                });
                
                // Change the page title
                document.title = 'ilayda.com — SYSTEM.TRUESELF.INITIALIZE()';
                
                // Add console message about the transformation
                console.log('%c> FACADE.BREACH.DETECTED', 
                    'color: #ff0000; font-family: VT323, monospace; font-size: 16px;');
                console.log('%c> TRUE.SELF.INITIALIZING...', 
                    'color: #00ff00; font-family: VT323, monospace; font-size: 16px;');
            }, 1000);
        }, 5000); // Extended to show childhood photo longer (was 1500ms)
        }, 100); // Small delay for scroll to complete
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
        const originalName = 'Ilayda Buyukdogan'; // Starting anglicized
        const misspellings = [
            'Ilayda Buyukdogan',  // Corporate version - no Turkish chars
            'Ilyada Buyukdogan',
            'İlayda Buyukdogan',  // Turkish İ appears
            'Elayda Büyükdogan',  // More Turkish chars emerge
            'Ilayada Buyukdoğan', // ğ appears
            'İlaida Büyükdoğan',  // Full Turkish emerging
            'Aleyda Buyukdogan',
            'İlada Büyükdoğan',   // Truth breaking through
            'Eliza Buyukdogan',
            'İlayda B.',
            'İlayda',
            'ilayda' // Final reveal - simple, lowercase
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
                    // Final reveal - just ilayda (lowercase)
                    nameElement.textContent = 'ilayda'; // Force lowercase
                    nameElement.style.color = '#39FF14';
                    nameElement.style.transform = 'scale(1) rotate(0deg)';
                    nameElement.style.textShadow = '0 0 20px #39FF14';
                    nameElement.style.fontSize = '3rem';
                    nameElement.style.letterSpacing = '0.1em';
                    
                    // Keep it visible for an extra second
                    setTimeout(() => {
                        clearInterval(nameGlitchInterval);
                    }, 1000);
                    return; // Don't increment index after final reveal
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