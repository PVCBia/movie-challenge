// é possivel inserir a autorização e criar a div no mesmo arquivo?
//  R:  separado - melhor para os testes unitários


import { farejaDetalhesCard } from '../API.js';

const Resumo = (movie_id) => {
  const mostraResumo = document.createElement('section');
  mostraResumo.className = 'resumoNaTela';

  farejaDetalhesCard(movie_id).then(resumo => {
    //falta:gêneros, média de votação e total de votos.

    mostraResumo.innerHTML =
      `
    <div id="div1">
    <a href='/'><button id="btn-voltar">&#x1F814  Voltar</button></a>
    <a href="${movie_id}">
    <img class='capaResumo' src="https://image.tmdb.org/t/p/w300${resumo.poster_path}" alt="Capa do filme '${resumo.title}'"></img>
    </a>
    </div>
    <div id="div2">
    <h3>${resumo.title}</h3>
    <p><strong>(${resumo.release_date.split('-')[0]})</strong></p><br>
    <p>${resumo.overview}</p> 
    </div>
    `;
   
  });

  return mostraResumo
};
export default Resumo;