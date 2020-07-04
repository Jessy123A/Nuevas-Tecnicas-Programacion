import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ResultadoCalcular(props) {
  const {A, B, C, total, errorMessage} = props;
  //console.log(props);
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESULTADO</Text>

          <DataResult title={'Valor de A:'} value={`${A}`} />
          <DataResult title={'Valor de B:'} value={`${B}`} />
          <DataResult title={'Valor de C:'} value={`${C}`} />
          <DataResult title={'Valor X1:'} value={`${total.tx1}`} />
          <DataResult title={'Valor X2:'} value={`${total.tx2}`} />
        </View>
      )}
      <Text>RESULTADO TOTAL</Text>
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}
//Creamos una función para renderizar nuestro código y pasamos nuestros datos por props
function DataResult(props) {
  const {title, value} = props;
  return (
    <View style={styles.value}>
      <Text style={styles.result}>{title}</Text>
      <Text style={styles.result}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 20,
  },
  boxResult: {
    padding: 30,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  value: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  content: {
    marginTop: 0,
    marginHorizontal: 40,
  },
  result: {
    color: '#a00037',
    fontSize: 20,
  },
});
