import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/configureStore'
import AppRouter from "./routers/AppRouter";
import * as serviceWorker from "./serviceWorker";
import "normalizecss/normalize.css";

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore()

store.dispatch(addExpense({ description: 'Water bill'}))
store.dispatch(addExpense({ description: 'Gas bill'}))
store.dispatch(setTextFilter('water'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses)

ReactDOM.render(<AppRouter />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();