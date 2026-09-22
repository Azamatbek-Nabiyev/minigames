import './header.scss';
import { store } from '../../../app/store';
import { createMobileMenu } from '../mobile-menu/mobile-menu';

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

      <button type="button" class="header__burger" aria-label="Open menu" aria-expanded="false">
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
      </button>
    </div>
  `;

  const burgerButton = header.querySelector<HTMLButtonElement>('.header__burger');
  const mobileMenu = createMobileMenu();
  header.append(mobileMenu);

  burgerButton?.addEventListener('click', () => {
    const { isMobileMenuOpen } = store.getState();
    store.setState({ isMobileMenuOpen: !isMobileMenuOpen });
  });

  const loginButton = header.querySelector<HTMLButtonElement>('.header__login-btn');
  const signupButton = header.querySelector<HTMLButtonElement>('.header__signup-btn');

  loginButton?.addEventListener('click', () => {
    store.setState({ isAuthDialogOpen: true, authDialogMode: 'login' });
  });

  signupButton?.addEventListener('click', () => {
    store.setState({ isAuthDialogOpen: true, authDialogMode: 'register' });
  });

  store.subscribe(() => {
    const { isMobileMenuOpen } = store.getState();
    burgerButton?.classList.toggle('header__burger--open', isMobileMenuOpen);
    burgerButton?.setAttribute('aria-expanded', String(isMobileMenuOpen));
  });

  return header;
}
