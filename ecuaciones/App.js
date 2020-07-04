import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  YellowBox,
  Button,
} from 'react-native';
import colores from './src/utils/colors';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultadoCalcular from './src/components/ResultadoCalcular';

YellowBox.ignoreWarnings(['Picker has been extracted']);

export default function App() {
  const [A, setA] = useState(null);
  const [B, setB] = useState(null);
  const [C, setC] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  //funcion para calcular automáticamente
  useEffect(() => {
    if (A && B && C) {
      calcular();
    } else {
      reset();
    }
  }, [A, B, C]);

  const calcular = () => {
    if (!A) {
      setErrorMessage('Ingrese la variable A');
    } else if (!B) {
      setErrorMessage('Ingrese la variable B');
    } else if (!C) {
      setErrorMessage('Ingrese la variable C');
    } else {
      const x1 = (-B + Math.sqrt(Math.pow(B, 2) - 4 * A * C)) / (2 * A);
      const x2 = (-B - Math.sqrt(Math.pow(B, 2) - 4 * A * C)) / (2 * A);
      //console.log(cuota.toFixed(2).replace('.', ','));
      setTotal({
        tx1: x1.toFixed(2).replace('.', ','),
        tx2: x2.toFixed(2).replace('.', ','),
      });
    }
  };

  //Crear una función para resetear
  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };
  return (
    //Renderizar para que nuestra aplicación devuelva
    //Podemos poner un View o una etiqueta vacia
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background} />
        <Text style={styles.titleApp}>Ecuaciones de 2do Grado</Text>
        <Form
          setA={setA}
          setB={setB}
          setC={setC}
        />
      </SafeAreaView>
      <View style={styles.content}>
        <ResultadoCalcular
          A={A}
          B={B}
          C={C}
          total={total}
          errorMessage={errorMessage}
        />
      </View>
      <Footer calcular={calcular} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    //backgroundColor: colores.PRIMARY_COLOR,
    height: 290,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },

  background: {
    backgroundColor: colores.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },

  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },

  content: {
    marginTop: 0,
    marginHorizontal: 40,
  },

  boxResult: {
    padding: 30,
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});
