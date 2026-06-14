// ============================================================
// ARTE EN LUZ — Central Theme Configuration
// Edit this file to update colors, fonts, and design tokens
// across all pages. Changes apply site-wide.
// ============================================================

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#d4a843",
        "primary-dark": "#b8942e",
        "accent-gold": "#c9a96e",
        "background-light": "#f8f7f5",
        "background-dark": "#0a0a0a",
        "surface-dark": "#141414",
        "border-dark": "#2a2a2a",
        "text-muted": "#9ca3af",
        anthracite: "#050505",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        body: ["Manrope", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      letterSpacing: {
        luxury: "0.15em",
        wide: "0.05em",
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
    },
  },
}

// CSS custom properties so you can use the same tokens outside Tailwind
const style = document.createElement("style")
style.textContent = `
  :root {
    --color-primary: #d4a843;
    --color-primary-dark: #b8942e;
    --color-accent-gold: #c9a96e;
    --color-background-light: #f8f7f5;
    --color-background-dark: #0a0a0a;
    --color-surface-dark: #141414;
    --color-border-dark: #2a2a2a;
    --color-text-muted: #9ca3af;
    --color-anthracite: #050505;
    --font-display: 'Manrope', sans-serif;
    --font-body: 'Manrope', sans-serif;
    --font-serif: 'Playfair Display', serif;
  }
`
document.head.appendChild(style)
