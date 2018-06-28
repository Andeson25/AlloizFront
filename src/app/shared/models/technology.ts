import {TechnologyDescription} from './technology-description';

export class Technology {

  id: number;
  name: string;
  image: string;
  descriptions: TechnologyDescription [] = [];
  available: boolean;

}
