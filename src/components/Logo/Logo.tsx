import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './LogoStyle';

export function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>BATPASS GENERATOR</Text>
      <Image source={require('../../../assets/batSignal.png')} style={styles.image} />
    </View>
  );
}