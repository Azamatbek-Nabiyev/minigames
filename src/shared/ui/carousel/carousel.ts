import './carousel.scss';
import { carouselGames } from './carousel.data';

function createCard(game: (typeof carouselGames)[number]): string {
  return `
    <li class="carousel-card">
      <div class="carousel-card__image" style="background-image: url('${game.image}')" aria-hidden="true"></div>
      <div class="carousel-card__overlay">
        <span class="carousel-card__title">${game.title}</span>
        <div class="carousel-card__meta">
          <span class="carousel-card__rating">★ ${game.rating}</span>
          <span class="carousel-card__likes">♡ ${game.likes}</span>
        </div>
      </div>
    </li>
  `;
}

export function createCarousel(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'carousel';

  section.innerHTML = `
    <div class="carousel__header">
      <h2 class="carousel__title">New Games</h2>
      <div class="carousel__controls">
        <button type="button" class="carousel__arrow" aria-label="Previous">←</button>
        <button type="button" class="carousel__arrow carousel__arrow--active" aria-label="Next">→</button>
      </div>
    </div>
    <ul class="carousel__track">
      ${carouselGames.map((game) => createCard(game)).join('')}
    </ul>
  `;

  const track = section.querySelector<HTMLUListElement>('.carousel__track');
  const previousButton = section.querySelector<HTMLButtonElement>('[aria-label="Previous"]');
  const nextButton = section.querySelector<HTMLButtonElement>('[aria-label="Next"]');

  const scrollAmount = 320;

  previousButton?.addEventListener('click', () => {
    track?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextButton?.addEventListener('click', () => {
    track?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  return section;
}
