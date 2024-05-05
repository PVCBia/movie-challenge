import { farejaDetalhesCard } from '../API.js';

const Resumo = (movie_id) => {
  const mostraResumo = document.createElement('section');
  mostraResumo.className = 'resumoNaTela';

  farejaDetalhesCard(movie_id).then(resumo => {
    mostraResumo.innerHTML =
      `
    <div id="div1">
    <a href='/'><button id="btn-voltar">&#x1F814  Voltar</button></a>
    <a href="${movie_id}"></a>
    <img class='capaResumo' src="https://image.tmdb.org/t/p/w300${resumo.poster_path}" alt="Capa do filme '${resumo.title}'"></img>
    </div>
    <div id="div2">
    <h3>${resumo.title}</h3>
    <p><strong>(${resumo.release_date.split('-')[0]})</strong></p><br>
    <p class= vote><img id="iconVote" src="assets/abacus-accounting-math-count-svgrepo-com.svg" alt="Ícone em formato de régua"> Contagem de votos: ${resumo.vote_count}</p>
    <p class= vote><img id="iconVote" src="assets/star-svgrepo-com.svg" alt="Ícone em formato de estrela"> Avaliação: ${resumo.vote_average.toFixed(2)} / 10</p><br><br>
    <p>${resumo.overview}</p> 
    </div>
    `;
  });
  return mostraResumo
};
export default Resumo;