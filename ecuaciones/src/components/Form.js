import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';
import color from '../utils/colors';
import colors from '../utils/colors';
import RNPickerSelect from 'react-native-picker-select';

export default function Form(props) {
  //console.log(props);
  const {setA, setB, setC} = props;
  return (
    <View style={styles.viewForm}>
      <Text style={styles.label}>Ax^2+Bx+C</Text>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="A"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e) => setA(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="B"
          keyboardType="numeric"
          style={[styles.input]}
          onChange={(e) => setB(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="C"
          keyboardType="numeric"
          style={[styles.input]}
          onChange={(e) => setC(e.nativeEvent.text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: color.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 200,
    justifyContent: 'center',
  },

  viewInputs: {
    flexDirection: 'row',
  },

  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: color.PRIMARY_COLOR,
    borderRadius: 5,
    width: '33.33%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPorcentaje: {
    width: '40%',
    marginLeft: 5,
  },
  label: {
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
  },
});

//estilos para el picker
const pickerSelectStyle = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    color: 'black',
    paddingRight: 4,
    backgroundColor: '#fff',
    marginLeft: -5,
    marginRight: -5,
  },

  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
  },
});
