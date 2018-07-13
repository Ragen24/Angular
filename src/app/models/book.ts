import { BookStatus} from '../enumerates/book-status.enum';
import { Author } from './author';

export class Book {
  id: number;
  title: string;
  author: Author;
  price: number;
  publicationDate: string;
  recieptDate: Date = new Date();
  status: BookStatus;
  description: Date = new Date();
}





