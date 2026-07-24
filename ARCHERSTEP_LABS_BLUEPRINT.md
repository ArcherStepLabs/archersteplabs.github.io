# ArcherStep Labs Blueprint

## Status Checklist
- [x] Topic 1: Overall approach, "grill me" prep, and plan forward
- [x] Topic 2: Business model, scope, and viability
- [x] Topic 3: Pricing model
- [x] Topic 4: Website implementation and interactive game design
- [x] Topic 5: Remaining topics, adjustments, and final action roadmap

## Parking Lot
*(Store sudden thoughts here for future meetings)*
- None yet.

---

## Meeting Notes

### Topic 1: Overall Approach, "Grill Me" Prep, and Plan Forward
**Decisions Made:**
- **Service Strategy:** Offer a narrow menu of specific, well-tested AI services built with Antigravity (rather than "I can build anything").
- **Acquisition Strategy:** Use cold email and cold calling to reach hundreds of local small businesses.
- **The Hook:** The interactive website game will be the core pitch in cold outreach to grab attention and demonstrate ROI immediately.

### Topic 2: Business model, scope, and viability
**Decisions Made:**
- **Core Model:** "Productized Services". Sell fixed-scope, repeatable AI solutions that can be deployed quickly to multiple clients.
- **Scope Discipline:** Decline or refer out highly custom, out-of-scope work to preserve profit margins and limit technical stress.
- **Recurring Revenue (MRR):** Charge a mandatory monthly "Hosting, API, & Maintenance" fee (e.g., $99–$299/mo) to keep automations running smoothly and stack passive income.

### Topic 3: Pricing model
**Decisions Made:**
- **Pricing Strategy:** "Value-Based Tiering". Price based on the money/time saved, offering "Standard" and "Premium" tiers to anchor the price.
- **Monthly Fee Framing:** Present it as a "License Fee" required to maintain the legal right and access to the proprietary automation tech.
- **Price Balancing:** Keep the upfront setup fee moderate ($500 - $900) to reduce friction and accelerate client acquisition, while charging a strong monthly License Fee ($150 - $299/mo) for long-term profit stability.

### Topic 4: Website implementation and interactive game design
**Decisions Made:**
- **Tech Stack:** React + Vite (and Vanilla CSS) because it perfectly handles complex game state and compiles to static files compatible with GitHub Pages.
- **Theme Presentation:** Include a "Theme Toggle" button for instant switching between the Dark and Sepia modes, swapping logos and colors dynamically.
- **Game Layout:** A sleek, mobile-friendly "Dashboard Grid" of 4 animated cards. Clicking a card flips it over to reveal the AI solution and ROI impact.

### Topic 5: Remaining topics, adjustments, and final action roadmap
**Decisions Made:**
- **Website Scope:** Keep it simple for launch. Only include the Game, an "About" section, and a Contact form. No complex portals or e-commerce yet.
- **Execution:** Antigravity will build the React app step-by-step and handle the final deployment to GitHub Pages.
- **Future-proofing:** Ensure the architecture makes marketing text easy to edit (e.g., via a JSON config or simple component structure) so other agents can update copy seamlessly in the future.

---

## Final Action Roadmap

1. **Initialize Project:** Create the Vite + React app in the current directory and install dependencies.
2. **Setup Design System:** Implement the CSS variables for the Dark Tech and Warm Sepia palettes, and build the Theme Toggle functionality.
3. **Build Core Components:** Create the Layout, Header, About Section, and Contact Form components.
4. **Build Game Logic:** Implement the React state for Budget tracking, Efficiency scoring, and the selected solutions.
5. **Build Game UI:** Create the Dashboard Grid and animated flipping cards representing the business bottlenecks.
6. **Integration & Polish:** Wire the UI to the game logic, ensure perfect mobile responsiveness, and add the logo assets.
7. **Deployment:** Build the static assets and deploy directly to GitHub Pages.
