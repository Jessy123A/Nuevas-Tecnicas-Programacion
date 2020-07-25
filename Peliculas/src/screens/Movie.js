import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import ModalVideo from '../components/ModalVideo';
import {getMovieByIdApi} from '../api/movies';
import {BASE_PATH_IMG} from '../utils/constants';
import {ScrollView} from 'react-native-gesture-handler';
import {Text, Title, IconButton} from 'react-native-paper';
import {map} from 'lodash';

export default function Movie(props) {
  //console.log(props);
  const {route} = props;
  const {id} = route.params;
  const [movie, setMovie] = useState(null);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    getMovieByIdApi(id).then((response) => {
      //console.log(response);
      setMovie(response);
    })
  }, []);
  if (!movie) return null;
  return (
    <>
      <ScrollView>
        <MovieImage posterPath={movie.poster_path} />
        <MovieTrailer setShowVideo={setShowVideo} />
        <MovieTitle movie={movie} />
      </ScrollView>
      <ModalVideo show={showVideo} setShow={setShowVideo} idMovie={id} />
    </>
  );
}
//Vamos a crear una función para importar los datos de nuestra película
function MovieImage(props) {
  const {posterPath} = props;

  return (
    <View style={styles.viewPoster}>
      <Image
        style={styles.poster}
        source={{uri: `${BASE_PATH_IMG}/w500${posterPath}`}}
      />
    </View>
  );
}

//Creamos una función para realizar el boton y llamar desde ahí a nuestro modal
function MovieTrailer(props) {
  const {setShowVideo} = props;
  return (
    <View style={styles.viewPlay}>
      <IconButton
        icon="play"
        color="#000"
        size={30}
        style={styles.play}
        onPress={() => setShowVideo(true)}
      />
    </View>
  );
}

//Creamos una función para obtener el título y el género de la película
function MovieTitle(props){
  const {movie} = props;
  return (
    <View style={styles.viewInfo}>
      <Title>{movie.title}</Title>
      <View style={styles.viewGenres}>
        {map(movie.genres, (genre) => (
          <Text key={genre.id} style={styles.genre}>
            {genre.name}
          </Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewPoster: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    textShadowRadius: 10,
  },

  poster: {
    width: '100%',
    height: 500,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },

  viewPlay: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  play: {
    backgroundColor: '#fff',
    marginTop: 0,
    marginRight: 30,
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  viewInfo: {
    marginHorizontal: 30,
  },
  viewGenres: {
    flexDirection: 'row',
  },
  genre: {
    marginRight: 20,
    color: '#8697a5',
  },
});
