/**
 * ============================================================
 *  CMS CONFIG — V2 (50% off variant)
 * ============================================================
 *  Used by index-v2.html.
 *  Duplicated from cms-config.js with brand colour and
 *  headline changes only.
 * ============================================================
 */

const CMS = {

  // ── NAV BAR ────────────────────────────────────────────────
  nav: {
    logoText:   "RAC",                          // Brand name shown in nav
    logoColor:  "#f95108",                      // Logo accent colour
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
    backgroundColor: "#e6231f",

    // Optional: set to "" to use solid colour above instead
    // backgroundGradient: "linear-gradient(135deg, #e6231f 0%, #E84E0F 100%)",

    // Main headline (supports <br> for line breaks)
    headline: "50% off<br>Breakdown Cover",

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
      ctaColor:    "#e6231f",       // Button background
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

};
