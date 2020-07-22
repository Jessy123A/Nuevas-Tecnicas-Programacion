import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {Title} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import {BASE_PATH_IMG} from '../utils/constants';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.3);

export default function CarouselMulti(props) {
  const {data, navigation} = props;
  return (
    <Carousel
      layout={'default'}
      data={data}
      renderItem={(item) => <RenderItem data={item} navigation={navigation} />}
      sliderWidth={width}
      itemWidth={ITEM_WIDTH}
    />
  );
}

function RenderItem(props) {
  const {data, navigation} = props;
  //Vamos hacer destructuring de dataitem y de ahí vamos a obtener id, title y posterpath
  const {id, title, poster_path} = data.item;
  //console.log(poster_path);
  const imageUrl = `${BASE_PATH_IMG}/w500${poster_path}`;
  //creamos una constante para nuestro onPress
  const onNavigation = () => {
    console.log('Navegando...');
  };
  return (
    <TouchableWithoutFeedback onPress={onNavigation}>
      <View style={StyleSheet.card}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <Title style={styles.title} numberOfLines={1}>
          {title}
        </Title>
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
    width: '85%',
    height: 170,
    borderRadius: 20,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
  },
});
