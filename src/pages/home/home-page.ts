import { createHeader } from '../../shared/ui/header/header';
import { createHero } from '../../shared/ui/hero/hero';
import { createCarousel } from '../../shared/ui/carousel/carousel';
import { createLeaderboard } from '../../shared/ui/leaderboard/leaderboard';
import { createGameDevSection } from '../../shared/ui/game-dev/game-dev';

export function createHomePage(): HTMLElement {
  const main = document.createElement('main');
  main.append(createHeader());
  main.append(createHero());
  main.append(createCarousel());
  main.append(createLeaderboard());
  main.append(createGameDevSection());
  return main;
}
