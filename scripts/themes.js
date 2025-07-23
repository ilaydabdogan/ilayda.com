// Theme Switcher with localStorage persistence
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('selectedTheme') || 'digital';
        this.themeButtons = document.querySelectorAll('.theme-btn');
        this.body = document.body;
        this.init();
    }

    init() {
        // Apply saved theme
        this.applyTheme(this.currentTheme);
        
        // Add click listeners to theme buttons
        this.themeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const theme = e.target.dataset.theme;
                this.switchTheme(theme);
            });
        });

        // Update text based on theme
        this.updateThemeSpecificContent();
    }

    switchTheme(theme) {
        // Remove all theme classes
        this.body.classList.remove('theme-digital', 'theme-glitch', 'theme-fieldnotes');
        
        // Add new theme class
        this.body.classList.add(`theme-${theme}`);
        
        // Update active button
        this.themeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });
        
        // Save to localStorage
        localStorage.setItem('selectedTheme', theme);
        this.currentTheme = theme;
        
        // Update content
        this.updateThemeSpecificContent();
        
        // Trigger theme change animation
        this.animateThemeChange();
    }

    applyTheme(theme) {
        this.body.classList.add(`theme-${theme}`);
        this.themeButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });
    }

    updateThemeSpecificContent() {
        // Hide all theme-specific text
        document.querySelectorAll('.digital-text, .glitch-text, .field-text').forEach(el => {
            el.style.display = 'none';
        });
        
        document.querySelectorAll('.digital-verse, .glitch-verse, .field-verse').forEach(el => {
            el.style.display = 'none';
        });
        
        // Show current theme text
        const currentTexts = document.querySelectorAll(`.${this.currentTheme}-text, .${this.currentTheme}-verse`);
        currentTexts.forEach(el => {
            el.style.display = 'block';
        });
        
        // Update mood based on theme
        const moods = {
            digital: 'electric',
            glitch: 'cybernetic',
            fieldnotes: 'contemplative'
        };
        
        const moodElement = document.getElementById('currentMood');
        if (moodElement) {
            moodElement.textContent = moods[this.currentTheme];
        }
    }

    animateThemeChange() {
        // Add transition class
        this.body.style.opacity = '0';
        
        setTimeout(() => {
            this.body.style.opacity = '1';
        }, 300);
    }
}

// Initialize theme manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
});