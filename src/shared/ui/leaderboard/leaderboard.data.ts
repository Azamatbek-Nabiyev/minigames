export interface LeaderboardEntry {
  rank: number;
  player: string;
  initials: string;
  avatarColor: string;
  gamesPlayed: number;
  totalScore: number;
  streak: number;
  favoriteGame: string;
}

export const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    player: 'Alex_Pro99',
    initials: 'AP',
    avatarColor: '#F4C430',
    gamesPlayed: 142,
    totalScore: 94_250,
    streak: 12,
    favoriteGame: 'Heartopia',
  },
  {
    rank: 2,
    player: 'CozyGamer_x',
    initials: 'CG',
    avatarColor: '#8FD9B6',
    gamesPlayed: 118,
    totalScore: 81_400,
    streak: 8,
    favoriteGame: 'Cat Mail Co.',
  },
  {
    rank: 3,
    player: 'MatchMaster',
    initials: 'MM',
    avatarColor: '#A8D8F0',
    gamesPlayed: 98,
    totalScore: 72_110,
    streak: 5,
    favoriteGame: 'Tiny Glade',
  },
  {
    rank: 4,
    player: 'BubblePop',
    initials: 'BP',
    avatarColor: '#E8B8E0',
    gamesPlayed: 87,
    totalScore: 65_900,
    streak: 3,
    favoriteGame: 'Whisper of the House',
  },
  {
    rank: 5,
    player: 'SudokuGod',
    initials: 'SG',
    avatarColor: '#C6CEEC',
    gamesPlayed: 74,
    totalScore: 59_320,
    streak: 2,
    favoriteGame: 'Cat Chess',
  },
];
