// Este arquivo contém um componente de exemplo que mostra como podemos representar um
// componente como uma função que retorna um HTMLElement. Na hora de construir interfaces,
// é útil pensar nos termos de componentes ou vistas que podemos ir aninhando umas dentro
// das outras. Te convidamos a pensar quais componentes ou caixinhas são necessárias para
// construir sua aplicação e que vá adicionando componentes no directorio 'components' para
// implementar cada um deles. Embora, novamente, no final, a forma de organizar seus arquivos
// depende de você e da sua equipe. Há muitas formas de faze - lo, e o boilerplate é apenas
// uma sugestão.


// usar as chaves quando não for export defaut no arquivo de importação
import { farejaLista } from '../API.js';

 //        "filme" vai como parâmetro aqui embaixo? 
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

        
  //     const { title, release_date, poster_path } = movie;
  //     const releaseYear = release_date.split('-')[0];
  //     const posterPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  //     const parte1 = document.createElement('div');
  //     parte1.className = 'cards__parte1';
  //     parte1.innerHTML = `<img src="${posterPath}" alt="Capa" class="cards__parte1-capa">`;
  //     section.appendChild(parte1);

  //     const parte2 = document.createElement('div');
  //     parte2.className = 'cards__parte2';
  //     parte2.innerHTML = `<h3 class="cards__parte2-titulo" 
  //                       <a href= "/#${title}">${title} <br> (${releaseYear})</a>
  //                       </h3>`;
  //     section.appendChild(parte2);

  //     inserirListaDeFilmes.appendChild(section);
  //   })
  // })
  
  // return inserirListaDeFilmes
  // // console.log(inserirListaDeFilmes)
// };

// export default App;
