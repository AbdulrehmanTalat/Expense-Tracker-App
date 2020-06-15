import React, {useContext} from 'react'
import './balance.css';
import Transaction from '../Transaction/TransactionList/component/Transaction/Transaction';
import { GloablContext} from '../../context/GlobalState';
export const Balance = () => {
    const { transactions } = useContext(GloablContext);
    const amounts = transactions.map(trancaction=> trancaction.amount);
    const total = amounts.reduce((acc, item) => (acc+=item),0).toFixed(2);
    return (
        <div className="balance-txt">
        <h4>Your Balance</h4>
    <h1>${total}</h1>
        </div>
    )
}
export default Balance;
