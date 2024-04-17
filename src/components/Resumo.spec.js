import Resumo from './Resumo.js';

describe('Resumo', () => {
    it('deve renderizar o card do resumo do filme', () => {
        const mostraResumo = Resumo();
        expect(mostraResumo instanceof HTMLElement).toBe(true);
    });
});
