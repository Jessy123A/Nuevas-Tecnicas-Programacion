import {API_HOST, API_KEY, LANG} from '../utils/constants';
import {result} from 'lodash';
import {Item} from 'react-native-paper';
export function getNewsMoviesApi(page = 1) {
  const url = `${API_HOST}/movie/now_playing?api_key=${API_KEY}&language=${LANG}&page=${page}`;
  //console.log(url);

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    });
}

//Funcio para obtener los géneros de nuestra película
export function getGenreMoviApi(idGenres) {
  const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then((result) => {
      //return result;
      const arrayGenres = [];
      idGenres.forEach((id) => {
        //console.log(id);
        result.genres.forEach((item) => {
          if (item.id === id) arrayGenres.push(item.name);
        });
      });
      return arrayGenres;
    });
}

export function getAllGenereApi() {
  const url = `${API_HOST}/genre/movie/list?api_key=${API_KEY}&language=${LANG}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then((result) => {
      return result;
    });
}
