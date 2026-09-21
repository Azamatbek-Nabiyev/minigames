import './leaderboard.scss';
import { leaderboardData } from './leaderboard.data';

function createRow(entry: (typeof leaderboardData)[number]): string {
  const rankClass = entry.rank === 1 ? 'leaderboard__rank--first' : '';

  return `
    <tr>
      <th scope="row" class="leaderboard__rank ${rankClass}">#${entry.rank}</th>
      <td>
        <div class="leaderboard__player">
          <span class="leaderboard__avatar" style="background-color: ${entry.avatarColor}">${entry.initials}</span>
          <span class="leaderboard__player-name">${entry.player}</span>
        </div>
      </td>
      <td>${entry.gamesPlayed}</td>
      <td>${entry.totalScore.toLocaleString('en-US')}</td>
      <td><span class="leaderboard__streak">🔥 ${entry.streak} days</span></td>
      <td><span class="leaderboard__badge">${entry.favoriteGame}</span></td>
    </tr>
  `;
}

export function createLeaderboard(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'leaderboard';

  section.innerHTML = `
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
          ${leaderboardData.map((entry) => createRow(entry)).join('')}
        </tbody>
      </table>
    </div>
  `;

  return section;
}
