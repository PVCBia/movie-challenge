// Este arquivo mostra como podemos criar arquivos com especificações (expressadas como
// testes unitários) de nossos componentes.

import App from './App.js';

describe('App', () => {
  it('deve renderizar a página', () => {
    const inserirListaDeFilmes = App();
    expect(inserirListaDeFilmes instanceof HTMLElement).toBe(true);
  });
});
