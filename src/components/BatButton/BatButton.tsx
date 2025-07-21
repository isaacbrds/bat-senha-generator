import React, { useState } from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePasswordService from '../../services/generatePasswordService';
import * as Clipboard from 'expo-clipboard';

export function BatButton() {
  const [pass, setPass] = useState('');
  function handleGenerateButton(){
    const passwordGenerated = generatePasswordService();
    setPass(passwordGenerated);
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass);
  }
  return (
    < >
      <BatTextInput pass={pass} />
      <Pressable style={styles.buttoner} onPress={handleGenerateButton}>
        <Text style={styles.texter}> GENERATE </Text>
      </Pressable>
      <Pressable style={styles.buttoner} onPress={handleCopyButton}>
        <Text style={styles.texter}> 🗲 COPY </Text>
      </Pressable>
    </>
  );
}