import React, {useState, useContext} from 'react'
import './addtransaction.css';
import {GloablContext} from '../../../context/GlobalState';
export const AddTransaction = () => {
    let  [text, setText] = useState('');
    let  [amount, setAmount] = useState(0);
    const {addTransaction}  = useContext(GloablContext)
    const onSubmit = e => {
        e.preventDefault();
        if(text === ''){
            alert("Please enter a valid Title")
           } 
        if(amount === 0){
         alert("Amount Should not be 0")
         }
         if(amount < 0){
            alert("Amount should not be in -ve")
        }
         else if(amount !== 0 && text !== null){
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    }
    const addexpense = e => {
        e.preventDefault();
        if(text === ''){
            alert("Please enter a valid Title")
           } 
        if(amount === 0){
         alert("Amount Should not be 0")
         }
         if(amount < 0){
             alert("Amount should not be in -ve")
         }
         else if(amount !== 0 && text !== null){
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: -amount
        }
        addTransaction(newTransaction);
    }
    }
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form >
            <div className="form-control">
            <label htmlFor="text"></label>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter Type of Transaction" />
            </div>
            <div className="form-control">
          
            <input type="number" min="0" value={amount} onChange={(e)=> setAmount(e.target.value)}  placeholder="Enter Amount"/>
            </div>
            <div className="row">
            <button className="btn-inc" onClick={onSubmit}>Add Income</button>  
            <button className="btn-exp" onClick={addexpense}>Add Expense</button>
          
            </div>
            </form>
        </div>
    )
}
