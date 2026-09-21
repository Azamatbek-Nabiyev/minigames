import './auth-dialog.scss';
import { store } from '../../../app/store';

export function createAuthDialog(): HTMLElement {
  const backdrop = document.createElement('div');
  backdrop.className = 'auth-backdrop';

  backdrop.innerHTML = `
    <div class="auth-dialog" role="dialog" aria-modal="true" aria-label="Authentication">
      <p>Auth form coming soon</p>
    </div>
  `;

  backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
      store.setState({ isAuthDialogOpen: false });
    }
  });

  store.subscribe(() => {
    const { isAuthDialogOpen } = store.getState();
    backdrop.classList.toggle('auth-backdrop--open', isAuthDialogOpen);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && store.getState().isAuthDialogOpen) {
      store.setState({ isAuthDialogOpen: false });
    }
  });

  return backdrop;
}
