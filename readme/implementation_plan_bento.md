# Detectra Bento Layout - Masterclass Implementation Plan

This plan breaks down the ultra-modern "Bento Box" layout shown in the reference image. We are going to build this systematically, focusing on understanding CSS Grid and Flexbox mechanics instead of blind copy-pasting.

## The Architecture (What we are building)

This massive section is fundamentally broken down into three horizontal building blocks:

### Block 1: The Header Split
* **The Goal:** Build the massive "NEURAL SOVEREIGNTY" text on the left, and the technical description paragraph on the far right.
* **The Concept (Flexbox):** We will use `display: flex` and `justify-content: space-between`. This is the industry-standard way to instantly push two blocks of content to opposite edges of the screen and line them up perfectly.

### Block 2: The "Bento" Grid (The 4 Glass Cards)
* **The Goal:** Build a 2-row grid where the cards are incredibly distinct sizes (like irregular boxes in a Japanese bento box). 
* **Row 1:** A wide card (60% width) + a narrow card (40% width).
* **Row 2:** A narrow card (40% width) + a wide card (60% width).
* **The Concept (CSS Grid):** Normal grids use `1fr 1fr` to make perfect halves. We will use `grid-template-columns: 3fr 2fr` to force the browser into giving the first column exactly 60% of the screen space, and the second column exactly 40%. We will inverse it on the second row!

### Block 3: The Tech Footer
* **The Goal:** Build three columns of metrics (Encryption, Model Depth, Node Edge), each with a sharp vertical neon green line.
* **The Concept:** We will use a standard 3-column Grid (`1fr 1fr 1fr`), and instead of drawing actual lines, we will apply a `border-left: 3px solid #39FF14` to the text containers to fake the vertical neon lines.

## How We Move Forward
I will act as your Senior Engineer / Coach. For each block:
1. I will explain the mathematical concept or layout trick.
2. I will give you the HTML skeleton so you don't have to type raw text.
3. **I will challenge YOU to write the core CSS layout rules** to wire it together. If it breaks, we fix it together!
