(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new class{state={isAuthDialogOpen:!1,authDialogMode:`login`,isMobileMenuOpen:!1};listeners=new Set;notify(){for(let e of this.listeners)e()}getState(){return this.state}setState(e){this.state={...this.state,...e},this.notify()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}};function t(){let t=document.createElement(`div`);t.className=`mobile-menu`,t.innerHTML=`
    <button type="button" class="mobile-menu__close" aria-label="Close menu">×</button>
    <nav class="mobile-menu__nav">
      <ul class="mobile-menu__nav-list">
        <li><a href="/" class="mobile-menu__nav-link">Home</a></li>
        <li><a href="/" class="mobile-menu__nav-link">Library</a></li>
        <li><a href="/" class="mobile-menu__nav-link">Tournaments</a></li>
        <li><a href="/" class="mobile-menu__nav-link">Community</a></li>
      </ul>
    </nav>
    <div class="mobile-menu__actions">
      <button type="button" class="mobile-menu__login-btn">Log In</button>
      <button type="button" class="mobile-menu__signup-btn">Sign Up</button>
    </div>
  `;let n=t.querySelector(`.mobile-menu__close`),r=t.querySelector(`.mobile-menu__login-btn`),i=t.querySelector(`.mobile-menu__signup-btn`);return n?.addEventListener(`click`,()=>{e.setState({isMobileMenuOpen:!1})}),r?.addEventListener(`click`,()=>{e.setState({isMobileMenuOpen:!1,isAuthDialogOpen:!0,authDialogMode:`login`})}),i?.addEventListener(`click`,()=>{e.setState({isMobileMenuOpen:!1,isAuthDialogOpen:!0,authDialogMode:`register`})}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.getState().isMobileMenuOpen&&e.setState({isMobileMenuOpen:!1})}),e.subscribe(()=>{let{isMobileMenuOpen:n}=e.getState();t.classList.toggle(`mobile-menu--open`,n)}),t}function n(){let n=document.createElement(`header`);n.className=`header`,n.innerHTML=`
    <div class="header__container">
      <a href="/" class="header__logo">
        <span class="header__logo-icon">★</span>
        <span class="header__logo-text">MiniGames</span>
      </a>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li><a href="/" class="header__nav-link header__nav-link--active">Home</a></li>
          <li><a href="/" class="header__nav-link">Library</a></li>
          <li><a href="/" class="header__nav-link">Tournaments</a></li>
          <li><a href="/" class="header__nav-link">Community</a></li>
        </ul>
      </nav>

      <div class="header__actions">
        <button type="button" class="header__login-btn">Log In</button>
        <button type="button" class="header__signup-btn">Sign Up</button>
      </div>

      <button type="button" class="header__burger" aria-label="Open menu" aria-expanded="false">
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
      </button>
    </div>
  `;let r=n.querySelector(`.header__burger`),i=t();n.append(i),r?.addEventListener(`click`,()=>{let{isMobileMenuOpen:t}=e.getState();e.setState({isMobileMenuOpen:!t})});let a=n.querySelector(`.header__login-btn`),o=n.querySelector(`.header__signup-btn`);return a?.addEventListener(`click`,()=>{e.setState({isAuthDialogOpen:!0,authDialogMode:`login`})}),o?.addEventListener(`click`,()=>{e.setState({isAuthDialogOpen:!0,authDialogMode:`register`})}),e.subscribe(()=>{let{isMobileMenuOpen:t}=e.getState();r?.classList.toggle(`header__burger--open`,t),r?.setAttribute(`aria-expanded`,String(t))}),n}function r(){let e=document.createElement(`section`);return e.className=`hero`,e.innerHTML=`
    <div class="hero__content">
      <h1 class="hero__title">Take a Short Break &amp; Have Fun</h1>
      <p class="hero__text">
        Discover hundreds of curated casual mini-games. Play instantly in your browser — puzzle, match 3, farm, and board classics.
      </p>
      <button type="button" class="hero__button">Browse Library</button>
    </div>
  `,e}var i=`/minigames/assets/little-corners-card-BzTzTJLT.jpg`,a=`/minigames/assets/tiny-glade-card-CS2XLEzK.jpg`,o=[{id:`islanders`,title:`ISLANDERS: New Shores`,likes:`54.2K`,rating:4.9,image:i},{id:`vacation-cafe`,title:`Vacation Cafe Simulator`,likes:`28.7K`,rating:4.8,image:a},{id:`winter-burrow`,title:`Winter Burrow`,likes:`32.4K`,rating:4.9,image:`/minigames/assets/tukoni-forest-keepers-card-CkPF-Hda.jpg`},{id:`shelve-potions`,title:`Shelve the Potions!`,likes:`21.3K`,rating:4.7,image:`/minigames/assets/vacation-cafe-simulator-card-Bzcyczbo.jpg`},{id:`heartopia`,title:`Heartopia`,likes:`46.8K`,rating:4.6,image:a}];function s(e){return`
    <li class="carousel-card">
      <div class="carousel-card__image" style="background-image: url('${e.image}')" aria-hidden="true"></div>
      <div class="carousel-card__overlay">
        <span class="carousel-card__title">${e.title}</span>
        <div class="carousel-card__meta">
          <span class="carousel-card__rating">★ ${e.rating}</span>
          <span class="carousel-card__likes">♡ ${e.likes}</span>
        </div>
      </div>
    </li>
  `}function c(){let e=document.createElement(`section`);e.className=`carousel`,e.innerHTML=`
    <div class="carousel__header">
      <h2 class="carousel__title">New Games</h2>
      <div class="carousel__controls">
        <button type="button" class="carousel__arrow" aria-label="Previous">←</button>
        <button type="button" class="carousel__arrow carousel__arrow--active" aria-label="Next">→</button>
      </div>
    </div>
    <ul class="carousel__track">
      ${o.map(e=>s(e)).join(``)}
    </ul>
  `;let t=e.querySelector(`.carousel__track`),n=e.querySelector(`[aria-label="Previous"]`),r=e.querySelector(`[aria-label="Next"]`);return n?.addEventListener(`click`,()=>{t?.scrollBy({left:-320,behavior:`smooth`})}),r?.addEventListener(`click`,()=>{t?.scrollBy({left:320,behavior:`smooth`})}),e}var l=[{rank:1,player:`Alex_Pro99`,initials:`AP`,avatarColor:`#F4C430`,gamesPlayed:142,totalScore:94250,streak:12,favoriteGame:`Heartopia`},{rank:2,player:`CozyGamer_x`,initials:`CG`,avatarColor:`#8FD9B6`,gamesPlayed:118,totalScore:81400,streak:8,favoriteGame:`Cat Mail Co.`},{rank:3,player:`MatchMaster`,initials:`MM`,avatarColor:`#A8D8F0`,gamesPlayed:98,totalScore:72110,streak:5,favoriteGame:`Tiny Glade`},{rank:4,player:`BubblePop`,initials:`BP`,avatarColor:`#E8B8E0`,gamesPlayed:87,totalScore:65900,streak:3,favoriteGame:`Whisper of the House`},{rank:5,player:`SudokuGod`,initials:`SG`,avatarColor:`#C6CEEC`,gamesPlayed:74,totalScore:59320,streak:2,favoriteGame:`Cat Chess`}];function u(e){return`
    <tr>
      <th scope="row" class="leaderboard__rank ${e.rank===1?`leaderboard__rank--first`:``}">#${e.rank}</th>
      <td>
        <div class="leaderboard__player">
          <span class="leaderboard__avatar" style="background-color: ${e.avatarColor}">${e.initials}</span>
          <span class="leaderboard__player-name">${e.player}</span>
        </div>
      </td>
      <td>${e.gamesPlayed}</td>
      <td>${e.totalScore.toLocaleString(`en-US`)}</td>
      <td><span class="leaderboard__streak">🔥 ${e.streak} days</span></td>
      <td><span class="leaderboard__badge">${e.favoriteGame}</span></td>
    </tr>
  `}function d(){let e=document.createElement(`section`);return e.className=`leaderboard`,e.innerHTML=`
    <h2 class="leaderboard__title">Top Players This Week</h2>
    <div class="leaderboard__table-wrapper">
      <table class="leaderboard__table">
        <caption class="visually-hidden">Weekly top players ranking</caption>
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Player</th>
            <th scope="col">Games Played</th>
            <th scope="col">Total Score</th>
            <th scope="col">Streak</th>
            <th scope="col">Favorite Game</th>
          </tr>
        </thead>
        <tbody>
          ${l.map(e=>u(e)).join(``)}
        </tbody>
      </table>
    </div>
  `,e}function f(){let e=document.createElement(`section`);return e.className=`game-dev`,e.innerHTML=`
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
  `,e}function p(){let e=document.createElement(`footer`);return e.className=`footer`,e.innerHTML=`
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
  `,e}function m(){let t=document.createElement(`div`);t.className=`auth-backdrop`,t.innerHTML=`
    <div class="auth-dialog" role="dialog" aria-modal="true" aria-label="Authentication">
      <div class="auth-dialog__tabs" role="tablist">
        <button type="button" class="auth-dialog__tab" data-mode="login" role="tab">Login</button>
        <button type="button" class="auth-dialog__tab" data-mode="register" role="tab">Register</button>
      </div>

      <div class="auth-dialog__panels">
        <div class="auth-dialog__panel" data-panel="login">
          <h2 class="auth-dialog__title">Welcome Back!</h2>
          <p class="auth-dialog__subtitle">Sign in to resume your games and progress.</p>

          <form class="auth-dialog__form" novalidate>
            <div class="auth-dialog__field">
              <label for="login-email" class="auth-dialog__label">Email Address</label>
              <input
                type="email"
                id="login-email"
                name="email"
                class="auth-dialog__input"
                placeholder="e.g. alex@minigames.com"
                autocomplete="email"
              />
            </div>

            <div class="auth-dialog__field">
              <label for="login-password" class="auth-dialog__label">Password</label>
              <input
                type="password"
                id="login-password"
                name="password"
                class="auth-dialog__input"
                placeholder="••••••••"
                autocomplete="current-password"
              />
            </div>

            <a href="#" class="auth-dialog__forgot-link">Forgot Password?</a>

            <button type="submit" class="auth-dialog__submit">Login</button>
          </form>

          <p class="auth-dialog__switch-text">
            Don't have an account?
            <a href="#" class="auth-dialog__switch-link" data-mode="register">Register</a>
          </p>
        </div>

        <div class="auth-dialog__panel" data-panel="register">
          <h2 class="auth-dialog__title">Create Account</h2>
          <p class="auth-dialog__subtitle">Join MiniGames to track your score &amp; streak.</p>

          <form class="auth-dialog__form" novalidate>
            <div class="auth-dialog__field">
              <label for="register-username" class="auth-dialog__label">Username</label>
              <input
                type="text"
                id="register-username"
                name="username"
                class="auth-dialog__input"
                placeholder="e.g. CozyGamer_99"
                autocomplete="username"
              />
            </div>

            <div class="auth-dialog__field">
              <label for="register-email" class="auth-dialog__label">Email Address</label>
              <input
                type="email"
                id="register-email"
                name="email"
                class="auth-dialog__input"
                placeholder="your.email@domain.com"
                autocomplete="email"
              />
            </div>

            <div class="auth-dialog__field">
              <label for="register-password" class="auth-dialog__label">Password</label>
              <input
                type="password"
                id="register-password"
                name="password"
                class="auth-dialog__input"
                placeholder="Min. 8 characters"
                autocomplete="new-password"
              />
            </div>

            <div class="auth-dialog__field">
              <label for="register-confirm-password" class="auth-dialog__label">Confirm Password</label>
              <input
                type="password"
                id="register-confirm-password"
                name="confirmPassword"
                class="auth-dialog__input"
                placeholder="Repeat your password"
                autocomplete="new-password"
              />
            </div>

            <button type="submit" class="auth-dialog__submit">Create Account</button>
          </form>

          <p class="auth-dialog__switch-text">
            Already have an account?
            <a href="#" class="auth-dialog__switch-link" data-mode="login">Login</a>
          </p>
        </div>
      </div>
    </div>
  `,t.addEventListener(`click`,n=>{n.target===t&&e.setState({isAuthDialogOpen:!1})});let n=t.querySelectorAll(`[data-mode]`);for(let t of n)t.addEventListener(`click`,n=>{n.preventDefault();let r=t.dataset.mode;(r===`login`||r===`register`)&&e.setState({authDialogMode:r})});let r=t.querySelectorAll(`.auth-dialog__tab`),i=t.querySelectorAll(`.auth-dialog__panel`);return e.subscribe(()=>{let{isAuthDialogOpen:n,authDialogMode:a}=e.getState();t.classList.toggle(`auth-backdrop--open`,n);for(let e of r){let t=e.dataset.mode===a;e.classList.toggle(`auth-dialog__tab--active`,t),e.setAttribute(`aria-selected`,String(t))}for(let e of i)e.classList.toggle(`auth-dialog__panel--active`,e.dataset.panel===a)}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.getState().isAuthDialogOpen&&e.setState({isAuthDialogOpen:!1})}),t}function h(){let e=document.createElement(`main`);return e.append(n()),e.append(r()),e.append(c()),e.append(d()),e.append(f()),e.append(p()),e.append(m()),e}function g(){let e=document.querySelector(`#app`);if(!e)throw Error(`Root element #app not found`);e.append(h())}g();
//# sourceMappingURL=index-D-GiP7tb.js.map