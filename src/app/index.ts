import { createHomePage } from '../pages/home/home-page';

export function bootstrap(): void {
  const root = document.querySelector<HTMLDivElement>('#app');

  if (!root) {
    throw new Error('Root element #app not found');
  }

  root.append(createHomePage());
}