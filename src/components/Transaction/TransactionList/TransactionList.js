import React, {useContext} from 'react'
import './transactionlist.css';
import Transaction from './component/Transaction/Transaction';
import { GloablContext} from '../../../context/GlobalState';
export const TransactionList = () => {
    const { transactions } = useContext(GloablContext);
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transactions => (<Transaction key={transactions.id} transaction={transactions}></Transaction>))}
            
            </ul>
        </div>
    )
}
export default TransactionList;
