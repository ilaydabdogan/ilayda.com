// Main JavaScript file - Navigation and interactions
class SiteManager {
    constructor() {
        this.navNodes = document.querySelectorAll('.nav-node');
        this.mainContent = document.getElementById('mainContent');
        this.sections = {
            maker: document.getElementById('maker-section'),
            'ai-speakeasy': document.getElementById('ai-speakeasy-section'),
            'silicon-dreams': document.getElementById('silicon-dreams-section'),
            life: document.getElementById('life-section'),
            home: document.getElementById('home-section'),
            'ai-sanctuary': document.getElementById('ai-sanctuary-section')
        };
        
        this.init();
    }

    init() {
        // Set up navigation
        this.setupNavigation();
        
        // Draw constellation lines
        this.drawConstellationLines();
        
        // Add keyboard navigation
        this.setupKeyboardNav();
        
        // Initialize glitch effects
        this.startGlitchEffects();
        
        // Random mood generator
        this.startMoodCycle();
        
        // Redraw lines on window resize
        window.addEventListener('resize', () => {
            this.drawConstellationLines();
        });
    }

    setupNavigation() {
        this.navNodes.forEach(node => {
            node.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.navigateToSection(section);
            });
            
            node.addEventListener('mouseenter', () => {
                this.createHoverParticles(node);
            });
        });
    }
    
    drawConstellationLines() {
        const constellation = document.getElementById('constellation');
        
        // Remove existing lines
        const existingLines = constellation.querySelectorAll('.nav-line');
        existingLines.forEach(line => line.remove());
        
        // Define connections between nodes
        const connections = [
            ['maker', 'ai-speakeasy'],
            ['maker', 'silicon-dreams'],
            ['ai-speakeasy', 'life'],
            ['silicon-dreams', 'life'],
            ['silicon-dreams', 'ai-speakeasy']
        ];
        
        // Draw lines between connected nodes
        connections.forEach(([from, to]) => {
            const fromNode = constellation.querySelector(`[data-section="${from}"]`);
            const toNode = constellation.querySelector(`[data-section="${to}"]`);
            
            if (fromNode && toNode) {
                const line = this.createLine(fromNode, toNode);
                if (line) {
                    constellation.appendChild(line);
                }
            }
        });
    }
    
    createLine(node1, node2) {
        const rect1 = node1.getBoundingClientRect();
        const rect2 = node2.getBoundingClientRect();
        const containerRect = node1.parentElement.getBoundingClientRect();
        
        // Calculate center points relative to container
        const x1 = rect1.left + rect1.width / 2 - containerRect.left;
        const y1 = rect1.top + rect1.height / 2 - containerRect.top;
        const x2 = rect2.left + rect2.width / 2 - containerRect.left;
        const y2 = rect2.top + rect2.height / 2 - containerRect.top;
        
        // Calculate line properties
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        // Create line element
        const line = document.createElement('div');
        line.className = 'nav-line';
        line.style.width = length + 'px';
        line.style.left = x1 + 'px';
        line.style.top = y1 + 'px';
        line.style.transform = `rotate(${angle}deg)`;
        line.style.transformOrigin = '0 50%';
        
        return line;
    }

    navigateToSection(sectionName) {
        // Hide all sections including AI sanctuary
        Object.values(this.sections).forEach(section => {
            if (section) {
                section.style.display = 'none';
                section.classList.remove('visible');
            }
        });
        
        // Show selected section or home if not found
        const targetSection = this.sections[sectionName] || this.sections.home;
        if (targetSection) {
            // Immediately show without animation when navigating
            targetSection.style.display = 'block';
            targetSection.style.opacity = '1';
            targetSection.style.transform = 'translateY(0)';
            targetSection.style.transition = 'none'; // Disable transition
            targetSection.classList.add('visible');
            targetSection.classList.add('no-animate'); // Mark as no animation needed
            
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

// Toggle function for collapsible entries
function toggleEntry(header) {
    const content = header.nextElementSibling;
    const indicator = header.querySelector('.toggle-indicator');
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        indicator.textContent = '▲';
    } else {
        content.style.display = 'none';
        indicator.textContent = '▼';
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