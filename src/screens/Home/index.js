import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, AsyncStorage } from 'react-native';
import { useSelector } from 'react-redux';

import { getPrice } from '../../service/api';

import Card from '../../components/Card';

const Home = ({ navigation }) => {

  const [bitcoin, setBitcoin] = useState(null);
  const [brlcoin, setBrlcoin] = useState(null);
  const [username, setUsername] = useState(null);

  const listTransactions = useSelector(state => state)

  useEffect(() => {
    getUsername();
    setBitcoin(rand)
  }, [])

  useEffect(() => {
    if(bitcoin) {
      convetToBRL(bitcoin)
    }
  }, [bitcoin])

  const getUsername = async () => {
    const username = await AsyncStorage.getItem('username');
    setUsername(username.split('@')[0])
  }

  const convetToBRL = async (_bitcoin) => {
    const price = await getPrice()
      .then(res=> res);

    const brlValue = _bitcoin * Number(price);

    setBrlcoin(brlValue);
  }

  const rand = () => parseFloat(Math.random() * (1000 - 1) + 1);

  const logout = () => {
    AsyncStorage.clear();
    navigation.pop();
  }

  return (
    <View style={styles.container}>
      <View style={styles.wellcome}>
        <Text style={styles.labelWellcome}>Olá, {username}!</Text>

        <TouchableOpacity style={styles.containerButton} onPress={() => logout()}>
          <Text style={styles.labelButton}>LOGOUT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.values}>
        <Text style={styles.bitCoin}>BTC {bitcoin}</Text>
        <Text style={styles.brl}>BRL {brlcoin || '...'}</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.titleList}>Transações</Text>
        <FlatList
          style={styles.listContainer}
          data={listTransactions}
          keyExtractor={item => String(item['id'])}
          renderItem={({item}) => <Card data={item} />}
        />
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02182B'
  },
  wellcome: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10
  },
  labelWellcome: {
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: 'bold',
    color: '#3BCEAC'
  },
  containerButton: {
    backgroundColor: '#3BCEAC',
    height: '45%',
    padding: 10,
    borderRadius: 10
  },
  labelButton: {
    color: 'white',
    fontWeight: 'bold'
  },
  values: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bitCoin: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#3BCEAC',
    marginHorizontal: 10
  },
  brl: {
    fontWeight: '500',
    fontSize: 20,
    color: '#3BCEAC'
  },
  list: {
    flex: 3,
  },
  titleList: {
    color: '#3BCEAC',
    marginHorizontal: 5,
    marginVertical: 5,
    fontWeight: 'bold',
    letterSpacing: 3
  },
  listContainer: {
    backgroundColor: '#02182B'

  }
})