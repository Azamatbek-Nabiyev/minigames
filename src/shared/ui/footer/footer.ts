import './footer.scss';

export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class="footer__top">
      <div class="footer__brand">
        <a href="/" class="footer__logo">
          <span class="footer__logo-icon">★</span>
          <span class="footer__logo-text">MiniGames</span>
        </a>
        <p class="footer__tagline">
          Take a short break and have fun. Hundreds of curated casual mini-games right in your web browser. No download required.
        </p>
      </div>

      <nav class="footer__column" aria-labelledby="footer-explore">
        <h3 id="footer-explore" class="footer__column-title">Explore</h3>
        <ul class="footer__list">
          <li><a href="/" class="footer__link">Home</a></li>
          <li><a href="/" class="footer__link">Library</a></li>
          <li><a href="/" class="footer__link">Categories</a></li>
          <li><a href="/" class="footer__link">Tournaments</a></li>
        </ul>
      </nav>

      <nav class="footer__column" aria-labelledby="footer-company">
        <h3 id="footer-company" class="footer__column-title">Company</h3>
        <ul class="footer__list">
          <li><a href="/" class="footer__link">About Us</a></li>
          <li><a href="/" class="footer__link">Contact</a></li>
          <li><a href="/" class="footer__link">Privacy Policy</a></li>
          <li><a href="/" class="footer__link">Terms of Service</a></li>
        </ul>
      </nav>

      <div class="footer__column">
        <h3 class="footer__column-title">Community</h3>
        <div class="footer__socials">
          <a href="/" class="footer__social-link" aria-label="Share">↗</a>
          <a href="/" class="footer__social-link" aria-label="Community board">▤</a>
          <a href="/" class="footer__social-link" aria-label="RSS feed">📶</a>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <p class="footer__copyright">© 2026 MiniGames. All rights reserved.</p>
      <div class="footer__credits">
        <a href="https://rs.school/courses/short-track" class="footer__credit-link" target="_blank" rel="noopener">
          RS School
        </a>
        <a href="https://github.com/Azamatbek-Nabiyev" class="footer__credit-link" target="_blank" rel="noopener">
          @Azamatbek-Nabiyev
        </a>
        <span class="footer__credit-text">Designed with love</span>
      </div>
    </div>
  `;

  return footer;
}
