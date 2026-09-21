import './game-development.scss';

export function createGameDevelopmentSection(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'game-dev';

  section.innerHTML = `
    <div class="game-dev__illustration" aria-hidden="true"></div>
    <div class="game-dev__card">
      <h2 class="game-dev__title">Are You a Game Developer?</h2>
      <p class="game-dev__text">
        Want to see your game on MiniGames? We're always looking for fun, engaging mini games to add to our platform. Submit your game and reach thousands of players!
      </p>
      <button type="button" class="game-dev__button">
        <span aria-hidden="true">⬆</span> Submit Form
      </button>
      <p class="game-dev__contact">
        or contact us at <a href="mailto:developers@minigames.com">developers@minigames.com</a>
      </p>
    </div>
  `;

  return section;
}
