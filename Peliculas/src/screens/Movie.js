import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ModalVideo from '../components/ModalVideo';
import {getMovieByIdApi} from '../api/movies';
import {BASE_PATH_IMG} from '../utils/constants';
import {ScrollView} from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';

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
      </ScrollView>
      <ModalVideo show={showVideo} setShow={setShowVideo} />
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
});
