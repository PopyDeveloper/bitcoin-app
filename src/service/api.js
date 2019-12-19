import Axios from 'axios';
const BASE_URL = 'https://www.mercadobitcoin.net/api/BTC/ticker/';

export function getPrice () {
  return Axios.get(BASE_URL).then(response => {
    if(response.status === 200) {
      return response['data']['ticker']['last'];
    }
  })
}