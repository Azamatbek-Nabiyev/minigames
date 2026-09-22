import './hero.scss';

export function createHero(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'hero';

  section.innerHTML = `
    <div class="hero__content">
      <h1 class="hero__title">Take a Short Break &amp; Have Fun</h1>
      <p class="hero__text">
        Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.
      </p>
      <button type="button" class="hero__button">Browse Library</button>
    </div>
  `;

  return section;
}
