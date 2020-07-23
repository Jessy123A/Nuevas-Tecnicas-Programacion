import React from 'react';
import {StyleSheet} from 'react-native';
import {Modal, IconButton, Title} from 'react-native-paper';

export default function ModalVideo(props) {
  //Vamos a hacer destructurin que nos va a indicar si el modal debe estar visible u oculto
  //y el setShow que es una funcion para poder cerrar nuestro nuestro modal si lo deseamos
  const {show, setShow} = props;

  return (
    <Modal visible={show} contentContainerStyle={styles.modal}>
      <Title>Hola mundo</Title>
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
});
