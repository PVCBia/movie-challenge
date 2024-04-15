// é possivel inserir a autorização e criar a div no mesmo arquivo?
//    separado - melhor para os testes unitários


import { farejaDetalhesCard } from '../API.js';
const Resumo = (movieId) => {
  const mostraResumo = document.createElement('section');
  mostraResumo.className = 'resumoNaTela';

  farejaDetalhesCard(movieId).then(resumo => {
    resumo.innerHTML =
      `
    <div>
    <a href='/'><button>&#x1F814  Voltar</button></a>
    </div>
    <div>
    <a href="#${movieId}">
    <img src="${posterPath}" alt="Capa">
    </a>
    <h3>${title} | (${releaseYear})</h3>
    <p>${overview}</p> 
    </div>
    `;
    return resumo
  });
  
  mostraResumo.appendChild(section)
  

};
export default Resumo;

      


//const overview = movie.overview;  //overview vai para os cards unitários
// // Cria a parte visual do cartão de filme (resumo)
//     // const parte3 = document.createElement('div');
//     // parte3.className = 'cards__parte3';
//     // const texto = document.createElement('p');
//     // texto.className = 'cards__parte3-texto';
//     // texto.textContent = overview;

//     // // Adiciona o resumo ao cartão de filme
//     // parte3.appendChild(texto);
//     // section.appendChild(parte3);