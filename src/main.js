import App from './components/App.js';
import Resumo from './components/Resumo.js';

const lista = document.getElementById('recebeDados')

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
});

const hashResumo = () => {
    window.addEventListener('hashchange', () => {   
        if (window.location.hash === "") {          
            lista.innerHTML = '';                    
            lista.appendChild(App());
        } else {                                   
            lista.innerHTML = '';                    
            trocaPagina(window.location.hash);
        }
    });
};
hashResumo();