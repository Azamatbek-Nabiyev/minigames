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
         <a href="/" class="footer__social-link" aria-label="Share">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
</a>
<a href="/" class="footer__social-link" aria-label="Community board">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></path>
    <line x1="7" y1="8" x2="17" y2="8"></line>
    <line x1="7" y1="11" x2="14" y2="11"></line>
  </svg>
</a>
<a href="/" class="footer__social-link" aria-label="RSS feed">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 11a9 9 0 0 1 9 9"></path>
    <path d="M4 4a16 16 0 0 1 16 16"></path>
    <circle cx="5" cy="19" r="1"></circle>
  </svg>
</a>
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
