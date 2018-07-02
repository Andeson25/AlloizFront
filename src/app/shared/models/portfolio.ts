import {Image} from './image';
import {PortfolioDescription} from './portfolio-description';

export class Portfolio {

  id: number;
  name: string;
  link: string;
  images: Image [] = [];
  descriptions: PortfolioDescription [] = [];
  available: boolean;

}
