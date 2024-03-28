// Este arquivo contém um componente de exemplo que mostra como podemos representar um
// componente como uma função que retorna um HTMLElement. Na hora de construir interfaces,
// é útil pensar nos termos de componentes ou vistas que podemos ir aninhando umas dentro
// das outras. Te convidamos a pensar quais componentes ou caixinhas são necessárias para
// construir sua aplicação e que vá adicionando componentes no directorio 'components' para
// implementar cada um deles. Embora, novamente, no final, a forma de organizar seus arquivos
// depende de você e da sua equipe. Há muitas formas de faze - lo, e o boilerplate é apenas
// uma sugestão.

const App = (filmes) => {
  // console.log(filmes)
    const el = document.createElement('div');

  //   el.className = 'App';
  // el.textContent = 'Hola mundo!';
  // Obtém o elemento HTML com o id 'filmes' e armazena em uma constante
  const inserirListaDeFilmes = document.getElementById('filmes');
  // Limpa o conteúdo do elemento HTML com id 'filmes'
  inserirListaDeFilmes.innerHTML = '';

  // Itera sobre cada filme recebido como parâmetro
  filmes.forEach(movie => {
    console.log(movie)
    // Extrai informações relevantes do filme
    const title = movie.title;
    const releaseYear = movie.release_date.split('-')[0];
    const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    //const overview = movie.overview;  //overview vai para os cards unitários

    // Cria um elemento <section> para representar cada filme
    const section = document.createElement('section');
    section.className = 'cards';
    // section.dataset.movie.title = title; // pelo título ou pelo id?

    // Cria a parte visual do cartão de filme (imagem)
    const parte1 = document.createElement('div');
    parte1.className = 'cards__parte1';
    const img = document.createElement('img');
    img.src = posterPath;
    img.alt = 'Capa';
    img.className = 'cards__parte1-capa';
    parte1.appendChild(img);
    section.appendChild(parte1);

    // // Cria a parte visual do cartão de filme (título de lançamento)
    const parte2 = document.createElement('div');
    parte2.className = 'cards__parte2';
    const titulo = document.createElement('h2');
    titulo.className = 'cards__parte2-titulo';
    titulo.textContent = `${title} (${releaseYear})`;

    // cartões unitários
    // Monta a estrutura dos elementos do cartão de filme
    // parte2.appendChild(titulo);
    // parte2.appendChild(releaseYear);
    // section.appendChild(parte2);

    // // Cria a parte visual do cartão de filme (resumo)
    // const parte3 = document.createElement('div');
    // parte3.className = 'cards__parte3';
    // const texto = document.createElement('p');
    // texto.className = 'cards__parte3-texto';
    // texto.textContent = overview;

    // // Adiciona o resumo ao cartão de filme
    // parte3.appendChild(texto);
    // section.appendChild(parte3);

    // Adiciona o cartão de filme ao elemento principal na tela
    inserirListaDeFilmes.appendChild(section);
  });



  return el;
  

  
  };
  export default App



  // const renderItems = (data) => {

  //   let result = '<ul>'

  //   data.forEach((element) => {
  //     result += `
  //     <li class = "cardsUnitarios">
  //     <img src= ${element.movie.poster_path} alt= "">
  //     <strong><p>${element.title}</strong></p>
  //     <strong><p>${element.releaseYear}</p></strong>
  //     </li>
  //     `;
  //   })
  //   result = result + '</ul>'
  //   return result
  // }




//   // Declara uma função chamada InserirFilmesNaTela que recebe um parâmetro 'filmes'
//  export const InserirFilmesNaTela = (filmes) => {
  
  //   // Obtém o elemento HTML com o id 'filmes' e armazena em uma constante
  //   const inserirListaDeFilmes = document.getElementById('#filmes');
  //   // Limpa o conteúdo do elemento HTML com id 'filmes'
  //   inserirListaDeFilmes.innerHTML = '';

  //   // Itera sobre cada filme recebido como parâmetro
  //   filmes.forEach(movie => {
  //     // Extrai informações relevantes do filme
  //     const title = movie.title;
  //     const releaseYear = movie.release_date.split('-')[0];
  //     const posterPath = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    
  //     //const overview = movie.overview;  //overview vai para os cards unitários

  //     // Cria um elemento <section> para representar cada filme
  //     const section = document.createElement('section');
  //     section.className = 'cards';
  //     section.dataset.movie.title = title; // pelo título ou pelo id?

  //     // Cria a parte visual do cartão de filme (imagem)
  //     const parte1 = document.createElement('div');
  //     parte1.className = 'cards__parte1';
  //     const img = document.createElement('img');
  //     img.src = posterPath;
  //     img.alt = 'Capa';
  //     img.className = 'cards__parte1-capa';
  //     parte1.appendChild(img);
  //     section.appendChild(parte1);

  //     // // Cria a parte visual do cartão de filme (título de lançamento)
  //     const parte2 = document.createElement('div');
  //     parte2.className = 'cards__parte2';
  //     const titulo = document.createElement('h2');
  //     titulo.className = 'cards__parte2-titulo';
  //     titulo.textContent = `${title} (${releaseYear})`;

  //     // cartões unitários
  //     // Monta a estrutura dos elementos do cartão de filme
  //     // parte2.appendChild(titulo);
  //     // parte2.appendChild(releaseYear);
  //     // section.appendChild(parte2);

  //     // // Cria a parte visual do cartão de filme (resumo)
  //     // const parte3 = document.createElement('div');
  //     // parte3.className = 'cards__parte3';
  //     // const texto = document.createElement('p');
  //     // texto.className = 'cards__parte3-texto';
  //     // texto.textContent = overview;

  //     // // Adiciona o resumo ao cartão de filme
  //     // parte3.appendChild(texto);
  //     // section.appendChild(parte3);

  //     // Adiciona o cartão de filme ao elemento principal na tela
  //     inserirListaDeFilmes.appendChild(section);
  //   });
  // }

  // Exporta a função InserirFilmesNaTela para uso externo
  // export { InserirFilmesNaTela };
