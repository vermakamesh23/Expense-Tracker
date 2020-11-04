import React, { Component } from 'react';
import  Header  from './components/Header';
import  Balance  from './components/Balance';
import './App.css';
import IncomeExpense from './components/IncomeExpense'
import  TransactionsList from './components/TransactionsList'
import  AddTransaction from './components/AddTransaction'
import  { GlobalProvider } from './context/globalState'



class App extends Component {



  render() {
    return (
     
       <GlobalProvider>
          <Header/>
          <div className='container'>
              <Balance/>
              <IncomeExpense/>
              <TransactionsList/>
              <AddTransaction/>
            
          </div>
       </GlobalProvider>
     
    );
  }
}

export default App;
