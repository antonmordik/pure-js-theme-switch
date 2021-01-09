const themes = {
  light: {
    primary: '#3A86FF',
    secondary: '#2C365E',
    background: '#FEF9EF'
  },
  dark: {
    primary: '#FB5607',
    secondary: '#FEF9EF',
    background: '#2C365E'
  }
};
const DEFAULT_THEME = Object.keys(themes)[0];

setup();

function setup() {
  let theme = localStorage.getItem('theme');
  if (!Object.keys(themes).includes(theme)) {
    theme = DEFAULT_THEME;
  }
  const defs = document.createElement('style');
  // Adding a unique role for further selection
  defs.setAttribute('role', 'theme-colors');
  defs.innerHTML = getThemeVariables(themes[theme]);
  document.head.appendChild(defs);
}

function getThemeVariables(config) {
  return `:root{ ${
    Object.entries(config)
      .map(([name, value]) => `--${name}: ${value};`)
      .join(' ')
    } }`;
}
