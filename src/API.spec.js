import { mock1, mock2, mock3 } from './test/mocks.js';
import { farejaLista, farejaDetalhesCard } from './API.js';

jest.mock('./API.js', () => ({
  farejaLista: jest.fn(() => Promise.resolve(mock1.results)),
  farejaDetalhesCard : jest.fn (() => Promise.resolve(mock2.movie)),
}));

describe('farejaLista', () => {
  it('deve retornar pelo menos um filme na lista de filmes', async () => {
    
    
    // Chama a função farejaLista
    const listaMock = await farejaLista();

    // Verifica se a função farejaLista() retorna pelo menos um filme
    expect(listaMock.length).toBeGreaterThan(0);
  });
});

describe('farejaDetalhesCard', () => {
  it('deve retornar os detalhes de apenas um filme', async () => {

    // Chama a função farejaDetalhesCard
    const respUmCard = await farejaDetalhesCard();

    // Verifica se a função farejaDetalhesCard() retorna os detalhes de apenas um filme
    expect(respUmCard.length).toBe(1);
  });
});

describe('farejaLista', () => {
  it('deve retornar uma mensagem de erro 404, caso a API não encontre a página', async () => {

    // Cria um mock que retorna uma mensagem de erro
    farejaLista.mockReturnValueOnce(Promise.resolve(mock3.status));
    // Chama a função farejaLista
    const respError = await farejaLista();

    // Retorna uma mensagem de erro caso a página não seja encontrada
    expect(respError).toEqual(mock3.status);
  });
});