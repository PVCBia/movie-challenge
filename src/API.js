//(lista com as funções da requisição)
//precisa desenvolver teste para este arquivo? se sim, pesquisar como?

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
        .then(json => json.results.slice(0, 20)) 
        .catch(err => console.error('Ocorreu um erro:' + err));
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
        .then(res => { return res })
        .catch(err => console.error('Ocorreu um erro:' + err));
    return detalhesDoCard
};