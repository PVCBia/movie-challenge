// Recomendamos usar src / main.js como ponto de entrada da sua aplicação. O boilerplate inclui
// este arquivo para conectar ou montar o componente App no DOM. Desta forma poderemos fazer testes
// unitários de nossos componentes sem necessidade de que estejam conectados a um DOM global.

// - importar componentes:
import App from './components/App.js';
import Resumo from './components/Resumo.js';

// - Adicionar os componentes ao elemento com o ID "recebeDados" (main)
const lista = document.getElementById('recebeDados')

const trocaPagina = (movieId) => {
    lista.appendChild(Resumo(movieId));
}

// verificar se a parte de hash da URL esta vazia (não há âncora específica)
// limpa o conteúdo html e cria dinamicamente o App

// se a hash da URL não estiver vazia, o código do segundo bloco será executado.
// chamando a função trocaPagina e passando a parte de hash da URL como argumento
window.addEventListener('load', () => {

    if (window.location.hash === "") {
        lista.innerHTML = '';
        lista.appendChild(App());

    } else {
        lista.innerHTML = '';
        trocaPagina(window.location.hash);
    }
});


const hashRerumo = () => {

        // - Escutador para a troca de página - hash da URL
    window.addEventListener('hashchange', () => {   

        if (window.location.hash === "") {          
            lista.innerHTML = '';                    
            lista.appendChild(App());

        } else {                                   
            lista.innerHTML = '';                    
            hashRerumo(window.location.hash);
        }
    });
};

    //nao precisa de return
hashRerumo();
    