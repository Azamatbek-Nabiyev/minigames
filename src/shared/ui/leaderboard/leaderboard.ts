import './leaderboard.scss';
import { leaderboardData } from './leaderboard.data';

function createRow(entry: (typeof leaderboardData)[number]): string {
  return `
    <tr>
      <th scope="row">#${entry.rank}</th>
      <td>${entry.player}</td>
      <td class="leaderboard__optional">${entry.gamesPlayed}</td>
      <td>${entry.totalScore.toLocaleString('en-US')}</td>
      <td>🔥 ${entry.streak}d</td>
      <td class="leaderboard__optional">${entry.favoriteGame}</td>
    </tr>
  `;
}

export function createLeaderboard(): HTMLElement {
  const section = document.createElement('section');
  section.className = 'leaderboard';

  section.innerHTML = `
    <h2 class="leaderboard__title">Top Players This Week</h2>
    <table class="leaderboard__table">
      <caption class="visually-hidden">Weekly top players ranking</caption>
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Player</th>
          <th scope="col" class="leaderboard__optional">Games</th>
          <th scope="col">Score</th>
          <th scope="col">Streak</th>
          <th scope="col" class="leaderboard__optional">Favorite</th>
        </tr>
      </thead>
      <tbody>
        ${leaderboardData.map((entry) => createRow(entry)).join('')}
      </tbody>
    </table>
  `;

  return section;
}
