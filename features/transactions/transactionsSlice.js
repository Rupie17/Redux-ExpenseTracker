import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

const options = {
  name: 'transactions',
  initialState: initialState,
  reducers: {
    /* Set addTransaction equal to a case reducer that receives two arguments—state and action. 
    It should add the new transaction object (action.payload) to the correct category’s transaction 
    list in the transactions state object. */
    addTransaction: (state, action) => {
      const category = action.payload.category;
      state[category].push(action.payload);
    },
    /* Set deleteTransaction equal to a case reducer that receives two arguments—state and action. 
    It should delete the old transaction (action.payload) from the correct category’s transaction list 
    in the transactions state object. */
    deleteTransaction: (state, action) => {
      const id = action.payload.id;
      const category = action.payload.category;
      state[category] = state[category].filter(transaction => transaction.id !== id);
    }
  }
}

export const transactionsSlice = createSlice(options);

export const selectTransactions = state => state.transactions;
export const selectFlattenedTransactions = state => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
