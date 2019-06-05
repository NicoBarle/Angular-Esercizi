import { Comment } from './commento';

export class Post
{
  nome: string;
  tipo: string;
  prezzo: number;
  descrizione: string;
  nomeUtente: string;
  cognomeUtente: string;
  username: string;
  data: string;
  commenti: Comment[];
}
