/**
 * ============================================================
 *  CMS CONFIG — Edit this file to update your demo page
 * ============================================================
 *  Share this file alongside index.html.
 *  Both files must be in the same folder.
 * ============================================================
 */

const CMS = {

  // ── NAV BAR ────────────────────────────────────────────────
  nav: {
    logoText:   "RAC",                          // Brand name shown in nav
    logoColor:  "#F95108",                      // Logo accent colour
    navLinks: [
      "Breakdown Cover",
      "Car Insurance",
      "SMR",
      "Route Planner",
    ],
  },

  // ── HERO BANNER ────────────────────────────────────────────
  banner: {
    // Background colour of the hero banner
    backgroundColor: "#F95108",

    // Optional: set to "" to use solid colour above instead
    // backgroundGradient: "linear-gradient(135deg, #F95108 0%, #E84E0F 100%)",

    // Main headline (supports <br> for line breaks)
    headline: "Breakdown Cover<br>from £1 a month",

    // Sub-headline paragraph
    subheadline: "RAC breakdown cover keeps you moving — at home, at the roadside, or using AI.",

    // Trust badge strip (short pill labels shown under headline)
    trustBadges: [
      "No. 1 provider",
      "Fix 4/5",
      "60 mins or less",
    ],

    // Bullet point list (tick items)
    bullets: [
      "Roadside assistance across the UK",
      "Variety of addons available",
      "European Breakdown Cover available",
      "Flexible monthly payments",
    ],

    // CTA card (right-hand side)
    card: {
      heading:     "Get breakdown cover today",
      subtext:     "Join over 15 million RAC members for CPoM",
      ctaLabel:    "Get a Breakdown Quote",
      ctaColor:    "#f95108",       // Button background
      ctaTextColor:"#FFFFFF",       // Button text colour
      trustLine:   "🔒 Created by Jack",
    },
  },

  // ── COLOUR TOKENS ─────────────────────────────────────────
  // Tweak global colours here
  colors: {
    navBg:       "#1A2B4A",   // Dark navy navigation
    navText:     "#FFFFFF",   // Text colour in sitewide nav
    bannerText:  "#FFFFFF",   // All hero banner text colour
    bodyBg:      "#F5F5F5",   // Main page background colour
  },
document.getElementById('cta-button').addEventListener('click', function() {
    let stylesheet = document.getElementById('theme-stylesheet');
    
    // Check current stylesheet and switch
    if (stylesheet.getAttribute('href') === 'light-theme.css') {
        stylesheet.setAttribute('href', 'dark-theme.css');
    } else {
        stylesheet.setAttribute('href', 'light-theme.css');
    }
});

};
