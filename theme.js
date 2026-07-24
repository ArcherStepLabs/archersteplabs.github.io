const THEMES = {
    sepia: {
        '--bg-main': '#f3efe6',
        '--bg-card': '#ffffff',
        '--bg-accent': '#e8e3d7',
        '--text-primary': '#2d241e',
        '--text-secondary': '#6b5f55',
        '--text-muted': '#8e8174',
        '--brand-primary': '#a7794f',
        '--brand-secondary': '#805934',
        '--brand-gradient': 'linear-gradient(135deg, #a7794f 0%, #805934 100%)',
        '--border-color': '#e9e4dc',
        '--header-bg': 'rgba(243, 239, 230, 0.85)',
        '--header-scrolled-bg': 'rgba(243, 239, 230, 0.95)',
        '--logo-box-bg': '#faf8f5',
        '--logo-box-border': '#e6dfd5',
        '--logo-src': 'ASL Logo Sepia Transparent 2048x2048.png'
    },
    dark: {
        '--bg-main': '#0F172A',
        '--bg-card': '#1E293B',
        '--bg-accent': '#334155',
        '--text-primary': '#F8FAFC',
        '--text-secondary': '#CBD5E1',
        '--text-muted': '#94A3B8',
        '--brand-primary': '#2196F2', /* ASL Blue */
        '--brand-secondary': '#4EF2C4', /* ASL Aqua */
        '--brand-gradient': 'linear-gradient(135deg, #2196F2 0%, #4EF2C4 100%)',
        '--border-color': '#334155',
        '--header-bg': 'rgba(15, 23, 42, 0.85)',
        '--header-scrolled-bg': 'rgba(15, 23, 42, 0.95)',
        '--logo-box-bg': '#1E293B',
        '--logo-box-border': '#334155',
        '--logo-src': 'ASL Full Logo Transparent 2048x2048.png'
    }
};

function applyTheme(themeName) {
    const theme = THEMES[themeName];
    for (const [key, value] of Object.entries(theme)) {
        if (key === '--logo-src') {
            document.querySelectorAll('.theme-logo').forEach(img => {
                img.src = value;
            });
        } else {
            document.documentElement.style.setProperty(key, value);
        }
    }
    localStorage.setItem('asl-theme', themeName);
    
    // Update toggle button icon
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.innerHTML = themeName === 'dark' ? '☀️' : '🌙';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('asl-theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Default to dark theme unless sepia is explicitly saved
    const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'sepia');
    applyTheme(initialTheme);

    // Setup toggle listener
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = localStorage.getItem('asl-theme') || 'sepia';
            applyTheme(currentTheme === 'sepia' ? 'dark' : 'sepia');
        });
    }
});
