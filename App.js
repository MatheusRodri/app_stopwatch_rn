import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';


let timer = null;
let seconds = 0;
let minutes = 0;
let hours = 0;

export default function App() {

  const [count, setCount] = useState('00:00:00');
  const [buttonText, setButtonText] = useState('Start');
  const [last, setLast] = useState();


  function startTimer() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
      setButtonText('Start');
    } else {
      timer = setInterval(() => {
        seconds++;
        if (seconds == 60) {
          seconds = 0;
          minutes++;
        }
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
        let formatTimer =
          (hours < 10 ? '0' + hours : hours) + ':'
          + (minutes < 10 ? '0' + minutes : minutes) + ':'
          + (seconds < 10 ? '0' + seconds : seconds);

        setCount(formatTimer);
      }, 1000);
      setButtonText('Stop');
    }
  }
  function resetTimer() {
    if(timer !== null){
      clearInterval(timer);
      timer = null;
      
    }
    setLast(count);
    setCount('00:00:00');
    setButtonText('Start');
  }


  return (
    <View style={styles.container}>
      <Image source={require('./src/crono.png')} />
      <Text style={styles.timer}>
        {count}
      </Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={startTimer}>
          <Text style={styles.btnText}>{buttonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={resetTimer}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaLastTimers}>
        <Text style={styles.lastTimers}>
          {last ? "Last timer is " + last : ''}
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
    marginTop: 150,
    height: 40
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 17,
    height: 40,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',

  },
  areaLastTimers: {
    marginTop: 40,
  },
  lastTimers: {
    fontSize: 25,
    color: '#fff',
    fontStyle: 'italic',
  }
})