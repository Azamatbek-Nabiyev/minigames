import './auth-dialog.scss';
import { store } from '../../../app/store';

export function createAuthDialog(): HTMLElement {
  const backdrop = document.createElement('div');
  backdrop.className = 'auth-backdrop';

  backdrop.innerHTML = `
    <div class="auth-dialog" role="dialog" aria-modal="true" aria-label="Authentication">
      <div class="auth-dialog__tabs" role="tablist">
        <button type="button" class="auth-dialog__tab" data-mode="login" role="tab">Login</button>
        <button type="button" class="auth-dialog__tab" data-mode="register" role="tab">Register</button>
      </div>

      <div class="auth-dialog__panels">
        <div class="auth-dialog__panel" data-panel="login">
          <h2 class="auth-dialog__title">Welcome Back!</h2>
          <p class="auth-dialog__subtitle">Sign in to resume your games and progress.</p>
          <p class="auth-dialog__switch-text">
            Don't have an account?
            <a href="#" class="auth-dialog__switch-link" data-mode="register">Register</a>
          </p>
        </div>

        <div class="auth-dialog__panel" data-panel="register">
          <h2 class="auth-dialog__title">Create Account</h2>
          <p class="auth-dialog__subtitle">Join MiniGames to track your score &amp; streak.</p>
          <p class="auth-dialog__switch-text">
            Already have an account?
            <a href="#" class="auth-dialog__switch-link" data-mode="login">Login</a>
          </p>
        </div>
      </div>
    </div>
  `;

  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      store.setState({ isAuthDialogOpen: false });
    }
  });

  const switchTriggers = backdrop.querySelectorAll<HTMLElement>('[data-mode]');

  for (const trigger of switchTriggers) {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      const mode = trigger.dataset.mode;

      if (mode === 'login' || mode === 'register') {
        store.setState({ authDialogMode: mode });
      }
    });
  }

  const tabs = backdrop.querySelectorAll<HTMLButtonElement>('.auth-dialog__tab');
  const panels = backdrop.querySelectorAll<HTMLDivElement>('.auth-dialog__panel');

  store.subscribe(() => {
    const { isAuthDialogOpen, authDialogMode } = store.getState();

    backdrop.classList.toggle('auth-backdrop--open', isAuthDialogOpen);

    for (const tab of tabs) {
      const isActive = tab.dataset.mode === authDialogMode;
      tab.classList.toggle('auth-dialog__tab--active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    }

    for (const panel of panels) {
      panel.classList.toggle('auth-dialog__panel--active', panel.dataset.panel === authDialogMode);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && store.getState().isAuthDialogOpen) {
      store.setState({ isAuthDialogOpen: false });
    }
  });

  return backdrop;
}
