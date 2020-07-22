import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Title} from 'react-native-paper';
import {map} from 'lodash';
import CarouselVertical from '../components/CarouselVertical';
import CarouselMulti from '../components/CarouselMulti';
import {
  getNewsMoviesApi,
  getAllGenereApi,
  getGenreMoviesApi,
} from '../api/movies';

export default function Home(props) {
  //Hacemos un destruction y la pasamos navigation
  const {navigation} = props;
  //Vamos a crear un estado donde vamos a guardar todas nuestras películas que encontramos

  const [newMovies, setNewMovies] = useState(null);
  const [genreList, setGenreList] = useState([]);
  const [genreSelected, setGenreSelected] = useState(28);
  //Creamos un estado para guardar las peliculas quw conseguimos según los géneros
  const [genreMovies, setGenreMovies] = useState(null);
  console.log(genreMovies);
  console.log(newMovies);
  //getNewsMoviesApi();
  useEffect(() => {
    getNewsMoviesApi().then(response => {
      setNewMovies(response.results);
    });
  }, []);

  useEffect(() => {
    getAllGenereApi().then(response => {
      setGenreList(response.genres);
      //console.log(response);
    });
  }, []);

  //Creamos un useEffect para obtener todas las películas dependiendo el género
  useEffect(() => {
    getGenreMoviesApi(genreSelected).then(response => {
      setGenreMovies(response.results);
      //console.log(response);
    });
  }, [genreSelected]);

  const onChangeGenre = newGenreId => {
    setGenreSelected(newGenreId);
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {newMovies && (
        <View style={styles.news}>
          <Title style={styles.newsTitle}>Nuevas Películas</Title>
          <CarouselVertical data={newMovies} navigation={navigation} />
        </View>
      )}
      <View style={styles.genres}>
        <Title style={styles.genresTitle}>Películas por Género</Title>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.genreList}>
          {map(genreList, genre => (
            <Text
              key={genre.id}
              style={[
                styles.genre,
                {color: genre.id !== genreSelected ? '#8697a5' : '#fff'},
              ]}
              onPress={() => onChangeGenre(genre.id)}>
              {genre.name}
            </Text>
          ))}
        </ScrollView>

        {genreMovies && (
          <CarouselMulti data={genreMovies} navigation={navigation} />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  news: {
    marginVertical: 10,
  },
  newsTitle: {
    marginBottom: 15,
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 22,
  },
  genreList: {
    marginTop: 5,
    marginBottom: 15,
    marginHorizontal: 20,
    padding: 10,
  },
  genres: {
    marginTop: 20,
    marginBottom: 16,
  },
  genre: {
    marginTop: 20,
    marginBottom: 16,
    padding: 10,
  },
  genresTitle: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    fontSize: 22,
  },
});
