import { createStore } from 'redux';
import transactions from './transactions';

const store = createStore(transactions);

export default store;