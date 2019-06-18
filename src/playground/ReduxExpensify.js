import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET TEXT FILTER
// SORT BY DATE
// SORT BY AMOUNT
// SET START DATE
// SET END DATE

// Expenses Reducer

const expenseReducerDefaultState = []

const expensesReducer = (state = expenseReducerDefaultState, action) =>{
  switch (action.type) {
    default:
      return state
  }
}

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer
  })
)

console.log(store.getState())

const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};