import { createHeader } from '../../shared/ui/header/header';
import { createHero } from '../../shared/ui/hero/hero';
import { createCarousel } from '../../shared/ui/carousel/carousel';

export function createHomePage(): HTMLElement {
  const main = document.createElement('main');
  main.append(createHeader());
  main.append(createHero());
  main.append(createCarousel());
  return main;
}
