// Recomendamos usar src / main.js como ponto de entrada da sua aplicação. O boilerplate inclui
// este arquivo para conectar ou montar o componente App no DOM. Desta forma poderemos fazer testes
// unitários de nossos componentes sem necessidade de que estejam conectados a um DOM global.

// - importar componentes:
import App from './components/App.js';
import Resumo from './components/Resumo.js';


// - Adicionar os componentes ao elemento com o ID "recebeDados" (main)
const lista = document.getElementById('recebeDados')

// const mostraCards = lista.appendChild(App());

const trocaPagina = (movieId) => {
    lista.appendChild(Resumo(movieId));
}

window.addEventListener('load', () => {

    if (window.location.hash === "") {         
        lista.innerHTML = '';                    
        lista.appendChild(App());

    } else {                                  
        lista.innerHTML = '';                    
        trocaPagina(window.location.hash);
    }
})

//console.log(Resumo)

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
    