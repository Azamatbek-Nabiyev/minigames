import islandersImage from '../../../assets/images/games/little-corners-card.jpg';
import vacationCafeImage from '../../../assets/images/games/tiny-glade-card.jpg';
import winterBurrowImage from '../../../assets/images/games/tukoni-forest-keepers-card.jpg';
import shelvePotionsImage from '../../../assets/images/games/vacation-cafe-simulator-card.jpg';
import heartopiaImage from '../../../assets/images/games/tiny-glade-card.jpg';

export interface GameCard {
  id: string;
  title: string;
  likes: string;
  rating: number;
  image: string;
}

export const carouselGames: GameCard[] = [
  {
    id: 'islanders',
    title: 'ISLANDERS: New Shores',
    likes: '54.2K',
    rating: 4.9,
    image: islandersImage,
  },
  {
    id: 'vacation-cafe',
    title: 'Vacation Cafe Simulator',
    likes: '28.7K',
    rating: 4.8,
    image: vacationCafeImage,
  },
  {
    id: 'winter-burrow',
    title: 'Winter Burrow',
    likes: '32.4K',
    rating: 4.9,
    image: winterBurrowImage,
  },
  {
    id: 'shelve-potions',
    title: 'Shelve the Potions!',
    likes: '21.3K',
    rating: 4.7,
    image: shelvePotionsImage,
  },
  { id: 'heartopia', title: 'Heartopia', likes: '46.8K', rating: 4.6, image: heartopiaImage },
];
