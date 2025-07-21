export default function generatePasswordService(){
  let password: string = '';
  let characters: string = generateAlphabet();
  let passwordLength = 8;

  for(let index = 0; index < passwordLength; index++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

function generateAlphabet(){
  let alphabet = []
  const maiusculas = 26
  const minusculas = 26

  for(let i = 0; i < maiusculas; i++){
    alphabet.push(String.fromCharCode(65+i))
  }

  for(let i = 0; i < minusculas; i++){
    alphabet.push(String.fromCharCode(97+i))
  }

  // Define os caracteres especiais diretamente em uma string
  const caracteresEspeciais = 'áàâãçéêíóôõúüÁÀÂÃÇÉÊÍÓÔÕÚÜ';

  return alphabet.join('') + caracteresEspeciais;
}