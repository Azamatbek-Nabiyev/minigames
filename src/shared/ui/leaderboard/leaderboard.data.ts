export interface LeaderboardEntry {
  rank: number;
  player: string;
  gamesPlayed: number;
  totalScore: number;
  streak: number;
  favoriteGame: string;
}

export const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    player: 'Alex_Pro99',
    gamesPlayed: 142,
    totalScore: 94_250,
    streak: 12,
    favoriteGame: 'Heartopia',
  },
  {
    rank: 2,
    player: 'CozyGamer_x',
    gamesPlayed: 118,
    totalScore: 81_400,
    streak: 8,
    favoriteGame: 'Cat Mail Co.',
  },
  {
    rank: 3,
    player: 'MatchMaster',
    gamesPlayed: 98,
    totalScore: 72_110,
    streak: 5,
    favoriteGame: 'Tiny Glade',
  },
  {
    rank: 4,
    player: 'BubblePop',
    gamesPlayed: 87,
    totalScore: 65_900,
    streak: 3,
    favoriteGame: 'Whisper of the House',
  },
  {
    rank: 5,
    player: 'SudokuGod',
    gamesPlayed: 74,
    totalScore: 59_320,
    streak: 2,
    favoriteGame: 'Cat Chess',
  },
];
