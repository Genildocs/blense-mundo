export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
};

export const media = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints.xxl})`,
};

const commonTokens = {
  fonts: {
    main: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
    code: "'Fira Code', 'Courier New', Courier, monospace",
  },
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem',// 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1rem',    // 16px
    lg: '1.5rem',  // 24px
    xl: '2rem',    // 32px
    '2xl': '2.5rem',// 40px
    '3xl': '3rem', // 48px
  },
  radii: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  transitions: {
    fast: '0.15s ease-in-out',
    default: '0.25s ease-in-out',
    slow: '0.4s ease-in-out',
  },
  breakpoints,
  media,
};

export const lightTheme = {
  ...commonTokens,
  name: 'light',
  colors: {
    primary: '#4f46e5',
    primaryHover: '#4338ca',
    primaryLight: '#eef2ff',
    primaryText: '#ffffff',
    secondary: '#0891b2',
    secondaryHover: '#0e7490',
    secondaryLight: '#ecfeff',
    secondaryText: '#ffffff',
    accent: '#f59e0b',
    background: '#f8fafc',
    surface: '#ffffff',
    surfaceAlt: '#f1f5f9',
    border: '#e2e8f0',
    textPrimary: '#0f172a',
    textSecondary: '#475569',
    textMuted: '#94a3b8',
    success: '#10b981',
    error: '#ef4444',
    cardShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04)',
    cardShadowHover: '0 12px 20px -3px rgba(0, 0, 0, 0.1), 0 6px 8px -4px rgba(0, 0, 0, 0.06)',
    glow: 'rgba(79, 70, 229, 0.15)',
  },
};

export const darkTheme = {
  ...commonTokens,
  name: 'dark',
  colors: {
    primary: '#6366f1',
    primaryHover: '#818cf8',
    primaryLight: 'rgba(99, 102, 241, 0.15)',
    primaryText: '#ffffff',
    secondary: '#06b6d4',
    secondaryHover: '#22d3ee',
    secondaryLight: 'rgba(6, 182, 212, 0.15)',
    secondaryText: '#ffffff',
    accent: '#fbbf24',
    background: '#0b0f19',
    surface: '#111827',
    surfaceAlt: '#1f2937',
    border: '#374151',
    textPrimary: '#f8fafc',
    textSecondary: '#cbd5e1',
    textMuted: '#64748b',
    success: '#34d399',
    error: '#f87171',
    cardShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3)',
    cardShadowHover: '0 12px 24px -3px rgba(0, 0, 0, 0.6), 0 6px 12px -4px rgba(0, 0, 0, 0.4)',
    glow: 'rgba(99, 102, 241, 0.25)',
  },
};
