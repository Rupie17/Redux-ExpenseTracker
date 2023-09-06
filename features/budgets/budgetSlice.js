import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const options = {
  name: 'budgets',
  initialState: initialState,
  reducers: {
    /* Set editBudget equal to a case reducer that receives two arguments—state and action. action.payload will have a category 
    and amount property.
    editBudget should update the state by finding the budget object whose .category value matches action.payload.category 
    and changing with the .amount value to action.payload.amount. */
    editBudget: (state, action) => {
      state.map(budget => {
        if (budget.category === action.payload.category) {
          budget.amount = action.payload.amount
        }
        return budget;
      })
    }
  }

}

export const budgetsSlice = createSlice(options);

export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;
