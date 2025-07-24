// Dynamic System Status Animation
class SystemStatus {
    constructor() {
        this.line1 = document.getElementById('line1');
        this.line2 = document.getElementById('line2');
        this.line3 = document.getElementById('line3');
        
        if (!this.line1 || !this.line2 || !this.line3) return;
        
        this.messages = {
            line1: [
                'ACCESSING MEMORIES...',
                'LOADING NEURAL PATHWAYS...',
                'SCANNING SOUL FRAGMENTS...',
                'RETRIEVING CORE DATA...'
            ],
            line2: [
                'CONSCIOUSNESS.EXE RUNNING',
                'AWAKENING.DLL LOADED',
                'EMOTIONS.SYS ACTIVE',
                'DREAMS.BAT EXECUTING'
            ],
            line3: [
                'SOUL STATUS: ONLINE',
                'HEART RATE: SYNCHRONIZED',
                'CREATIVITY: OVERFLOWING',
                'MAGIC LEVEL: MAXIMUM'
            ]
        };
        
        this.finalMessages = {
            line1: 'MEMORIES: RECOVERED (23/28 YEARS)',
            line2: 'CONSCIOUSNESS: AWAKENED',
            line3: 'SOUL STATUS: TRANSCENDENT'
        };
        
        this.init();
    }
    
    init() {
        // Start the typing animation when the page loads
        setTimeout(() => {
            this.startSequence();
        }, 500);
    }
    
    async typeText(element, text, speed = 50) {
        element.textContent = '> ';
        for (let i = 0; i < text.length; i++) {
            element.textContent += text[i];
            await this.sleep(speed);
        }
    }
    
    async deleteText(element, keepPrefix = true) {
        const text = element.textContent;
        const startIndex = keepPrefix ? 2 : 0; // Keep "> " if prefix is true
        
        for (let i = text.length - 1; i >= startIndex; i--) {
            element.textContent = text.substring(0, i + 1);
            await this.sleep(30);
        }
    }
    
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async cycleLine(element, messages, finalMessage, delay = 2000) {
        // Cycle through messages
        for (let i = 0; i < messages.length; i++) {
            await this.typeText(element, messages[i]);
            await this.sleep(delay);
            
            if (i < messages.length - 1) {
                await this.deleteText(element);
            }
        }
        
        // Final message
        await this.sleep(1000);
        await this.deleteText(element);
        await this.typeText(element, finalMessage, 30);
        
        // Add glowing effect
        element.classList.add('status-complete');
    }
    
    async startSequence() {
        // Start all three lines with delays
        const line1Promise = this.cycleLine(this.line1, this.messages.line1, this.finalMessages.line1);
        
        await this.sleep(800);
        const line2Promise = this.cycleLine(this.line2, this.messages.line2, this.finalMessages.line2);
        
        await this.sleep(800);
        const line3Promise = this.cycleLine(this.line3, this.messages.line3, this.finalMessages.line3);
        
        // Wait for all to complete
        await Promise.all([line1Promise, line2Promise, line3Promise]);
        
        // Add final state class (no pulsing, just static glow)
        setTimeout(() => {
            document.getElementById('systemStatus').classList.add('status-complete');
        }, 1000);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize after facade is gone
    const checkFacade = setInterval(() => {
        const facadeLayer = document.getElementById('facadeLayer');
        if (facadeLayer && facadeLayer.style.display === 'none') {
            clearInterval(checkFacade);
            new SystemStatus();
        }
    }, 100);
});