const Type = {
  LIST: 'LIST_TRANSACTIONS',
  ADD: 'ADD_TRANSACTIONS'
}

const INITIAL_STATE = [
  {
    id: 1,
    description: 'Restaurante',
    valBTC: '5',
    valBRL: '',
    date: '09/09/2019'
  },
  {
    id: 2,
    description: 'Restaurante',
    valBTC: '10',
    valBRL: '',
    date: '09/09/2019'
  },
  {
    id: 3,
    description: 'Restaurante',
    valBTC: '8',
    valBRL: '',
    date: '09/09/2019'
  },
  {
    id: 4,
    description: 'Restaurante',
    valBTC: '10',
    valBRL: '',
    date: '09/09/2019'
  },
  {
    id: 5,
    description: 'Restaurante',
    valBTC: '10',
    valBRL: '',
    date: '09/09/2019'
  },
  {
    id: 6,
    description: 'Restaurante',
    valBTC: '7',
    valBRL: '',
    date: '09/09/2019'
  },
  {
    id: 7,
    description: 'Restaurante',
    valBTC: '10',
    valBRL: '',
    date: '09/09/2019'
  },
  {
    id: 8,
    description: 'Restaurante',
    valBTC: '10',
    valBRL: '',
    date: '09/09/2019'
  },
  {
    id: 9,
    description: 'Restaurante',
    valBTC: '4',
    valBRL: '',
    date: '09/09/2019'
  },
  {
    id: 10,
    description: 'Restaurante',
    valBTC: '10',
    valBRL: '',
    date: '09/09/2019'
  },
  {
    id: 11,
    description: 'Restaurante',
    valBTC: '2',
    valBRL: '',
    date: '09/09/2019'
  }

];

function getTransactions (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Type.LIST:
      return { ...state}
    case Type.ADD:
      return { ...state, data: [...state , action.data ]  }
    default:
      return state;
  }
}

export default getTransactions;