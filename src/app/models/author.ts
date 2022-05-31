import { Book } from './book';
export interface Author {
  id?:number;
  name:string;
}

export const AUTHORS = [
  {id:1,name:'Andrzej Sapkowski'},
  {id:2,name:'Maja Lidia Kossakowska'}
];
