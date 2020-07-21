import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {map, size} from 'lodash';
import {BASE_PATH_IMG} from '../utils/constants';
import {getGenreMoviApi} from '../api/movies';
import {Title} from 'react-native-paper';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.7);

export default function CarouselVertical(props) {
  const {data, navigation} = props;
  return (
    <Carousel
      layout={'default'}
      data={data}
      renderItem={item => <RenderItem data={item} navigation={navigation} />}
      sliderWidth={width}
      itemWidth={ITEM_WIDTH}
    />
  );
}

function RenderItem(props) {
  const {data, navigation} = props;
  const {id, title, poster_path, genre_ids} = data.item;
  //Vamos a generar un estado para obtener el género de la película
  const [genres, setGenres] = useState(null);
  //Constante para generar mi imágen
  const imgUrl = `${BASE_PATH_IMG}/w500${poster_path}`;
  //console.log(title);

  useEffect(() => {
    getGenreMoviApi(genre_ids).then(response => {
      setGenres(response);
    });
  }, []);

  const onNavigation = () => {
    navigation.navigate('movie', {id});
  };
  return (
    <TouchableWithoutFeedback onPress={onNavigation}>
      <View style={StyleSheet.card}>
        <Image style={styles.image} source={{uri: imgUrl}} />
        <Title style={styles.title}>{title}</Title>
        <View style={styles.genres}>
          {/* Vamos a crean una condición que nos diga si existe un género lo vamoa a renderizar
          Cuando usamos map de nuestra función lodash siempre demo devolver o retotnar algo */}
          {genres &&
            map(genres, (genre, index) => (
              <Text key={index} style={styles.genre}>
                {genre}
                {index !== size(genres) - 1 && ', '}
              </Text>
            ))}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },

  image: {
    width: '100%',
    height: 450,
    borderRadius: 20,
  },

  title: {
    marginHorizontal: 10,
    marginTop: 10,
  },

  genres: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },

  genre: {
    fontSize: 12,
    color: '#fff',
  },
});
