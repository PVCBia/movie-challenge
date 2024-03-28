import App from "./components/App.js"



const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTc4ODg5OThlMDJjOGQxMjk2NjU2ZGM3ZjA4MjAyNyIsInN1YiI6IjY1Zjc4YjA4ZTE5NGIwMDE2M2JlN2M5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xvvz1Nq5Zul3O1nph2scrQa_m6bwfdO35G3B1PWQarQ'
    }
};

fetch(url, options)
    .then(res => res.json())
    .then(json => App(json.results))
    .catch(err => console.error('error:' + err));




// // 

// export const apiKey = 'd17888998e02c8d1296656dc7f082027';

// //declarada como um array vazio. Esta variável será usada para armazenar os dados dos filmes obtidos da API.
// let movies = [];

// //está sendo feita uma requisição fetch para a API de filmes, utilizando a chave de API(apiKey) definida anteriormente
// //Esta solicitação é feita para a lista de filmes populares, utilizando o endpoint específico fornecido pela API.
// fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`)
//     //os dados retornados pela API serão convertidos para o formato JSON
//     .then(response => response.json())
//     //Aqui começa um bloco de código que será executado após os dados da API serem recebidos e convertidos para JSON.
//     .then(data => {
//         //os resultados da API (que contêm informações sobre os filmes populares) são armazenados na variável movies
//         //A função slice(0, 24) é usada para pegar somente os primeiros 10 filmes populares da lista.
//         movies = data.results.slice(0, 24); // Atribui o valor a movies, por exemplo (top 10 filmes populares)
//         //a lista de filme é chamada como argumento 
//         InserirFilmesNaTela(movies);
//     })
//     .catch(error => {
//         console.error('Ocorreu um erro', error);
//     });
 

    // dicoverMovie sem filtro    
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTc4ODg5OThlMDJjOGQxMjk2NjU2ZGM3ZjA4MjAyNyIsInN1YiI6IjY1Zjc4YjA4ZTE5NGIwMDE2M2JlN2M5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xvvz1Nq5Zul3O1nph2scrQa_m6bwfdO35G3B1PWQarQ'
//     }
// };

// fetch('https://api.themoviedb.org/3/discover/movie?language=pt-br&page=1&sort_by=popularity.desc', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));    