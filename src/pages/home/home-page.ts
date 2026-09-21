import { createHeader } from '../../shared/ui/header/header';
import { createHero } from '../../shared/ui/hero/hero';

export function createHomePage(): HTMLElement {
  const main = document.createElement('main');
  main.append(createHeader());
  main.append(createHero());
  return main;
}
