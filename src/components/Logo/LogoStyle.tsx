import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Fundo da tela
  },
  text: {
    color: 'gold',
  },
  image: {
    resizeMode: 'contain',
    height: 180,
    // 2. CORRIGIDO: Removido o fundo da imagem para que ela seja transparente
    // backgroundColor: '#fff', // << ESTA LINHA FOI REMOVIDA
  },
});