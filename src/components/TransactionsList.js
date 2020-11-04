import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';
import Transaction from './Transaction';
const Transactions = () =>{

  const {transactions}= useContext(GlobalContext);


	return (
		   <div>
           <h3>History</h3>
            <ul className = "list">
              {transactions.map(transaction =>(<Transaction transaction={transaction}/>))}
            </ul> 
           </div>
		)
}

export default Transactions;