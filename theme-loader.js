(function() {
    const STORAGE_KEY = 'pageThemeMode';
    const theme = localStorage.getItem(STORAGE_KEY) || 'new';

    const pathSegments = window.location.pathname
        .split('/')
        .filter(seg => seg.length && seg !== '.');
    const relativeDepth = Math.max(0, pathSegments.length - 1);
    const prefix = relativeDepth > 0 ? '../'.repeat(relativeDepth) : './';
    const stylesheet = document.getElementById('themeStylesheet');
    const cssPath = `${prefix}css/style(${theme}).css`;

    if (stylesheet) {
        stylesheet.href = cssPath;
    }
})();
