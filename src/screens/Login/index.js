import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, AsyncStorage } from 'react-native';

const Login = ({ navigation }) => {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  useEffect(() => {
    loggedIn();
  }, [])

  const loggedIn = () => {
    if(AsyncStorage.hasOwnProperty('username')) {
      navigation.push('Home')
    }
  }

  const handlerButton = () => {
    if(!email) {
      validEmail(email)
      return;
    }
    if(!password) {
      validPassword(password)
      return;
    }

    createSession(email);
  }

  const validEmail = value => value ? true : Alert.alert('Aviso', 'Por favor informar o email')
  const validPassword = value => value ? true :Alert.alert('Aviso', 'Por favor informar a senha')

  const createSession = async (_email) => {
    try{
      await AsyncStorage.setItem('username', _email)
      clearFields();
      navigation.navigate('Home')
    } catch (error) {
      Alert.alert('Erro', `Não foi possível criar uma seção: ${error} `)
    }
  }

  const clearFields = () => {
    setEmail(null);
    setPassword(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="E-mail"
        placeholderTextColor="#3BCEAC"
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Senha"
        placeholderTextColor="#3BCEAC"
        value={password}
        secureTextEntry
        onChangeText={text => setPassword(text)}
      />

    <TouchableOpacity style={styles.button} onPress={() => handlerButton()}>
      <Text style={styles.label}>ENTRAR</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02182B'
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
    color: '#3BCEAC'
  },
  input: {
    borderWidth: 1,
    borderColor: '#3BCEAC',
    width: '80%',
    marginBottom: 5,
    borderRadius: 10,
    paddingHorizontal: 20,
    color: '#3BCEAC'
  },
  button: {
    marginTop: 20,
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#3BCEAC',
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    color: 'white',
    letterSpacing: 2
  }
})