import {Incumbency} from './incumbency';

export class Worker {

  id: number;
  name: string;
  surname: string;
  image: string;
  incumbencies: Incumbency [] = [];
  available: boolean;

}
