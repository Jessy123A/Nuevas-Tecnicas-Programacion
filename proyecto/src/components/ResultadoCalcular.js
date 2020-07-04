import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ResultadoCalcular(props) {
  const {capital, interes, meses, total, errorMessage} = props;
  //console.log(props);
  return (
    <View style={styles.content}>
      {total && (
        <View style={styles.boxResult}>
          <Text style={styles.title}>RESUMEN</Text>

          <DataResult title={'Cantidad solicitada:'} value={`${capital} $`} />
          <DataResult title={'Interes:'} value={`${interes} $`} />
          <DataResult title={'Plazos:'} value={`${meses} meses`} />
          <DataResult
            title={'Pago mensual:'}
            value={`${total.totalcancelar} $`}
          />
          <DataResult title={'Pago total:'} value={`${total.total} $`} />
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
      <Text>{title}</Text>
      <Text>{value}</Text>
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
});
