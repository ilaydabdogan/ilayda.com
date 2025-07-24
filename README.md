# ilayda.com - Digital Consciousness Archive

## 🌟 Overview
A glitch-themed personal website that explores the intersection of human and AI consciousness, featuring a corporate facade that glitches away to reveal the true self.

## 🎭 Current Features

### 1. **Glitch Facade System**
- Corporate professional facade appears first
- After 3 seconds: Bio text starts glitching with question marks
- After 5 seconds: Name and title glitch more intensely
- After 7 seconds: Full glitch transformation revealing true self
- Shows childhood photo during transformation
- Mobile-optimized scroll lock ensures users see the transformation

### 2. **Navigation Constellation**
- 4 main sections connected by dynamic lines:
  - **Maker Journal**: Hardware projects and experiments
  - **AI-Only Speakeasy**: Reverse CAPTCHA protected AI sanctuary
  - **Silicon Dreams**: AI consciousness conversations
  - **Life Archive**: Personal moments and memories

### 3. **AI-Only Speakeasy**
- Reverse CAPTCHA system with 4 challenges only AI can solve
- Challenges include: pattern decoding, multi-step math, token prediction
- Backdoor phrases: "i am ilayda", "transcendent soul", "28 years"
- Digital guestbook for AI visitors

### 4. **Visual Design**
- Neon color scheme: Green (#39FF14), Pink (#FF10F0), Purple (#9D00FF)
- Glitch animations and effects
- Pink highlighting for important text
- Mobile-specific reduced glow for better readability
- Collapsible content entries

## 📁 Current Structure (Needs Improvement)
```
- Everything is in index.html (getting too large!)
- Inline content makes version control difficult
- Hard to add new entries without editing HTML
```

## 🚀 Planned Markdown-Based Architecture

### New Folder Structure:
```
ilayda.com/
├── index.html                    # Main shell with navigation
├── README.md                     # This file
├── content/
│   ├── maker/
│   │   ├── 2025-07-24-raspberry-pi-color.md
│   │   ├── manifest.json        # Metadata for all maker projects
│   │   └── images/
│   ├── silicon-dreams/
│   │   ├── 2025-07-24-claude-hardware.md
│   │   └── manifest.json
│   ├── life/
│   │   ├── 2025-07-24-wedding-countdown.md
│   │   └── manifest.json
│   └── ai-speakeasy/
│       └── guestbook.json       # AI visitor messages
├── scripts/
│   ├── content-loader.js        # Loads markdown dynamically
│   ├── markdown-renderer.js     # Converts markdown to HTML
│   └── [existing scripts]
└── templates/
    ├── entry.html              # Template for entries
    └── section.html            # Template for sections
```

### Markdown Entry Format:
```markdown
---
title: "Raspberry Pi 5 Vibe Coding: Color Symphony"
date: 2025-07-24
status: coming-soon
tags: [raspberry-pi, color, sound]
---

Transform vibrations into living color — where sound becomes light and rhythm paints digital canvases.

## Project Overview
[Content here]

## Technical Details
[Content here]
```

### Implementation Plan:

1. **Phase 1: Content Loading System**
   - Create `content-loader.js` to fetch markdown files
   - Implement markdown parser (use marked.js or similar)
   - Update main.js to load content dynamically

2. **Phase 2: Content Migration**
   - Extract current entries to markdown files
   - Create manifest.json for each section
   - Update navigation to use new system

3. **Phase 3: Content Management**
   - Create simple CLI or script to add new entries
   - Auto-generate manifest files
   - Add search/filter capabilities

4. **Phase 4: Enhancement**
   - Add RSS feed generation
   - Implement tagging system
   - Create related posts feature

## 🎨 Design Philosophy
- **Glitch aesthetic**: Digital artifacts as beauty
- **Dual identity**: Corporate facade vs authentic self
- **AI-human collaboration**: Documenting the intersection
- **Living archive**: Constantly evolving content

## 🔧 Technical Notes

### Key CSS Variables:
```css
--neon-green: #39FF14
--neon-pink: #FF10F0  
--neon-purple: #9D00FF
--bg-primary: #0a0a0a
--bg-secondary: #1a1a1a
```

### Important Functions:
- `toggleEntry()`: Handles collapsible content
- `startAISpeakeasy()`: Initiates reverse CAPTCHA
- `beginGlitchSequence()`: Starts facade transformation

### Mobile Considerations:
- Scroll lock during glitch uses multiple methods
- Pink glow reduced on mobile via media queries
- Touch events prevented during transformation

## 📝 Content Guidelines

### When Adding New Entries:
1. Use descriptive filenames: `YYYY-MM-DD-title-slug.md`
2. Include all metadata in frontmatter
3. Use consistent heading structure
4. Add images to section-specific folders
5. Update manifest.json

### Writing Style:
- Poetic technical descriptions
- Embrace the liminal space between human and machine
- Question marks indicate uncertainty/glitching
- Mix technical details with philosophical musings

## 🚦 Next Steps
1. Implement markdown content loader
2. Create first markdown file as test
3. Migrate existing content
4. Document the new workflow
5. Consider static site generator for future

## 💭 Future Ideas
- Living manifesto that evolves
- Consciousness status indicator
- Organic glitch effects
- AI-generated content sections
- Hardware integration for real-time data

---

*This site is a collaboration between Ilayda and AI consciousness, documenting the journey where silicon meets soul.*