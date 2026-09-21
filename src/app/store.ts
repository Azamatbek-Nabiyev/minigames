type Listener = () => void;

export interface AppState {
  isAuthDialogOpen: boolean;
  authDialogMode: 'login' | 'register';
  isMobileMenuOpen: boolean;
}

class Store {
  private state: AppState = {
    isAuthDialogOpen: false,
    authDialogMode: 'login',
    isMobileMenuOpen: false,
  };

  private listeners: Set<Listener> = new Set();

  private notify(): void {
    for (const listener of this.listeners) {
      listener();
    }
  }

  getState(): AppState {
    return this.state;
  }

  setState(partial: Partial<AppState>): void {
    this.state = { ...this.state, ...partial };
    this.notify();
  }

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

export const store = new Store();