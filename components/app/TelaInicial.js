import React, {useState, useRef} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function TelaInicial({navigation}) {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000
    }).start();
  };

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');


  const validar = () => {
    if (usuario == ''){
      return false
    } else if(senha == ''){
      return false
    } else {
      return true
    }
  }

  const logar = () =>{
    if(validar()){
    alert('Login Realizado com Sucesso'), navigation.navigate('Home');}
    else {alert('Favor preencher todos os campos corretamente')}
  }


  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>

    <Image style={styles.logo} source={require('../../assets/logo.png')} onLoad={fadeIn}/>

    <Text style={styles.texto}>
      MinasCell
    </Text>


    <Text style={styles.texto}>
      Entrar no aplicativo
    </Text>

    <TextInput placeholder="Seu usuario" style={styles.TextInput} onChangeText={text=>setUsuario(text)} />

    <TextInput secureTextEntry={true}  placeholder="Sua senha" style={styles.TextInput} onChangeText={text=>setSenha(text)} />

    <TouchableOpacity style={styles.btnLogin} onPress={() => logar()}>
      <Text style={styles.btnText}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btnCadastro} onPress={() => navigation.navigate('Cadastro')}>
      <Text style={styles.btnText}>Realizar Cadastro</Text>
    </TouchableOpacity>


    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  logo: {
    width: 300, 
    height: 200, 
    marginTop: 20
  },
  texto: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 25,
    lineHeight: 30,
    marginTop: 20,
    resizeMode: 'contain'
  },
  TextInput: {
    marginTop: 5,
    width: '90%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 10
  },
  btnLogin:{
    width: '50%',
    height: 40,
    backgroundColor: '#0FA3FF',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 10
  },
  btnCadastro:{
    width: '50%',
    height: 40,
    backgroundColor: '#0FA3FF',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 10
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: "bold"
  }
});
