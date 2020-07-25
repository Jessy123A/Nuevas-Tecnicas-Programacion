import React, {useState, useEffect} from 'react';
import {StyleSheet, Platform} from 'react-native';
import {Modal, IconButton, Title} from 'react-native-paper';
import Youtube from 'react-native-youtube';
import {getVideoMovieApi} from '../api/movies';
import WebView from 'react-native-webview';

export default function ModalVideo(props) {
  //Vamos a hacer destructurin que nos va a indicar si el modal debe estar visible u oculto
  //y el setShow que es una funcion para poder cerrar nuestro nuestro modal si lo deseamos
  const {show, setShow, idMovie} = props;
  const [video, setVideo] = useState(null);
  console.log(video);

  useEffect(() => {
    getVideoMovieApi(idMovie).then((response) => {
      console.log(response);
      let idVideo = null;
      response.results.forEach((video) => {
        if (video.site === 'YouTube' && !idVideo) {
          idVideo = video.key;
        }
      });
      setVideo(idVideo);
    });
  });

  return (
    <Modal visible={show} contentContainerStyle={styles.modal}>
      {Platform.OS === 'ios' ? (
        <Youtube videoId={video} style={styles.video} />
      ) : (
        <WebView
          style={{width: 500}}
          source={{
            uri: `https://www.youtube.com/embed/${video}?controls=0&showinfo=0`,
          }}
        />
      )}

      <IconButton
        icon="close"
        onPress={() => setShow(false)}
        style={styles.close}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#000',
    height: '120%',
    alignItems: 'center',
  },
  close: {
    backgroundColor: '#1ea1f2',
    width: 50,
    height: 50,
    borderRadius: 100,
    position: 'absolute',
    bottom: 100,
  },
  video: {
    alignSelf: 'stretch',
    height: 300,
  },
});
