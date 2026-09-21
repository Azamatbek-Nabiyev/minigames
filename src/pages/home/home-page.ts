import { createHeader } from '../../shared/ui/header/header';

export function createHomePage(): HTMLElement {
  const main = document.createElement('main');
  main.append(createHeader());
  return main;
}
