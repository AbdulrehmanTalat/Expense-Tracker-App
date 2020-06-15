import React, {useContext} from 'react'
import {GloablContext} from '../../../../../context/GlobalState';
export const Transaction = ({transaction}) => {
    const {deleteTransaction}  = useContext(GloablContext)
    const sign  = transaction.amount < 0 ? '-' : '+';
    return (
        <div>
           <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>
            </li> 
        </div>
    )
}
export default Transaction
