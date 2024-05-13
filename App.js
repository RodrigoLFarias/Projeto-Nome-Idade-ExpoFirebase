import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useAnimatedValue } from 'react-native';
import firebase from './src/firebaseConnection';
import {useState, useEffect} from 'react';

export default function App() {
  
const [nome, setNome] = useState("Carregando...");
const [idade, setIdade] = useState("Carregando...");
useEffect(() =>{
function dados(){
firebase.database().ref("usuarios").on('value', (snapshot) => {
  setNome(snapshot.val()["1"]["nome"])
  setIdade(snapshot.val()["2"]["idade"])
})
}
dados();
},[]);

return(
      <View style={styles.container}
      ><Text style={{fontSize:25}}>Olá {nome}</Text>
      <Text style={{fontSize:25}}>minha idade {idade}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
