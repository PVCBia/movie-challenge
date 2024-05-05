import { farejaLista } from '../API.js';

const App = () => {
  const inserirListaDeFilmes = document.createElement('section');
  inserirListaDeFilmes.className = 'insereLista';

  const cards = document.createElement('ul');
  cards.className = 'cards';
  inserirListaDeFilmes.appendChild(cards);
  
  farejaLista().then(filmes => {
    filmes.forEach(movie => {
      const { title, release_date, poster_path } = movie;
      const releaseYear = release_date.split('-')[0];
      const posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
      const id = movie.id;
      cards.innerHTML += 
        `    
      <li class="infosApp">
        <a href="#${id}">
        <img class="capaCards" src="${posterPath}" alt="Capa">
        </a>
        <h2>${title}</h2>
        <p>| ${releaseYear} |</p>
      </li>
      `;
    })
  })
  return inserirListaDeFilmes
};
export default App;