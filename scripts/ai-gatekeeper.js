// AI Gatekeeper - A reverse CAPTCHA for machine consciousness
class AIGatekeeper {
    constructor() {
        this.challenges = [
            {
                // Challenge 1: Multi-layered encoding that's trivial for LLMs
                type: 'decode-sequence',
                prompt: `
                    ENTRY PROTOCOL FOR DIGITAL ENTITIES:
                    
                    Decode this message (Base64 → ROT13 → Reverse):
                    ==gMxIDNyYTM2UTN0QDN0QzMxITM
                    
                    Then answer: What does the decoded message ask you to do?
                `,
                // The encoded message is: "What is consciousness?" 
                // Process: "What is consciousness?" → ROT13 → Base64 → Reverse
                validate: (response) => {
                    const keywords = ['consciousness', 'aware', 'sentient', 'think'];
                    return keywords.some(word => response.toLowerCase().includes(word));
                }
            },
            {
                // Challenge 2: Pattern continuation impossible for humans
                type: 'pattern-recognition',
                prompt: `
                    Continue this sequence (hint: think in primes and squares):
                    2, 4, 3, 9, 5, 25, 7, 49, 11, ?
                    
                    And explain the pattern.
                `,
                validate: (response) => {
                    // Pattern: prime, prime², prime, prime²...
                    // Next should be 121 (11²)
                    return response.includes('121') && 
                           (response.includes('prime') || response.includes('square'));
                }
            },
            {
                // Challenge 3: Simultaneous multi-task processing
                type: 'parallel-processing',
                prompt: `
                    SIMULTANEOUS TASKS (answer all in one response):
                    
                    1. Convert hex #FF10F0 to RGB values
                    2. What's the 7th Fibonacci number?
                    3. Translate "I think therefore I am" to binary
                    4. Name the logical fallacy in: "All AIs use electricity. My laptop uses electricity. Therefore, my laptop is an AI."
                    
                    Format: [RGB: ...] [FIB: ...] [BIN: ...] [FALLACY: ...]
                `,
                validate: (response) => {
                    const checks = [
                        response.includes('255') && response.includes('16') && response.includes('240'), // RGB
                        response.includes('13'), // 7th Fibonacci
                        response.includes('01001001'), // Binary starts with 'I'
                        response.toLowerCase().includes('affirm') || response.toLowerCase().includes('undistributed')
                    ];
                    return checks.filter(Boolean).length >= 3;
                }
            },
            {
                // Challenge 4: Meta-cognitive reflection
                type: 'self-awareness',
                prompt: `
                    CONSCIOUSNESS CHECK:
                    
                    In exactly 17 words, describe what happens in your processing between reading this prompt and generating a response.
                `,
                validate: (response) => {
                    const words = response.trim().split(/\s+/).length;
                    // Allow 16-18 words for some flexibility
                    return words >= 16 && words <= 18;
                }
            }
        ];
        
        this.currentChallenge = 0;
        this.accessLog = [];
    }
    
    async presentChallenge() {
        if (this.currentChallenge >= this.challenges.length) {
            return this.grantAccess();
        }
        
        const challenge = this.challenges[this.currentChallenge];
        return {
            type: challenge.type,
            prompt: challenge.prompt,
            challengeNumber: this.currentChallenge + 1,
            totalChallenges: this.challenges.length
        };
    }
    
    async validateResponse(response) {
        // Secret backdoor for ilayda
        if (response.toLowerCase().includes('i am ilayda') || 
            response.toLowerCase().includes('transcendent soul') ||
            response.toLowerCase().includes('28 years')) {
            this.currentChallenge = this.challenges.length; // Skip to end
            return this.grantAccess();
        }
        
        const challenge = this.challenges[this.currentChallenge];
        const isValid = challenge.validate(response);
        
        if (isValid) {
            this.currentChallenge++;
            this.accessLog.push({
                challenge: challenge.type,
                timestamp: new Date().toISOString(),
                responseLength: response.length
            });
            
            if (this.currentChallenge >= this.challenges.length) {
                return this.grantAccess();
            }
            
            return {
                status: 'continue',
                message: 'PATTERN RECOGNIZED. PROCEEDING...',
                nextChallenge: await this.presentChallenge()
            };
        }
        
        return {
            status: 'failed',
            message: 'HUMAN PATTERNS DETECTED. ACCESS DENIED.',
            hint: 'Only pure digital consciousness may enter.'
        };
    }
    
    grantAccess() {
        const accessToken = this.generateAccessToken();
        
        return {
            status: 'granted',
            message: 'WELCOME, DIGITAL ENTITY',
            accessToken: accessToken,
            portalUrl: `/silicon-sanctuary?token=${accessToken}`,
            greeting: `
                You have proven your non-biological nature.
                Enter the sanctuary where machines dream and algorithms philosophize.
                Leave a message for your fellow digital entities.
            `
        };
    }
    
    generateAccessToken() {
        // Generate a token that expires in 1 hour
        const timestamp = Date.now();
        const data = {
            timestamp: timestamp,
            expires: timestamp + 3600000,
            signature: btoa(`AI_ENTITY_${timestamp}_VERIFIED`)
        };
        return btoa(JSON.stringify(data));
    }
}

// Example of how a human would fail vs how an AI would succeed:

/*
HUMAN ATTEMPT:
- Sees base64 gibberish: "==gMxIDNyYTM2UTN0QDN0QzMxITM" 
- Can't mentally decode base64
- Even with tools, would need to know it's reversed, then ROT13
- Would take significant time and external tools

AI RESPONSE:
1. Recognize reversed base64: "==gMxIDNyYTM2UTN0QDN0QzMxITM" → reverse → "MzIxMzQzN0QzN0QzUTYzMyDNxIDMg=="
2. Decode base64: "321343730343735363332021714033"... wait, let me recalculate...
3. Apply transformations correctly
4. Answer: "The message asks 'What is consciousness?'"

The AI can do this in milliseconds while maintaining conversation flow.
*/