import { Author, AUTHORS } from './author';
export interface Book {
  id?:number;
  title:string;
  author:Author;
  description:string;
  cover:string;
}

export const BOOKS = [
  {id:1,title:'Zakon Krańca Świata tom I',author:AUTHORS[1],description:'Super książka!',cover:'assets/covers/a-book-g2166f5c0f_640.jpg'},
  {id:2,title:'Zakon Krańca Świata tom II',author:AUTHORS[1],description:'Bardzo ciekawy drugi tom.',cover:'assets/covers/a-book-g2166f5c0f_640.jpg'},
  {id:3,title:'Pani Jeziora',author:AUTHORS[0],description:'Tom 5 sagi o wiedźminie.',cover:'assets/covers/a-book-g2166f5c0f_640.jpg'},
];
