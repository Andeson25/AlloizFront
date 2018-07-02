import {Image} from './image';
import {PortfolioDescription} from './portfolio-description';

export class Portfolio {

  id: number;
  name: string;
  link: string;
  images: string [] = [];
  descriptions: PortfolioDescription [] = [];
  available: boolean;

}
