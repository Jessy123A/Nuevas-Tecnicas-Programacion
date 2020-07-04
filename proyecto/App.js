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
  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  //funcion para calcular automáticamente
  useEffect(() => {
    if (capital && interes && meses) {
      calcular();
    } else {
      reset();
    }
  }, [capital, interes, meses]);

  const calcular = () => {
    if (!capital) {
      setErrorMessage('Añade la cantidad que quieres solicitar');
    } else if (!interes) {
      setErrorMessage('Añade el interes de prestamos');
    } else if (!meses) {
      setErrorMessage('Añade los meses');
    } else {
      const i = interes / 100;
      const cuota = capital / ((1 - Math.pow(i + 1, -meses)) / i);
      //console.log(cuota.toFixed(2).replace('.', ','));
      setTotal({
        totalcancelar: cuota.toFixed(2).replace('.', ','),
        total: (cuota * meses).toFixed(2).replace('.', ','),
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
        <Text style={styles.titleApp}>Cotizador de Préstamos</Text>
        <Form
          setCapital={setCapital}
          setInteres={setInteres}
          setMeses={setMeses}
        />
      </SafeAreaView>
      <View style={styles.content}>
        <ResultadoCalcular
          capital={capital}
          interes={interes}
          meses={meses}
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
