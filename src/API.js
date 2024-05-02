//aqui vão as funções da requisição

export const farejaLista = () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTc4ODg5OThlMDJjOGQxMjk2NjU2ZGM3ZjA4MjAyNyIsInN1YiI6IjY1Zjc4YjA4ZTE5NGIwMDE2M2JlN2M5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xvvz1Nq5Zul3O1nph2scrQa_m6bwfdO35G3B1PWQarQ'
        }
    };

    const todosOsFilmes =
        fetch(url, options)
        .then(res => res.json())
        .then(json => json.results) 
        .catch(err => {return 'Ocorreu um erro:' + err});//console.error('Ocorreu um erro:' + err));
    return todosOsFilmes
};

export const farejaDetalhesCard = (movie_id) => {
    const url = `https://api.themoviedb.org/3/movie/${movie_id.slice(1)}?language=pt-BR`; //testar com slice(1)?
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTc4ODg5OThlMDJjOGQxMjk2NjU2ZGM3ZjA4MjAyNyIsInN1YiI6IjY1Zjc4YjA4ZTE5NGIwMDE2M2JlN2M5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xvvz1Nq5Zul3O1nph2scrQa_m6bwfdO35G3B1PWQarQ'
        }
    };

    const detalhesDoCard =
        fetch(url, options)
        .then(res => res.json())
        .then(res => {return res})
        .catch(err => {return 'Ocorreu um erro:' + err});
    return detalhesDoCard
};

//Métodos utilizados:
//O método global fetch() inicia o processo de busca de um recurso da rede, retornando uma
//promessa que é cumprida assim que a resposta estiver disponível.

//A promessa é resolvida para o objeto Response que representa a resposta à sua solicitação.
//A promessa não rejeita erros de HTTP - apenas rejeita erros de rede. Você deve usar os
//manipuladores then para chechar erros de HTTP.

//O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e
//seu valor resultante.

//then() é usado para manipular o resultado (ou erro) de uma Promise. Ele permite que você
//especifique o que fazer quando a Promise é resolvida (quando a operação assíncrona é
//bem-sucedida) ou quando é rejeitada (quando ocorre um erro).