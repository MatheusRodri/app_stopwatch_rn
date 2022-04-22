import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function App() {
















  


  return (
    <View style={styles.container}>
      <Image source={require('./src/crono.png')} />
      <Text style={styles.timer}>
        00:00:00
      </Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={startTimer}>
          <Text style={styles.btnText}>Go</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={resetTimer}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaLastTimers}>
          <Text style={styles.lastTimers}>
            00:05:25
          </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00aeef"
  },
  timer: {
    marginTop: -160,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop:150,
    height: 40
  },
  btn:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 17,
    height: 40,
  },
  btnText: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#00aeef',

  },
  areaLastTimers:{
    marginTop:40,
  },
  lastTimers:{
    fontSize:25,
    color: '#fff',
    fontStyle: 'italic',
  }
})