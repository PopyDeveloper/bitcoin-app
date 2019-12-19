import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { getPrice } from '../../service/api';


const Card = ({ data }) => {

  const [brl, setBrl] = useState(null)

  useEffect(() => {
    convetToBRL(data['valBTC'])
  }, [])

  const convetToBRL = async (_bitcoin) => {
    const price = await getPrice()
      .then(res=> res);

    const brlValue = _bitcoin * Number(price);

    setBrl(brlValue);
  }

  return (
    <View style={styles.card}>
      <Text style={styles.description}>{data['description']}</Text>
      <Text style={styles.btc}>BTC: {data['valBTC']}</Text>
      <Text style={styles.brl}>BRL: {brl}</Text>
      <Text style={styles.date}>{data['date']}</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    height: 90,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    padding: 5,
    backgroundColor: '#3BCEAC',
    alignItems: 'center'
  },
  description: {
    color: 'white'
  },
  btc: {
    color: 'white'

  },
  brl: {
    color: 'white'

  },
  date: {
    color: 'white'

  }
})
