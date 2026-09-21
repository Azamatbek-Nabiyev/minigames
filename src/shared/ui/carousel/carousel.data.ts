export interface GameCard {
  id: string;
  title: string;
  likes: string;
  rating: number;
}

export const carouselGames: GameCard[] = [
  { id: 'islanders', title: 'ISLANDERS: New Shores', likes: '54.2K', rating: 4.9 },
  { id: 'vacation-cafe', title: 'Vacation Cafe Simulator', likes: '28.7K', rating: 4.8 },
  { id: 'winter-burrow', title: 'Winter Burrow', likes: '32.4K', rating: 4.9 },
  { id: 'shelve-potions', title: 'Shelve the Potions!', likes: '21.3K', rating: 4.7 },
  { id: 'heartopia', title: 'Heartopia', likes: '46.8K', rating: 4.6 },
];
