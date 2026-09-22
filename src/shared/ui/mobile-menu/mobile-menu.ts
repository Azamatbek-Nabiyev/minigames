import './mobile-menu.scss';
import { store } from '../../../app/store';

export function createMobileMenu(): HTMLElement {
  const menu = document.createElement('div');
  menu.className = 'mobile-menu';

  menu.innerHTML = `
    <button type="button" class="mobile-menu__close" aria-label="Close menu">×</button>
    <nav class="mobile-menu__nav">
      <ul class="mobile-menu__nav-list">
        <li><a href="/" class="mobile-menu__nav-link">Home</a></li>
        <li><a href="/" class="mobile-menu__nav-link">Library</a></li>
        <li><a href="/" class="mobile-menu__nav-link">Tournaments</a></li>
        <li><a href="/" class="mobile-menu__nav-link">Community</a></li>
      </ul>
    </nav>
    <div class="mobile-menu__actions">
      <button type="button" class="mobile-menu__login-btn">Log In</button>
      <button type="button" class="mobile-menu__signup-btn">Sign Up</button>
    </div>
  `;

  const closeButton = menu.querySelector<HTMLButtonElement>('.mobile-menu__close');
  const loginButton = menu.querySelector<HTMLButtonElement>('.mobile-menu__login-btn');
  const signupButton = menu.querySelector<HTMLButtonElement>('.mobile-menu__signup-btn');

  closeButton?.addEventListener('click', () => {
    store.setState({ isMobileMenuOpen: false });
  });

  loginButton?.addEventListener('click', () => {
    store.setState({ isMobileMenuOpen: false, isAuthDialogOpen: true, authDialogMode: 'login' });
  });

  signupButton?.addEventListener('click', () => {
    store.setState({ isMobileMenuOpen: false, isAuthDialogOpen: true, authDialogMode: 'register' });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && store.getState().isMobileMenuOpen) {
      store.setState({ isMobileMenuOpen: false });
    }
  });

  store.subscribe(() => {
    const { isMobileMenuOpen } = store.getState();
    menu.classList.toggle('mobile-menu--open', isMobileMenuOpen);
  });

  return menu;
}
