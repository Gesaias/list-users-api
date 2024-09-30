export const userData: () => Promise<
  {
    name: string;
    email: string;
    telefone: string;
    type_user: string;
  }[]
> = async () => [
  {
    name: 'Gesaias Alves de Souza',
    email: 'gesaiasalvessouza@gmail.com',
    telefone: '992921994',
    type_user: 'fisica',
  },
  {
    name: 'Jeferson Lima',
    email: 'example1@gmail.com',
    telefone: '999999999',
    type_user: 'juridica',
  },
  {
    name: 'Davi Lope Marcel',
    email: 'example2@gmail.com',
    telefone: '999999991',
    type_user: 'fisica',
  },
  {
    name: 'João Gonçalves Junior',
    email: 'example3@gmail.com',
    telefone: '999999992',
    type_user: 'juridica',
  },
  {
    name: 'Hemerson William de Assis Souza',
    email: 'example4@gmail.com',
    telefone: '999999993',
    type_user: 'juridica',
  },
  {
    name: 'Aparecida Pereira de Souza Silva',
    email: 'example5@gmail.com',
    telefone: '999999994',
    type_user: 'fisica',
  },
  {
    name: 'Gedaias Alves da Silva',
    email: 'example6@gmail.com',
    telefone: '999999995',
    type_user: 'fisica',
  },
  {
    name: 'Janyfer Valbuza Oliveira',
    email: 'example7@gmail.com',
    telefone: '999999996',
    type_user: 'fisica',
  },
];
