import { Post } from './post';

export const Posts: Post[] = [
  { nome: 'iPhone X',
    tipo: 'TECNOLOGIA',
    prezzo: 1100,
    descrizione:'TELEFONO BELLO FIGO SUEG',
    nomeUtente:'Egidio',
    cognomeUtente:'Bello',
    username:'sughettoegidio',
    data:'alle 23:10 il 56/32/3019',
    commenti:[
      {
        testo:'Che sughetto',
        cognomeUtente: 'Sfigato',
        nomeUtente:'Hater',
        username:'yolooo',
        data: 'alle 23:10 il 56/32/3019'
      }]
  },
  { nome:'Pesce Ruvido',
    tipo:'Montagna',
    prezzo:256789,
    descrizione:'Verniciatura Cromata SKRT',
    nomeUtente:'Giorgia',
    cognomeUtente:'Frittoli',
    username:'giorgiafrittoli',
    data:'alle 23:10 il 56/32/3019',
    commenti:[
      { testo:'Tesso questo flow con le dita',
        cognomeUtente: 'Sfigato',
        nomeUtente:'Hater',
        username:'yolooo',
        data: 'alle 23:10 il 56/32/3019'
      }]
  },
  { nome:'UN UOMO',
    tipo:'immigrante',
    prezzo:0,
    descrizione:'taliani tuti rasisti',
    nomeUtente:'Mimmo',
    cognomeUtente:'Grosso',
    username:'mimmone',
    data:'alle 23:10 il 56/32/3019',
    commenti:[
      { testo:'CHI?',
        cognomeUtente: 'Sfigato',
        nomeUtente:'Hater',
        username:'yolooo',
        data: 'alle 23:10 il 56/32/3019'
      },
      { testo:'UN UOMO',
        cognomeUtente: 'Sfigato',
        nomeUtente:'Hater',
        username:'yolooo',
        data: 'alle 23:10 il 56/32/3019'
      }]
  }
];
