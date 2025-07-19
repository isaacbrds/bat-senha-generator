import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from "react-native";
import  styles  from "./Style";
import { Logo } from "../../components/Logo/Logo";

export default function Home() {
  return (
    <View style={styles.container}>
     <Logo />
     <Text>Open up App.tsx to start working on your app!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

