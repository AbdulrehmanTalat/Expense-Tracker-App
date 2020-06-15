import React from 'react';
import Header from './components/Header-Component/Header';
import './App.css';
import Balance from './components/Balance-Component/Balance';
import IncomeExpence from './components/IncomeExpence/IncomeExpence';
import TransactionList from './components/Transaction/TransactionList/TransactionList';
import { AddTransaction } from './components/Transaction/AddTransaction/AddTransaction';
import {GlobalProvider} from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <Header></Header>
    <div className="container">
      <Balance></Balance>
      <IncomeExpence></IncomeExpence>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
    </div>
    </GlobalProvider>
  );
}

export default App;
