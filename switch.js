const switcher = document.getElementById('switcher');
// Getting style section by a unique role
const styles = document.querySelector('[role="theme-colors"]');

switcher.addEventListener('change', (e) => {
  const theme = e.currentTarget.checked ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  styles.innerHTML = getThemeVariables(themes[theme]);
});
