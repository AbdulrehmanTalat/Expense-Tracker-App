import React, {useState, useContext} from 'react'
import './addtransaction.css';
import {GloablContext} from '../../../context/GlobalState';
export const AddTransaction = () => {
    let  [text, setText] = useState('');
    let  [amount, setAmount] = useState(0);
    const {addTransaction}  = useContext(GloablContext)
    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
            <div className="form-control">
            <label htmlFor="text"></label>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter Type of Transaction" />
            </div>
            <div className="form-control">
            <label htmlFor="amount">
                 Amount <br/>
                 (negative - expense, positive - income)
            </label>
            <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}  placeholder="Enter Amount"/>
            </div>
            <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
