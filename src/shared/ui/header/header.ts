import './header.scss';

export function createHeader(): HTMLElement {
  const header = document.createElement('header');
  header.className = 'header';

  header.innerHTML = `
    <div class="header__container">
      <a href="/" class="header__logo">
        <span class="header__logo-icon">★</span>
        <span class="header__logo-text">MiniGames</span>
      </a>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li><a href="/" class="header__nav-link header__nav-link--active">Home</a></li>
          <li><a href="/" class="header__nav-link">Library</a></li>
          <li><a href="/" class="header__nav-link">Tournaments</a></li>
          <li><a href="/" class="header__nav-link">Community</a></li>
        </ul>
      </nav>

      <div class="header__actions">
        <button type="button" class="header__login-btn">Log In</button>
        <button type="button" class="header__signup-btn">Sign Up</button>
      </div>

      <button type="button" class="header__burger" aria-label="Open menu">☰</button>
    </div>
  `;

  return header;
}
